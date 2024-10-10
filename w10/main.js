import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { renderTbl} from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./calculate.js";
import { cfpData, saveLS } from "./storage.js";


  const start = function(houseHoldMembers, houseSize) {
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



FORM.addEventListener("submit", function(e){
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = "";
    start(parseInt(FORM.housem.value), FORM.houses.value, FNAME.value, LNAME.value);
    saveLS(cfpData);
    renderTbl(cfpData); 
    FORM.reset();
  }
  else {
    SUBMIT.textContent = "Form requires first and last name";
  }
})


const validateField = function(event) {
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

const add2 = function(...a) {
  return 2 + a[3]; 
}

 const result = add2(1, 2, 3, 4);

 // rest argument

 //IIFE

const a = 3;

 (function(a) {
  console.log("Inside IIFE");
  console.log(a);
 })(a);