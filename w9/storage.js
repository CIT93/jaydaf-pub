const cfpData = getLS();

function saveLS(cfpData) {
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serializedArr);
}

function getLS() {
    const retrieveArr = localStorage.getItem("cfp");
    if (retrieveArr !== null) {
        return JSON.parse(retrieveArr);
    } else {
        return [];
    }
}

export {cfpData, saveLS, getLS};