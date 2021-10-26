const playlist = [
    {name:"Ryu", src:"https://archive.org/download/md_music_super_street_fighter_ii_the_new_challengers/07%20-%20Ryu%27s%20Theme%20-%20Yoko%20Shimomura.mp3"},
    {name:"Ken", src:"https://archive.org/download/md_music_super_street_fighter_ii_the_new_challengers/12%20-%20Ken%27s%20Theme%20-%20Yoko%20Shimomura.mp3"},
    {name:"Chun li", src:"https://archive.org/download/md_music_super_street_fighter_ii_the_new_challengers/13%20-%20Chun%20Li%27s%20Theme%20-%20Yoko%20Shimomura.mp3"},
    {name:"E. Honda", src:"https://archive.org/download/md_music_super_street_fighter_ii_the_new_challengers/08%20-%20E%20Honda%27s%20Theme%20-%20Yoko%20Shimomura.mp3"},
    {name:"M. Bison", src:"https://archive.org/download/md_music_super_street_fighter_ii_the_new_challengers/25%20-%20M%20Bison%27s%20Theme%20-%20Yoko%20Shimomura.mp3"}
]



const audioPlayer = document.createElement('audio');
const mainDiv = document.querySelector('#main');
mainDiv.style.display = 'none';
const playlistDiv = document.querySelector('#playlist');
playlistDiv.onclick = function(e) {
    console.log("list clicked", e.target.id)
    if(e.target.id.includes('song_')){
        const songIndex = e.target.id.split("_")[1];
        audioPlayer.src = playlist[songIndex].src;
        audioPlayer.play();
    }
}
playlist.forEach((song, index) => {
    const li = document.createElement('li');
    li.innerHTML = song.name;
    li.id = `song_${index}`;
    playlistDiv.appendChild(li);
});
audioPlayer.oncanplaythrough = function(e){
    console.log('e', e);
    mainDiv.style.display = 'block';
}
audioPlayer.src = playlist[0].src;
document.querySelector('#play').onclick = function(){
    
    audioPlayer.play();
}

document.querySelector('#stop').onclick = function() {
    audioPlayer.pause();
}