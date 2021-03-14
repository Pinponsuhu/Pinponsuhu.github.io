function formdisp(){
    document.getElementById('forms').style.display = 'block';
    document.getElementById('addbtn').style.display = 'none';
}
function insure(){
  var insure =  document.getElementById('insureType').value;
      switch (insure) {
          case '2':
            document.getElementById('Car').style.display = 'none';
              document.getElementById('life').style.display = 'block';
              document.getElementById('Property').style.display = 'none';
              document.getElementById('Medical').style.display = 'none';
              break;
          case '3':
            document.getElementById('life').style.display = 'none';
            document.getElementById('Car').style.display = 'none';
            document.getElementById('Property').style.display = 'none';
            document.getElementById('Medical').style.display = 'block';
                break;
          case '4':
            document.getElementById('life').style.display = 'none';
            document.getElementById('Medical').style.display = 'none';
            document.getElementById('Car').style.display = 'none';
            document.getElementById('Property').style.display = 'block';
                    break;
          case '5':
            document.getElementById('Property').style.display = 'none';
            document.getElementById('Medical').style.display = 'none';
            document.getElementById('life').style.display = 'none';
            document.getElementById('Car').style.display = 'block';
                        break;
          
      }
  
}