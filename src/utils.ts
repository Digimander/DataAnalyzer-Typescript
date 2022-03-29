//use enum to define finite number of options
export enum MatchResult{
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D'
};


export const dateStringToDate = (dateString:string):Date=>{
    //28/10/2018
    const dateParts = dateString.split('/').map((value:string):number=>{
        return parseInt(value);
    });
    return new Date(dateParts[2],dateParts[1]-1,dateParts[0]);
};
