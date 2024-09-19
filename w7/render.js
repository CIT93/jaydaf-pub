const TBL = document.getElementById("tab-data");

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
  
  function renderTbl(data) { //the data parameter is used as a placeholder; once the function is called with cfpData as its parameter, data then becomes the values found in the cfpData array
    const table = renderTblHead();
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const bodyTextArr = ["Jayda Fortney", "3", "Large", "20"]
    bodyTextArr.forEach(function(text) {
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
    TBL.appendChild(table);
  }

  export {renderTbl, renderTblHead};

  //As of now, I have no additional questions about modules. As I continue to work with them on my own, however, I am sure questions will arise. If so, I may try to ask these questions in my discussion post.