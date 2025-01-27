
const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    if(localStorage.getItem("notes")){
    noteContainer.innerHTML = localStorage.getItem("notes");
    }
}
 showNotes();

function updatestorage(){
    localStorage.setItem("notes",noteContainer.innerHTML);
}

createBtn.addEventListener("click", ()=> {

    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "photos/delete.png";
    inputbox.appendChild(img)
    noteContainer.appendChild(inputbox);
    updatestorage();
    
});


noteContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
       e.target.parentElement.remove();
       updatestorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelector(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updatestorage();
            }
        })
    }
   })

   document.addEventListener("keydown",event =>{
    if(event.key == "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
   })