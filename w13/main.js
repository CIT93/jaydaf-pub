//FIRST ATTEMPT
// const FORM = document.getElementById("form");

// function workoutPromise(exerciseType, repNum, workoutTime) {
//   return new Promise(function (resolve, reject) {
//     if (repNum < 1 || repNum > 30) {
//       reject(`${repNum}`);
//     } else {
//       resolve(`Start ${exerciseType} <> Goal reps is ${repNum} <> Complete in ${workoutTime} seconds!`);
//     }
//   });
// }

// function workoutSuccess(data) {
//   const output = document.getElementById("output");
//   const newP = document.createElement("p");
//   newP.textContent = data;
//   output.appendChild(newP);
// }

// function workoutError(error) {  
//   const output = document.getElementById("output");
//   const newP = document.createElement("p");
//   newP.textContent = `ERROR: ${error} is an incorrect number of reps. Try again!`;
//   output.appendChild(newP);
// }

// function workoutFinally(exerciseType, workoutTime) {
//   const output = document.getElementById("output");
//   const newH = document.createElement("h1");
//   setTimeout(() => {
//     newH.textContent = `Stop ${exerciseType}`
//   }, workoutTime * 1000);
//   output.appendChild(newH);
// }

// FORM.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const exerciseType = FORM.exerciseType.value;
//   const repNum = parseInt(FORM.repNum.value);
//   const workoutTime = parseInt(FORM.workoutTime.value);
//   workoutPromise(exerciseType, repNum, workoutTime)  
//     .then(workoutSuccess)
//     .catch(workoutError)
//     .finally(workoutFinally(exerciseType, workoutTime))
//   FORM.reset();
// });

const FORM = document.getElementById("form");

const startWorkout = (exerciseType, repNum, workoutTime, fn) => {
    fn(`Start ${exerciseType} <> Goal reps is ${repNum} <> Complete in ${workoutTime} seconds!`, "p")
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        if (repNum < 1 || repNum > 30) {
            reject(`ERROR: ${repNum} is an incorrect amount of reps. Reps should be a number between 1 and 30.`);
        } else {
          resolve(`Stop ${exerciseType}`, "h1");
        }
    }, workoutTime * 1000);
    })
}

const displayOutput = (message, el) => {
    const output = document.getElementById("output");
    const newEl = document.createElement(el);
    newEl.textContent = message;
    output.appendChild(newEl);
  };

const workoutError = (error) => {
  displayOutput(error, "h3")
}

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    const exerciseType = FORM.exerciseType.value;
    const repNum = parseInt(FORM.repNum.value);
    const workoutTime = parseInt(FORM.workoutTime.value);
    startWorkout(exerciseType, repNum, workoutTime, displayOutput)
      .then(displayOutput)
      .catch(workoutError);
    FORM.reset();
  });