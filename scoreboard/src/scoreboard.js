"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_1 = require("./match");
var ScoreBoard = /** @class */ (function () {
    function ScoreBoard() {
        this.matches = [];
    }
    ScoreBoard.prototype.startMatch = function (teamsPlaying) {
        var match = new match_1.default(teamsPlaying);
        this.matches.push(match);
    };
    ScoreBoard.prototype.finishMatch = function (teams) {
        var matchIndex = this.findMatchByIndex(teams);
        if (matchIndex !== null) {
            this.matches.splice(matchIndex, 1);
        }
    };
    ScoreBoard.prototype.showScores = function () {
        var newMatches = this.matches.map(function (match) { return match.clone(); });
        return this.sort(newMatches).map(function (match) {
            return "".concat(match.teams.homeTeam, ": ").concat(match.score.homeTeam, " - ").concat(match.teams.awayTeam, ": ").concat(match.score.awayTeam);
        });
    };
    ScoreBoard.prototype.updateMatch = function (teams, score) {
        var matchIndex = this.findMatchByIndex(teams);
        if (matchIndex !== null) {
            this.matches[matchIndex].updateScore(score);
        }
    };
    ScoreBoard.prototype.findMatchByIndex = function (teams) {
        var match = this.matches.findIndex(function (match) {
            return match.matchByTeams(teams);
        });
        return (match !== -1) ? match : null;
    };
    ScoreBoard.prototype.sort = function (matches) {
        matches.sort(function (a, b) {
            if (b.totalScore() !== a.totalScore()) {
                return b.totalScore() - a.totalScore();
            }
            else {
                return b.getMatchStartTime() - a.getMatchStartTime();
            }
        });
        return matches;
    };
    return ScoreBoard;
}());
exports.default = ScoreBoard;
/*
a. Mexico 0 - Canada 5
b. Spain 10 - Brazil 2
c. Germany 2 - France 2
d. Uruguay 6 - Italy 6
e. Argentina 3 - Australia 1



/*


Task requirements:

You are working in a sports data company, and we would like you to develop
a new Live Football World Cup Scoreboard library (or frontend application) that
shows all the ongoing matches and their scores.

The scoreboard supports the following operations:

1. Start a new game, assuming initial score 0 – 0 and adding it the scoreboard.
This should capture following parameters: a. Home team b. Away team

2. Update score. This should receive a pair of absolute scores: home team score
and away team score.

3. Finish game currently in progress. This removes a match from the scoreboard.

4. Get a summary of games in progress ordered by their total score.

The games with the same total score will be returned ordered by the most recently
started match in the scoreboard.

For example, if following matches are started in the specified order and their
scores respectively updated:

a. Mexico 0 - Canada 5
b. Spain 10 - Brazil 2
c. Germany 2 - France 2
d. Uruguay 6 - Italy 6
e. Argentina 3 - Australia 1

The summary should be as follows:
1. Uruguay 6 - Italy 6
2. Spain 10 - Brazil 2
3. Mexico 0 - Canada 5
4. Argentina 3 - Australia 1
5. Germany 2 - France 2

scoreboard
  start
  update
  finish

match
 score
 start
 finish
 inProgress

score

 */
