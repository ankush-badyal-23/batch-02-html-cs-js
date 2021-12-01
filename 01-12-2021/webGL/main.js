onload = () => {
  const canvas = document.getElementById("myCanvas");
  const gl = canvas.getContext('webgl2');
  // gl.clearColor(1, 0.5, 0.5,1);
  // gl.clear(gl.COLOR_BUFFER_BIT);
  //
  let vertices = [0.0, 0.9, -0.5, -0.4, 0.5, 0.0];
  let vertex_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  let vertCode = `attribute vec2 coordinates;
  void main(void){
    gl_Position = vec4(coordinates, 0.0, 1.0);
  }`;
  let vertShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertShader, vertCode);
  gl.compileShader(vertShader);

  let fragCode = `void main(void) { gl_FragColor = vec4(0.0,0.5,0.0,1.0);}`;
  let fragShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragShader, fragCode);
  gl.compileShader(fragShader);

  let shaderProg = gl.createProgram();
  gl.attachShader(shaderProg, vertShader);
  gl.attachShader(shaderProg, fragShader);

  gl.linkProgram(shaderProg);

  gl.useProgram(shaderProg);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
  let coord = gl.getAttribLocation(shaderProg, 'coordinates');
  gl.vertexAttribPointer(coord, 2, gl.FLOAT, false,0, 0);
  gl.enableVertexAttribArray(coord);

  gl.clearColor(1, 0.5, 0.5,1);
  gl.enable(gl.DEPTH_TEST);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.viewport(0,0, canvas.width, canvas.height);
  gl.drawArrays(gl.TRIANGLES,0, 3);
};