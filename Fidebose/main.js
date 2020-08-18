function openNav() {
  var navv = document.getElementById('nav-btn');
  var disply = document.getElementById('nav-display');
  if (navv.innerText == '≡') {
    navv.innerText = '×';
    disply.style.width = '80%';
    disply.style.height = 'auto';
    disply.style.padding = '24px';
  }
  else {
    disply.style.width = '0';
    disply.style.height = '0';
    disply.style.padding = '0';
    navv.innerText = '≡';
  }
}