// window.onload = function () {
//   loadItems();
// };

// function addItem() {
//   var categoryInput = document.getElementById("category");
//   var nameInput = document.getElementById("name");
//   var addressInput = document.getElementById("address");

//   var category = categoryInput.value;
//   var name = nameInput.value;
//   var address = addressInput.value;

//   if (category && name && address) {
//     var container = document.getElementById("container");
//     var box = document.createElement("div");
//     box.className = "box";
//     box.innerHTML = `
//           <span>Category: ${category}</span>
//           <span>Name: ${name}</span>
//           <span>Address: ${address}</span>
//           <div class="actions">
//             <button onclick="toggleChecked(this)"><i class="fas fa-check"></i></button>
//             <button onclick="deleteItem(this)"><i class="fas fa-trash-alt"></i></button>
//           </div>
//         `;
//     container.appendChild(box);

//     // Save items to local storage
//     saveItems();

//     // Clear input fields after adding an item
//     categoryInput.value = "";
//     nameInput.value = "";
//     addressInput.value = "";
//   }
// }

// function toggleChecked(button) {
//   var box = button.parentElement.parentElement;
//   box.classList.toggle("checked");

//   // Save items to local storage after checking/unchecking
//   saveItems();
// }

// function deleteItem(button) {
//   var box = button.parentElement.parentElement;
//   box.remove();

//   // Save items to local storage after deletion
//   saveItems();
// }

// function saveItems() {
//   var container = document.getElementById("container");
//   var items = container.innerHTML;
//   localStorage.setItem("items", items);
// }

// function loadItems() {
//   var container = document.getElementById("container");
//   container.innerHTML = localStorage.getItem("items") || "";
// }
//anither

//

document.addEventListener("DOMContentLoaded", function () {
  loadItems("food");
});

function addItem() {
  var categoryInput = document.getElementById("category");
  var nameInput = document.getElementById("name");
  var addressInput = document.getElementById("address");

  var category = categoryInput.value;
  var name = nameInput.value;
  var address = addressInput.value;

  if (category && name && address) {
    var container = document.getElementById("container");
    var box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `
          <span>Category: ${category}</span>
          <span>Name: ${name}</span>
          <span>Address: ${address}</span>
          <div class="actions">
            <button onclick="toggleChecked(this)"><i class="fas fa-check"></i></button>
            <button onclick="deleteItem(this)"><i class="fas fa-trash-alt"></i></button>
          </div>
        `;
    container.appendChild(box);

    // Save item to local storage
    saveItem("food", { name, address });

    // Clear input fields after adding an item
    categoryInput.value = "";
    nameInput.value = "";
    addressInput.value = "";
  }
}

function toggleChecked(button) {
  var box = button.parentElement.parentElement;
  box.classList.toggle("checked");
}

function deleteItem(button) {
  var box = button.parentElement.parentElement;
  box.remove();

  // Remove item from local storage
  var category = box.querySelector("span").innerText.split(":")[1].trim();
  removeItem("food", box.querySelector("span:nth-child(2)").innerText.trim());
}

function saveItem(category, item) {
  var items = JSON.parse(localStorage.getItem(category)) || [];
  items.push(item);
  localStorage.setItem(category, JSON.stringify(items));
}

function removeItem(category, itemName) {
  var items = JSON.parse(localStorage.getItem(category)) || [];
  var updatedItems = items.filter((item) => item.name !== itemName);
  localStorage.setItem(category, JSON.stringify(updatedItems));
}

function loadItems(category) {
  var container = document.getElementById("container");
  var items = JSON.parse(localStorage.getItem(category)) || [];

  items.forEach(function (item) {
    var box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `
          <span>Category: ${category}</span>
          <span>Name: ${item.name}</span>
          <span>Address: ${item.address}</span>
          <div class="actions">
            <button onclick="toggleChecked(this)"><i class="fas fa-check"></i></button>
            <button onclick="deleteItem(this)"><i class="fas fa-trash-alt"></i></button>
          </div>
        `;
    container.appendChild(box);
  });
}
