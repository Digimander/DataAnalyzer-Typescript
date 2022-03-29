"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const utils_1 = require("../utils");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === utils_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.team && match[5] === utils_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} times.`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
