/* 
 * black heuristic
 */
evaluator(black,Board, Value):-
    count_pieces(black, Board, BlackPieces, WhitePieces),
	TotalPiece is BlackPieces +  WhitePieces,

    Piece_diff is BlackPieces - WhitePieces,
	getCorners(Corners),
	getXSquares(XSquares),
	positionCount(black,Board,Corners,BlackCorner,WhiteCorner),
	positionCount(black,Board,XSquares,BlackXSquares,WhiteXSquares),

	valid_positions(Board, black, BlackValidMoves),
	valid_positions(Board, white, WhiteValidMoves),
	Valid_diff is WhiteValidMoves-BlackValidMoves ,
	(
		(TotalPiece<36)->
			/*Piece_diff_Score is 0,*/
			Piece_diff_Score is Piece_diff,
			Valid_diff_score is Valid_diff
		;
			Piece_diff_Score is Piece_diff,
			Valid_diff_score is 0
	),

	CornersBonus is 10*(BlackCorner-WhiteCorner),
	XSquaresBonus is -10*(BlackXSquares-WhiteXSquares),
	Bonus is CornersBonus+XSquaresBonus,
	Value is Piece_diff_Score+Valid_diff_score+Bonus.

final(black,Board, Value):-
    full_board(Board),
    count_pieces(black, Board, BlackPieces, WhitePieces),
    Value is BlackPieces - WhitePieces.


/*count pieces at special position*/
positionCount(Color,Board,PositionList,Count,RivalCount):-
	positionCount(Color,Board,PositionList,0,0,Count,RivalCount).

positionCount(Color,Board,PositionList,CountBuf,RivalCountBuf,Count,RivalCount):-
	opponent_color(Color,OpponentColor),
	(
		PositionList=[]->
			Count=CountBuf,
			RivalCount=RivalCountBuf
		;
		PositionList = [Position|PositionsRest],
		Position = [Rowi,Coli|CheckList],
		(
			CheckList\=[]->
				CheckList=[CheckRow,CheckCol],
				piece(Board,CheckRow,CheckCol,CheckPiece)
			;
				CheckPiece=null
		),
		piece(Board,Rowi,Coli,Piece),
		(
			(Piece=Color,CheckPiece\=Color)->
				NCountBuf is CountBuf+1,
				NRivalCountBuf is RivalCountBuf
			;
			(Piece=OpponentColor,CheckPiece\=OpponentColor)->
				NCountBuf is CountBuf,
				NRivalCountBuf is RivalCountBuf +1
			;
				NCountBuf is CountBuf,
				NRivalCountBuf is RivalCountBuf
		),
		positionCount(Color,Board,PositionsRest,NCountBuf,NRivalCountBuf,Count,RivalCount)
	).

%     0 1 2 3 4 5 6 7
%   ------------------
% 0 | X - - - - - - X
% 1 | - - - - - - - -
% 2 | - - - - - - - - 
% 3 | - - - - - - - -
% 4 | - - - - - - - -
% 5 | - - - - - - - -
% 6 | - - - - - - - -
% 7 | X - - - - - - X

getCorners(Corners):-
	Corners=[[0,0],[0,7],
			 [7,0],[7,7]].

%     0 1 2 3 4 5 6 7
%   ------------------
% 0 | O - - - - - - O
% 1 | - X - - - - X -
% 2 | - - - - - - - - 
% 3 | - - - - - - - -
% 4 | - - - - - - - -
% 5 | - - - - - - - -
% 6 | - X - - - - X -
% 7 | O - - - - - - O

getXSquares(XSquares):-
	XSquares=[	[1,1, 0,0],
				[1,6, 0,7],
			 	[6,1, 7,0],
				[6,6, 7,7]
			].

/* 
 * white heuristic
 */
evaluator(white,Board, Value):-
    count_pieces(black, Board, BlackPieces, WhitePieces),
    PieceValue is (BlackPieces - WhitePieces),!,
    valid_positions(Board, black, BlackValidMoves),
    valid_positions(Board, white, WhiteValidMoves),
    MobilityValue is (BlackValidMoves - WhiteValidMoves),!,
    getCornerValue(Board, CornerValue),!,
    getEdgeValue(Board, EdgeValue),!,
    Value is (10* PieceValue + 10* MobilityValue + 10* CornerValue + 10* EdgeValue).

final(white,Board, Value):-
    valid_positions(Board, black, BlackValidMoves),
    BlackValidMoves is 0,!,
    valid_positions(Board, white, WhiteValidMoves),
    WhiteValidMoves is 0,!,
    count_pieces(black, Board, BlackPieces, WhitePieces),
    Value is 40*(BlackPieces - WhitePieces),!.

