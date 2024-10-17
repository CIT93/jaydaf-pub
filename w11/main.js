import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { renderTbl} from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./calculate.js";
import { cfpData, saveLS } from "./storage.js";
import { FP } from "./fp.js";


  const start = (houseHoldMembers, houseSize) => {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseHoldSize = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseHoldSize;
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    cfpData.push({
      firstN: firstName,
      hMem: houseHoldMembers,
      hSize: houseSize,
      hHPTS: houseHoldPTS,
      hHSize: houseHoldSize,
      hTotal: total,
      lastN: lastName
    });
  }



FORM.addEventListener("submit", e => {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = "";
    // start(parseInt(FORM.housem.value), FORM.houses.value, FNAME.value, LNAME.value);
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    // fpObj.houseHoldPoints();
    // fpObj.houseSizePoints();
    // fpObj.total();
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData); 
    FORM.reset();
  }
  else {
    SUBMIT.textContent = "Form requires first and last name";
  }
})


const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};

FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);



 // rest operator

// const add2 = function(...a) {
//   return 2 + a[3]; 
// }

//  const result = add2(1, 2, 3, 4);

// arrow function
// const add2 = a => 2 + a; 


//  const result = add2(100);

//  //IIFE

// const a = 3;

//  (function(a) {
//   console.log("Inside IIFE");
//   console.log(a);
//  })(a);


//  const me = {
//   name: "Jayda",
//   hairColor: "black",
//   location: "home",
//   sleepScore: 95, 
//   introduce: function() {
//     console.log(this);
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now!`);
//   }
//  }

//  const you = {
//   name: "Jan",
//   hairColor: "brown",
//   location: "home",
//   sleepScore: 55, 
//   introduce: function() {
//     console.log(this);
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now!`);
//   }
//  }

// me.introduce();
// you.introduce();

// class Human {
//   constructor(name, hairColor, location, sleepScore){
//     this.name = name
//     this.hairColor = hairColor
//     this.location = location
//     this.sleepScore = sleepScore
//   }
//   introduce() {
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} and had a sleep score of ${this.sleepScore}!`);
//   }
// }

// const jayda = new Human("Jayda", "black", "home", 95);
// const jane = new Human("Jane", "brown", "home", 55);

// jayda.introduce();
// jane.introduce();
// jayda.hrv = 50;