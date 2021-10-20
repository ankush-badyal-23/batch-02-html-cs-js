const input = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-task");
const list = document.querySelector("#task-list");

window.onload = function () {
  const data = getList();
  if (data) {
    list.innerHTML = data;
  }
};

addBtn.addEventListener("click", function () {
  const value = input.value;
  if (!value) {
    return;
  }
  const item = document.createElement("li");
  item.innerText = value;
  list.appendChild(item);
  saveList(list.innerHTML);
  input.value = "";
  input.focus();
});

function saveList(list) {
  localStorage.setItem("todo-list", list);
}

function getList() {
  return localStorage.getItem("todo-list");
}
