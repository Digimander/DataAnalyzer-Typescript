import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./reporters/HtmlReport";

export interface IAnalyzer{
    run(matches:MatchData[]):string;
}
export interface IOutputTarget{
    print(report:string):void;
}

//summary has little of own functionality - major functionality comes from objects that is composed of
export class Summary{
    //example of static method
    static winsAnalysisWithHtmlReport(teamName:string){
        return new Summary(
            new WinsAnalysis(teamName),
            new HtmlReport()
        )
    }
    
    constructor(
        public analyzer:IAnalyzer,//analyzer is reponsible for analyzing
        public outputTarget:IOutputTarget){}//outputTarget is responsible for output generation
    
    buildAndPrintReport(matches:MatchData[]):void{
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}