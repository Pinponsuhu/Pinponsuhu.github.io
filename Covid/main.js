function getTime() {
  var tym = new Date();
  var month = tym.getMonth();
  var wMonth = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"]
  var fullTime = wMonth[month] + " " + tym.getDate() + " " + tym.getFullYear();
  document.getElementById('time').innerHTML = fullTime;
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://covidnigeria.herokuapp.com/api", requestOptions)
    .then(response => response.json())
    .then(function(result){document.getElementById('total').innerHTML = result.data.totalConfirmedCases;
    document.getElementById('DesedNo').innerHTML=result.data.death;
    document.getElementById('rcredNo').innerHTML=result.data.discharged;
    document.getElementById('rcrdigits').innerHTML = result.data.death + result.data.discharged;
    })
    .catch(error => console.log('error', error));
}