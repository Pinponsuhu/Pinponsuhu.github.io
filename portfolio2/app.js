

function load() {
  var s = document.getElementById("movieName").value;
  var link = "http://www.omdbapi.com/?t=" + s + "&apikey=ea41da5c";
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(result) {
      
      var len = 10;
      for(var i = 0; i >= len; i++){
        var mainSec = document.getElementById('mainSec');
        var resultSec = document.createElement('div');
        var movieImg = document.createElement('img');
        var nP = document.createElement('p');
        var movieType = document.createElement('p');
        movieImg.id = 'newsimg';
        nP.id = 'titles';
        resultSec.id = 'resultSec';
        movieType.id = 'movieType';
        movieType.innerHTML = result.Search.Type;
        movieImg.style.backgroundImage = "url('" + result.Search.Poster + ")'";
        nP.innerHTML = result.Search.Title;
        resultSec.appendChild(movieImg);
        resultSec.appendChild(nP);
        resultSec.appendChild(movieType);
        mainSec.appendChild(resultSec);
        document.getElementById("resultSec").style.display = "none";
      }
      })
    .catch(error => console.log('error', error));
}

function search(){
  if(document.getElementById("movieName").value != ""){
    document.getElementById("mainSec").style.marginTop = "78px";

  }
  else{
    document.getElementById("errModal").style.display = "block";
    }
}
function clsModal(){
  document.getElementById("errModal").style.display ="none";
}