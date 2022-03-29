import { MatchData } from "../MatchData";
import { IAnalyzer } from "../Summary";
import { MatchResult } from "../utils";
export class WinsAnalysis implements IAnalyzer{// using implements to allow TS check if interface is implemented correctly 
    constructor(public team:string){}

    run(matches: MatchData[]): string {
        let wins = 0;

        for(let match of matches){
            if(match[1]===this.team && match[5] === MatchResult.HomeWin){
                wins++;
            } else if(match[2]===this.team && match[5]===MatchResult.AwayWin){
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} times.`;
    }
}