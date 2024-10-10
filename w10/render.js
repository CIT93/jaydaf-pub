import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

const renderTblHead = function() {
  const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
    headingTextArr.forEach(function(text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
}


const onUpdate = function(index, data) {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data); 
}

  const renderTblBttns = function(index, data) {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit"
    const btnDel = document.createElement("button");
    btnDel.textContent = "Del"
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener("click", function(e) {
    onUpdate(index, data);
    })
    btnEdit.addEventListener("click", function(e) {
      FORM[1].value = String(data[index].firstN);
      FORM[2].value = String(data[index].lastN);
      FORM[3].value = String(data[index].hMem);
      FORM[4].value = String(data[index].hSize);
      onUpdate(index, data); 
    })
    return td
  }

  const renderTblRow = function(data) {
  const tbody = document.createElement("tbody")
    data.forEach(function(obj, index) {
      console.log(index);
      const tr = document.createElement("tr");
      for(const [key, value] of Object.entries(obj)){
        if (key === "firstN" || key === "hMem" || key === "hSize" || key === "hTotal") {
          const td = document.createElement("td");
          td.textContent = value;
          tr.appendChild(td);
        }
    };
    const td = renderTblBttns(index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
    });
  return tbody
  }
  
  const renderTbl = function(data) {
    TBL.innerHTML = "";
    if (data.length !== 0) {
      const table = renderTblHead();
      const tbody = renderTblRow(data);
      table.appendChild(tbody);
      TBL.appendChild(table);
    }
  }

  export {renderTbl};
