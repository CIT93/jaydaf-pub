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
    cfpData.push({
      hMem: houseHoldMembers,
      hSize: houseSize,
      hHPTS: houseHoldPTS,
      hHSize: houseHoldSize,
      hTotal: total
    });
  }


  function displayOutput() {
    OUTPUT.innerHTML = "";
    for (obj of cfpData) {
      console.log(obj)  
      const newH2 = document.createElement("h2");
      newH2.textContent = `Carbon Footprint ${obj.hTotal}`;
      const newH3 = document.createElement("h3");
      newH3.textContent = `Based on number in and size of home`;
      const newP = document.createElement("p");
      newP.textContent = `This number is based on the number of people in the house of ${obj.hMem} (score:${obj.hHPTS}).`;
      newP.textContent += ` and a ${obj.hSize} size of home (score:${obj.hHSize}).`;
      OUTPUT.appendChild(newH2);
      OUTPUT.appendChild(newH3);
      OUTPUT.appendChild(newP);
    }
}


FORM.addEventListener("submit", function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseMembers, houseSize);
  displayOutput();
  FORM.reset();
})

// Is the apartment score correct? If not, why not?
// The apartment score is not correct because the value of the HTML option does not match the code written in the JS formula. In order for the output to be correct, the two values need to match (both will either be "apt" or "apartment").

// Why are we doing all this work in the form to make sure the user gives us good data?
// It is very important that the inputs from the webpage match the formulas written in JavaScript, as it affects the entire series of formulas including the output to the webpage. So when coding the HTML page, as much validation as possible needs to be done, in case the user incorrectly inputs data and throws off the entire series of JavaScript formulas.