import { dateStringToDate, MatchResult } from './utils';
import { CsvFileReader } from "./CsvFileReader";
import { MatchData } from './MatchData';


interface DataReader{
    read():void;
    data:string[][];
}

export class MatchReader{
    //get preconfigured instance of class
    static fromCsv(filename:string):MatchReader{
        return new MatchReader(new CsvFileReader(filename));
    }

    matches: MatchData[] = [];

    constructor(public reader: DataReader){}

    load():void{
        this.reader.read();
        this.matches = this.reader.data.map((row:string[]):MatchData=>{// map returns new array
            return[
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),   
                row[5] as MatchResult,// type assertion - tell TS what type it should be
                row[6]
            ];
         })   
    }    
}