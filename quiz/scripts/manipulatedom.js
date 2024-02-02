window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createButtonNode(rowNum) {
  let btnNode = document.createElement("button");
  btnNode.textContent = "Edit text";
  btnNode.onclick = function() {
    let parentCell = this.parentNode; // td element
    let txtInput = document.createElement('input');
    txtInput.type = 'text';
    txtInput.value = parentCell.previousSibling.textContent;
    parentCell.previousSibling.textContent = '';
    parentCell.previousSibling.appendChild(txtInput);
    txtInput.focus();
    this.textContent = 'Save';
    this.onclick = function() {
      let newTxt = txtInput.value;
      parentCell.previousSibling.textContent = newTxt;
      parentCell.removeChild(txtInput);
      this.textContent = 'Edit text';
      this.onclick = createButtonNode(rowNum).onclick;
    };
  };
  return btnNode;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let editBtn = createButtonNode(i);
    let col2 = createTDNode(editBtn);
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
