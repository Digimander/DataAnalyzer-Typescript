"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = exports.MatchResult = void 0;
//use enum to define finite number of options
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
;
const dateStringToDate = (dateString) => {
    //28/10/2018
    const dateParts = dateString.split('/').map((value) => {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
