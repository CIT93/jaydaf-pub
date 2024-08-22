function determineHouseHoldPts(numberInHousehold) {
    if (numberInHousehold === 1) {
      carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if (numberInHousehold === 2) {
      carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if (numberInHousehold === 3) {
      carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (numberInHousehold === 4) {
      carbonFootprintPoints = carbonFootprintPoints + 8;
    } else if (numberInHousehold === 5) {
      carbonFootprintPoints = carbonFootprintPoints + 6;
    } else if (numberInHousehold === 6) {
      carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (numberInHousehold >= 7) {
      carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`Based on the number of members of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`);
}

let carbonFootprintPoints = 0;
//const numberInHousehold = 3;



// global scope

//determineHouseHoldPts(3)
determineHouseHoldPts(4) 

//For my new function to "consider the size of your home", I combined the previous carbonFootprintPoints values from the determineHouseHoldPts function with the values from the new determineHouseSizePts function, allowing the user to calculate their combined point total from both the number of people in their household and the size of their house.
function determineHouseSizePts(houseSize) {
    if (houseSize === "small") {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (houseSize === "medium") {
        carbonFootprintPoints = carbonFootprintPoints + 7;
    } else if (houseSize === "large") {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (houseSize === "apartment") {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`Based on the size of your house: ${houseSize}, your new point total would be ${carbonFootprintPoints}.`);
}

determineHouseSizePts("medium")