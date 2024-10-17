import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { renderTbl} from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./calculate.js";
import { cfpData, saveLS } from "./storage.js";
import { FP } from "./fp.js";

FORM.addEventListener("submit", e => {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = "";
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.food.value);
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

renderTbl(cfpData); //table now renders on page refresh