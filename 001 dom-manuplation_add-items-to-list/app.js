const text = document.querySelector(".title");
const changetitle = document.querySelector(".changetitle");

changetitle.addEventListener('click', ()=>{text.classList.toggle("change")})

const userList = document.querySelector(".name-list ");
const inputList = document.querySelector(".input-text");
const addListBtn = document.querySelector(".add-list-btn");


addListBtn.addEventListener('click',()=>{
    //create an li 
    //Add the input value  inside that new li
    //Attach the li to the new list
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(inputList.value);
    newLi.appendChild(liContent);
    userList.appendChild(newLi);
    inputList.value="";
})