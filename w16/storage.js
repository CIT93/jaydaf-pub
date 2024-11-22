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

// const mappedDataArr = data => {
//     return data.map(data => data.total)
// }

// const mappedCfp = mappedDataArr(cfpData)

// const reduce = data => {
//     const reduceArr = data.reduce((sum, len) => sum + len, 0);
//     return reduceArr
// }

// const calculateAvg = () => {
//     let avg = reduce(mappedCfp) / mappedCfp.length;
//     return avg
// }

export {cfpData, saveLS, getLS };