import './style.css'
import * as THREE from "three"
import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision"
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
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.getElementById("canvas") })

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

const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50),
  new THREE.ShaderMaterial({
    vertexShader: atmosphereVertexShader,
    fragmentShader: atmosphereFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
  }))

window.addEventListener("load", () => {
  renderer.setSize(innerWidth, innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  camera.lookAt(scene.position);
  scene.add(sphere)
  atmosphere.scale.set(1.1, 1.1, 1.1)
  scene.add(atmosphere)
})

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}, false);

if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
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
    navigator.mediaDevices.getUserMedia = function (constraints) {

      // First get ahold of the legacy getUserMedia, if present
      var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      // Some browsers just don't implement it - return a rejected promise with an error
      // to keep a consistent interface
      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
      }

      // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
      return new Promise(function (resolve, reject) {
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
    animate()
  }).catch(() => {
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

let pinch_occurs = 0
let both_pinch_occurs = 0
let diff = 0
let old_diff = 0
let left_hand = false
let right_hand = false
let both_hands = false
function processResults(results) {
  if (results.landmarks.length > 0) {
    const numHands = results.landmarks.length;
    const handednesses = results.handednesses
    if (numHands === 2) {
      left_hand = true
      right_hand = true
      both_hands = true
      //right
      const thumbTip1 = results.landmarks[0][4];
      const indexTip1 = results.landmarks[0][8];
      //left
      const thumbTip2 = results.landmarks[1][4];
      const indexTip2 = results.landmarks[1][8];
      document.getElementById("dot").style.opacity = 0

      //both hand pinch
      if (calculateDistance(thumbTip1, indexTip1) < 0.07 && calculateDistance(thumbTip2, indexTip2) < 0.07) {
        if (both_pinch_occurs > 0) {

          diff = calculateDistance(thumbTip1, thumbTip2) || calculateDistance(indexTip2, indexTip1)

          both_pinch_occurs = 0
        }

        both_pinch_occurs++
      }

    } else {

      left_hand = true
      right_hand = true
      both_hands = false


      const thumbTip = results.landmarks[0][4];
      const indexTip = results.landmarks[0][8];


      if (calculateDistance(thumbTip, indexTip) < 0.07) {
        if (pinch_occurs > 0) {
          document.getElementById("dot").style.opacity = 100
          //here Right is left hand...
          if (handednesses[0][0].categoryName === "Right") {
            left_hand = true
            right_hand = false
            if (clicked_mouse_down === false) {
              simulateMouseEvent(indexTip.x, indexTip.y)
            }

            //  console.log("left pinch");
            simulateMouseEvent(indexTip.x, indexTip.y, "mousemove")
          } else {
            left_hand = false
            right_hand = true
            if (clicked_mouse_down === false) {
              simulateMouseEvent(indexTip.x, indexTip.y)
            }

            //    console.log("right pinch");
            simulateMouseEvent(indexTip.x, indexTip.y, "mousemove")
          }
          pinch_occurs = 0
        }
        pinch_occurs++
      } else {

        if (document.getElementById("dot").style.opacity === "100") {
          document.getElementById("dot").style.opacity = 0
        }
        if (clicked_mouse_down === true) {
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

function simulateMouseEvent(x, y, type = "mousedown") {
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

let lastMove = [innerWidth / 2, innerHeight / 2];
let lastPosition = [innerWidth / 2, innerHeight / 2];

let clicked_mouse_down = false

addEventListener("mousedown", (event) => {
  if (right_hand) {
    if (!clicked_mouse_down) {
      clicked_mouse_down = true
    }
    lastMove[0] = event.clientX;
    lastMove[1] = event.clientY;
  } else if (left_hand) {
    if (!clicked_mouse_down) {
      document.getElementById("dot2").style.opacity = 100
      clicked_mouse_down = true
    }
  }
}, false)

addEventListener("mouseup", (event) => {
  if (clicked_mouse_down) {
    document.getElementById("dot2").style.opacity = 0
    clicked_mouse_down = false
  }

}, false)


let posX = 0
let posY = 0
addEventListener("mousemove", (event) => {
  if (right_hand) {
    if (clicked_mouse_down) {
      const moveX = (event.clientX - lastMove[0]);
      const moveY = (event.clientY - lastMove[1]);

      sphere.rotation.y -= (moveX * .0009);
      sphere.rotation.x += (moveY * .0009);
      sphere.updateMatrix()
    }
    lastMove[0] = event.clientX;
    lastMove[1] = event.clientY;

  } else if (left_hand) {

    if (clicked_mouse_down) {
      //animate tsunami ?

      const newX = (event.clientX - 10);
      const newY = (event.clientY - 10);
      posX += 0.01

      document.getElementById("dot2").style = "transform:translate3d(" + newX + "px," + newY + "px,0px);"
    }
    lastPosition[0] = event.clientX;
    lastPosition[1] = event.clientY;

  }
}, false)