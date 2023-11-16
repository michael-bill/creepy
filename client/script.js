var audio = document.getElementById('audio');
var info = document.getElementById('info');
var btnEnter = document.getElementById('btnEnter');
var img = document.getElementById('image');
var anime = document.getElementById('anime');

btnEnter.onclick = function () {
    btnEnter.style.display = 'none';
    anime.style.display = 'none';
    img.style.display = 'block';
    info.style.display = 'block';
    setTimeout(()=>{info.style.top = '45%'}, 300);
    audio.play();
}