const content = script =>
    `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Signature Pad demo</title>
  <meta name="description" content="Signature Pad - HTML5 canvas based smooth signature drawing using variable width spline interpolation.">

  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">

  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

  <style>
    body {
      font-family: Helvetica, Sans-Serif;
    
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
    
    .m-signature-pad {
      position: absolute;
      font-size: 10px;
      width: 700px;
      height: 400px;
      top: 50%;
      left: 50%;
      margin-left: -350px;
      margin-top: -200px;
    }
    
    
    .m-signature-pad--body {
      position: absolute;
      left: 20px;
      right: 20px;
      top: 20px;
      bottom: 60px;
      border: 1px solid #f4f4f4;
    }
    
    .m-signature-pad--body
      canvas {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    
    @media screen and (max-width: 1024px) {
      .m-signature-pad {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: auto;
        height: auto;
        min-width: 250px;
        min-height: 140px;
        margin: 0;
      }
      #github {
        display: none;
      }
    }
    
    @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      .m-signature-pad {
        margin: 10%;
      }
    }
    
    @media screen and (max-height: 320px) {
      .m-signature-pad--body {
        left: 0;
        right: 0;
        top: 0;
        bottom: 32px;
      }
    }
    <%style%>
    </style>
</head>
<body onselectstart="return false">
  <div id="signature-pad" class="m-signature-pad">
    <div class="m-signature-pad--body">
      <canvas></canvas>
    </div>
  </div>

  <script>
    ${script}
  </script>
</body>
</html>`;

export default content;
