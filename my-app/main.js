import { FORM, LUNCH, DRINK, CLOSE, SUBMIT, FLAVORS } from "./global.js";
import { renderTbl } from "./render.js";
import { drinkDecisionArr, saveLS } from "./storage.js";
import { DD } from "./dd.js";

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  if (LUNCH.value !== "" && DRINK.value !== "" && CLOSE.value !== "") {
    SUBMIT.textContent = "";
    const ddObj = new DD(parseInt(FORM.moneyAS.value), FORM.isLB.value, FORM.drinkChoice.value, FORM.isCS.value, parseInt(FORM.drinkFlavor.value));
    drinkDecisionArr.push(ddObj);
    saveLS(drinkDecisionArr);
    renderTbl(drinkDecisionArr);
    FORM.reset();
  }
  else {
    SUBMIT.textContent = "Please fill out all required fields."
  }
});

const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  if (field === "") {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};

//Summary of new changes in todo.md
const addMenu = () => {
  FLAVORS.innerHTML = "";
  const newOptionTitle = document.createElement("option")
  newOptionTitle.text = "Please Select an Option";
  FLAVORS.appendChild(newOptionTitle);
  if (DRINK.value === "coffee") {
    const newCoffee1 = document.createElement("option")
    newCoffee1.text = "Vanilla Cold Brew";
    newCoffee1.value = "6";
    FLAVORS.appendChild(newCoffee1);
    const newCoffee2 = document.createElement("option")
    newCoffee2.text = "Peppermint Mocha";
    newCoffee2.value = "7";
    FLAVORS.appendChild(newCoffee2);
    const newCoffee3 = document.createElement("option")
    newCoffee3.text = "Carmel Mocha w/ Whip";
    newCoffee3.value = "8";
    FLAVORS.appendChild(newCoffee3);
    const newCoffee4 = document.createElement("option")
    newCoffee4.text = "Oatmilk Chai Tea Latte w/ Espresso";
    newCoffee4.value = "9";
    FLAVORS.appendChild(newCoffee4);
  } else if (DRINK.value === "bobaTea") {
    const newTea1 = document.createElement("option")
    newTea1.text = "Mango Milk Tea";
    newTea1.value = "5";
    FLAVORS.appendChild(newTea1);
    const newTea2 = document.createElement("option")
    newTea2.text = "Brown Sugar Milk Tea";
    newTea2.value = "6";
    FLAVORS.appendChild(newTea2);
    const newTea3 = document.createElement("option")
    newTea3.text = "Vanilla Ice Cream Latte";
    newTea3.value = "8";
    FLAVORS.appendChild(newTea3);
    const newTea4 = document.createElement("option")
    newTea4.text = "Strawberry Matcha Latte";
    newTea4.value = "9";
    FLAVORS.appendChild(newTea4);
  }
}

LUNCH.addEventListener("blur", validateField);
DRINK.addEventListener("blur", validateField);
CLOSE.addEventListener("blur", validateField);

DRINK.addEventListener("change", addMenu);

renderTbl(drinkDecisionArr);