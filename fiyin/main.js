function loaded(){
    document.getElementById("paraOne").style.display = "none";
    document.getElementById("paraTwo").style.display = "none";
    document.getElementById("paraThree").style.display = "none";
    document.getElementById("paraFour").style.display = "none";
    document.getElementById("closeBtn").style.display = "none";   
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
    var show = document.getElementById("showOne");
   if(show.innerHTML == "+"){
       document.getElementById("paraOne").style.display = "block";
     /*  document.getElementById("paraThree").style.display = "none";
     document.getElementById("paraTwo").style.display = "none";
     document.getElementById("paraFour").style.display = "none"; */
       show.innerHTML = "-";
   }
   else{
    document.getElementById("paraOne").style.display = "none";
    show.innerHTML = "+";
   }
}
function accordionTwo(){
    var show = document.getElementById("showTwo");
    if(show.innerHTML == "+"){
        document.getElementById("paraTwo").style.display = "block";
       /* document.getElementById("paraThree").style.display = "none";
     document.getElementById("paraOne").style.display = "none";
     document.getElementById("paraFour").style.display = "none"; */
        show.innerHTML = "-";
    }
    else{
     document.getElementById("paraTwo").style.display = "none";
     show.innerHTML = "+";
    }

}
function accordionThree(){
    var show = document.getElementById("showThree");
    if(show.innerHTML == "+"){
        document.getElementById("paraThree").style.display = "block";
        /*document.getElementById("paraTwo").style.display = "none";
        document.getElementById("paraOne").style.display = "none";
        document.getElementById("paraFour").style.display = "none"; */
        show.innerHTML = "-"; 
    }
    else{
     document.getElementById("paraThree").style.display = "none";
     show.innerHTML = "+";
    }
    if(document.getElementById("paraThree").style.display == "none"){
        show.innerHTML = "+";
    }
}
    function accordionFour(){
        var show = document.getElementById("showFour");
        if(show.innerHTML == "+"){
            document.getElementById("paraFour").style.display = "block";
        /*    document.getElementById("paraThree").style.display = "none";
     document.getElementById("paraTwo").style.display = "none";
     document.getElementById("paraOne").style.display = "none"; */
            show.innerHTML = "-";
        }
        else{
         document.getElementById("paraFour").style.display = "none";
         show.innerHTML = "+";
        }
    }