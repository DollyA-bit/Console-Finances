console.log("Financial Analysis")
console.log("--------------------------------")



// The total number of months included in the dataset.

var startDate = new Date(2010, 0); // Jan  2010
var endDate = new Date(2017, 1); // Feb 2017

const months = (end.getFullYear() - start.getFullYear()) * 12;
const totalMonths = months + end.getMonth() - start.getMonth();

console.log(totalMonths); // Output: 84



// The net total amount of Profit/Losses over the entire period.
// add everything together
// probably a loop
var arr = [867884, 984655, 322013, -69417, 310503, 522857,  
    1033096, 604885, -216386, 477532, 893810, -80353, 779806, -335203, 697845, 793163, 485070, 584122, 62729, 
    668179, 899906, 834719, 132003, 309978, -755566, 1170593, 252788, 1151518, 817256,  570757, -1022534, 475062, 779976, 144175,
    542494,   542494, 359333, 321469, 67780, 471435, 565603, 872480, 789480, 999942, -1196225, 268997, -687986, 1150461, 682458,
 617856, 824098, 581943, 132864, 448062, 689161, 1166643, 947333, 578668, 988505, 1139715, 1029471,
    687533, -524626, 158620, 87795, 423389, 840723, 568529, 332067, 989499, 778237, 650000, -1100387, -174946, 757143, 445709, 712961 -1163797,
     569899, 768450, 102685, 795914, 60988, 138230, 671099];

var sum = 0;

arr.forEach(value => {
  sum += value;
});

console.log("Total: " + sum);

// The average of the changes in Profit/Losses over the entire period.
// calculate each change by subtracting the previous month from this month
// You will need to track what the total change in profits is from month to month and then find the average.
// (Total/total number of changes) ===> total change/(months - 1)
// maybe put all the changes into an array? using .push(...) ?

var arr = [867884, 984655, 322013, -69417, 310503, 522857,  
    1033096, 604885, -216386, 477532, 893810, -80353, 779806, -335203, 697845, 793163, 485070, 584122, 62729, 
    668179, 899906, 834719, 132003, 309978, -755566, 1170593, 252788, 1151518, 817256,  570757, -1022534, 475062, 779976, 144175,
    542494,   542494, 359333, 321469, 67780, 471435, 565603, 872480, 789480, 999942, -1196225, 268997, -687986, 1150461, 682458,
 617856, 824098, 581943, 132864, 448062, 689161, 1166643, 947333, 578668, 988505, 1139715, 1029471,
    687533, -524626, 158620, 87795, 423389, 840723, 568529, 332067, 989499, 778237, 650000, -1100387, -174946, 757143, 445709, 712961 -1163797,
     569899, 768450, 102685, 795914, 60988, 138230, 671099];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log("Average profit:" + average);



// The greatest increase in profits (date and amount) over the entire period.
// start with 0
//   check the last increase. If it's bigger than 0, keep track of the new biggest one.
//   in a loop
// The greatest decrease in losses (date and amount) over the entire period.
