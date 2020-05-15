// Get the Modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if(event.target == modal) {
      modal.style.display = "none";
    }
}

function showVideo(videoId) {
  var videoFrame = document.getElementById("video-frame");
  var videoTitle = document.getElementById("video-title");
  videoFrame.src = "https://www.youtube.com/embed/" + videoId;
  modal.style.display = "block";
}

var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=taylor%20swift&maxResults=25&part=snippet&key=AIzaSyCX43iXf_okAmgfMV_xEf9FXv2t2yV74vU"


var xhr = new XMLHttpRequest();
xhr.open("GET", YOUTUBE_API, true);
xhr.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    console.log("Success");
  } else if(this.readyState == 4) {
    console.log("Fails");
  }
};
xhr.send();
