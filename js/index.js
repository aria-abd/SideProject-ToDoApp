const TODOS = [
  {
    title: "Shopping",
    isDone: false,
  },
  {
    title: "Running",
    isDone: true,
  },
  {
    title: "Sleeping",
    isDone: false,
  },
];

const root = document.getElementById("root");

const input = document.getElementById("input");

const addbtn = document.getElementById("addbtn");

let isEditingMode = false;
let getIndex;

const handleClick = (index) => {
  TODOS[index].isDone
    ? (TODOS[index].isDone = false)
    : (TODOS[index].isDone = true);
  render();
};

const handleDelete = (index) => {
  // console.log(index);
  TODOS.splice(index, 1);
  render();
};

const handleEdit = (index) => {
  isEditingMode = true;
  getIndex = index;
  input.value = TODOS[index].title;
  render();
};
const handleAdd = () => {
  if (isEditingMode) {
    //edit
    TODOS[getIndex].title = input.value;
    isEditingMode = false;
  } else {
    //create
    if (input.value === "") {
      render();
    } else {
      const todoObject = {
        title: input.value,
        isDone: false,
      };
      TODOS.push(todoObject);
    }
  }
  input.value = "";
  render();
};

function render() {
  const template = TODOS.map((todo, index) => {
    return `<li class="${todo.isDone ? "redd" : "greenn"}">
    ${todo.title}
    <div>
    <button onClick="handleClick(${index})"> ${
      todo.isDone ? "In Progress" : "Done"
    }</button>
    <button onClick="handleDelete(${index})">DELETE</button>
    <button onClick="handleEdit(${index})">Edit</button></div>
    </li>`;
  });
  root.innerHTML = template.join("");
}

render();
