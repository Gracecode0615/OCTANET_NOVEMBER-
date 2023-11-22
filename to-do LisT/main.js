// time //
var date = new Date();
document.getElementById("datetime").innerHTML = date.toLocaleString();


const inputbox = document.getElementById("input-box");
const list = document.getElementById("listing");


// const newToDo = document.createElement('li');
// if (inputbox.value === '') {
//         alert("You must write something!");
//     } 
// else {
//     // newToDo.innerText = "hey";
//     newToDo.innerHTML = inputbox.value;
//     listing.appendChild(li);

//     // Adding to local storage;
//     savelocal(toDoInput.value);

function addTask(){
    if(inputbox.value === ''){
        alert('You must write something!');
            saveData();

    }
        else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
            saveData();

    }
    inputbox.value ="";
    saveData();
}
list.addEventListener("click", function(e){
   if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
   } 
   else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
   }
}, false); 

function saveData() {
    localStorage.setItem("data", list.innerHTML);
    
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}

// }

// function addItemToDom() {
//     const li = document.createElement('li');
//     li.setAttribute("input-box", inputbox );
//     li.innerText = listing;
//     ul.appendChild(li);
// }