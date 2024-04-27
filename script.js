const inputs = document.querySelectorAll("input");
const myLibrary =[];
function Book(title, author,page,statu){
    this.title = title;
    this.author = author;
    this.statu = statu;
    this.page = page;
}
function addBookToLibrary(book){
 myLibrary.push(book);
}
function handleFocus(e){
    console.log("ho"); 
    e.target.previousElementSibling.classList.add("when-input-focused")
}
function handlerFocusOut(e){
    if(!e.target.value){
            e.target.previousElementSibling.classList.remove("when-input-focused");
    }
}
function attachEventListnerToInputElement(){
    for(let i = 0 ; i < inputs.length ;i++){
        inputs[i].addEventListener("focus",handleFocus);
        inputs[i].addEventListener("focusout",handlerFocusOut);
    }

}
const tbody = document.querySelector("tbody");
attachEventListnerToInputElement();
const submitButton = document.querySelector(".submit");
function renderLib(){
    let trList = [];
    for (let index = 0; index < myLibrary.length; index++) {
        let tr = document.createElement("tr");

        tr.style.display = 'flex';
        tr.classList.add("tr-style");
        Object.values(myLibrary[index]).forEach((e)=>{
            let td = document.createElement("td");
            td.textContent = e;
            td.classList.add("td-style")
            tr.appendChild(td);
        })  
        let td = document.createElement("td");
        let button = document.createElement("button");
        button.textContent = 'delte';
        button.style.backgroundColor = "red";
        button.style.color ='white';
        button.style.width = '100px';
        button.style.height = '1.5rem'

        td.appendChild(button);
        td.classList.add("td-style");
        tr.appendChild(td);
        trList.push(tr);
       
    }
    trList.forEach((e)=>tbody.appendChild(e));

}
function handleSubmiting(e){
    e.preventDefault();
  let title = inputs.item(0).value;
  let author = inputs.item(1).value;;
  let page =   inputs.item(2).value;;
  let statu =  inputs.item(3).checked;;
  addBookToLibrary(new Book(title,author,page,statu));
  renderLib();
}
submitButton.addEventListener("click",handleSubmiting);