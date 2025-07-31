function setMultipleAttributes(element, attributes) {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function appendChildren(parent, listToAppend) {
  for (let i = 0; i < listToAppend.length; i++) {
    console.log(`trying to append: ${listToAppend[i]}`)
    parent.appendChild(listToAppend[i]);
    console.log(`Appended: ${listToAppend[i]}`);
  }
}

export {
  setMultipleAttributes, 
    appendChildren
};