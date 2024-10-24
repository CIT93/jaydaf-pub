const repArr = [];
const FORM = document.getElementById("form");

const start = (exerciseType, repNum, workoutTime) => {
    repArr.push({
        exerciseType: exerciseType,
        repNum: repNum,
        workoutTime: workoutTime
    })
}

const displayOutput = () => {
  for (const obj of repArr) {
    console.log(obj);
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    const newP = document.createElement("p");
    output.innerHTML = "Submit to Start!";
    newP.textContent = `Start ${obj.exerciseType} <> Goal reps is ${obj.repNum}`;
    newH2.textContent = `Stop ${obj.exerciseType}`;
    output.appendChild(newP);
    setTimeout(() => {
        output.appendChild(newH2);
    }, obj.workoutTime * 1000);
  }
};

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    const exerciseType = FORM.exerciseType.value;
    const repNum = parseInt(FORM.repNum.value);
    const workoutTime = parseInt(FORM.workoutTime.value);
    start(exerciseType, repNum, workoutTime);
    displayOutput();
    FORM.reset();
  });