function setMultipleAttributes(element, attributes) {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function appendChildren(parent, listToAppend) {
  for (let i = 0; i < listToAppend.length; i++) {
    parent.appendChild(listToAppend[i]);
  }
}

function clearPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

export {
  setMultipleAttributes, 
  appendChildren,
  clearPage
};