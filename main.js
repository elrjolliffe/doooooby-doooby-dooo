// document.getElementById("divId").addEventListener("click", someFunction);

// function someFunction(event) {
//   console.log(event.target.id);
// }

// x.play('FM Bass FM Slap C1.wav')
// let mySound = document.getElement
// mySound.play()

// playSound('https://www.youtube.com/watch?v=lFFyyDXgZpc&ab_channel=KinoCheck.com')
const dobby = document.createElement("IMG")
dobby.src = 'https://media4.giphy.com/media/EULFnEfOvgRbgKz4D2/giphy.gif?cid=0165a076byg3lciz591ni2ekxafiygauym74cwvt71g7inqs&rid=giphy.gif&ct=s'
// dobby.setAttribute('style','position: sticky')
// // dobby.setAttribute('style','top: 50%')
// // dobby.setAttribute('style','left: 50%')
// dobby.setAttribute('style','transform: translate(-50%,-50%)')
// dobby.setAttribute('style','-ms-transform: translate(-50%,-50%)')

// dobby.style.position = 'sticky';
dobby.style.position = 'absolute';

let direction = 0

document.addEventListener('mousedown', function dobbyClick(event) {
    dobby.style.top = event.clientY - 50 + 'px';
    dobby.style.left = event.clientX - 50 + 'px';
    direction === 350 ? direction = 0 : direction += 10;
    dobby.style.transform = `rotate(${direction}deg)`
});

document.addEventListener('keydown', function dobbyClick(event) {
    dobby.style.top = event.clientY - 50 + 'px'
    dobby.style.left = event.clientX - 50 + 'px'
    direction === 350 ? direction = 0 : direction += 10;
    dobby.style.transform = `rotate(${direction}deg)`
});

const audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
audio.setAttribute('autoplay','false')
audio.setAttribute('type','audio / MPEG')
document.addEventListener('keydown', function () {
    audio.play();
    document.body.appendChild(dobby);
});
document.addEventListener('keyup', function () {
    audio.pause()
    document.body.removeChild(dobby);
});
document.addEventListener('mousedown', function () {
    audio.play();
    document.body.appendChild(dobby);
});
document.addEventListener('mouseup', function () {
    audio.pause();
    document.body.removeChild(dobby);
});




