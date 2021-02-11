function loaded(){
    document.getElementById("paraOne").style.display = "none";
    document.getElementById("paraTwo").style.display = "none";
    document.getElementById("paraThree").style.display = "none";
    document.getElementById("paraFour").style.display = "none";
    document.getElementById("navLinks").style.display = "none";
    document.getElementById("closeBtn").style.display = "none";   
    document.getElementById("countOne").style.display = "none";   
    document.getElementById("countTwo").style.display = "none";   
}
function navDisp(){
    document.getElementById("navLinks").style.display = "block";
    document.getElementById("openNav").style.display = "none";
    document.getElementById("closeBtn").style.display = "block";
}
function navClose(){
    document.getElementById("navLinks").style.display = "none";
    document.getElementById("openNav").style.display = "block";
    document.getElementById("closeBtn").style.display = "none";
}
function accordionOne(){
    var count = parseInt(document.getElementById("countOne"));
    var count2 = parseInt(document.getElementById("countTwo"));
    if(count = 1){
    document.getElementById("paraOne").style.display = "block";
}
  else if(count2 = 2){
        document.getElementById("paraOne").style.display = "none";
    }
}
function accordionTwo(){
    document.getElementById("paraTwo").style.display = "block"
}