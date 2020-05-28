function more1() {
  if (document.getElementById('more1').innerHTML == '+') {
    document.getElementById('content1').style.height = '100%';
    document.getElementById('more1').innerHTML = '-';
    document.getElementById('info').style.marginBottom = '0px';
  }
  else if (document.getElementById('more1').innerHTML == '-') {
    document.getElementById('content1').style.height = '40px';
    document.getElementById('more1').innerHTML = '+';
    
  }
}