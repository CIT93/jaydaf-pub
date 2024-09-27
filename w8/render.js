const TBL = document.getElementById("tab-data");

function renderTblHead() {
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

  function renderTblBttns(index, data) {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit"
    const btnDel = document.createElement("button");
    btnDel.textContent = "Del"
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener("click", function(e) {
      data.splice(index, 1); 
      renderTbl(data);
    })
    btnEdit.addEventListener("click", function(e) {})
    return td
  }

  function renderTblRow(data) {
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
  
  function renderTbl(data) { 
    const table = renderTblHead();
    const tbody = renderTblRow(data);
    TBL.innerHTML = "";
    table.appendChild(tbody);
    TBL.appendChild(table);
  }

  export {renderTbl};
