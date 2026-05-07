console.log("SPOTIFY");

let songIndex = 1;
let audioElement = new Audio('oo maahi.mp3');

let m1play = document.getElementById("m1play");
let myprogressBar = document.getElementById("myprogressBar")
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('song-name'));
let songs = [
  { songName: "O Mahi", filePath: "oo maahi.mp3", coverPath: "images/pritam1.jpeg" },
  { songName: "O TUM KYA MILE", filePath: "tum kya mile.mp3", coverPath: "images/pritam2.jpeg" },
  { songName: "Ve Kameley", filePath: "ve kamleya.mp3", coverPath: "images/pritam2.jpeg" },
  { songName: "Tum se hi", filePath: "tum se hi.mp3", coverPath: "images/4pritam.jpeg" },
  { songName: "KESARIYA", filePath: "kesariya.mp3", coverPath: "images/pritam 5.jpeg" },




]

m1play.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    m1play.classList.remove("fa-circle-play");
    m1play.classList.add("fa-pause-circle")

  }
  else {
    audioElement.pause();
    m1play.classList.remove("fa-pause-circle");
    m1play.classList.add("fa-circle-play");

  }

})

// const makeAllPlays = () => {
//   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.classList.remove('fa-pause-circle');
//     element.classList.add('fa-play-circle');
//   })
// }


audioElement.addEventListener('timeupdate', () => {

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressBar.value = progress
})
myprogressBar.addEventListener("change", () => {
  audioElement.currentTime = myprogressBar.value * audioElement.duration / 100;
})




Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    m1play.classList.remove('fa-play-circle');
    m1play.classList.add('fa-pause-circle');
  })
})

document.getElementById('next').addEventListener('click', () => {
  if (songIndex >= 4) {
    songIndex = 0
  }
  else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  m1play.classList.remove('fa-play-circle');
  m1play.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
  if (songIndex <= 0) {
    songIndex = 0
  }
  else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  m1play.classList.remove('fa-play-circle');
  m1play.classList.add('fa-pause-circle');
})

