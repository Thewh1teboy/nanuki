document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio();
    audio.src = './1.mp3';
    audio.loop = true; 
    audio.autoplay = false; 
    audio.controls = true;
    function playBackgroundMusic() {
        audio.play(); 
        playButton.disabled = true; 
    }
    playBackgroundMusic()
});