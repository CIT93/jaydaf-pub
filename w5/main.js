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

/*   function displayOutObj(obj) {
    console.log(obj);
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.hTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home`;
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.hMem} (score: ${obj.hHPTS})`;
    newP.textContent += ` and a ${obj.hSize} size of home (score: ${obj.hHSize}).`;
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
  } */

  function displayOutput() {
    for (obj of cfpData) {
      console.log(obj)  
      const output = document.getElementById("output");
      const newH2 = document.createElement("h2");
      newH2.textContent = `Carbon Footprint ${obj.hTotal}`;
        // const newH3 = document.createElement("h3");
        // newH3.textContent = `Based on number in and size of home`;
        // const newP = document.createElement("p");
        // newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score:${arr[3]}).`;
        // newP.textContent += ` and a ${arr[1]} size of home (score:${arr[2]}).`;
      output.appendChild(newH2);
        // output.appendChild(newH3);
        // output.appendChild(newP);
    }
}

  start(5, "apt");
  start(4, "large");
  start(3, "medium");
  start(1, "apt");
  start(2, "apt");
  start(3, "apt");
  start(4, "apt");
  start(6, "apt");
  start(7, "apt");
  start(8, "apt");
  start(1, "large");
  start(2, "large");
  start(3, "large");
  start(5, "large");
  start(6, "large");
  start(7, "large");
  start(8, "large");
  start(1, "medium");
  start(2, "medium");
  start(4, "medium");
  start(5, "medium");
  start(6, "medium");
  start(7, "medium");
  start(8, "medium");
  start(1, "small");
  start(2, "small");
  start(3, "small");
  start(4, "small");
  start(5, "small");
  start(6, "small");
  start(7, "small");
  start(8, "small");
 
displayOutput();