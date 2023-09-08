// dom nodes
const btn = document.querySelector("button");
const input = document.querySelector("input");
const root = document.getElementById("root");

// model
const STUDENTS = [];

// functions
function addStudent() {
  const studentObj = {
    name: input.value,
    isPassed: false,
  };
  STUDENTS.push(studentObj);
  render(STUDENTS);
  input.value = "";
}

function handleDelete(index) {
  STUDENTS.splice(index, 1);
  render(STUDENTS);
}

function handlePass(index) {
    const status = STUDENTS[index].isPassed;
    STUDENTS[index].isPassed = !status;
    render(STUDENTS);
}

function editHandler (index) {
  const editBtn = document.querySelectorAll(".edit")
  
  if(editBtn[index].innerHTML === "edit"){
    editBtn[index].innerHTML = 'done'
    input.value = STUDENTS[index].name
    
  } else{
    editBtn[index].innerHTML = 'edit'
    const studentObj = {
      name: input.value,
      isPassed: STUDENTS[index].isPassed,
    };
    STUDENTS.splice(index , 1 , studentObj)
    input.value = ""
    render(STUDENTS)
  }
}


// view
function render(list) {
  const template = list.map((item, index) => {
    return `<li class="shadow-md shadow-neutral-800 m-2 rounded-lg flex flex-wrap items-center justify-around">
                    <span class='${item.isPassed ? 'text-green-400 w-4/12' : 'text-red-400 w-4/12'}'>${item.name}</span>

                    <button onclick="handleDelete(${index})" class='p-2 my-2'>Delete</button>

                    <button onclick="handlePass(${index})" class='${item.isPassed ? " p-2 my-2 bg-green-500 rounded-lg" : "p-2 my-2 bg-red-600 rounded-lg"}'>${item.isPassed ? 'fail' : 'pass'}</button>
                    
                    <button class='edit' onclick="editHandler(${index})">edit</button>
                </li>`;
  });
  root.innerHTML = STUDENTS.length === 0 ? "nothing to show ❗" :  template.join("");
}

// events
btn.addEventListener("click", addStudent);
render(STUDENTS)
