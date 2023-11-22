//To-do List 

var uList = document.querySelector('#list');
var input = document.querySelector('#input-box');
var add = document.querySelector('#add');


add.addEventListener('click', () => {
    let text = document.createElement("span");
    text.innerText = input.value;


   
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    let list = document.createElement("li");

    var del = document.createElement("input");
    del.type = "button";
    del.value = "x";
    


    if (input.value == ''){
        alert("Please add a task");
    }else{
    list.append(checkbox);
    list.append(text);
    list.append(del);
  
    
    uList.append(list);
    }
    input.value = '';

    del.addEventListener('click', () => {
        list.remove();
    });

    checkbox.addEventListener('click', () => {
        if (checkbox.checked == true){
            text.style.textDecoration = 'line-through';
        }else if (checkbox.checked == false){
            text.style.textDecoration = 'none';
        }
    });
    
}

);

function saveData() {
    localStorage.setItem("data", list.innerHTML);    
};

function showTask() {
    list.innerHTML = localStorage.getitem("data");
};