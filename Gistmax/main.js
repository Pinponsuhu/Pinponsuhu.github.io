function opennav() {
  document.getElementById("navcls").style.width = "70%";
  document.getElementById("nav").style.display = "none";
  document.getElementById("cls").style.display = "block";
  console.log('daddy the father');
}

function cls() {
  document.getElementById("navcls").style.width = "0%";
  document.getElementById("nav").style.display = "block";
  document.getElementById("cls").style.display = "none";
}


function load() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://newsapi.org/v2/top-headlines?country=ng&apiKey=24ecea763ea844c9a5d9c1f69fc75c66", requestOptions)
    .then(response => response.json())
    .then(function(result) {
      var i;
      for (i = 0; i <= 11; i++) {
        var body = document.getElementById('body');
        var all = document.getElementById('content');
        var nNews = document.createElement('li');
        var nImg = document.createElement('img');
        var nP = document.createElement('p');
        var nDate = document.createElement('span');
        var nTime = document.createElement('span');
        nImg.id = 'newsimg';
        nP.id = 'titles';
        nDate.id = 'date';
        nNews.className = 'news';
        nTime.id = 'time';
        nImg.src = result.articles[i].urlToImage;
        nTime.innerHTML = result.articles[i].publishedAt;
        nP.innerHTML = result.articles[i].title;
        nNews.appendChild(nImg);
        nNews.appendChild(nP);
        nNews.appendChild(nDate);
        nNews.appendChild(nTime);
        all.appendChild(nNews);
        body.appendChild(all);
      }
    })
    .catch(error => console.log('error', error));
}