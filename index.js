// work days in a year, not counting weekends and public holidays
let workDays = 250;

// minimum and maximum trip meter total per day
let tripLow = Math.ceil(18);
let tripHigh = Math.floor(60);

// a tally of the total kms travelled
let totalKms = 0;

// put the result in a html table so it can be copy and pasted into excel or google sheets
document.write("<table><th>Day</th><th>Kms</th><th>Total</th>");

// for every workday
for (let index = 1; index <= workDays; index++) {
  // get a random integer between the min and max trip meter settings
  let randNumber = Math.floor(Math.random() * (tripHigh - tripLow + 1)) + tripLow;

  // increment total kms
  totalKms = totalKms + randNumber;

  document.write("<tr><td>" + index + "</td><td>" + randNumber + "</td><td>" + totalKms + "</td></tr>");
}

document.write("</table>");

// log total to see if it equals around the total you are trying to achieve
document.getElementById("totalKms").innerHTML = "Total Kms: " + totalKms;
