import { ALUM, COMP, DISHWASH, FORM, GLASS, PAPER, PLASTIC, STEEL, TBL } from "./global.js";
import { cfpData, saveLS } from "./storage.js";

const renderTblHead = () => {
  const table = document.createElement("table");
  table.setAttribute("id", "cfpTable")
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["First", "Last", "Footprint Total", "Actions"];
    headingTextArr.forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
}

const isWaterChecked = data => {
  if (data.waterPoints === 0) {
    DISHWASH.disabled = true;
  } else if (parseInt(data.totalWaterPoints) === parseInt(data.waterPoints) * 2) {
    DISHWASH.checked = true;
  } else {
    DISHWASH.checked = false;
  }
}

const isRecycleChecked = (isValue, docEl) => {
  if (isValue === false) {
    docEl.checked = false;
  } else if (isValue) {
    docEl.checked = true;
  }
}

const onUpdate = (index, data) => {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
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
      FORM[6].value = String(data[index].foodSource);
      FORM[7].value = String(data[index].waterPoints); 
      FORM[8].value = isWaterChecked(cfpData[index]);
      FORM[9].value = String(data[index].houseHoldPurPoints);
      FORM[10].value = String(data[index].wasteProdPoints);
      FORM[12].value = isRecycleChecked(cfpData[index].recycle.glass, GLASS);
      FORM[13].value = isRecycleChecked(cfpData[index].recycle.plastic, PLASTIC);
      FORM[14].value = isRecycleChecked(cfpData[index].recycle.paper, PAPER);
      FORM[15].value = isRecycleChecked(cfpData[index].recycle.alum, ALUM);
      FORM[16].value = isRecycleChecked(cfpData[index].recycle.steel, STEEL);
      FORM[17].value = isRecycleChecked(cfpData[index].recycle.comp, COMP);
      FORM[19].value = String(data[index].personalTransPoints);
      FORM[20].value = String(data[index].publicTransPoints);
      FORM[21].value = String(data[index].flightsTransPoints);
      onUpdate(index, data); 
    })
    return td
  }

  const renderTblRow = (data) => {
    const tbody = document.createElement("tbody");
    data.forEach((obj, index) => {
      console.log(index);
      const tr = document.createElement("tr");
      const keys = ["first", "last", "total"];
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

const addRow = (tableID, data) => {
  let reduceData = data.reduce((sum, ea) => sum + ea.total, 0);
  let tableRef =  document.getElementById(tableID);
  let newRow = tableRef.insertRow(-1);
  let newTD = newRow.insertCell(0);
  let newTitleCell = newRow.insertCell(-1);
  let newTitleText = document.createTextNode("Average Footprint")
  let newAvgCell = newRow.insertCell(-1);
  let newAvgText = document.createTextNode(`${Math.floor(reduceData / data.length)}`)
  newTitleCell.appendChild(newTitleText);
  newAvgCell.appendChild(newAvgText);
}
  
  const renderTbl = data => {
    TBL.innerHTML = "";
    if (data.length !== 0) {
      const table = renderTblHead();
      const tbody = renderTblRow(data);
      table.appendChild(tbody);
      TBL.appendChild(table);
      addRow("cfpTable", data);
    }
  }

  export {renderTbl, addRow};
