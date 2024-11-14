import { FORM, TBL } from "./global.js";
import { saveLS, calculateAvg } from "./storage.js";

const renderTblHead = () => {
  const table = document.createElement("table");
  table.setAttribute("id", "cfpTable")
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "FoodType", "Footprint", "Actions"];
    headingTextArr.forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
}


const onUpdate = (index, data) => {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
  addRow("cfpTable"); 
}

  const renderTblBttns = (index, data) => {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit"
    const btnDel = document.createElement("button");
    btnDel.textContent = "Del"
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener("click", e => {
    onUpdate(index, data);
    })
    btnEdit.addEventListener("click", e => {
      FORM[1].value = String(data[index].first);
      FORM[2].value = String(data[index].last);
      FORM[3].value = String(data[index].houseMembers);
      FORM[4].value = String(data[index].houseSize);
      FORM[5].value = String(data[index].foodType);
      onUpdate(index, data); 
    })
    return td
  }

  const renderTblRow = (data) => {
    const tbody = document.createElement("tbody");
    data.forEach((obj, index) => {
      console.log(index);
      const tr = document.createElement("tr");
      const keys = ["first", "houseMembers", "houseSize", "foodType", "total"];
      keys.forEach((key) => {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
      });
      const td = renderTblBttns(index, data);
      tr.appendChild(td);
      tbody.appendChild(tr);
    });
    return tbody;
  };

const addRow = tableID => {
  let avg = calculateAvg();
  let tableRef =  document.getElementById(tableID);
  let newRow = tableRef.insertRow(-1);
  let newTitleCell = newRow.insertCell(0);
  let newTitleText = document.createTextNode("Average Footprint")
  let newAvgCell = newRow.insertCell(-1);
  let newAvgText = document.createTextNode(`${avg}`)
  newTitleCell.appendChild(newTitleText);
  newAvgCell.appendChild(newAvgText);
  //console.log(avg);
}
  
  const renderTbl = data => {
    TBL.innerHTML = "";
    if (data.length !== 0) {
      const table = renderTblHead();
      const tbody = renderTblRow(data);
      table.appendChild(tbody);
      TBL.appendChild(table);
    }
  }

  export {renderTbl, addRow};
