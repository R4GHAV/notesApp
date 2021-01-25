let text = document.querySelector('.text');
let count =0;
let addBtn = document.querySelector('.addBtn');
let yourNotes = document.querySelector('.yourNotes');

addBtn.addEventListener('click', function () {

  if (text.value !='') {
    count+=1;
    var heading=document.querySelector('.head');
    yourNotes.innerHTML+=`<div class="an allNotes${count}"><h3><b>${heading.value}</b></h3><textarea name="name" class="smallText${count}" rows="8" cols="8" readonly></textarea><button type="button"  onClick='delfun(${count})' class= "del${count}"name="button">Delete note</button></div>`
    localStorage.setItem('Note', text.value);
    filling();
  }
  heading.value='';
  text.value='';

});

function filling() {
  let smallText =document.querySelector(`.smallText${count}`);
  var textnode = document.createTextNode(text.value);
  smallText.appendChild(textnode);
};

function delfun(num) {
  let smallText =document.querySelector(`.allNotes${num}`);
  smallText.remove();
}
