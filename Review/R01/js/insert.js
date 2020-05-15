var btnInsert = document.getElementById("btnInsert");
btnInsert.onclick = function () {
  var divContent = document.getElementById("content");
  var para = "";
  for(var i=0; i<4;i++){
    para += '<div class="video">';
    para += '<img src="http://bit.ly/35fYIrl">';
    para += '<p>Taylor swift song</p>';
    para += '</div>';
  }
  divContent.innerHTML += para;  // in ra
}
