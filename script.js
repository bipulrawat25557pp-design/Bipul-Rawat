// Download button
let downloadBtn = document.getElementById("downloadBtn");

downloadBtn.onclick = function(){
alert("Download will start soon 🎮");
};


// Play buttons
let playButtons = document.querySelectorAll(".playBtn");

playButtons.forEach(function(button){
button.onclick = function(){
alert("Launching game...");
};
});