%     0 1 2 3 4 5 6 7
%   ------------------
% 0 | X X - - - - X X
% 1 | X X - - - - X X
% 2 | - - - - - - - - 
% 3 | - - - - - - - -
% 4 | - - - - - - - -
% 5 | - - - - - - - -
% 6 | X X - - - - X X
% 7 | X X - - - - X X

getCornerSquares(CornerSquares):-
    CornerSquares= [[0,0,  0,1,  1,0,  1,1],
                    [7,0,  7,1,  6,0,  6,1],
                    [0,7,  0,6,  1,7,  1,6],
                    [7,7,  7,6,  6,7,  6,6]].

% getCornerValue
% Decide the effect of move around corners.

getCornerValue(Board, CornerValue):-
    getCornerSquares(CornerSquares),
    getCornerValue(Board, CornerSquares, CornerValue, 0),!.
    

%     0         1 
%   ---------------
% 0 | R,C     R1,C1
% 1 | R2,C2   R3,C3


getCornerValue(Board, CornerSquares, CornerValue, CornerValueBuf):-
    (
        CornerSquares = [] ->
            CornerValue is CornerValueBuf
        ;
		CornerSquares = [CurrentSqure|CornerSquaresRest],
		CurrentSqure = [CornerR, CornerC|CurrentSqureR1],
		CurrentSqureR1 = [CornerR1, CornerC1|CurrentSqureR2],
		CurrentSqureR2 = [CornerR2, CornerC2|CurrentSqureR3],
		CurrentSqureR3 = [CornerR3, CornerC3],
		piece(Board, CornerR,  CornerC,  PieceCorner),
		piece(Board, CornerR1, CornerC1, PieceCorner1),
		piece(Board, CornerR2, CornerC2, PieceCorner2),
		piece(Board, CornerR3, CornerC3, PieceCorner3),
		(
		    PieceCorner = empty ->
		    (
		        (PieceCorner1=black; PieceCorner2=black)->
		            Value = -3
		        ;
				(PieceCorner3=black)->
		            Value = -4
		        ;
		        (PieceCorner1=white; PieceCorner2=white)->
		            Value = 3
		        ;
				(PieceCorner3=white)->
		            Value = 4
		        ;
		            Value = 0
		    )
		    ;
		    PieceCorner = white ->
		        Value = -4
		    ;
		    Value = 4
		),!,
		NCornerValueBuf is CornerValueBuf + Value,
		getCornerValue(Board, CornerSquaresRest, CornerValue, NCornerValueBuf)
    ).

/*
 * getEdgeValue
 * Decide the effect of move on edges.
 */
getEdgeValue(Board, EdgeValue):-
    getEdgeValue(Board, EdgeValue, 0, 0, 0, 0),!.

getEdgeValue(Board, EdgeValue, Rowi, Coli, BlackOnEdgeBuf, WhiteOnEdgeBuf):-
	RowN is 8,
	ColN is 8,
    piece(Board, Rowi, Coli, PieceColor),
    (
        PieceColor = black ->
            NewBlackOnEdgeBuf is BlackOnEdgeBuf + 2,
            NewWhiteOnEdgeBuf is WhiteOnEdgeBuf
        ;
        PieceColor = white ->
            NewBlackOnEdgeBuf is BlackOnEdgeBuf,
            NewWhiteOnEdgeBuf is WhiteOnEdgeBuf + 2
        ;
            NewBlackOnEdgeBuf is BlackOnEdgeBuf,
            NewWhiteOnEdgeBuf is WhiteOnEdgeBuf
    ),
    (
        (Rowi is RowN-1, Coli is ColN-1) ->
            EdgeValue is NewBlackOnEdgeBuf - NewWhiteOnEdgeBuf
        ;
        (
	        (Coli is ColN-1) ->
	            NextColi is 0,
	            NextRowi is Rowi+1
	        ;
	        (Rowi is RowN-1; Rowi is 0) ->
	            NextColi is Coli+1,
	            NextRowi is Rowi
	        ;
	        (Coli is 0, not(Rowi is RowN-1), not(Rowi is 0)) ->
	            NextColi is ColN-1,
	            NextRowi is Rowi
	        ;
	            writef('unexpected %w %w\n',[Rowi, Coli])
        ),
        getEdgeValue(Board, EdgeValue, NextRowi, NextColi, NewBlackOnEdgeBuf, NewWhiteOnEdgeBuf)
    ),!.