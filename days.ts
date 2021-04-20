// import * as readLine from 'readline'
// const readline = require('readline')

let daysIndex:any=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
let singleInput:any=""
let inputD:any={}
let outputDArray:any=[]
let outputD:any={}
let n=0
let randomDate:any=0
let randomMonth:any=0
let yearArray:any=[]
let randomYear:any=0
let numberOfDays:any=0

//function to return min and max range
function random(min, max) {
    return min + Math.random() * (max - min);
  }

// generating number of day month and year for input dictionary

// generating year from 1970 to 2100
for(var y=1970;y<=2100;y++){
    yearArray.push(y)
}
// this block generate the first date rest just iterate accordingly
randomYear = yearArray[Math.ceil(Math.random() * 130)]                               // we just took a year to from yearArray  1970 ~ 2100

randomDate = Math.ceil(Math.random() * 13)                                          // took 28 or 26 for correct and random dates, can take 31 too but requires more logical lines in that
randomMonth = Math.ceil(Math.random() * 12)                                         // generating month

numberOfDays = Math.ceil(random(2,7))                                        // generating limit of days

// console.log("Random date",randomDate+"-"+randomMonth+"-"+randomYear)

singleInput= randomYear+"-"+randomMonth+"-"+randomDate                            //initial date

while(new Date(singleInput).getDay()!==0) // condition to check for sunday
{
    randomDate++
    singleInput= randomYear+"-"+randomMonth+"-"+randomDate
}

for(var i=0;i<numberOfDays;i++){
   
    // generating plus or minus integer value for date key
    var plusOrMinus = Math.random() < 0.5 ? n=-1 : n=1;

    plusOrMinus=Math.ceil((Math.random()*1000)*(n))
    if(plusOrMinus=== -0){
        plusOrMinus=0
    }
    inputD[singleInput]=plusOrMinus                                                                             // for adding plus or minus sum values
        if(i===0 || i===1)                                                                                 
        {
            singleInput=randomYear +"-"+randomMonth+"-"+(randomDate+=(Math.ceil(Math.random())))                            //to generate sunday and monday
        }
        else{
            singleInput=randomYear +"-"+randomMonth+"-"+(randomDate+=(Math.ceil(Math.random()*2)))                          //to generate consecutive or alternate day
        }
        if(i>2 && (new Date(singleInput).getDay()===0 || new Date(singleInput).getDay()===1)){
            break;
        }
        

}

//printing input dictionary
console.log("input D",inputD)

//calling solution function
solution(inputD)


//first we need to convet dat string to mm-dd-yyyy format to get the day of week
function solution(D){
    for(let days in D)
    {
        var day=daysIndex[new Date(days).getDay()]
        outputD[day]=D[days]
    }
    
for(var i=0;i<7;i++){
    if(outputD[daysIndex[i]])
        {
            outputD[daysIndex[i]]=outputD[daysIndex[i]]
        }
    else
        {
            outputD[daysIndex[i]]=(outputD[daysIndex[0]]+outputD[daysIndex[i-1]])/2       
        }
    }
}

//printing output
console.log("output D",outputD)
