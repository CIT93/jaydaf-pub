const saveLS = (...arr) => {
    const serializedArr = JSON.stringify(...arr);
    localStorage.setItem("drinkDecision", serializedArr);
}

const getLS = () => {
    const retrieveArr = localStorage.getItem("drinkDecision");
    if (retrieveArr !== null) {
        return JSON.parse(retrieveArr);
    } else {
        return [];
    }
}

const drinkDecisionArr = getLS();

export {drinkDecisionArr, saveLS};