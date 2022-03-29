import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

//analyze and report data
// const summary = new Summary(new WinsAnalysis('Man United'),new HtmlReport());
// summary.buildAndPrintReport(matchReader.matches);

//with use of static method in Summary
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
