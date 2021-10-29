window.onload = function () {
  const canvas = document.querySelector("#my-canvas");
  const ctx = canvas.getContext("2d");
    window.contxt = ctx;

  ctx.fillStyle = "#FF0000";
  // x position, y position, width, height
  ctx.fillRect(10, 10, 100, 50);
  ctx.lineWidth = 2;
  // ctx.strokeStyle = '#0F0F0F';
  ctx.strokeRect(9, 9, 102, 52);

  ctx.beginPath();
  ctx.arc(200, 200, 50, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(1200, 1000);
  ctx.lineTo(1200, 100);
  ctx.lineTo(200, 100);
  ctx.lineTo(700, 200);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  ctx.fillStyle = '#00FF00';
  ctx.lineWidth = 10;
  ctx.lineJoin = 'bevel';
//   ctx.lineJoin = 'butt';
  ctx.font = '40pt "Comic Sans MS"';
  ctx.textAlign = 'center';
  ctx.strokeText('Hello and Welcome to world of Canvas!!', canvas.width/2, canvas.height/4 *3); 
  ctx.fillText('Hello and Welcome to world of Canvas!!', canvas.width/2, canvas.height/4 *3);
  ctx.lineWidth = 2;
  ctx.fillText('Hello and Welcome to world of Canvas!!', canvas.width/2, canvas.height/5 *3);
  ctx.strokeText('Hello and Welcome to world of Canvas!!', canvas.width/2, canvas.height/5 *3); 
};
