const TBL = document.getElementById("tab-data");
const table = renderTblHead()

function renderTblHead(data) {
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
  
  function renderTbl(data) { 
    data.forEach(function(item) {
      const tbody = document.createElement("tbody");
      const tr = document.createElement("tr");
      const properties = [item.firstN, item.hMem, item.hSize, item.hTotal];
      properties.forEach(function(text) {
        const td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
      });
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit"
    const btnDel = document.createElement("button");
    btnDel.textContent = "Del"
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
    });
    TBL.appendChild(table);
  }

  export {renderTbl, renderTblHead};
