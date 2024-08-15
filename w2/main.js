// How to Calculate Your Carbon Footprint -  https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Method 1

// 1. Count the members of your household.
const myHouseMembers = 8;
// 2. Consider the size of your home.
const myHouseSize = 7;
// 3. Evaluate your food choices.
const myFoodChoice = 20;
// 4. Examine your water consumption.
const myWaterUse = 2;
// 5. Determine how many household purchases you make each year.
const myHousePurchase = 8;
// 6. Consider how much waste you produce.
const myWaste = 30;
// 7. Identify the amount of waste that you recycle.
const myRecycle = 12;
// 8. Tally up your annual transportation scores.
const myTransport = 12;
// 9. Add up your points.
const cfpTotal = myHouseMembers + myHouseSize + myFoodChoice + myWaterUse + myHousePurchase + myWaste + myRecycle + myTransport;
// 10. Write JS to update the rendered html (index.html) with total footprint.
const myHeading = document.querySelector("h2");
myHeading.textContent = cfpTotal;