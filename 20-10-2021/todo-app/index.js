const input = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-task");
const list = document.querySelector("#task-list");

window.onload = function () {
  const data = getList();
  bindClickEvent();
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
  const taskSpan = document.createElement('span');
  const delSpan = document.createElement('span');
  delSpan.classList.add('del-task');
  delSpan.innerHTML = '&#9760;'
  taskSpan.classList.add('task');
  taskSpan.innerText = value;
  item.append(taskSpan, delSpan);
  list.append(item);
  saveList(list.innerHTML);
  input.value = "";
  input.focus();
});

function bindClickEvent() {
  list.addEventListener("click", function(e) {
    if(e.target.classList.contains('task')) {
      e.target.classList.toggle('checked');
    } else if(e.target.classList.contains('del-task')) {
      e.target.parentElement.remove();
    }
    saveList(list.innerHTML);
  });
}

function saveList(list) {
  localStorage.setItem("todo-list", list);
}

function getList() {
  return localStorage.getItem("todo-list");
}
