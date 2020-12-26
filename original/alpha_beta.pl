% alpha_beta_pruning/5: Searches for a move using the alpha-beta pruning algorithm
%   State:current board
%   New state: edited board
%   Value: heuristic value of the move

alpha_beta_pruning(State, Depth, Color, NewState, Value):-
alpha_beta_pruning(Color,Depth, State, Color, NewState, Value, -100000, 100000).

% alpha_beta_pruning/7: with an alpha and a beta value
alpha_beta_pruning(Caller,_, State, _, State, Value, _, _) :- final(Caller, State, Value),!.
alpha_beta_pruning(Caller,0, State, _, State, Value, _, _) :- evaluator(Caller, State, Value),!.
alpha_beta_pruning(Caller,Depth, State, Color, NewState, Value, Alpha, Beta) :-
Depth > 0,
find_states(Caller, State, Color, StatesList),
opponent_color(Color, OpponentColor),
NDepth is Depth - 1,
alpha_beta_pruning(Caller,StatesList, NDepth, Color, OpponentColor, NewState, Value, Alpha, Beta).

% alpha_beta_pruning/8: with an alpha and a beta value
alpha_beta_pruning(Caller,[State], Depth, _, OpponentColor, State, Value, Alpha, Beta):- !,
    alpha_beta_pruning(Caller,Depth, State, OpponentColor, _, Value, Alpha, Beta).

alpha_beta_pruning(Caller,[State|Rest], Depth, Color, OpponentColor, NewState, Value, Alpha, Beta) :-
    alpha_beta_pruning(Caller,Depth, State, OpponentColor, _, X, Alpha, Beta),
    (
        prune(Color, X, Alpha, Beta) ->
        (
            NewState = State,
            Value is X
        );
        (
            recalc(Color, X, Alpha, Beta, Nalpha, NBeta),
            alpha_beta_pruning(Caller,Rest, Depth, Color, OpponentColor, B, Y, Nalpha, NBeta),
            best(Color, X, Y, State, B, NewState, Value)
        )
        
    ).

% prune/4: prune has to be done
%       1: Color - the color of the player that moves next
%       2: Value - the value of the move
%       3: Alpha - the current best value for the player that tries to minimize the game value
%       4: Beta - the current best value for the player that tries to maximize the game value
prune(black, Value, _, Beta):-
Value >= Beta.

prune(white, Value, Alpha, _):-
Value =< Alpha.

% recalc/6: Recalculates alpha and beta values
%       1: Color - the color of the player that moves next
%       2: Value - the value of the move
%       3: Alpha - the current best value for the player that tries to minimize the game value
%       4: Beta - the current best value for the player that tries to maximize the game value
%       5: Nalpha - the new alpha
%       6: Nbeta - the new beta
recalc(black, Value, Alpha, Beta, Nalpha, Beta):-
max_list([Alpha, Value], Nalpha).

recalc(white, Value, Alpha, Beta, Alpha, NBeta):-
min_list([Beta, Value], NBeta).

% best/7: Calculates the best value depending on the color that moves next
best(black, X, Y, A, _, A, X):- X>=Y,!.
best(black, _, Y, _, B, B, Y).
best(white, X, Y, A, _, A, X):- X=<Y, !.
best(white, _, Y, _, B, B, Y).