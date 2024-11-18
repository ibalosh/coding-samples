"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Match = /** @class */ (function () {
    function Match(teams) {
        this.teams = teams;
        this.score = {
            homeTeam: 0,
            awayTeam: 0
        };
        this.startedAt = new Date();
    }
    Match.prototype.updateScore = function (score) {
        this.score = score;
    };
    Match.prototype.totalScore = function () {
        return this.score.awayTeam + this.score.homeTeam;
    };
    Match.prototype.getMatchStartTime = function () {
        if (!this.startedAt)
            throw Error("Start date not set");
        return this.startedAt.getTime();
    };
    Match.prototype.matchByTeams = function (teams) {
        return (teams.awayTeam === this.teams.awayTeam &&
            teams.homeTeam === this.teams.homeTeam);
    };
    Match.prototype.clone = function () {
        var match = new Match(this.teams);
        match.score = __assign({}, this.score);
        match.startedAt = new Date(this.startedAt.getTime());
        return match;
    };
    return Match;
}());
exports.default = Match;
