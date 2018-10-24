var video_list = ["img/Beach.mp4", "img/Drip_coffee.mp4", "img/Road-candies.mp4"];
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
