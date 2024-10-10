const saveLS = (...arr) => {
    const serializedArr = JSON.stringify(...arr);
    localStorage.setItem("cfp", serializedArr);
}

const getLS = () => {
    const retrieveArr = localStorage.getItem("cfp");
    if (retrieveArr !== null) {
        return JSON.parse(retrieveArr);
    } else {
        return [];
    }
}

const cfpData = getLS();

export {cfpData, saveLS, getLS};