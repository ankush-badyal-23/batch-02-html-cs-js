onload = function () {
  const s1 = new Howl({
    src: [
      "https://archive.org/download/md_music_super_street_fighter_ii_the_new_challengers/07%20-%20Ryu%27s%20Theme%20-%20Yoko%20Shimomura.mp3",
    ],
    sprite: {
        blast: [0, 3000],
        laser: [4000, 1000],
        winner: [6000, 15000]
      },
    volume:0.1,
    xhr:{
        onProgress:function(e) {
            console.log('progress', e);
        }
    }
  });
  document.querySelector("#play").onclick = function () {
    s1.play('winner');
  };
  document.querySelector("#stop").onclick = function () {
    s1.stop();
  };
};
