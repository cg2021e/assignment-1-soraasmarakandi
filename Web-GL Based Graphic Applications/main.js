function main() {
  /**
   * @type {HTMLCanvasElement} canvas
   */
  var canvas = document.getElementById("myCanvas");

  /**
   * @type {WebGLRenderingContext} gl
   */
  var gl = canvas.getContext("webgl");
  if (!gl) {
    console.log("Browser only support experimental WebGl");
    gl = canvas.getContext("experimental-webgl");
  }

  var vertices = [
    -0.8970983278839,-0.2306594179722,0.30,0.15,0.00,
    -0.8859610932061,-0.2492214757685,0.30,0.15,0.00,
    -0.8602835799211,-0.2696397393445,0.30,0.15,0.00,
    -0.8336779637464,-0.2835612826918,0.30,0.15,0.00,
    -0.8070723475717,-0.2937704144797,0.30,0.15,0.00,
    -0.7721138053886,-0.2999577670785,0.30,0.15,0.00,
    -0.7337522192761,-0.3036701786378,0.30,0.15,0.00,
    -0.6864189718955,-0.3033608110078,0.30,0.15,0.00,
    -0.643416871334,-0.2977921936689,0.30,0.15,0.00,
    -0.6165018875293,-0.2885111647708,0.30,0.15,0.00,
    -0.5898962713546,-0.272424048014,0.30,0.15,0.00,
    -0.5721635529332,-0.2560657168448,0.30,0.15,0.00,
    -0.5641687158035,-0.2436769708792,0.30,0.15,0.00,
    -0.5604974377354,-0.2280618449701,0.30,0.15,0.00,
    -0.5644121312161,-0.2138011758617,0.30,0.15,0.00,
    -0.5797912841762,-0.1956258132725,0.30,0.15,0.00,
    -0.6,-0.18,0.30,0.15,0.00,
    -0.6200567028352,-0.1707395475735,0.30,0.15,0.00,
    -0.6429856217938,-0.1634694025379,0.30,0.15,0.00,
    -0.6677217310358,-0.157964784262,0.30,0.15,0.00,
    -0.6930296651468,-0.154987380249,0.30,0.15,0.00,
    -0.7257811092906,-0.1527543272392,0.30,0.15,0.00,
    -0.7574160269294,-0.1531265027408,0.30,0.15,0.00,
    -0.7875622425617,-0.1568482577571,0.30,0.15,0.00,
    -0.8162197561875,-0.1628030657832,0.30,0.15,0.00,
    -0.8426442168034,-0.1709909268192,0.30,0.15,0.00,
    -0.8668356244096,-0.1829005428714,0.30,0.15,0.00,
    -0.8869331014978,-0.1966710364319,0.30,0.15,0.00,
    -0.8986451660336,-0.2155004041052,0.30,0.15,0.00,

    -0.8986451660336,-0.2155004041052,0.31,0.11,0.05,
    -0.9101707604635,-0.2464414593939,0.31,0.11,0.05,
    -0.9045533798566,-0.2727246915477,0.31,0.11,0.05,
    -0.8880739038538,-0.2961418321068,0.31,0.11,0.05,
    -0.865223637221,-0.3148252854125,0.31,0.11,0.05,
    -0.8261093572788,-0.3325678453863,0.31,0.11,0.05,
    -0.7844885526555,-0.3435995446303,0.31,0.11,0.05,
    -0.7451925307318,-0.3469500720317,0.31,0.11,0.05,
    -0.7025835041281,-0.3484286186961,0.31,0.11,0.05,
    -0.6541947041997,-0.3429176720376,0.31,0.11,0.05,
    -0.6141395309256,-0.3274601387272,0.31,0.11,0.05,
    -0.5799985443094,-0.3051475254268,0.31,0.11,0.05,
    -0.5599709576723,-0.2856575921223,0.31,0.11,0.05,
    -0.5509886098659,-0.263047732636,0.31,0.11,0.05,
    -0.5604974377354,-0.2280618449701,0.31,0.11,0.05,
    -0.5641687158035,-0.2436769708792,0.31,0.11,0.05,
    -0.5721635529332,-0.2560657168448,0.31,0.11,0.05,
    -0.5898962713546,-0.272424048014,0.31,0.11,0.05,
    -0.6165018875293,-0.2885111647708,0.31,0.11,0.05,
    -0.643416871334,-0.2977921936689,0.31,0.11,0.05,
    -0.6864189718955,-0.3033608110078,0.31,0.11,0.05,
    -0.7337522192761,-0.3036701786378,0.31,0.11,0.05,
    -0.7721138053886,-0.2999577670785,0.31,0.11,0.05,
    -0.8070723475717,-0.2937704144797,0.31,0.11,0.05,
    -0.8336779637464,-0.2835612826918,0.31,0.11,0.05,
    -0.8602835799211,-0.2696397393445,0.31,0.11,0.05,
    -0.8859610932061,-0.2492214757685,0.31,0.11,0.05,
    -0.8970983278839,-0.2306594179722,0.31,0.11,0.05,
    -0.8986451660336,-0.2155004041052,0.31,0.11,0.05,

    -0.9037524705602,-0.2327391409588,0.30,0.15,0.00,
    -0.9203887008347,-0.2532616538554,0.30,0.15,0.00,
    -0.9282691787624,-0.2717206790833,0.30,0.15,0.00,
    -0.9353815169995,-0.3022021286707,0.30,0.15,0.00,
    -0.936397565319,-0.3265872883406,0.30,0.15,0.00,
    -0.9399537344376,-0.3469082547322,0.30,0.15,0.00,
    -0.936152578283,-0.3671392065962,0.30,0.15,0.00,
    -0.9272087223919,-0.3870908851227,0.30,0.15,0.00,
    -0.9092519650151,-0.4096583503368,0.30,0.15,0.00,
    -0.8781618452475,-0.4348452828068,0.30,0.15,0.00,
    -0.8281815261274,-0.4560967570783,0.30,0.15,0.00,
    -0.7750528404485,-0.4651483109347,0.30,0.15,0.00,
    -0.7262531587879,-0.4690837691332,0.30,0.15,0.00,
    -0.6762728396677,-0.4675095858538,0.30,0.15,0.00,
    -0.6255054289079,-0.4549161196188,0.30,0.15,0.00,
    -0.5841831178243,-0.4360259202663,0.30,0.15,0.00,
    -0.5558478187956,-0.4139873543551,0.30,0.15,0.00,
    -0.5353834361637,-0.3868326927858,0.30,0.15,0.00,
    -0.5298737946859,-0.3726650432715,0.30,0.15,0.00,
    -0.5310544321454,-0.346297473342,0.30,0.15,0.00,
    -0.5326286154248,-0.3144202619346,0.30,0.15,0.00,
    -0.5373511652629,-0.2797882297884,0.30,0.15,0.00,
    -0.5434103193245,-0.2629555397075,0.30,0.15,0.00,
    -0.5568828363514,-0.242983400883,0.30,0.15,0.00,
  ];

  // Buat buffer untuk LinkedList tempat penyimpanan sementara sebelum titik digambar
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  // Mendefinisikan vertexShader dan fragmentShader
  var vertexShaderSource = `
    attribute vec2 aPosition;
    attribute vec3 aColor;
    varying vec3 vColor;
    uniform float uChanged;
    void main(){
        gl_Position = vec4(aPosition.x,aPosition.y + uChanged, 0.0, 1.0);
        vColor = aColor;
    }
  `;

  var fragmentShaderSource = `
    precision mediump float;
    varying vec3 vColor;
    void main(){
        gl_FragColor = vec4(vColor, 1.0);
    }
  `;

  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  gl.shaderSource(fragmentShader, fragmentShaderSource);

  //Compile Shader
  gl.compileShader(vertexShader);
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error("ERROR compiling vertex shader!", gl.getShaderInfoLog(vertexShader));
    return;
  }

  gl.compileShader(fragmentShader);
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.error("ERROR compiling fragment shader!", gl.getShaderInfoLog(fragmentShader));
    return;
  }

  // attach shader ke program grafika
  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  // link program ke program utama
  gl.linkProgram(shaderProgram);
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error("ERROR validating program!", gl.getProgramInfoLog(shaderProgram));
    return;
  }

  gl.validateProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  //Dapatkan lokasi positon dari shader untuk diolah
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
  gl.enableVertexAttribArray(aPosition);

  var aColor = gl.getAttribLocation(shaderProgram, "aColor");
  gl.vertexAttribPointer(aColor, 3, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aColor);

  //Waktunya NGGAMBARR
  var speed = 0.0197;
  var change = 0;
  var uChange = gl.getUniformLocation(shaderProgram, "uChanged");
  function render() {
    // change += 1;
    // gl.uniform1f(uChange, change);
    // gl.clearColor(1.0, 1.0, 1.0, 1.0); //Kasih BackGround dengan putih
    // gl.clear(gl.COLOR_BUFFER_BIT);

    // gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    if (change >= 0.5 || change < -0.5) speed = -speed;
    change += speed;
    gl.uniform1f(uChange, change);

    gl.clearColor(0.0, 0.1, 0.15, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_FAN, 58, 24);
    gl.drawArrays(gl.TRIANGLE_FAN, 29, 29);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 29);
  }
  setInterval(render, 1000 / 60);
}
