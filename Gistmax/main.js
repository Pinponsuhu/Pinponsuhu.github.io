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

/*function load() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://newsapi.org/v2/top-headlines?country=ng&apiKey=24ecea763ea844c9a5d9c1f69fc75c66", requestOptions)
    .then(response => response.json())
    .then(function(result) {
      document.getElementById('newsimg').src = result.articles[0].urlToImage;
      document.getElementById('titles').innerHTML = result.articles[0].title;
      document.getElementById('date').innerHTML = result.articles[0].publishedAt;

      let i = document.getElementById('news').length;

      console.log(i);

    })
    .catch(error => console.log('error', error));
}*/
function load() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://newsapi.org/v2/top-headlines?country=ng&apiKey=24ecea763ea844c9a5d9c1f69fc75c66", requestOptions)
    .then(response => response.json())
    .then(function(result) {
      var i;
      for (i = 0; i <= 9; i++) {
        var news = document.getElementById('news');
        var all = document.getElementById('content');
        console.log(news.length);
        var nNews = document.createElement('li');
        var nImg = document.createElement('img');
        var nP = document.createElement('p');
        var nDate = document.createElement('span');
        var nTime = document.createElement('span');
        nImg.src = result.articles[i].urlToImage;
        nDate.innerHTML = 'Loading...';
        nDate.id = 'date';
        nTime.id = 'time';
        nTime.innerHTML = result.articles[i].publishedAt;
        nP.innerHTML = result.articles[i].title;
        nImg.id = 'newsimg';
        nP.id = 'titles';
        nNews.className = 'news';
        all.appendChild(nNews);
        nNews.appendChild(nImg);
        nNews.appendChild(nP);
        nNews.appendChild(nDate);
        nNews.appendChild(nTime);
      }
    })
    .catch(error => console.log('error', error));
}