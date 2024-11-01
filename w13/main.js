const FORM = document.getElementById("form");

function workoutPromise(exerciseType, repNum, workoutTime) {
  return new Promise(function(resolve, reject) {
    resolve(`Start ${exerciseType} <> Goal reps is ${repNum} <> Complete in ${workoutTime} seconds!`)
  })
}

function workoutSuccess(data) {
  const output = document.getElementById("output");
  const newP = document.createElement("p");
  newP.textContent = data;
  output.appendChild(newP);
}

function workoutError(error) {  
  const output = document.getElementById("output");
  const newP = document.createElement("p");
  newP.textContent = `ERROR: ${error} is incorrect. Try again!`;
  output.appendChild(newP);
}

function workoutFinally(exerciseType, workoutTime) {
  const output = document.getElementById("output");
  const newH = document.createElement("h1");
  setTimeout(() => {
    newH.textContent = `Stop ${exerciseType}`
  }, workoutTime * 1000);
  output.appendChild(newH);
}

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const exerciseType = FORM.exerciseType.value;
  const repNum = parseInt(FORM.repNum.value);
  const workoutTime = parseInt(FORM.workoutTime.value);
  workoutPromise(exerciseType, repNum, workoutTime)  
    .then(workoutSuccess)
    .catch(workoutError)
    .finally(workoutFinally(exerciseType, workoutTime))
  FORM.reset();
});