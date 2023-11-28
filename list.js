function saveList() {
  const listName = document.getElementById('listName').value;
  if (listName) {
    const existingLists = JSON.parse(localStorage.getItem('allLists')) || [];
    if (!existingLists.includes(listName)) {
      existingLists.push(listName);
      localStorage.setItem('allLists', JSON.stringify(existingLists));
    }
    updateListDisplay();
  }
}

function addItem() {
  const listName = document.getElementById('listName').value;
  const newItemInput = document.getElementById('newItem');
  const newItem = newItemInput.value;

  if (listName && newItem) {
    const list = JSON.parse(localStorage.getItem(listName)) || [];
    list.push(newItem);
    localStorage.setItem(listName, JSON.stringify(list));
    updateDisplay(listName);

    // Clear the newItem input field after adding the item
    newItemInput.value = '';
  }
}

function clearList() {
  const listName = document.getElementById('listName').value;
  if (listName) {
    localStorage.setItem(listName, JSON.stringify([]));
    updateDisplay(listName);
  }
}

function deleteList() {
  const listName = document.getElementById('listName').value;
  if (
    listName &&
    confirm("Are you sure you want to delete the list '" + listName + "'?")
  ) {
    // Remove the list from local storage
    localStorage.removeItem(listName);

    // Update the list of all lists
    const existingLists = JSON.parse(localStorage.getItem('allLists')) || [];
    const updatedLists = existingLists.filter(name => name !== listName);
    localStorage.setItem('allLists', JSON.stringify(updatedLists));

    // Clear the input fields and update the display
    document.getElementById('listName').value = '';
    document.getElementById('newItem').value = '';
    updateListDisplay();
    updateDisplay(listName);
  }
}

function updateDisplay(listName) {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';
  const list = JSON.parse(localStorage.getItem(listName)) || [];
  list.forEach((item, index) => {
    let li = document.createElement('li');
    li.innerText = item;
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function () {
      list.splice(index, 1);
      localStorage.setItem(listName, JSON.stringify(list));
      updateDisplay(listName);
    };
    li.appendChild(deleteButton);
    itemList.appendChild(li);
  });
}

function updateListDisplay() {
  const lists = JSON.parse(localStorage.getItem('allLists')) || [];
  const listsDisplay = document.getElementById('savedLists');
  listsDisplay.innerHTML = '';

  lists.forEach(listName => {
    let li = document.createElement('li');
    li.innerText = listName;
    li.onclick = function () {
      selectList(listName);
    };
    listsDisplay.appendChild(li);
  });
}

function selectList(listName) {
  document.getElementById('listName').value = listName;
  updateDisplay(listName);
}

// Make sure to call updateListDisplay when the page loads to show existing lists
document.addEventListener('DOMContentLoaded', updateListDisplay);
