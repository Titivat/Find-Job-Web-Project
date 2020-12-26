init :-
	load_files([utilities,board,evaluator, alpha_beta], []).

rownum(8).
colnum(8).

% opponent_color
opponent_color(white, black).
opponent_color(black, white).

% play/1 : Starts the game
%   Depth: the maximum depth of the search
play(Depth):-
(
    init_board(0,[],Board),
    select_game_mode(Mode),
    game_loop(Board,Mode,Depth,black)
),!.

% gameLoop/4 : Loops the game, until the game ends 
%   Board: the current board(state)
%   Color: the player that going to play

game_loop(Board, Mode, Depth, Color):-
    print_board(Board),
    print_player(Color),
    is_board_full(Board,IsBoardFull),
    (
        IsBoardFull = yes -> show_score(Board)
        ;
		find_moves(Board, Color, MovesList),
		member(_, MovesList),
		opponent_color(Color,OpponentColor),
		(
			Mode = 1 ->
			(
				Color = black ->
					human_select_move(Move, MovesList),!,
					set_piece(Board, Move, Color, FinalBoard),
					game_loop(FinalBoard, 1, Depth, OpponentColor),!
				;
				Color = white ->
					machine_select_move(Board, Depth, white, FinalBoard),!,
					game_loop(FinalBoard, 1, Depth, OpponentColor),!
			)
			;
			Mode = 2 ->
			(
				Color = black ->
					machine_select_move(Board, Depth, Color, FinalBoard),!,
					game_loop(FinalBoard, 2, Depth, OpponentColor),!
				;
				Color = white ->
					human_select_move(Move, MovesList),!,
					set_piece(Board, Move, Color, FinalBoard),
					game_loop(FinalBoard, 2, Depth, OpponentColor),!
			)
			;
			Mode = 3 ->
				human_select_move(Move, MovesList),!,
				set_piece(Board, Move, Color, FinalBoard),
				game_loop(FinalBoard, 3, Depth, OpponentColor),!
			;
			Mode = 4 ->
				machine_select_move(Board, Depth, Color, FinalBoard),!,
				game_loop(FinalBoard, 4, Depth, OpponentColor),!
		)
    ).

game_loop(Board, Mode, Depth, Color):-
	find_moves(Board, Color, MovesList),!,
	not(member(_,MovesList)),!,
    opponent_color(Color, OpponentColor),
	(
        
        (find_moves(Board, OpponentColor, RivalMovesList), member(_,RivalMovesList))->	
		    writeln('There\'s no valid move.'),
			game_loop(Board, Mode, Depth, OpponentColor),!
		;
            writeln('There\'s no valid move for both players.'),
            show_score(Board)
	).

print_player(white):-
    nl,
	writeln('White (O) player''s turn'),!.

print_player(black):-
    nl,
	writeln('Black (X) player''s turn'),!.

show_score(Board):-
    nl,
    count_pieces(black, Board, NumBlack, NumWhite),
    writef('black: %d\t',[NumBlack]),
    writef('white: %d\n',[NumWhite]),
    (
        NumBlack > NumWhite -> write('black (X) win\n')
        ;
        NumBlack < NumWhite -> write('white (O) win\n')
        ;
        write('Tie game\n')
    ),
    nl.

% human_select_move/2
%   Move: Selected Move
%   MovesList: possible moves

human_select_move(Move, MovesList):-
	write('Enter the Row: '),
	read(SelectedRow),
	writeln('Enter the Column: '),
	read(SelectedColum),
	member(Move, MovesList),
	nth0(0, Move, SelectedRow),
	nth0(1, Move, SelectedColum).

human_select_move(Move, MovesList):-
	writeln('Not a valid move'),
	writeln(''),
	human_select_move(Move, MovesList).

machine_select_move(Board, Depth, Color, FinalBoard):-
	alpha_beta_pruning(Board, Depth, Color, FinalBoard, _).

select_game_mode(Mode):-
	writeln('Select a game mode'),
	writeln('1. human vs machine'),
	writeln('2. machine vs human'),
	writeln('3. human vs human'),
    writeln('4. machine vs machine'),
	write('Enter a number: '),
	read(SelectedMode),
	(
        SelectedMode is 1 ->
		    Mode is SelectedMode,
		    writeln('machine vs human selected'),
		    writeln(''),!
        ;
        SelectedMode is 2 ->
		    SelectedMode is 2,
		    Mode is SelectedMode,
		    writeln('human vs machine selected'),
		    writeln(''),!
        ;
        SelectedMode is 3 ->
            Mode is SelectedMode,
            writeln('human vs human selected'),
            writeln(''),!
        ;
        SelectedMode is 4 ->
            Mode is SelectedMode,
            writeln('machine vs machine (black first) selected'),
            writeln(''),!
        ;
		    writeln('Not a valid mode'),
		    writeln(''),
		    select_game_mode(Mode)
	).