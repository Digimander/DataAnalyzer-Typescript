"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HtmlReport_1 = require("./reporters/HtmlReport");
//summary has little of own functionality - major functionality comes from objects that is composed of
class Summary {
    constructor(analyzer, //analyzer is reponsible for analyzing
    outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    } //outputTarget is responsible for output generation
    //example of static method
    static winsAnalysisWithHtmlReport(teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new HtmlReport_1.HtmlReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
