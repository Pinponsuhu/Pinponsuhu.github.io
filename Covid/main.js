function getTime() {
  var tym = new Date();
  var month = tym.getMonth();
  var wMonth = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"]
  var fullTime = wMonth[month] + " " + tym.getDate() + " " + tym.getFullYear();
  //document.getElementById('time').innerHTML = fullTime;

  var requestOption = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://covid19ngr.herokuapp.com/api/timelines/", requestOption)
    .then(response => response.json())
    .then(function(result1) {
      document.getElementById('time').innerHTML += result1.data.reverse()[0].date.slice(0,10);
      })
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://covidnigeria.herokuapp.com/api", requestOptions)
    .then(response => response.json())
    .then(function(result) {
      document.getElementById('total').innerHTML = result.data.totalConfirmedCases;
      document.getElementById('nno').innerHTML = parseInt(result.data.totalConfirmedCases) - (parseInt(result.data.death) + parseInt(result.data.discharged));
      document.getElementById('DesedNo').innerHTML = result.data.death;
      document.getElementById('rcredNo').innerHTML = result.data.discharged;
      document.getElementById('rcrdigits').innerHTML = result.data.death + result.data.discharged;
      document.getElementById('Rno').innerHTML = result.data.totalSamplesTested;
    })
    .catch(error => console.log('error', error));
}

function search() {
  var Value = document.getElementById('search').value;
  var val = Value[0].toUpperCase() + Value.slice(1);
  if (val != "") {
    var dis = 'result.data.' + val + '.confirmedCases'
  }
}

function select() {
  document.getElementById
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://covid19project.org.ng/api/endpoints/states", requestOptions)
    .then(response => response.json())
    .then(function(result) {
      var sel = document.getElementById('select').value;
      document.getElementById('total').innerHTML = parseInt(result.Covid19NG[sel - 1].death) + parseInt(result.Covid19NG[sel - 1].recovered) + parseInt(result.Covid19NG[sel - 1].cases);
      document.getElementById('rcredNo').innerHTML = result.Covid19NG[sel - 1].recovered;
      document.getElementById('DesedNo').innerHTML = result.Covid19NG[sel - 1].death;
      document.getElementById('rcrdigits').innerHTML = parseInt(result.Covid19NG[sel - 1].death) + parseInt(result.Covid19NG[sel - 1].recovered);
      document.getElementById('nno').innerHTML = (parseInt(result.Covid19NG[sel - 1].death) + parseInt(result.Covid19NG[sel - 1].recovered) + parseInt(result.Covid19NG[sel - 1].cases)) - (parseInt(result.Covid19NG[sel - 1].death) + parseInt(result.Covid19NG[sel - 1].recovered));
    })
    .catch(error => console.log('error', error));

}