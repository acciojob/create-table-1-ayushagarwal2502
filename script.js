function insert_Row() {
   const table=document.getElementById("sampleTable");
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.innerText = "New Cell1";
    td2.innerText = "New Cell2";
    tr.appendChild(td1);
    tr.appendChild(td2);
   table.insertBefore(tr, table.childNodes[0]);
}
