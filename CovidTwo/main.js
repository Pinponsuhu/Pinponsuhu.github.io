function nav() {
  var btn = document.getElementById('nav-btn');
  var disp = document.getElementById('nav-disp');
  if (btn.innerText == '≡') {
    btn.innerText = '×';
    disp.style.display = 'block';
  }
  else {
    btn.innerText = '≡';
    disp.style.display = 'none';
  }
}

function states() {
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://covidnigeria.herokuapp.com/api", requestOptions)
    .then(response => response.json())
    .then(function(result) {
      for (var i = 0; i <= 35; i++) {

        var sec = document.createElement('TR');
        var subsec1 = document.createElement('TD');
        var subsec2 = document.createElement('TD');
        var subsec3 = document.createElement('TD');
        var subsec4 = document.createElement('TD');
        var d = 'd';
        var uu = document.getElementById('details');
        sec.id = 'head';
        subsec1.id = 'sub1'
        subsec1.innerText = result.data.states[i].state;
        subsec2.innerText = result.data.states[i].casesOnAdmission;
        subsec3.innerText = result.data.states[i].discharged;
        subsec4.innerText = result.data.states[i].death;
        uu.appendChild(sec);
        sec.appendChild(subsec1);
        sec.appendChild(subsec2);
        sec.appendChild(subsec3);
        sec.appendChild(subsec4);

      }
    })
    
}

function first() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://covidnigeria.herokuapp.com/api", requestOptions)
    .then(response => response.json())
    .then(function(result) {
      document.getElementById('TCR').innerText = result.data.totalConfirmedCases;
      document.getElementById('TD').innerText = result.data.death;
      document.getElementById('AC').innerText = result.data.totalActiveCases;
      document.getElementById('TT').innerText = result.data.totalSamplesTested;
    })
}

function openStates() {
  document.getElementById('states').style.display = 'block';
  document.getElementById('home').style.display = 'none';
  
}
function about(){
  var abt = document.getElementById('about');
  abt.style.height = '370px';
  abt.style.width = '86%';
  abt.style.overflowY = 'scroll';
  abt.style.padding = '16px 16px';
}
function cancel(){
  var abt = document.getElementById('about');
  abt.style.height = '0';
  abt.style.width = '0';
  abt.style.padding = '0';
}
function cancel2(){
  var atn1 = document.getElementById('states');
  atn1.style.display = 'none';
  document.getElementById('home').style.display = 'block';
}