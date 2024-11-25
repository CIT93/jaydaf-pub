import { FORM, FNAME, LNAME, SUBMIT, WATER, DISHWASH } from "./global.js";
import { renderTbl } from "./render.js";
import { cfpData, saveLS } from "./storage.js";
import { FP } from "./fp.js";

const determineRecycleItems = e => {
  const numberChecked = document.querySelectorAll(".recycle:checked").length;
  return {
    glass: e.target.glass.checked,
    plastic: e.target.plastic.checked,
    paper: e.target.paper.checked,
    alum: e.target.alum.checked,
    steel: e.target.steel.checked,
    comp: e.target.comp.checked,
    recyclePoints: (24 - (numberChecked * 4))
  }
}

FORM.addEventListener("submit", e => {
  e.preventDefault();
  DISHWASH.disabled = false;
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = "";
    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(e.target.housem.value),
      e.target.houses.value,
      e.target.food.value,
      e.target.foods.value,
      parseInt(e.target.water.value),
      e.target.dishWash.checked,
      parseInt(e.target.purchase.value),
      parseInt(e.target.waste.value),
      determineRecycleItems(e),
      parseInt(e.target.personal.value),
      parseInt(e.target.public.value),
      parseInt(e.target.flights.value),
    );
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

WATER.addEventListener("change", e  => {
  if (WATER.value === "0") {
    DISHWASH.disabled = true;
  } else {
    DISHWASH.disabled = false;
  }
});

renderTbl(cfpData); 