var array = [
  ["Location #1", "Date #1", "Time #1"],
  ["Location #2", "Date #2", "Time #2"]
];


function showButtonClick() {
  $('.box').toggleClass('box-visible');
}

window.onload = function() {
  var table = document.createElement("TABLE");
  var tableHeader1 = document.createElement("TH");
  var textHeader1 = document.createTextNode("Location");
  tableHeader1.appendChild(textHeader1);
  table.appendChild(tableHeader1);
  var tableHeader2 = document.createElement("TH");
  var textHeader2 = document.createTextNode("Date");
  tableHeader2.appendChild(textHeader2);
  table.appendChild(tableHeader2);
  var tableHeader3 = document.createElement("TH");
  var textHeader3 = document.createTextNode("Time");
  tableHeader3.appendChild(textHeader3);
  table.appendChild(tableHeader3);
  for (var i = 0; i < array.length; i++) {
    var node = document.createElement("TR");
    var row = array[i];
    for (var j = 0; j < row.length; j++)
    {
      var rowNode = document.createElement("TD");
      var textData = document.createTextNode(row[j]);
      rowNode.appendChild(textData);
      node.appendChild(rowNode);
    }
    table.appendChild(node);
  }
}
