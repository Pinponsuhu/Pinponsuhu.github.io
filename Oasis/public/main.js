function navDisp(){
    if(document.getElementById('navBtn').innerText === '☵'){
        document.getElementById('navBtn').innerText = '⛌';
        document.getElementById('menuSm').style.display = 'block';
    }else{
        document.getElementById('navBtn').innerText = '☵';
        document.getElementById('menuSm').style.display = 'none';
    }
}