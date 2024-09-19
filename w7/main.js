import { renderTbl } from "./render.js";
const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size) {
    let houseSize = 0;
    if (size === "large") {
      houseSize = 10;
    } else if (size === "medium") {
        houseSize = 7;
    } else if (size === "small") {
        houseSize = 4;
    } else if (size === "apt") {
        houseSize = 2;
    }
    return houseSize
  }

  
  function determineHouseHoldPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
      } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
      } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
      } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
      } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
      } else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
      } else if (numberInHousehold >= 7) {
        houseHoldPoints = 2;
      }
      return houseHoldPoints
  }


  function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseHoldSize = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseHoldSize;
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    cfpData.push({
      hMem: houseHoldMembers,
      hSize: houseSize,
      hHPTS: houseHoldPTS,
      hHSize: houseHoldSize,
      hTotal: total,
      firstN: firstName,
      lastN: lastName
    });
  }




//Why did we get an error?
//Since the variable td is only defined within the forEach loop within the renderTbl() function, it is not able to be accessed within the renderTbl() function itself. In order to use td as a variable within the renderTbl() function, you would have to define that variable outside of the forEach loop.

//Do you need to export both functions?
//Since the function renderTblHead() is referenced within the renderTbl() function, you may not need to export renderTblHead() to the main.js file. Since there is no local reference point for renderTblHead() in main.js, I believe it is fine to not export it and let renderTbl() reference it as the sole exported function.

FORM.addEventListener("submit", function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseMembers, houseSize, firstName, lastName);
  OUTPUT.innerHTML = "";
  renderTbl(cfpData);
  FORM.reset();
})

// Is the apartment score correct? If not, why not?
// The apartment score is not correct because the value of the HTML option does not match the code written in the JS formula. In order for the output to be correct, the two values need to match (both will either be "apt" or "apartment").

// Why are we doing all this work in the form to make sure the user gives us good data?
// It is very important that the inputs from the webpage match the formulas written in JavaScript, as it affects the entire series of formulas including the output to the webpage. So when coding the HTML page, as much validation as possible needs to be done, in case the user incorrectly inputs data and throws off the entire series of JavaScript formulas.