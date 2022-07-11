console.log("spotify clone")
//variable initialization
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songsArray =[
    {songName: "song1",filePath:"songs/1.mp3",
coverPath:"covers/1.jpg"},
{songName: "song2",filePath:"songs/2.mp3",
coverPath:"covers/2.jpg"},
{songName: "song3",filePath:"songs/3.mp3",
coverPath:"covers/3.jpg"},
{songName: "song4",filePath:"songs/4.mp3",
coverPath:"covers/4.jpg"},
{songName: "song5",filePath:"songs/5.mp3",
coverPath:"covers/5.jpg"},
{songName: "song6",filePath:"songs/6.mp3",
coverPath:"covers/6.jpg"},
{songName: "song7",filePath:"songs/7.mp3",
coverPath:"covers/7.jpg"},
{songName: "song8",filePath:"songs/8.mp3",
coverPath:"covers/8.jpg"},
{songName: "song9",filePath:"songs/9.mp3",
coverPath:"covers/9.jpg"},
{songName: "song10",filePath:"songs/10.mp3",
coverPath:"covers/10.jpg"}
]
//masterSongName = songsArray[0].songName;

songItems.forEach((element , i)=>{
   // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songsArray[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songsArray[i].songName;
})


//audioElement.play()
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
       
      masterPlay.classList.remove('fa-play');
      masterPlay.classList.add('fa-pause');
      gif.style.opacity=1;
     
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
   // console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  //  console.log(progress);
    myProgressBar.value = progress;
})


myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays =() =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        console.log("ha")
    })
}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    //    console.log(e.target);
        makeAllPlays();
       songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
       audioElement.src = `songs/${songIndex+1}.mp3`;
       //console.log(index);
      audioElement.currentTime = 0;
      audioElement.play();
      masterSongName.innerText = songsArray[songIndex].songName;
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-play-circle');
       
    })
})


document.getElementById('prev').addEventListener('click',()=>{
    if(songIndex==0){
        songIndex = 8;
    }
    else
    songIndex -= 1;
   audioElement.src = `songs/${songIndex+1}.mp3`;
   masterSongName.innerText = songsArray[songIndex].songName;
   //console.log(index);
  audioElement.currentTime = 0;
  audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-play-circle');
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex==8){
        songIndex = 0;
    }
    else
    songIndex += 1;
   audioElement.src = `songs/${songIndex+1}.mp3`;
   masterSongName.innerText = songsArray[songIndex].songName;
   //console.log(index);
  audioElement.currentTime = 0;
  audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-play-circle');
})