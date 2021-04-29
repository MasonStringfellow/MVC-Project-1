function tableCreate() {
    //body reference 
    var body = document.getElementsByTagName("body")[0];
  
    // create elements <table> and a <tbody>
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // cells creation
    // for (var j = 0; j <= 2; j++) {
      // table row creation
    var header = document.createElement("tr");
  
    //   for (var i = 0; i < 3; i++) {
        // create element <td> and text node 
        //Make text node the contents of <td> element
        // put <td> at end of the table row
    var cell = document.createElement("td");
    var cellText = document.createTextNode("UVU ID");
    var cell2 = document.createElement("td");
    var cell2Text = document.createTextNode("Name");
    var cell3 = document.createElement("td");
    var cell3Text = document.createTextNode("Gender");
    
    cell.appendChild(cellText);
    cell2.appendChild(cell2Text);
    cell3.appendChild(cell3Text);

    header.appendChild(cell);
    header.appendChild(cell2);
    header.appendChild(cell3);
    //   }
  
      //row added to end of table body
    tblBody.appendChild(header);
    // }
  
    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    body.appendChild(tbl);
    // tbl border attribute to 
    tbl.setAttribute("id", "studentTable")
    tbl.setAttribute("class", "styled-table")
    header.setAttribute("id", "table-header")
  }