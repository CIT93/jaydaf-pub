import { renderTbl, renderTblHead } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./calculate.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];
const TBL = document.getElementById("tab-data");

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
  TBL.innerHTML = "";
  const table = renderTblHead();
  renderTbl(cfpData, table);
  TBL.appendChild(table);
  FORM.reset();
})

//Week 7 Coding Challenges
//1. For my solution, I was easily able to create a new module with the formulas to calculate carbon footprint scores, exporting determineHouseSizePts() and determineHouseHoldPts() from calculate.js and importing both formulas into main.js.
//2. Next, in order to only create one table heading, I pulled the constant of table = renderTblHead() out of the formula renderTbl() and into the global scale of render.js. By doing this, it only runs the renderTblHead() function once, and allows you to append as many rows as necesssary based on user input in the following renderTbl() function.
//3. I had a bit of trouble with this part of the challenge, as the code I wrote repeated prior user inputs when completing the form more than once. However, I was able to create a forEach loop inside of a forEach loop. This loop inside of a loop was able to pull the necessary user input from the array of objects into a separate array of object properties and add that data to the row of the table.
//   Once I added the Edit and Delete buttons to the end of the row following the second forEach loop, I appended everything into the table. First, I added the data to the table row, then added the row to the body of the table and finally added the entire body of the table to the table itself. 