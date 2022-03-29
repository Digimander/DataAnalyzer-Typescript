"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
//analyze and report data
// const summary = new Summary(new WinsAnalysis('Man United'),new HtmlReport());
// summary.buildAndPrintReport(matchReader.matches);
//with use of static method in Summary
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
