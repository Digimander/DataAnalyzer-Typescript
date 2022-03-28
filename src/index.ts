import fs from 'fs';


//get data 
const matches = fs.readFileSync('./football.csv',{encoding:'utf-8'}).split('\n').map((row:string):string[]=>{
    return row.split(',')});

//use enum to define finite number of options
enum MatchResult{
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D'
};

//analyze data

//how many times Man United won the match?
let manUnitedWins = 0;
for(let match of matches){
    if(match[1]==='Man United'&& match[5]===MatchResult.HomeWin){
        manUnitedWins++;
    } else if(match[2]==='Man United' && match[5]===MatchResult.AwayWin){
        manUnitedWins++;
    }
}
//Report data
console.log(`Manchester United won ${manUnitedWins} times.`)
