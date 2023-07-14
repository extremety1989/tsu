import './style.css'
import * as THREE from "three"
import {FilesetResolver, HandLandmarker} from "@mediapipe/tasks-vision"
import sphereVertexShader from "./shaders/sphereVertex.glsl"
import sphereFragmentShader from "./shaders/sphereFragment.glsl"
import atmosphereFragmentShader from "./shaders/atmosphereFragment.glsl"
import atmosphereVertexShader from "./shaders/atmosphereVertex.glsl"


const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;
const video = document.getElementById("video");

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.07, 1000)
camera.position.z = 8
const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)
const raycaster = new THREE.Raycaster();
raycaster.params.Points.threshold = 0.1;
const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), 
                              new THREE.ShaderMaterial({
                                vertexShader: sphereVertexShader,
                                fragmentShader: sphereFragmentShader,
                                uniforms: {
                                  globeTexture: {
                                    value: new THREE.TextureLoader().load("./img/globe2.jpeg")
                                  }
                                }
                              }))
scene.add(sphere)
const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), 
                              new THREE.ShaderMaterial({
                                vertexShader: atmosphereVertexShader,
                                fragmentShader: atmosphereFragmentShader,
                                blending: THREE.AdditiveBlending,
                                side: THREE.BackSide
                              }))

atmosphere.scale.set(1.1, 1.1, 1.1)
scene.add(atmosphere)



if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

// Some browsers partially implement mediaDevices. We can't just assign an object
// with getUserMedia as it would overwrite existing properties.
// Here, we will just add the getUserMedia property if it's missing.
if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = function(constraints) {

    // First get ahold of the legacy getUserMedia, if present
    var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    // Some browsers just don't implement it - return a rejected promise with an error
    // to keep a consistent interface
    if (!getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
    }

    // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
    return new Promise(function(resolve, reject) {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  }
}



let handLandmarker = undefined;

const createHandLandmarker = async () => {
    const vision = await FilesetResolver.forVisionTasks("./wasm");

    handLandmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `./hand_landmarker.task`,
        delegate: "GPU"
      },
      runningMode: "CAMERA",
      numHands: 2,
      min_hand_detection_confidence: 0.9,
      min_hand_presence_confidence: 0.9,
      min_tracking_confidence: 0.9
    });
    if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {};
    }
    
    // Some browsers partially implement mediaDevices. We can't just assign an object
    // with getUserMedia as it would overwrite existing properties.
    // Here, we will just add the getUserMedia property if it's missing.
    if (navigator.mediaDevices.getUserMedia === undefined) {
      navigator.mediaDevices.getUserMedia = function(constraints) {
    
        // First get ahold of the legacy getUserMedia, if present
        var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    
        // Some browsers just don't implement it - return a rejected promise with an error
        // to keep a consistent interface
        if (!getUserMedia) {
          return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        }
    
        // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
        return new Promise(function(resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      }
    }
    // Check if webcam access is supported.
    const hasGetUserMedia = () => !!navigator.mediaDevices?.getUserMedia;

    if (hasGetUserMedia()) {
      enableCam()
    } else {
      alert("getUserMedia() is not supported by your browser");
    }
};

createHandLandmarker();

function enableCam() {
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: 'user'
    },
  }).then(async (stream) => {
    await handLandmarker.setOptions({ runningMode: "VIDEO" });
    video.srcObject = stream;
    video.addEventListener("loadeddata", animate);
  }).catch(()=>{
    alert("You need webcamera!")
  })
}

function calculateDistance(point1, point2) {
  const deltaX = point2.x - point1.x;
  const deltaY = point2.y - point1.y;
  const deltaZ = point2.z - point1.z;
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2 + deltaZ ** 2);
  return distance;
}

const canvas = document.getElementsByName("canvas")
async function drawCircle(x, y, size, color = 'red', fill= false, alpha = 1) {
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    if(size <=0){
      size=1;
    }
    ctx.arc(x, y, size, 0, 2 * Math.PI, false);
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    if(fill){
      ctx.fillStyle = color;
      ctx.fill();
    }
    ctx.stroke();
    ctx.globalAlpha = 1.0;
  }
  console.log("drawing");
}

let pinch_occurs = 0
let both_pinch_occurs = 0
function processResults(results) {
  if (results.landmarks.length > 0) {
    const numHands = results.landmarks.length;
    const handednesses = results.handednesses
    if(numHands === 2){
      const thumbTip1 = results.landmarks[0][4];
      const indexTip1 = results.landmarks[0][8];
      
      const thumbTip2 = results.landmarks[1][4];
      const indexTip2 = results.landmarks[1][8];

    if(calculateDistance(thumbTip1, indexTip1) < 0.07 && calculateDistance(thumbTip2, indexTip2) < 0.07){
      if(both_pinch_occurs > 0){
        console.log("both pinch");
        both_pinch_occurs = 0
      }
      both_pinch_occurs++
    }

    }else{
      const thumbTip = results.landmarks[0][4];
      const indexTip = results.landmarks[0][8];
      if(calculateDistance(thumbTip, indexTip) < 0.07){
        if(pinch_occurs > 0){
            //here Right is left hand...
          if(handednesses[0][0].categoryName === "Right"){
            
            if(clicked_mouse_down === false){
              simulateMouseEvent(indexTip.x, indexTip.y)
            }
            console.log("left pinch");
            simulateMouseEvent(indexTip.x, indexTip.y, "mousemove")
          }else{
            if(clicked_mouse_down === false){
              simulateMouseEvent(indexTip.x, indexTip.y)
            }
            console.log("right pinch");
            simulateMouseEvent(indexTip.x, indexTip.y, "mousemove")
          }
          pinch_occurs = 0
        }
        pinch_occurs++
      }else{
        if(clicked_mouse_down === true){
          simulateMouseEvent(indexTip.x, indexTip.y, "mouseup")
        }
      }
    }
  }
}

let lastVideoTime = -1;
function animate() {
  const startTimeMs = performance.now();
  if (video.currentTime !== lastVideoTime) {
    const detections = handLandmarker.detectForVideo(video, startTimeMs);
    processResults(detections);
    lastVideoTime = video.currentTime;
  }
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

function simulateMouseEvent(x, y, type="mousedown") {
  // adapted from https://developer.mozilla.org/es/docs/Web/API/MouseEvent
  let evt = new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    view: window,
    clientX: x * 1000,
    clientY: y * 1000
  });
  let canceled = !renderer.domElement.dispatchEvent(evt);
}

let clicked_mouse_down = false

addEventListener("mousedown", (event) => {
  clicked_mouse_down = true
  lastMove[0] = event.clientX;
  lastMove[1] = event.clientY;
})

addEventListener("mouseup", (event) => {
  clicked_mouse_down = false
})

let lastMove = [innerWidth / 2, innerHeight / 2];
addEventListener("mousemove", (event) => {
  if(clicked_mouse_down){
    const moveX = ( event.clientX - lastMove[0]);
    const moveY = ( event.clientY - lastMove[1]);
    sphere.rotation.y -= ( moveX * .0009);
    sphere.rotation.x += ( moveY * .0009);
    sphere.updateMatrix()
  }
  lastMove[0] = event.clientX;
  lastMove[1] = event.clientY;
})