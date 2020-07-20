console.log('Hello World!');

function hover1() {
  document.getElementById('i-box').style.backgroundColor = '#12174C';
  document.getElementById('fafa').style.color = '#FFFFFF';
  document.getElementById('title').style.color = '#E47A4F';
}

function hovero1() {
  document.getElementById('i-box').style.backgroundColor = '#ffffff';
  document.getElementById('fafa').style.color = '#12174C';
  document.getElementById('title').style.color = '#000000'
}

function hover2() {
  document.getElementById('i-box2').style.backgroundColor = '#12174C';
  document.getElementById('fafa2').style.color = '#FFFFFF';
  document.getElementById('title2').style.color = '#E47A4F';
}

function hovero2() {
  document.getElementById('i-box2').style.backgroundColor = '#ffffff';
  document.getElementById('fafa2').style.color = '#12174C';
  document.getElementById('title2').style.color = '#000000'
}

function hover3() {
  document.getElementById('i-box3').style.backgroundColor = '#12174C';
  document.getElementById('fafa3').style.color = '#FFFFFF';
  document.getElementById('title3').style.color = '#E47A4F';
}

function hovero3() {
  document.getElementById('i-box3').style.backgroundColor = '#ffffff';
  document.getElementById('fafa3').style.color = '#12174C';
  document.getElementById('title3').style.color = '#000000'
}

function hover4() {
  document.getElementById('i-box4').style.backgroundColor = '#12174C';
  document.getElementById('fafa4').style.color = '#FFFFFF';
  document.getElementById('title4').style.color = '#E47A4F';
}

function hovero4() {
  document.getElementById('i-box4').style.backgroundColor = '#ffffff';
  document.getElementById('fafa4').style.color = '#12174C';
  document.getElementById('title4').style.color = '#000000';
}

function hover5() {
  document.getElementById('i-box5').style.backgroundColor = '#12174C';
  document.getElementById('fafa5').style.color = '#FFFFFF';
  document.getElementById('title5').style.color = '#E47A4F';
}

function hovero5() {
  document.getElementById('i-box5').style.backgroundColor = '#ffffff';
  document.getElementById('fafa5').style.color = '#12174C';
  document.getElementById('title5').style.color = '#000000';
}

function hover6() {
  document.getElementById('i-box6').style.backgroundColor = '#12174C';
  document.getElementById('fafa6').style.color = '#FFFFFF';
  document.getElementById('title6').style.color = '#E47A4F';
}

function hovero6() {
  document.getElementById('i-box6').style.backgroundColor = '#ffffff';
  document.getElementById('fafa6').style.color = '#12174C';
  document.getElementById('title6').style.color = '#000000';
}

function autochange(){
  var images = [];
  images[0] = 'bj.jpg';
  images[1] = 'pepe.jpg';
  var timeout = 2000;
  var sets = document.getElementById('picSet').src = images;
  for(var i = 0; i< images.length;i++){
    sets.style.src = images[i];
  }
}
function menu(){
 var navv = document.getElementById('nav-display');
 var navbtn = document.getElementById('nav-btn');
 if(navbtn.innerText == '≡'){
   navv.style.display = 'block';
   navbtn.innerText = '×';
 }
 else{
   navv.style.display = 'none';
   navbtn.innerText = '≡';
 }
}
function menu2(){
  var pageView = document.getElementById('page-view');
  var i = 1;
    
    if(i%2 > 0){
      pageView.style.display = 'block';
      i++;
    }
}