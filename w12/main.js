const FORM = document.getElementById("form");

const startWorkout = (exerciseType, repNum, workoutTime, fn) => {
    fn(`Start ${exerciseType} <> Goal reps is ${repNum} <> Complete in ${workoutTime} seconds!`, "p")
    setTimeout(() => {
        fn(`Stop ${exerciseType}`, "h1")
    }, workoutTime * 1000);
}

const displayOutput = (message, el) => {
    const output = document.getElementById("output");
    const newEl = document.createElement(el);
    newEl.textContent = message;
    output.appendChild(newEl);
  };

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    const exerciseType = FORM.exerciseType.value;
    const repNum = parseInt(FORM.repNum.value);
    const workoutTime = parseInt(FORM.workoutTime.value);
    startWorkout(exerciseType, repNum, workoutTime, displayOutput);
    FORM.reset();
  });