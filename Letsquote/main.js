function load() {
  var requestOption = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch("https://api.quotable.io/random", requestOption)
    .then(response => response.json())
    .then(function(result) {
      document.getElementById('main').innerHTML = result.content;
      document.getElementById('author').innerHTML ='-' + result.author;
    })
    .catch(error => console.log('error', error));
    
}