function more1() {
  if (document.getElementById('more1').innerHTML == '+') {
    document.getElementById('content1').style.height = '100%';
    document.getElementById('more1').innerHTML = '-';
    document.getElementById('info').style.marginBottom = '325px';
  }
  else if (document.getElementById('more1').innerHTML == '-') {
    document.getElementById('content1').style.height = '40px';
    document.getElementById('more1').innerHTML = '+';
    document.getElementById('info').style.marginBottom = '30px';

  }
}

function more2() {
  if (document.getElementById('more2').innerHTML == '+') {
    document.getElementById('skills').style.display = 'block';
    document.getElementById('skills').style.height = '100%';
    document.getElementById('more2').innerHTML = '-';
    document.getElementById('code').style.marginBottom = '165px';
    document.getElementById('bb').style.display = 'none';
    document.getElementById('ba').display = 'block'
  }
  else if (document.getElementById('more2').innerHTML == '-') {
    document.getElementById('skills').style.display = 'none';
    document.getElementById('skills').style.height = '0';
    document.getElementById('more2').innerHTML = '+';
    document.getElementById('code').style.marginBottom = '25px';
    document.getElementById('bb').style.display = 'block';
    document.getElementById('ba').display = 'none'
  }
}