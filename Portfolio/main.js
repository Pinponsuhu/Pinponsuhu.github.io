function load() {
  document.getElementById('hide').style.display='none';
  document.getElementById('navBar').style.display='none';
  document.getElementById('skills-sec').style.display='none';
  document.getElementById('see-less1').style.display='none';
}
function seeMore1(){
  document.getElementById('skills-sec').style.display='block';
   document.getElementById('see-less1').style.display='block';
   document.getElementById('see-more1').style.display='none';
}
function seeLess1(){
  document.getElementById('see-more1').style.display='block';
  
  document.getElementById('skills-sec').style.display='none';
  document.getElementById('see-less1').style.display='none'
}
function showNav(){
  document.getElementById('navBar').style.display='block';
    document.getElementById('show').style.display='none';
      document.getElementById('hide').style.display='block';
        document.getElementById('hide').style.fontSize='30px';
          document.getElementById('hide').style.top='2%';
}
function hideNav(){
  document.getElementById('navBar').style.display = 'none';
  document.getElementById('show').style.display = 'Block';
  document.getElementById('hide').style.display = 'none';
}
function fbk() {
  // body...
  window.scrollTo(0,400);
}