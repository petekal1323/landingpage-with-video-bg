var video_list = ["img/Beach.mp4", "img/Very-Slow-Bokeh.mp4", "img/Road-candies.mp4"];
var video_index = 0;
var video_player = null;

function onload(){
  console.log("body loaded");
  video_player = document.getElementById('videos');
  video_player.setAttribute("src", video_list[video_index]);
  video_player.play();
}

function onVideoEnded(){
  console.log("video ended");
  if (video_index < video_list.length -1) {
    video_index++;
  } else {
    video_index = 0;
  }
  video_player.setAttribute("src", video_list[video_index]);
  video_player.play();
}

msieversion();

function msieversion(){
  var sUserAgn = navigator.userAgent;

  if (sUserAgn.indexOf("Trident") > -1){
    console.log("You're using IE (aka: Internet Exploder) the worst browser ever!");
    $("#videos").hide();
    $(".img").show();
  }
  else {
    console.log('Anything is better than IE');
    $("#videos").show();
    $(".img").hide();
  }
  return false;
}
