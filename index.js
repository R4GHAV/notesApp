let text = document.querySelector('.text');
let smallText =document.querySelector('.smallText');
let addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', function () {
  smallText.value = text.value;
  localStorage.setItem('Note', text.value);
  text.value='';
});

