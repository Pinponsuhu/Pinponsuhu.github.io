function view(){
  document.getElementById("ipt2").style.display="none";
  document.getElementById("ipt").style.display="block";
}
function view2 (){
  document.getElementById("ipt").style.display="none";
  document. getElementById("ipt2").style.display="block";
}
function myfxn(){
  var lol = document.getElementById('inpt2').value;
  var answer= (5/9)*(lol-32);
  if (lol == ''){
    document.getElementById('gg').innerHTML='No number entered';
  }
  else{
  document.getElementById('gg').innerHTML = 'Answer is: ' + answer+'°C';
  }
}
function myfxn2(){
 var lol2 = document.getElementById('inpt').value;
  var answer2 = (1.8 * lol2) + 32;
  if (lol2 == "") {
    document. getElementById("gg2").innerHTML ="No number entered";
  }
  else{
    document.getElementById("gg2").innerHTML= "Answer is: " + answer2 +"°F";
  }
}