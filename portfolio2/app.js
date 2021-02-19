

function load() {
  var a = document.getElementById("searchField").value;
  var link = "http://www.omdbapi.com/?t=" + a + "&apikey=ea41da5c"
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(result) {

        var mainSec = document.getElementById('mainSec');
        
        var nImg = document.createElement('img');
        var nP = document.createElement('p');
        var nP2 = document.createElement('p');
        nImg.id = 'newsimg';
        nP.id = 'titles';
        nImg.className = 'w-64 h-56 object-fill mx-auto mb-6 mt-12';
        nP.className = 'text-2xl text-center';
        nP2.className = 'text-lg text-center px-4';
        nImg.src = result.Poster;
        nP.innerHTML = result.Title;
        nP2.innerHTML = result.Plot;
        mainSec.appendChild(nImg);
        mainSec.appendChild(nP);
        mainSec.appendChild(nP2);
  
        document.getElementById("resultSec").style.display = "none";
    })
    .catch(error => console.log('error', error));
}