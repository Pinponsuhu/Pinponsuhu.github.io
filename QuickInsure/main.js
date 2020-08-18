$(document).ready(function() {
  $("#nav-display").hide();
  $(".login-sec").hide();
  $(".signUp-sec").hide();
});
$("#nav-btn").click(function() {

  $("#nav-display").toggle('slow');
});

$(".lgn-cls").click(function() {
  $(".login-sec").hide('slow');
});
$(".login").click(function() {
  $(".login-sec").show('slow');
});
$(".dAcct").click(function(){
  $(".signUp-sec").show('slow');
  $(".login-sec").hide('slow');
});
$(".signUp").click(function(){
  $(".signUp-sec").show('slow');
});
$(".sign-cls").click(function(){
  $(".signUp-sec").hide('slow');
});
$(".service-sec1").hover(function() {
  $(".service-sec1 i").css({"color":"#FFFFFF","background":"#12174B" })
},
function(){
  $(".service-sec1 i").css({"color":"#12174B","background":"#FFFFFF" })
}
);
$(".service-sec2").hover(function() {
  $(".service-sec2 i").css({ "color": "#FFFFFF", "background": "#12174B" })
},
function() {
  $(".service-sec2 i").css({ "color": "#12174B", "background": "#FFFFFF" })
}
);
$(".service-sec3").hover(function() {
    $(".service-sec3 i").css({ "color": "#FFFFFF", "background": "#12174B" })
  },
  function() {
    $(".service-sec3 i").css({ "color": "#12174B", "background": "#FFFFFF" })
  }
);
$(".service-sec4").hover(function() {
    $(".service-sec4 i").css({ "color": "#FFFFFF", "background": "#12174B" })
  },
  function() {
    $(".service-sec4 i").css({ "color": "#12174B", "background": "#FFFFFF" })
  }
);
$(".service-sec5").hover(function() {
    $(".service-sec5 i").css({ "color": "#FFFFFF", "background": "#12174B" })
  },
  function() {
    $(".service-sec5 i").css({ "color": "#12174B", "background": "#FFFFFF" })
  }
);