var vt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var St=vt(exports=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const style="";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="154",CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,AlphaFormat=1021,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,LinearEncoding=3e3,sRGBEncoding=3001,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",DisplayP3ColorSpace="display-p3",KeepStencilOp=7680,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,GLSL3="300 es",_SRGBAFormat=1035,WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;class EventDispatcher{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(r)===-1&&s[e].push(r)}hasEventListener(e,r){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(r)!==-1}removeEventListener(e,r){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const i=o.indexOf(r);i!==-1&&o.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let i=0,n=o.length;i<n;i++)o[i].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(_lut[t&255]+_lut[t>>8&255]+_lut[t>>16&255]+_lut[t>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[r&63|128]+_lut[r>>8&255]+"-"+_lut[r>>16&255]+_lut[r>>24&255]+_lut[s&255]+_lut[s>>8&255]+_lut[s>>16&255]+_lut[s>>24&255]).toLowerCase()}function clamp(t,e,r){return Math.max(e,Math.min(r,t))}function euclideanModulo(t,e){return(t%e+e)%e}function lerp(t,e,r){return(1-r)*t+r*e}function isPowerOfTwo(t){return(t&t-1)===0&&t!==0}function floorPowerOfTwo(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function denormalize(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function normalize(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Vector2{constructor(e=0,r=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,s=this.y,o=e.elements;return this.x=o[0]*r+o[3]*s+o[6],this.y=o[1]*r+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this}clampLength(e,r){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(r,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const s=this.dot(e)/r;return Math.acos(clamp(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,s=this.y-e.y;return r*r+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,s){return this.x=e.x+(r.x-e.x)*s,this.y=e.y+(r.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const s=Math.cos(r),o=Math.sin(r),i=this.x-e.x,n=this.y-e.y;return this.x=i*s-n*o+e.x,this.y=i*o+n*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(e,r,s,o,i,n,p,d,l){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,s,o,i,n,p,d,l)}set(e,r,s,o,i,n,p,d,l){const u=this.elements;return u[0]=e,u[1]=o,u[2]=p,u[3]=r,u[4]=i,u[5]=d,u[6]=s,u[7]=n,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,s=e.elements;return r[0]=s[0],r[1]=s[1],r[2]=s[2],r[3]=s[3],r[4]=s[4],r[5]=s[5],r[6]=s[6],r[7]=s[7],r[8]=s[8],this}extractBasis(e,r,s){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const s=e.elements,o=r.elements,i=this.elements,n=s[0],p=s[3],d=s[6],l=s[1],u=s[4],c=s[7],g=s[2],f=s[5],y=s[8],_=o[0],m=o[3],h=o[6],R=o[1],b=o[4],v=o[7],S=o[2],T=o[5],O=o[8];return i[0]=n*_+p*R+d*S,i[3]=n*m+p*b+d*T,i[6]=n*h+p*v+d*O,i[1]=l*_+u*R+c*S,i[4]=l*m+u*b+c*T,i[7]=l*h+u*v+c*O,i[2]=g*_+f*R+y*S,i[5]=g*m+f*b+y*T,i[8]=g*h+f*v+y*O,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],s=e[1],o=e[2],i=e[3],n=e[4],p=e[5],d=e[6],l=e[7],u=e[8];return r*n*u-r*p*l-s*i*u+s*p*d+o*i*l-o*n*d}invert(){const e=this.elements,r=e[0],s=e[1],o=e[2],i=e[3],n=e[4],p=e[5],d=e[6],l=e[7],u=e[8],c=u*n-p*l,g=p*d-u*i,f=l*i-n*d,y=r*c+s*g+o*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=c*_,e[1]=(o*l-u*s)*_,e[2]=(p*s-o*n)*_,e[3]=g*_,e[4]=(u*r-o*d)*_,e[5]=(o*i-p*r)*_,e[6]=f*_,e[7]=(s*d-l*r)*_,e[8]=(n*r-s*i)*_,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,s,o,i,n,p){const d=Math.cos(i),l=Math.sin(i);return this.set(s*d,s*l,-s*(d*n+l*p)+n+e,-o*l,o*d,-o*(-l*n+d*p)+p+r,0,0,1),this}scale(e,r){return this.premultiply(_m3.makeScale(e,r)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,r){return this.premultiply(_m3.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),s=Math.sin(e);return this.set(r,-s,0,s,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,s=e.elements;for(let o=0;o<9;o++)if(r[o]!==s[o])return!1;return!0}fromArray(e,r=0){for(let s=0;s<9;s++)this.elements[s]=e[s+r];return this}toArray(e=[],r=0){const s=this.elements;return e[r]=s[0],e[r+1]=s[1],e[r+2]=s[2],e[r+3]=s[3],e[r+4]=s[4],e[r+5]=s[5],e[r+6]=s[6],e[r+7]=s[7],e[r+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function createElementNS(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const _cache={};function warnOnce(t){t in _cache||(_cache[t]=!0,console.warn(t))}function SRGBToLinear(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function LinearToSRGB(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3=new Matrix3().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),LINEAR_DISPLAY_P3_TO_LINEAR_SRGB=new Matrix3().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function DisplayP3ToLinearSRGB(t){return t.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB)}function LinearSRGBToDisplayP3(t){return t.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB()}const TO_LINEAR={[LinearSRGBColorSpace]:t=>t,[SRGBColorSpace]:t=>t.convertSRGBToLinear(),[DisplayP3ColorSpace]:DisplayP3ToLinearSRGB},FROM_LINEAR={[LinearSRGBColorSpace]:t=>t,[SRGBColorSpace]:t=>t.convertLinearToSRGB(),[DisplayP3ColorSpace]:LinearSRGBToDisplayP3},ColorManagement={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return LinearSRGBColorSpace},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,r){if(this.enabled===!1||e===r||!e||!r)return t;const s=TO_LINEAR[e],o=FROM_LINEAR[r];if(s===void 0||o===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${r}".`);return o(s(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let _canvas;class ImageUtils{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const s=_canvas.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),r=_canvas}return r.width>2048||r.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),r.toDataURL("image/jpeg",.6)):r.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=createElementNS("canvas");r.width=e.width,r.height=e.height;const s=r.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),i=o.data;for(let n=0;n<i.length;n++)i[n]=SRGBToLinear(i[n]/255)*255;return s.putImageData(o,0,0),r}else if(e.data){const r=e.data.slice(0);for(let s=0;s<r.length;s++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[s]=Math.floor(SRGBToLinear(r[s]/255)*255):r[s]=SRGBToLinear(r[s]);return{data:r,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sourceId=0;class Source{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sourceId++}),this.uuid=generateUUID(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let i;if(Array.isArray(o)){i=[];for(let n=0,p=o.length;n<p;n++)o[n].isDataTexture?i.push(serializeImage(o[n].image)):i.push(serializeImage(o[n]))}else i=serializeImage(o);s.url=i}return r||(e.images[this.uuid]=s),s}}function serializeImage(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ImageUtils.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let textureId=0;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,r=Texture.DEFAULT_MAPPING,s=ClampToEdgeWrapping,o=ClampToEdgeWrapping,i=LinearFilter,n=LinearMipmapLinearFilter,p=RGBAFormat,d=UnsignedByteType,l=Texture.DEFAULT_ANISOTROPY,u=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=i,this.minFilter=n,this.anisotropy=l,this.format=p,this.internalFormat=null,this.type=d,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===sRGBEncoding?SRGBColorSpace:NoColorSpace),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),r||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===SRGBColorSpace?sRGBEncoding:LinearEncoding}set encoding(e){warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sRGBEncoding?SRGBColorSpace:NoColorSpace}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,r=0,s=0,o=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=r,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,s,o){return this.x=e,this.y=r,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,s=this.y,o=this.z,i=this.w,n=e.elements;return this.x=n[0]*r+n[4]*s+n[8]*o+n[12]*i,this.y=n[1]*r+n[5]*s+n[9]*o+n[13]*i,this.z=n[2]*r+n[6]*s+n[10]*o+n[14]*i,this.w=n[3]*r+n[7]*s+n[11]*o+n[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,s,o,i;const d=e.elements,l=d[0],u=d[4],c=d[8],g=d[1],f=d[5],y=d[9],_=d[2],m=d[6],h=d[10];if(Math.abs(u-g)<.01&&Math.abs(c-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(u+g)<.1&&Math.abs(c+_)<.1&&Math.abs(y+m)<.1&&Math.abs(l+f+h-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const b=(l+1)/2,v=(f+1)/2,S=(h+1)/2,T=(u+g)/4,O=(c+_)/4,C=(y+m)/4;return b>v&&b>S?b<.01?(s=0,o=.707106781,i=.707106781):(s=Math.sqrt(b),o=T/s,i=O/s):v>S?v<.01?(s=.707106781,o=0,i=.707106781):(o=Math.sqrt(v),s=T/o,i=C/o):S<.01?(s=.707106781,o=.707106781,i=0):(i=Math.sqrt(S),s=O/i,o=C/i),this.set(s,o,i,r),this}let R=Math.sqrt((m-y)*(m-y)+(c-_)*(c-_)+(g-u)*(g-u));return Math.abs(R)<.001&&(R=1),this.x=(m-y)/R,this.y=(c-_)/R,this.z=(g-u)/R,this.w=Math.acos((l+f+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this.w=Math.max(e.w,Math.min(r.w,this.w)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this.w=Math.max(e,Math.min(r,this.w)),this}clampLength(e,r){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(r,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,s){return this.x=e.x+(r.x-e.x)*s,this.y=e.y+(r.y-e.y)*s,this.z=e.z+(r.z-e.z)*s,this.w=e.w+(r.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WebGLRenderTarget extends EventDispatcher{constructor(e=1,r=1,s={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=r,this.depth=1,this.scissor=new Vector4(0,0,e,r),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,r);const o={width:e,height:r,depth:1};s.encoding!==void 0&&(warnOnce("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===sRGBEncoding?SRGBColorSpace:NoColorSpace),this.texture=new Texture(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps!==void 0?s.generateMipmaps:!1,this.texture.internalFormat=s.internalFormat!==void 0?s.internalFormat:null,this.texture.minFilter=s.minFilter!==void 0?s.minFilter:LinearFilter,this.depthBuffer=s.depthBuffer!==void 0?s.depthBuffer:!0,this.stencilBuffer=s.stencilBuffer!==void 0?s.stencilBuffer:!1,this.depthTexture=s.depthTexture!==void 0?s.depthTexture:null,this.samples=s.samples!==void 0?s.samples:0}setSize(e,r,s=1){(this.width!==e||this.height!==r||this.depth!==s)&&(this.width=e,this.height=r,this.depth=s,this.texture.image.width=e,this.texture.image.height=r,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const r=Object.assign({},e.texture.image);return this.texture.source=new Source(r),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class DataArrayTexture extends Texture{constructor(e=null,r=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:s,depth:o},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Data3DTexture extends Texture{constructor(e=null,r=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:s,depth:o},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(e=0,r=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=s,this._w=o}static slerpFlat(e,r,s,o,i,n,p){let d=s[o+0],l=s[o+1],u=s[o+2],c=s[o+3];const g=i[n+0],f=i[n+1],y=i[n+2],_=i[n+3];if(p===0){e[r+0]=d,e[r+1]=l,e[r+2]=u,e[r+3]=c;return}if(p===1){e[r+0]=g,e[r+1]=f,e[r+2]=y,e[r+3]=_;return}if(c!==_||d!==g||l!==f||u!==y){let m=1-p;const h=d*g+l*f+u*y+c*_,R=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const S=Math.sqrt(b),T=Math.atan2(S,h*R);m=Math.sin(m*T)/S,p=Math.sin(p*T)/S}const v=p*R;if(d=d*m+g*v,l=l*m+f*v,u=u*m+y*v,c=c*m+_*v,m===1-p){const S=1/Math.sqrt(d*d+l*l+u*u+c*c);d*=S,l*=S,u*=S,c*=S}}e[r]=d,e[r+1]=l,e[r+2]=u,e[r+3]=c}static multiplyQuaternionsFlat(e,r,s,o,i,n){const p=s[o],d=s[o+1],l=s[o+2],u=s[o+3],c=i[n],g=i[n+1],f=i[n+2],y=i[n+3];return e[r]=p*y+u*c+d*f-l*g,e[r+1]=d*y+u*g+l*c-p*f,e[r+2]=l*y+u*f+p*g-d*c,e[r+3]=u*y-p*c-d*g-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,s,o){return this._x=e,this._y=r,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r){const s=e._x,o=e._y,i=e._z,n=e._order,p=Math.cos,d=Math.sin,l=p(s/2),u=p(o/2),c=p(i/2),g=d(s/2),f=d(o/2),y=d(i/2);switch(n){case"XYZ":this._x=g*u*c+l*f*y,this._y=l*f*c-g*u*y,this._z=l*u*y+g*f*c,this._w=l*u*c-g*f*y;break;case"YXZ":this._x=g*u*c+l*f*y,this._y=l*f*c-g*u*y,this._z=l*u*y-g*f*c,this._w=l*u*c+g*f*y;break;case"ZXY":this._x=g*u*c-l*f*y,this._y=l*f*c+g*u*y,this._z=l*u*y+g*f*c,this._w=l*u*c-g*f*y;break;case"ZYX":this._x=g*u*c-l*f*y,this._y=l*f*c+g*u*y,this._z=l*u*y-g*f*c,this._w=l*u*c+g*f*y;break;case"YZX":this._x=g*u*c+l*f*y,this._y=l*f*c+g*u*y,this._z=l*u*y-g*f*c,this._w=l*u*c-g*f*y;break;case"XZY":this._x=g*u*c-l*f*y,this._y=l*f*c-g*u*y,this._z=l*u*y+g*f*c,this._w=l*u*c+g*f*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return r!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const s=r/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,s=r[0],o=r[4],i=r[8],n=r[1],p=r[5],d=r[9],l=r[2],u=r[6],c=r[10],g=s+p+c;if(g>0){const f=.5/Math.sqrt(g+1);this._w=.25/f,this._x=(u-d)*f,this._y=(i-l)*f,this._z=(n-o)*f}else if(s>p&&s>c){const f=2*Math.sqrt(1+s-p-c);this._w=(u-d)/f,this._x=.25*f,this._y=(o+n)/f,this._z=(i+l)/f}else if(p>c){const f=2*Math.sqrt(1+p-s-c);this._w=(i-l)/f,this._x=(o+n)/f,this._y=.25*f,this._z=(d+u)/f}else{const f=2*Math.sqrt(1+c-s-p);this._w=(n-o)/f,this._x=(i+l)/f,this._y=(d+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let s=e.dot(r)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,r){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,r/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const s=e._x,o=e._y,i=e._z,n=e._w,p=r._x,d=r._y,l=r._z,u=r._w;return this._x=s*u+n*p+o*l-i*d,this._y=o*u+n*d+i*p-s*l,this._z=i*u+n*l+s*d-o*p,this._w=n*u-s*p-o*d-i*l,this._onChangeCallback(),this}slerp(e,r){if(r===0)return this;if(r===1)return this.copy(e);const s=this._x,o=this._y,i=this._z,n=this._w;let p=n*e._w+s*e._x+o*e._y+i*e._z;if(p<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,p=-p):this.copy(e),p>=1)return this._w=n,this._x=s,this._y=o,this._z=i,this;const d=1-p*p;if(d<=Number.EPSILON){const f=1-r;return this._w=f*n+r*this._w,this._x=f*s+r*this._x,this._y=f*o+r*this._y,this._z=f*i+r*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(d),u=Math.atan2(l,p),c=Math.sin((1-r)*u)/l,g=Math.sin(r*u)/l;return this._w=n*c+this._w*g,this._x=s*c+this._x*g,this._y=o*c+this._y*g,this._z=i*c+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,r,s){return this.copy(e).slerp(r,s)}random(){const e=Math.random(),r=Math.sqrt(1-e),s=Math.sqrt(e),o=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(r*Math.cos(o),s*Math.sin(i),s*Math.cos(i),r*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,r=0,s=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=r,this.z=s}set(e,r,s){return s===void 0&&(s=this.z),this.x=e,this.y=r,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,s=this.y,o=this.z,i=e.elements;return this.x=i[0]*r+i[3]*s+i[6]*o,this.y=i[1]*r+i[4]*s+i[7]*o,this.z=i[2]*r+i[5]*s+i[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,s=this.y,o=this.z,i=e.elements,n=1/(i[3]*r+i[7]*s+i[11]*o+i[15]);return this.x=(i[0]*r+i[4]*s+i[8]*o+i[12])*n,this.y=(i[1]*r+i[5]*s+i[9]*o+i[13])*n,this.z=(i[2]*r+i[6]*s+i[10]*o+i[14])*n,this}applyQuaternion(e){const r=this.x,s=this.y,o=this.z,i=e.x,n=e.y,p=e.z,d=e.w,l=d*r+n*o-p*s,u=d*s+p*r-i*o,c=d*o+i*s-n*r,g=-i*r-n*s-p*o;return this.x=l*d+g*-i+u*-p-c*-n,this.y=u*d+g*-n+c*-i-l*-p,this.z=c*d+g*-p+l*-n-u*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,s=this.y,o=this.z,i=e.elements;return this.x=i[0]*r+i[4]*s+i[8]*o,this.y=i[1]*r+i[5]*s+i[9]*o,this.z=i[2]*r+i[6]*s+i[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this}clampLength(e,r){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(r,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,s){return this.x=e.x+(r.x-e.x)*s,this.y=e.y+(r.y-e.y)*s,this.z=e.z+(r.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const s=e.x,o=e.y,i=e.z,n=r.x,p=r.y,d=r.z;return this.x=o*d-i*p,this.y=i*n-s*d,this.z=s*p-o*n,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const s=e.dot(this)/r;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return _vector$b.copy(this).projectOnVector(e),this.sub(_vector$b)}reflect(e){return this.sub(_vector$b.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const s=this.dot(e)/r;return Math.acos(clamp(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return r*r+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,s){const o=Math.sin(r)*e;return this.x=o*Math.sin(s),this.y=Math.cos(r)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,s){return this.x=e*Math.sin(r),this.y=s,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=s,this.z=o,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,r=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(r),this.y=s*Math.sin(r),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$b=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(e=new Vector3(1/0,1/0,1/0),r=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,s=e.length;r<s;r+=3)this.expandByPoint(_vector$a.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,s=e.count;r<s;r++)this.expandByPoint(_vector$a.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,s=e.length;r<s;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const s=_vector$a.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),_box$3.copy(e.boundingBox),_box$3.applyMatrix4(e.matrixWorld),this.union(_box$3);else{const o=e.geometry;if(o!==void 0)if(r&&o.attributes!==void 0&&o.attributes.position!==void 0){const i=o.attributes.position;for(let n=0,p=i.count;n<p;n++)_vector$a.fromBufferAttribute(i,n).applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$a)}else o.boundingBox===null&&o.computeBoundingBox(),_box$3.copy(o.boundingBox),_box$3.applyMatrix4(e.matrixWorld),this.union(_box$3)}const s=e.children;for(let o=0,i=s.length;o<i;o++)this.expandByObject(s[o],r);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_vector$a),_vector$a.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,s;return e.normal.x>0?(r=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),r<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$4.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let r=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(r,_v0$2,_v1$7,_v2$4,_extents)||(r=[1,0,0,0,1,0,0,0,1],!satForAxes(r,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),r=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(r,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_vector$a).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_vector$a).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$a=new Vector3,_box$3=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(t,e,r,s,o){for(let i=0,n=t.length-3;i<=n;i+=3){_testAxis.fromArray(t,i);const p=o.x*Math.abs(_testAxis.x)+o.y*Math.abs(_testAxis.y)+o.z*Math.abs(_testAxis.z),d=e.dot(_testAxis),l=r.dot(_testAxis),u=s.dot(_testAxis);if(Math.max(-Math.max(d,l,u),Math.min(d,l,u))>p)return!1}return!0}const _box$2=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(e=new Vector3,r=-1){this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const s=this.center;r!==void 0?s.copy(r):_box$2.setFromPoints(e).getCenter(s);let o=0;for(let i=0,n=e.length;i<n;i++)o=Math.max(o,s.distanceToSquared(e[i]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const s=this.center.distanceToSquared(e);return r.copy(e),s>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$6.subVectors(e,this.center);const r=_v1$6.lengthSq();if(r>this.radius*this.radius){const s=Math.sqrt(r),o=(s-this.radius)*.5;this.center.addScaledVector(_v1$6,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$9=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,r=new Vector3(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$9)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const s=r.dot(this.direction);return s<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=_vector$9.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(_vector$9.copy(this.origin).addScaledVector(this.direction,r),_vector$9.distanceToSquared(e))}distanceSqToSegment(e,r,s,o){_segCenter.copy(e).add(r).multiplyScalar(.5),_segDir.copy(r).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const i=e.distanceTo(r)*.5,n=-this.direction.dot(_segDir),p=_diff.dot(this.direction),d=-_diff.dot(_segDir),l=_diff.lengthSq(),u=Math.abs(1-n*n);let c,g,f,y;if(u>0)if(c=n*d-p,g=n*p-d,y=i*u,c>=0)if(g>=-y)if(g<=y){const _=1/u;c*=_,g*=_,f=c*(c+n*g+2*p)+g*(n*c+g+2*d)+l}else g=i,c=Math.max(0,-(n*g+p)),f=-c*c+g*(g+2*d)+l;else g=-i,c=Math.max(0,-(n*g+p)),f=-c*c+g*(g+2*d)+l;else g<=-y?(c=Math.max(0,-(-n*i+p)),g=c>0?-i:Math.min(Math.max(-i,-d),i),f=-c*c+g*(g+2*d)+l):g<=y?(c=0,g=Math.min(Math.max(-i,-d),i),f=g*(g+2*d)+l):(c=Math.max(0,-(n*i+p)),g=c>0?i:Math.min(Math.max(-i,-d),i),f=-c*c+g*(g+2*d)+l);else g=n>0?-i:i,c=Math.max(0,-(n*g+p)),f=-c*c+g*(g+2*d)+l;return s&&s.copy(this.origin).addScaledVector(this.direction,c),o&&o.copy(_segCenter).addScaledVector(_segDir,g),f}intersectSphere(e,r){_vector$9.subVectors(e.center,this.origin);const s=_vector$9.dot(this.direction),o=_vector$9.dot(_vector$9)-s*s,i=e.radius*e.radius;if(o>i)return null;const n=Math.sqrt(i-o),p=s-n,d=s+n;return d<0?null:p<0?this.at(d,r):this.at(p,r)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/r;return s>=0?s:null}intersectPlane(e,r){const s=this.distanceToPlane(e);return s===null?null:this.at(s,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let s,o,i,n,p,d;const l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,g=this.origin;return l>=0?(s=(e.min.x-g.x)*l,o=(e.max.x-g.x)*l):(s=(e.max.x-g.x)*l,o=(e.min.x-g.x)*l),u>=0?(i=(e.min.y-g.y)*u,n=(e.max.y-g.y)*u):(i=(e.max.y-g.y)*u,n=(e.min.y-g.y)*u),s>n||i>o||((i>s||isNaN(s))&&(s=i),(n<o||isNaN(o))&&(o=n),c>=0?(p=(e.min.z-g.z)*c,d=(e.max.z-g.z)*c):(p=(e.max.z-g.z)*c,d=(e.min.z-g.z)*c),s>d||p>o)||((p>s||s!==s)&&(s=p),(d<o||o!==o)&&(o=d),o<0)?null:this.at(s>=0?s:o,r)}intersectsBox(e){return this.intersectBox(e,_vector$9)!==null}intersectTriangle(e,r,s,o,i){_edge1.subVectors(r,e),_edge2.subVectors(s,e),_normal$1.crossVectors(_edge1,_edge2);let n=this.direction.dot(_normal$1),p;if(n>0){if(o)return null;p=1}else if(n<0)p=-1,n=-n;else return null;_diff.subVectors(this.origin,e);const d=p*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(d<0)return null;const l=p*this.direction.dot(_edge1.cross(_diff));if(l<0||d+l>n)return null;const u=-p*_diff.dot(_normal$1);return u<0?null:this.at(u/n,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(e,r,s,o,i,n,p,d,l,u,c,g,f,y,_,m){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,s,o,i,n,p,d,l,u,c,g,f,y,_,m)}set(e,r,s,o,i,n,p,d,l,u,c,g,f,y,_,m){const h=this.elements;return h[0]=e,h[4]=r,h[8]=s,h[12]=o,h[1]=i,h[5]=n,h[9]=p,h[13]=d,h[2]=l,h[6]=u,h[10]=c,h[14]=g,h[3]=f,h[7]=y,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const r=this.elements,s=e.elements;return r[0]=s[0],r[1]=s[1],r[2]=s[2],r[3]=s[3],r[4]=s[4],r[5]=s[5],r[6]=s[6],r[7]=s[7],r[8]=s[8],r[9]=s[9],r[10]=s[10],r[11]=s[11],r[12]=s[12],r[13]=s[13],r[14]=s[14],r[15]=s[15],this}copyPosition(e){const r=this.elements,s=e.elements;return r[12]=s[12],r[13]=s[13],r[14]=s[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,s){return e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,r,s){return this.set(e.x,r.x,s.x,0,e.y,r.y,s.y,0,e.z,r.z,s.z,0,0,0,0,1),this}extractRotation(e){const r=this.elements,s=e.elements,o=1/_v1$5.setFromMatrixColumn(e,0).length(),i=1/_v1$5.setFromMatrixColumn(e,1).length(),n=1/_v1$5.setFromMatrixColumn(e,2).length();return r[0]=s[0]*o,r[1]=s[1]*o,r[2]=s[2]*o,r[3]=0,r[4]=s[4]*i,r[5]=s[5]*i,r[6]=s[6]*i,r[7]=0,r[8]=s[8]*n,r[9]=s[9]*n,r[10]=s[10]*n,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,s=e.x,o=e.y,i=e.z,n=Math.cos(s),p=Math.sin(s),d=Math.cos(o),l=Math.sin(o),u=Math.cos(i),c=Math.sin(i);if(e.order==="XYZ"){const g=n*u,f=n*c,y=p*u,_=p*c;r[0]=d*u,r[4]=-d*c,r[8]=l,r[1]=f+y*l,r[5]=g-_*l,r[9]=-p*d,r[2]=_-g*l,r[6]=y+f*l,r[10]=n*d}else if(e.order==="YXZ"){const g=d*u,f=d*c,y=l*u,_=l*c;r[0]=g+_*p,r[4]=y*p-f,r[8]=n*l,r[1]=n*c,r[5]=n*u,r[9]=-p,r[2]=f*p-y,r[6]=_+g*p,r[10]=n*d}else if(e.order==="ZXY"){const g=d*u,f=d*c,y=l*u,_=l*c;r[0]=g-_*p,r[4]=-n*c,r[8]=y+f*p,r[1]=f+y*p,r[5]=n*u,r[9]=_-g*p,r[2]=-n*l,r[6]=p,r[10]=n*d}else if(e.order==="ZYX"){const g=n*u,f=n*c,y=p*u,_=p*c;r[0]=d*u,r[4]=y*l-f,r[8]=g*l+_,r[1]=d*c,r[5]=_*l+g,r[9]=f*l-y,r[2]=-l,r[6]=p*d,r[10]=n*d}else if(e.order==="YZX"){const g=n*d,f=n*l,y=p*d,_=p*l;r[0]=d*u,r[4]=_-g*c,r[8]=y*c+f,r[1]=c,r[5]=n*u,r[9]=-p*u,r[2]=-l*u,r[6]=f*c+y,r[10]=g-_*c}else if(e.order==="XZY"){const g=n*d,f=n*l,y=p*d,_=p*l;r[0]=d*u,r[4]=-c,r[8]=l*u,r[1]=g*c+_,r[5]=n*u,r[9]=f*c-y,r[2]=y*c-f,r[6]=p*u,r[10]=_*c+g}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,r,s){const o=this.elements;return _z.subVectors(e,r),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(s,_z),_x.lengthSq()===0&&(Math.abs(s.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(s,_z)),_x.normalize(),_y.crossVectors(_z,_x),o[0]=_x.x,o[4]=_y.x,o[8]=_z.x,o[1]=_x.y,o[5]=_y.y,o[9]=_z.y,o[2]=_x.z,o[6]=_y.z,o[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const s=e.elements,o=r.elements,i=this.elements,n=s[0],p=s[4],d=s[8],l=s[12],u=s[1],c=s[5],g=s[9],f=s[13],y=s[2],_=s[6],m=s[10],h=s[14],R=s[3],b=s[7],v=s[11],S=s[15],T=o[0],O=o[4],C=o[8],M=o[12],E=o[1],B=o[5],N=o[9],w=o[13],D=o[2],G=o[6],K=o[10],j=o[14],Y=o[3],J=o[7],q=o[11],U=o[15];return i[0]=n*T+p*E+d*D+l*Y,i[4]=n*O+p*B+d*G+l*J,i[8]=n*C+p*N+d*K+l*q,i[12]=n*M+p*w+d*j+l*U,i[1]=u*T+c*E+g*D+f*Y,i[5]=u*O+c*B+g*G+f*J,i[9]=u*C+c*N+g*K+f*q,i[13]=u*M+c*w+g*j+f*U,i[2]=y*T+_*E+m*D+h*Y,i[6]=y*O+_*B+m*G+h*J,i[10]=y*C+_*N+m*K+h*q,i[14]=y*M+_*w+m*j+h*U,i[3]=R*T+b*E+v*D+S*Y,i[7]=R*O+b*B+v*G+S*J,i[11]=R*C+b*N+v*K+S*q,i[15]=R*M+b*w+v*j+S*U,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],s=e[4],o=e[8],i=e[12],n=e[1],p=e[5],d=e[9],l=e[13],u=e[2],c=e[6],g=e[10],f=e[14],y=e[3],_=e[7],m=e[11],h=e[15];return y*(+i*d*c-o*l*c-i*p*g+s*l*g+o*p*f-s*d*f)+_*(+r*d*f-r*l*g+i*n*g-o*n*f+o*l*u-i*d*u)+m*(+r*l*c-r*p*f-i*n*c+s*n*f+i*p*u-s*l*u)+h*(-o*p*u-r*d*c+r*p*g+o*n*c-s*n*g+s*d*u)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=r,o[14]=s),this}invert(){const e=this.elements,r=e[0],s=e[1],o=e[2],i=e[3],n=e[4],p=e[5],d=e[6],l=e[7],u=e[8],c=e[9],g=e[10],f=e[11],y=e[12],_=e[13],m=e[14],h=e[15],R=c*m*l-_*g*l+_*d*f-p*m*f-c*d*h+p*g*h,b=y*g*l-u*m*l-y*d*f+n*m*f+u*d*h-n*g*h,v=u*_*l-y*c*l+y*p*f-n*_*f-u*p*h+n*c*h,S=y*c*d-u*_*d-y*p*g+n*_*g+u*p*m-n*c*m,T=r*R+s*b+o*v+i*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/T;return e[0]=R*O,e[1]=(_*g*i-c*m*i-_*o*f+s*m*f+c*o*h-s*g*h)*O,e[2]=(p*m*i-_*d*i+_*o*l-s*m*l-p*o*h+s*d*h)*O,e[3]=(c*d*i-p*g*i-c*o*l+s*g*l+p*o*f-s*d*f)*O,e[4]=b*O,e[5]=(u*m*i-y*g*i+y*o*f-r*m*f-u*o*h+r*g*h)*O,e[6]=(y*d*i-n*m*i-y*o*l+r*m*l+n*o*h-r*d*h)*O,e[7]=(n*g*i-u*d*i+u*o*l-r*g*l-n*o*f+r*d*f)*O,e[8]=v*O,e[9]=(y*c*i-u*_*i-y*s*f+r*_*f+u*s*h-r*c*h)*O,e[10]=(n*_*i-y*p*i+y*s*l-r*_*l-n*s*h+r*p*h)*O,e[11]=(u*p*i-n*c*i-u*s*l+r*c*l+n*s*f-r*p*f)*O,e[12]=S*O,e[13]=(u*_*o-y*c*o+y*s*g-r*_*g-u*s*m+r*c*m)*O,e[14]=(y*p*o-n*_*o-y*s*d+r*_*d+n*s*m-r*p*m)*O,e[15]=(n*c*o-u*p*o+u*s*d-r*c*d-n*s*g+r*p*g)*O,this}scale(e){const r=this.elements,s=e.x,o=e.y,i=e.z;return r[0]*=s,r[4]*=o,r[8]*=i,r[1]*=s,r[5]*=o,r[9]*=i,r[2]*=s,r[6]*=o,r[10]*=i,r[3]*=s,r[7]*=o,r[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,s,o))}makeTranslation(e,r,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,s,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,r,-s,0,0,s,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),s=Math.sin(e);return this.set(r,0,s,0,0,1,0,0,-s,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),s=Math.sin(e);return this.set(r,-s,0,0,s,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const s=Math.cos(r),o=Math.sin(r),i=1-s,n=e.x,p=e.y,d=e.z,l=i*n,u=i*p;return this.set(l*n+s,l*p-o*d,l*d+o*p,0,l*p+o*d,u*p+s,u*d-o*n,0,l*d-o*p,u*d+o*n,i*d*d+s,0,0,0,0,1),this}makeScale(e,r,s){return this.set(e,0,0,0,0,r,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,r,s,o,i,n){return this.set(1,s,i,0,e,1,n,0,r,o,1,0,0,0,0,1),this}compose(e,r,s){const o=this.elements,i=r._x,n=r._y,p=r._z,d=r._w,l=i+i,u=n+n,c=p+p,g=i*l,f=i*u,y=i*c,_=n*u,m=n*c,h=p*c,R=d*l,b=d*u,v=d*c,S=s.x,T=s.y,O=s.z;return o[0]=(1-(_+h))*S,o[1]=(f+v)*S,o[2]=(y-b)*S,o[3]=0,o[4]=(f-v)*T,o[5]=(1-(g+h))*T,o[6]=(m+R)*T,o[7]=0,o[8]=(y+b)*O,o[9]=(m-R)*O,o[10]=(1-(g+_))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,r,s){const o=this.elements;let i=_v1$5.set(o[0],o[1],o[2]).length();const n=_v1$5.set(o[4],o[5],o[6]).length(),p=_v1$5.set(o[8],o[9],o[10]).length();this.determinant()<0&&(i=-i),e.x=o[12],e.y=o[13],e.z=o[14],_m1$2.copy(this);const l=1/i,u=1/n,c=1/p;return _m1$2.elements[0]*=l,_m1$2.elements[1]*=l,_m1$2.elements[2]*=l,_m1$2.elements[4]*=u,_m1$2.elements[5]*=u,_m1$2.elements[6]*=u,_m1$2.elements[8]*=c,_m1$2.elements[9]*=c,_m1$2.elements[10]*=c,r.setFromRotationMatrix(_m1$2),s.x=i,s.y=n,s.z=p,this}makePerspective(e,r,s,o,i,n,p=WebGLCoordinateSystem){const d=this.elements,l=2*i/(r-e),u=2*i/(s-o),c=(r+e)/(r-e),g=(s+o)/(s-o);let f,y;if(p===WebGLCoordinateSystem)f=-(n+i)/(n-i),y=-2*n*i/(n-i);else if(p===WebGPUCoordinateSystem)f=-n/(n-i),y=-n*i/(n-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=l,d[4]=0,d[8]=c,d[12]=0,d[1]=0,d[5]=u,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=f,d[14]=y,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,r,s,o,i,n,p=WebGLCoordinateSystem){const d=this.elements,l=1/(r-e),u=1/(s-o),c=1/(n-i),g=(r+e)*l,f=(s+o)*u;let y,_;if(p===WebGLCoordinateSystem)y=(n+i)*c,_=-2*c;else if(p===WebGPUCoordinateSystem)y=i*c,_=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=2*l,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*u,d[9]=0,d[13]=-f,d[2]=0,d[6]=0,d[10]=_,d[14]=-y,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const r=this.elements,s=e.elements;for(let o=0;o<16;o++)if(r[o]!==s[o])return!1;return!0}fromArray(e,r=0){for(let s=0;s<16;s++)this.elements[s]=e[s+r];return this}toArray(e=[],r=0){const s=this.elements;return e[r]=s[0],e[r+1]=s[1],e[r+2]=s[2],e[r+3]=s[3],e[r+4]=s[4],e[r+5]=s[5],e[r+6]=s[6],e[r+7]=s[7],e[r+8]=s[8],e[r+9]=s[9],e[r+10]=s[10],e[r+11]=s[11],e[r+12]=s[12],e[r+13]=s[13],e[r+14]=s[14],e[r+15]=s[15],e}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,r=0,s=0,o=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,s,o=this._order){return this._x=e,this._y=r,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,s=!0){const o=e.elements,i=o[0],n=o[4],p=o[8],d=o[1],l=o[5],u=o[9],c=o[2],g=o[6],f=o[10];switch(r){case"XYZ":this._y=Math.asin(clamp(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-n,i)):(this._x=Math.atan2(g,l),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(p,f),this._z=Math.atan2(d,l)):(this._y=Math.atan2(-c,i),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-n,l)):(this._y=0,this._z=Math.atan2(d,i));break;case"ZYX":this._y=Math.asin(-clamp(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,f),this._z=Math.atan2(d,i)):(this._x=0,this._z=Math.atan2(-n,l));break;case"YZX":this._z=Math.asin(clamp(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-c,i)):(this._x=0,this._y=Math.atan2(p,f));break;case"XZY":this._z=Math.asin(-clamp(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(g,l),this._y=Math.atan2(p,i)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,s){return _matrix.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix,r,s)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const e=new Vector3,r=new Euler,s=new Quaternion,o=new Vector3(1,1,1);function i(){s.setFromEuler(r,!1)}function n(){r.setFromQuaternion(s,void 0,!1)}r._onChange(i),s._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return _q1.setFromAxisAngle(e,r),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,r){return _q1.setFromAxisAngle(e,r),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,r){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$1.copy(this.matrixWorld).invert())}lookAt(e,r,s){e.isVector3?_target.copy(e):_target.set(e,r,s);const o=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1.lookAt(_position$3,_target,this.up):_m1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1),o&&(_m1$1.extractRotation(o.matrixWorld),_q1.setFromRotationMatrix(_m1$1),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(_removedEvent)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const r=this.children[e];r.parent=null,r.dispatchEvent(_removedEvent)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_m1$1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$1.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$1),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let s=0,o=this.children.length;s<o;s++){const n=this.children[s].getObjectByProperty(e,r);if(n!==void 0)return n}}getObjectsByProperty(e,r){let s=[];this[e]===r&&s.push(this);for(let o=0,i=this.children.length;o<i;o++){const n=this.children[o].getObjectsByProperty(e,r);n.length>0&&(s=s.concat(n))}return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let s=0,o=r.length;s<o;s++){const i=r[s];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,r){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),r===!0){const o=this.children;for(let i=0,n=o.length;i<n;i++){const p=o[i];p.matrixWorldAutoUpdate===!0&&p.updateWorldMatrix(!1,!0)}}}toJSON(e){const r=e===void 0||typeof e=="string",s={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function i(p,d){return p[d.uuid]===void 0&&(p[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=i(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const d=p.shapes;if(Array.isArray(d))for(let l=0,u=d.length;l<u;l++){const c=d[l];i(e.shapes,c)}else i(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let d=0,l=this.material.length;d<l;d++)p.push(i(e.materials,this.material[d]));o.material=p}else o.material=i(e.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){const d=this.animations[p];o.animations.push(i(e.animations,d))}}if(r){const p=n(e.geometries),d=n(e.materials),l=n(e.textures),u=n(e.images),c=n(e.shapes),g=n(e.skeletons),f=n(e.animations),y=n(e.nodes);p.length>0&&(s.geometries=p),d.length>0&&(s.materials=d),l.length>0&&(s.textures=l),u.length>0&&(s.images=u),c.length>0&&(s.shapes=c),g.length>0&&(s.skeletons=g),f.length>0&&(s.animations=f),y.length>0&&(s.nodes=y)}return s.object=o,s;function n(p){const d=[];for(const l in p){const u=p[l];delete u.metadata,d.push(u)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$1=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;let warnedGetUV=!1;class Triangle{constructor(e=new Vector3,r=new Vector3,s=new Vector3){this.a=e,this.b=r,this.c=s}static getNormal(e,r,s,o){o.subVectors(s,r),_v0$1.subVectors(e,r),o.cross(_v0$1);const i=o.lengthSq();return i>0?o.multiplyScalar(1/Math.sqrt(i)):o.set(0,0,0)}static getBarycoord(e,r,s,o,i){_v0$1.subVectors(o,r),_v1$3.subVectors(s,r),_v2$2.subVectors(e,r);const n=_v0$1.dot(_v0$1),p=_v0$1.dot(_v1$3),d=_v0$1.dot(_v2$2),l=_v1$3.dot(_v1$3),u=_v1$3.dot(_v2$2),c=n*l-p*p;if(c===0)return i.set(-2,-1,-1);const g=1/c,f=(l*d-p*u)*g,y=(n*u-p*d)*g;return i.set(1-f-y,y,f)}static containsPoint(e,r,s,o){return this.getBarycoord(e,r,s,o,_v3$1),_v3$1.x>=0&&_v3$1.y>=0&&_v3$1.x+_v3$1.y<=1}static getUV(e,r,s,o,i,n,p,d){return warnedGetUV===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),warnedGetUV=!0),this.getInterpolation(e,r,s,o,i,n,p,d)}static getInterpolation(e,r,s,o,i,n,p,d){return this.getBarycoord(e,r,s,o,_v3$1),d.setScalar(0),d.addScaledVector(i,_v3$1.x),d.addScaledVector(n,_v3$1.y),d.addScaledVector(p,_v3$1.z),d}static isFrontFacing(e,r,s,o){return _v0$1.subVectors(s,r),_v1$3.subVectors(e,r),_v0$1.cross(_v1$3).dot(o)<0}set(e,r,s){return this.a.copy(e),this.b.copy(r),this.c.copy(s),this}setFromPointsAndIndices(e,r,s,o){return this.a.copy(e[r]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,r,s,o){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return Triangle.getBarycoord(e,this.a,this.b,this.c,r)}getUV(e,r,s,o,i){return warnedGetUV===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),warnedGetUV=!0),Triangle.getInterpolation(e,this.a,this.b,this.c,r,s,o,i)}getInterpolation(e,r,s,o,i){return Triangle.getInterpolation(e,this.a,this.b,this.c,r,s,o,i)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const s=this.a,o=this.b,i=this.c;let n,p;_vab.subVectors(o,s),_vac.subVectors(i,s),_vap.subVectors(e,s);const d=_vab.dot(_vap),l=_vac.dot(_vap);if(d<=0&&l<=0)return r.copy(s);_vbp.subVectors(e,o);const u=_vab.dot(_vbp),c=_vac.dot(_vbp);if(u>=0&&c<=u)return r.copy(o);const g=d*c-u*l;if(g<=0&&d>=0&&u<=0)return n=d/(d-u),r.copy(s).addScaledVector(_vab,n);_vcp.subVectors(e,i);const f=_vab.dot(_vcp),y=_vac.dot(_vcp);if(y>=0&&f<=y)return r.copy(i);const _=f*l-d*y;if(_<=0&&l>=0&&y<=0)return p=l/(l-y),r.copy(s).addScaledVector(_vac,p);const m=u*y-f*c;if(m<=0&&c-u>=0&&f-y>=0)return _vbc.subVectors(i,o),p=(c-u)/(c-u+(f-y)),r.copy(o).addScaledVector(_vbc,p);const h=1/(m+_+g);return n=_*h,p=g*h,r.copy(s).addScaledVector(_vab,n).addScaledVector(_vac,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const s=e[r];if(s===void 0){console.warn(`THREE.Material: parameter '${r}' has value of undefined.`);continue}const o=this[r];if(o===void 0){console.warn(`THREE.Material: '${r}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[r]=s}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(s.blending=this.blending),this.side!==FrontSide&&(s.side=this.side),this.vertexColors&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=this.transparent),s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.stencilWrite=this.stencilWrite,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(s.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(s.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(s.wireframe=this.wireframe),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=this.flatShading),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(i){const n=[];for(const p in i){const d=i[p];delete d.metadata,n.push(d)}return n}if(r){const i=o(e.textures),n=o(e.images);i.length>0&&(s.textures=i),n.length>0&&(s.images=n)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let s=null;if(r!==null){const o=r.length;s=new Array(o);for(let i=0;i!==o;++i)s[i]=r[i].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*6*(2/3-r):t}class Color{constructor(e,r,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,s)}set(e,r,s){if(r===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,r,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.toWorkingColorSpace(this,r),this}setRGB(e,r,s,o=ColorManagement.workingColorSpace){return this.r=e,this.g=r,this.b=s,ColorManagement.toWorkingColorSpace(this,o),this}setHSL(e,r,s,o=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),r=clamp(r,0,1),s=clamp(s,0,1),r===0)this.r=this.g=this.b=s;else{const i=s<=.5?s*(1+r):s+r-s*r,n=2*s-i;this.r=hue2rgb(n,i,e+1/3),this.g=hue2rgb(n,i,e),this.b=hue2rgb(n,i,e-1/3)}return ColorManagement.toWorkingColorSpace(this,o),this}setStyle(e,r=SRGBColorSpace){function s(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const n=o[1],p=o[2];switch(n){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,r);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,r);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=o[1],n=i.length;if(n===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,r);if(n===6)return this.setHex(parseInt(i,16),r);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=SRGBColorSpace){const s=_colorKeywords[e.toLowerCase()];return s!==void 0?this.setHex(s,r):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),e),Math.round(clamp(_color.r*255,0,255))*65536+Math.round(clamp(_color.g*255,0,255))*256+Math.round(clamp(_color.b*255,0,255))}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),r);const s=_color.r,o=_color.g,i=_color.b,n=Math.max(s,o,i),p=Math.min(s,o,i);let d,l;const u=(p+n)/2;if(p===n)d=0,l=0;else{const c=n-p;switch(l=u<=.5?c/(n+p):c/(2-n-p),n){case s:d=(o-i)/c+(o<i?6:0);break;case o:d=(i-s)/c+2;break;case i:d=(s-o)/c+4;break}d/=6}return e.h=d,e.s=l,e.l=u,e}getRGB(e,r=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),r),e.r=_color.r,e.g=_color.g,e.b=_color.b,e}getStyle(e=SRGBColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),e);const r=_color.r,s=_color.g,o=_color.b;return e!==SRGBColorSpace?`color(${e} ${r.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,r,s){return this.getHSL(_hslA),_hslA.h+=e,_hslA.s+=r,_hslA.l+=s,this.setHSL(_hslA.h,_hslA.s,_hslA.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,s){return this.r=e.r+(r.r-e.r)*s,this.g=e.g+(r.g-e.g)*s,this.b=e.b+(r.b-e.b)*s,this}lerpHSL(e,r){this.getHSL(_hslA),e.getHSL(_hslB);const s=lerp(_hslA.h,_hslB.h,r),o=lerp(_hslA.s,_hslB.s,r),i=lerp(_hslA.l,_hslB.l,r);return this.setHSL(s,o,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,s=this.g,o=this.b,i=e.elements;return this.r=i[0]*r+i[3]*s+i[6]*o,this.g=i[1]*r+i[4]*s+i[7]*o,this.b=i[2]*r+i[5]*s+i[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color=new Color;Color.NAMES=_colorKeywords;class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$8=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(e,r,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=s,this.usage=StaticDrawUsage,this.updateRange={offset:0,count:-1},this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,s){e*=this.itemSize,s*=r.itemSize;for(let o=0,i=this.itemSize;o<i;o++)this.array[e+o]=r.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,s=this.count;r<s;r++)_vector2$1.fromBufferAttribute(this,r),_vector2$1.applyMatrix3(e),this.setXY(r,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let r=0,s=this.count;r<s;r++)_vector$8.fromBufferAttribute(this,r),_vector$8.applyMatrix3(e),this.setXYZ(r,_vector$8.x,_vector$8.y,_vector$8.z);return this}applyMatrix4(e){for(let r=0,s=this.count;r<s;r++)_vector$8.fromBufferAttribute(this,r),_vector$8.applyMatrix4(e),this.setXYZ(r,_vector$8.x,_vector$8.y,_vector$8.z);return this}applyNormalMatrix(e){for(let r=0,s=this.count;r<s;r++)_vector$8.fromBufferAttribute(this,r),_vector$8.applyNormalMatrix(e),this.setXYZ(r,_vector$8.x,_vector$8.y,_vector$8.z);return this}transformDirection(e){for(let r=0,s=this.count;r<s;r++)_vector$8.fromBufferAttribute(this,r),_vector$8.transformDirection(e),this.setXYZ(r,_vector$8.x,_vector$8.y,_vector$8.z);return this}set(e,r=0){return this.array.set(e,r),this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=denormalize(r,this.array)),r}setX(e,r){return this.normalized&&(r=normalize(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=denormalize(r,this.array)),r}setY(e,r){return this.normalized&&(r=normalize(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=denormalize(r,this.array)),r}setZ(e,r){return this.normalized&&(r=normalize(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=denormalize(r,this.array)),r}setW(e,r){return this.normalized&&(r=normalize(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,s){return e*=this.itemSize,this.normalized&&(r=normalize(r,this.array),s=normalize(s,this.array)),this.array[e+0]=r,this.array[e+1]=s,this}setXYZ(e,r,s,o){return e*=this.itemSize,this.normalized&&(r=normalize(r,this.array),s=normalize(s,this.array),o=normalize(o,this.array)),this.array[e+0]=r,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,r,s,o,i){return e*=this.itemSize,this.normalized&&(r=normalize(r,this.array),s=normalize(s,this.array),o=normalize(o,this.array),i=normalize(i,this.array)),this.array[e+0]=r,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,r,s){super(new Uint16Array(e),r,s)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,r,s){super(new Uint32Array(e),r,s)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,r,s){super(new Float32Array(e),r,s)}}let _id$1=0;const _m1=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$1=new Box3,_boxMorphTargets=new Box3,_vector$7=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,s=0){this.groups.push({start:e,count:r,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const i=new Matrix3().getNormalMatrix(e);s.applyNormalMatrix(i),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1.makeRotationFromQuaternion(e),this.applyMatrix4(_m1),this}rotateX(e){return _m1.makeRotationX(e),this.applyMatrix4(_m1),this}rotateY(e){return _m1.makeRotationY(e),this.applyMatrix4(_m1),this}rotateZ(e){return _m1.makeRotationZ(e),this.applyMatrix4(_m1),this}translate(e,r,s){return _m1.makeTranslation(e,r,s),this.applyMatrix4(_m1),this}scale(e,r,s){return _m1.makeScale(e,r,s),this.applyMatrix4(_m1),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const r=[];for(let s=0,o=e.length;s<o;s++){const i=e[s];r.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Float32BufferAttribute(r,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let s=0,o=r.length;s<o;s++){const i=r[s];_box$1.setFromBufferAttribute(i),this.morphTargetsRelative?(_vector$7.addVectors(this.boundingBox.min,_box$1.min),this.boundingBox.expandByPoint(_vector$7),_vector$7.addVectors(this.boundingBox.max,_box$1.max),this.boundingBox.expandByPoint(_vector$7)):(this.boundingBox.expandByPoint(_box$1.min),this.boundingBox.expandByPoint(_box$1.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const s=this.boundingSphere.center;if(_box$1.setFromBufferAttribute(e),r)for(let i=0,n=r.length;i<n;i++){const p=r[i];_boxMorphTargets.setFromBufferAttribute(p),this.morphTargetsRelative?(_vector$7.addVectors(_box$1.min,_boxMorphTargets.min),_box$1.expandByPoint(_vector$7),_vector$7.addVectors(_box$1.max,_boxMorphTargets.max),_box$1.expandByPoint(_vector$7)):(_box$1.expandByPoint(_boxMorphTargets.min),_box$1.expandByPoint(_boxMorphTargets.max))}_box$1.getCenter(s);let o=0;for(let i=0,n=e.count;i<n;i++)_vector$7.fromBufferAttribute(e,i),o=Math.max(o,s.distanceToSquared(_vector$7));if(r)for(let i=0,n=r.length;i<n;i++){const p=r[i],d=this.morphTargetsRelative;for(let l=0,u=p.count;l<u;l++)_vector$7.fromBufferAttribute(p,l),d&&(_offset.fromBufferAttribute(e,l),_vector$7.add(_offset)),o=Math.max(o,s.distanceToSquared(_vector$7))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,o=r.position.array,i=r.normal.array,n=r.uv.array,p=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*p),4));const d=this.getAttribute("tangent").array,l=[],u=[];for(let E=0;E<p;E++)l[E]=new Vector3,u[E]=new Vector3;const c=new Vector3,g=new Vector3,f=new Vector3,y=new Vector2,_=new Vector2,m=new Vector2,h=new Vector3,R=new Vector3;function b(E,B,N){c.fromArray(o,E*3),g.fromArray(o,B*3),f.fromArray(o,N*3),y.fromArray(n,E*2),_.fromArray(n,B*2),m.fromArray(n,N*2),g.sub(c),f.sub(c),_.sub(y),m.sub(y);const w=1/(_.x*m.y-m.x*_.y);isFinite(w)&&(h.copy(g).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(w),R.copy(f).multiplyScalar(_.x).addScaledVector(g,-m.x).multiplyScalar(w),l[E].add(h),l[B].add(h),l[N].add(h),u[E].add(R),u[B].add(R),u[N].add(R))}let v=this.groups;v.length===0&&(v=[{start:0,count:s.length}]);for(let E=0,B=v.length;E<B;++E){const N=v[E],w=N.start,D=N.count;for(let G=w,K=w+D;G<K;G+=3)b(s[G+0],s[G+1],s[G+2])}const S=new Vector3,T=new Vector3,O=new Vector3,C=new Vector3;function M(E){O.fromArray(i,E*3),C.copy(O);const B=l[E];S.copy(B),S.sub(O.multiplyScalar(O.dot(B))).normalize(),T.crossVectors(C,B);const w=T.dot(u[E])<0?-1:1;d[E*4]=S.x,d[E*4+1]=S.y,d[E*4+2]=S.z,d[E*4+3]=w}for(let E=0,B=v.length;E<B;++E){const N=v[E],w=N.start,D=N.count;for(let G=w,K=w+D;G<K;G+=3)M(s[G+0]),M(s[G+1]),M(s[G+2])}}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new BufferAttribute(new Float32Array(r.count*3),3),this.setAttribute("normal",s);else for(let g=0,f=s.count;g<f;g++)s.setXYZ(g,0,0,0);const o=new Vector3,i=new Vector3,n=new Vector3,p=new Vector3,d=new Vector3,l=new Vector3,u=new Vector3,c=new Vector3;if(e)for(let g=0,f=e.count;g<f;g+=3){const y=e.getX(g+0),_=e.getX(g+1),m=e.getX(g+2);o.fromBufferAttribute(r,y),i.fromBufferAttribute(r,_),n.fromBufferAttribute(r,m),u.subVectors(n,i),c.subVectors(o,i),u.cross(c),p.fromBufferAttribute(s,y),d.fromBufferAttribute(s,_),l.fromBufferAttribute(s,m),p.add(u),d.add(u),l.add(u),s.setXYZ(y,p.x,p.y,p.z),s.setXYZ(_,d.x,d.y,d.z),s.setXYZ(m,l.x,l.y,l.z)}else for(let g=0,f=r.count;g<f;g+=3)o.fromBufferAttribute(r,g+0),i.fromBufferAttribute(r,g+1),n.fromBufferAttribute(r,g+2),u.subVectors(n,i),c.subVectors(o,i),u.cross(c),s.setXYZ(g+0,u.x,u.y,u.z),s.setXYZ(g+1,u.x,u.y,u.z),s.setXYZ(g+2,u.x,u.y,u.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,s=e.count;r<s;r++)_vector$7.fromBufferAttribute(e,r),_vector$7.normalize(),e.setXYZ(r,_vector$7.x,_vector$7.y,_vector$7.z)}toNonIndexed(){function e(p,d){const l=p.array,u=p.itemSize,c=p.normalized,g=new l.constructor(d.length*u);let f=0,y=0;for(let _=0,m=d.length;_<m;_++){p.isInterleavedBufferAttribute?f=d[_]*p.data.stride+p.offset:f=d[_]*u;for(let h=0;h<u;h++)g[y++]=l[f++]}return new BufferAttribute(g,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new BufferGeometry,s=this.index.array,o=this.attributes;for(const p in o){const d=o[p],l=e(d,s);r.setAttribute(p,l)}const i=this.morphAttributes;for(const p in i){const d=[],l=i[p];for(let u=0,c=l.length;u<c;u++){const g=l[u],f=e(g,s);d.push(f)}r.morphAttributes[p]=d}r.morphTargetsRelative=this.morphTargetsRelative;const n=this.groups;for(let p=0,d=n.length;p<d;p++){const l=n[p];r.addGroup(l.start,l.count,l.materialIndex)}return r}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const l in d)d[l]!==void 0&&(e[l]=d[l]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const s=this.attributes;for(const d in s){const l=s[d];e.data.attributes[d]=l.toJSON(e.data)}const o={};let i=!1;for(const d in this.morphAttributes){const l=this.morphAttributes[d],u=[];for(let c=0,g=l.length;c<g;c++){const f=l[c];u.push(f.toJSON(e.data))}u.length>0&&(o[d]=u,i=!0)}i&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere={center:p.center.toArray(),radius:p.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(r));const o=e.attributes;for(const l in o){const u=o[l];this.setAttribute(l,u.clone(r))}const i=e.morphAttributes;for(const l in i){const u=[],c=i[l];for(let g=0,f=c.length;g<f;g++)u.push(c[g].clone(r));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const n=e.groups;for(let l=0,u=n.length;l<u;l++){const c=n[l];this.addGroup(c.start,c.count,c.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$5=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_normalA=new Vector3,_normalB=new Vector3,_normalC=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,r=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const r=this.geometry.morphAttributes,s=Object.keys(r);if(s.length>0){const o=r[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,n=o.length;i<n;i++){const p=o[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=i}}}}getVertexPosition(e,r){const s=this.geometry,o=s.attributes.position,i=s.morphAttributes.position,n=s.morphTargetsRelative;r.fromBufferAttribute(o,e);const p=this.morphTargetInfluences;if(i&&p){_morphA.set(0,0,0);for(let d=0,l=i.length;d<l;d++){const u=p[d],c=i[d];u!==0&&(_tempA.fromBufferAttribute(c,e),n?_morphA.addScaledVector(_tempA,u):_morphA.addScaledVector(_tempA.sub(r),u))}r.add(_morphA)}return r}raycast(e,r){const s=this.geometry,o=this.material,i=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),_sphere$5.copy(s.boundingSphere),_sphere$5.applyMatrix4(i),_ray$3.copy(e.ray).recast(e.near),!(_sphere$5.containsPoint(_ray$3.origin)===!1&&(_ray$3.intersectSphere(_sphere$5,_sphereHitAt)===null||_ray$3.origin.distanceToSquared(_sphereHitAt)>(e.far-e.near)**2))&&(_inverseMatrix$3.copy(i).invert(),_ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3),!(s.boundingBox!==null&&_ray$3.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,r,_ray$3)))}_computeIntersections(e,r,s){let o;const i=this.geometry,n=this.material,p=i.index,d=i.attributes.position,l=i.attributes.uv,u=i.attributes.uv1,c=i.attributes.normal,g=i.groups,f=i.drawRange;if(p!==null)if(Array.isArray(n))for(let y=0,_=g.length;y<_;y++){const m=g[y],h=n[m.materialIndex],R=Math.max(m.start,f.start),b=Math.min(p.count,Math.min(m.start+m.count,f.start+f.count));for(let v=R,S=b;v<S;v+=3){const T=p.getX(v),O=p.getX(v+1),C=p.getX(v+2);o=checkGeometryIntersection(this,h,e,s,l,u,c,T,O,C),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,r.push(o))}}else{const y=Math.max(0,f.start),_=Math.min(p.count,f.start+f.count);for(let m=y,h=_;m<h;m+=3){const R=p.getX(m),b=p.getX(m+1),v=p.getX(m+2);o=checkGeometryIntersection(this,n,e,s,l,u,c,R,b,v),o&&(o.faceIndex=Math.floor(m/3),r.push(o))}}else if(d!==void 0)if(Array.isArray(n))for(let y=0,_=g.length;y<_;y++){const m=g[y],h=n[m.materialIndex],R=Math.max(m.start,f.start),b=Math.min(d.count,Math.min(m.start+m.count,f.start+f.count));for(let v=R,S=b;v<S;v+=3){const T=v,O=v+1,C=v+2;o=checkGeometryIntersection(this,h,e,s,l,u,c,T,O,C),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,r.push(o))}}else{const y=Math.max(0,f.start),_=Math.min(d.count,f.start+f.count);for(let m=y,h=_;m<h;m+=3){const R=m,b=m+1,v=m+2;o=checkGeometryIntersection(this,n,e,s,l,u,c,R,b,v),o&&(o.faceIndex=Math.floor(m/3),r.push(o))}}}}function checkIntersection(t,e,r,s,o,i,n,p){let d;if(e.side===BackSide?d=s.intersectTriangle(n,i,o,!0,p):d=s.intersectTriangle(o,i,n,e.side===FrontSide,p),d===null)return null;_intersectionPointWorld.copy(p),_intersectionPointWorld.applyMatrix4(t.matrixWorld);const l=r.ray.origin.distanceTo(_intersectionPointWorld);return l<r.near||l>r.far?null:{distance:l,point:_intersectionPointWorld.clone(),object:t}}function checkGeometryIntersection(t,e,r,s,o,i,n,p,d,l){t.getVertexPosition(p,_vA$1),t.getVertexPosition(d,_vB$1),t.getVertexPosition(l,_vC$1);const u=checkIntersection(t,e,r,s,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(u){o&&(_uvA$1.fromBufferAttribute(o,p),_uvB$1.fromBufferAttribute(o,d),_uvC$1.fromBufferAttribute(o,l),u.uv=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),i&&(_uvA$1.fromBufferAttribute(i,p),_uvB$1.fromBufferAttribute(i,d),_uvC$1.fromBufferAttribute(i,l),u.uv1=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2),u.uv2=u.uv1),n&&(_normalA.fromBufferAttribute(n,p),_normalB.fromBufferAttribute(n,d),_normalC.fromBufferAttribute(n,l),u.normal=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_normalA,_normalB,_normalC,new Vector3),u.normal.dot(s.direction)>0&&u.normal.multiplyScalar(-1));const c={a:p,b:d,c:l,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,c.normal),u.face=c}return u}class BoxGeometry extends BufferGeometry{constructor(e=1,r=1,s=1,o=1,i=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:s,widthSegments:o,heightSegments:i,depthSegments:n};const p=this;o=Math.floor(o),i=Math.floor(i),n=Math.floor(n);const d=[],l=[],u=[],c=[];let g=0,f=0;y("z","y","x",-1,-1,s,r,e,n,i,0),y("z","y","x",1,-1,s,r,-e,n,i,1),y("x","z","y",1,1,e,s,r,o,n,2),y("x","z","y",1,-1,e,s,-r,o,n,3),y("x","y","z",1,-1,e,r,s,o,i,4),y("x","y","z",-1,-1,e,r,-s,o,i,5),this.setIndex(d),this.setAttribute("position",new Float32BufferAttribute(l,3)),this.setAttribute("normal",new Float32BufferAttribute(u,3)),this.setAttribute("uv",new Float32BufferAttribute(c,2));function y(_,m,h,R,b,v,S,T,O,C,M){const E=v/O,B=S/C,N=v/2,w=S/2,D=T/2,G=O+1,K=C+1;let j=0,Y=0;const J=new Vector3;for(let q=0;q<K;q++){const U=q*B-w;for(let W=0;W<G;W++){const ne=W*E-N;J[_]=ne*R,J[m]=U*b,J[h]=D,l.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[h]=T>0?1:-1,u.push(J.x,J.y,J.z),c.push(W/O),c.push(1-q/C),j+=1}}for(let q=0;q<C;q++)for(let U=0;U<O;U++){const W=g+U+G*q,ne=g+U+G*(q+1),ae=g+(U+1)+G*(q+1),se=g+(U+1)+G*q;d.push(W,ne,se),d.push(ne,ae,se),Y+=6}p.addGroup(f,Y,M),f+=Y,g+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(t){const e={};for(const r in t){e[r]={};for(const s in t[r]){const o=t[r][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][s]=null):e[r][s]=o.clone():Array.isArray(o)?e[r][s]=o.slice():e[r][s]=o}}return e}function mergeUniforms(t){const e={};for(let r=0;r<t.length;r++){const s=cloneUniforms(t[r]);for(const o in s)e[o]=s[o]}return e}function cloneUniformsGroups(t){const e=[];for(let r=0;r<t.length;r++)e.push(t[r].clone());return e}function getUnlitUniformColorSpace(t){return t.getRenderTarget()===null?t.outputColorSpace:LinearSRGBColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const o in this.uniforms){const n=this.uniforms[o].value;n&&n.isTexture?r.uniforms[o]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?r.uniforms[o]={type:"c",value:n.getHex()}:n&&n.isVector2?r.uniforms[o]={type:"v2",value:n.toArray()}:n&&n.isVector3?r.uniforms[o]={type:"v3",value:n.toArray()}:n&&n.isVector4?r.uniforms[o]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?r.uniforms[o]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?r.uniforms[o]={type:"m4",value:n.toArray()}:r.uniforms[o]={value:n}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(r.extensions=s),r}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(-r[8],-r[9],-r[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,r){super.updateWorldMatrix(e,r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class PerspectiveCamera extends Camera{constructor(e=50,r=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,r,s,o,i,n){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=s,this.view.offsetY=o,this.view.width=i,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,s=2*r,o=this.aspect*s,i=-.5*o;const n=this.view;if(this.view!==null&&this.view.enabled){const d=n.fullWidth,l=n.fullHeight;i+=n.offsetX*o/d,r-=n.offsetY*s/l,o*=n.width/d,s*=n.height/l}const p=this.filmOffset;p!==0&&(i+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+o,r,r-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,r,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null;const o=new PerspectiveCamera(fov,aspect,e,r);o.layers=this.layers,this.add(o);const i=new PerspectiveCamera(fov,aspect,e,r);i.layers=this.layers,this.add(i);const n=new PerspectiveCamera(fov,aspect,e,r);n.layers=this.layers,this.add(n);const p=new PerspectiveCamera(fov,aspect,e,r);p.layers=this.layers,this.add(p);const d=new PerspectiveCamera(fov,aspect,e,r);d.layers=this.layers,this.add(d);const l=new PerspectiveCamera(fov,aspect,e,r);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[s,o,i,n,p,d]=r;for(const l of r)this.remove(l);if(e===WebGLCoordinateSystem)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===WebGPUCoordinateSystem)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of r)this.add(l),l.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const s=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,i,n,p,d,l]=this.children,u=e.getRenderTarget(),c=e.toneMapping,g=e.xr.enabled;e.toneMapping=NoToneMapping,e.xr.enabled=!1;const f=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0),e.render(r,o),e.setRenderTarget(s,1),e.render(r,i),e.setRenderTarget(s,2),e.render(r,n),e.setRenderTarget(s,3),e.render(r,p),e.setRenderTarget(s,4),e.render(r,d),s.texture.generateMipmaps=f,e.setRenderTarget(s,5),e.render(r,l),e.setRenderTarget(u),e.toneMapping=c,e.xr.enabled=g,s.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e,r,s,o,i,n,p,d,l,u){e=e!==void 0?e:[],r=r!==void 0?r:CubeReflectionMapping,super(e,r,s,o,i,n,p,d,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];r.encoding!==void 0&&(warnOnce("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===sRGBEncoding?SRGBColorSpace:NoColorSpace),this.texture=new CubeTexture(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:LinearFilter}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new BoxGeometry(5,5,5),i=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:BackSide,blending:NoBlending});i.uniforms.tEquirect.value=r;const n=new Mesh(o,i),p=r.minFilter;return r.minFilter===LinearMipmapLinearFilter&&(r.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,n),r.minFilter=p,n.geometry.dispose(),n.material.dispose(),this}clear(e,r,s,o){const i=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(r,s,o);e.setRenderTarget(i)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,s,o){return this.normal.set(e,r,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,s){const o=_vector1.subVectors(s,r).cross(_vector2.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r){const s=e.delta(_vector1),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/o;return i<0||i>1?null:r.copy(e.start).addScaledVector(s,i)}intersectsLine(e){const r=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return r<0&&s>0||s<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const s=r||_normalMatrix.getNormalMatrix(e),o=this.coplanarPoint(_vector1).applyMatrix4(e),i=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$4=new Sphere,_vector$6=new Vector3;class Frustum{constructor(e=new Plane,r=new Plane,s=new Plane,o=new Plane,i=new Plane,n=new Plane){this.planes=[e,r,s,o,i,n]}set(e,r,s,o,i,n){const p=this.planes;return p[0].copy(e),p[1].copy(r),p[2].copy(s),p[3].copy(o),p[4].copy(i),p[5].copy(n),this}copy(e){const r=this.planes;for(let s=0;s<6;s++)r[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,r=WebGLCoordinateSystem){const s=this.planes,o=e.elements,i=o[0],n=o[1],p=o[2],d=o[3],l=o[4],u=o[5],c=o[6],g=o[7],f=o[8],y=o[9],_=o[10],m=o[11],h=o[12],R=o[13],b=o[14],v=o[15];if(s[0].setComponents(d-i,g-l,m-f,v-h).normalize(),s[1].setComponents(d+i,g+l,m+f,v+h).normalize(),s[2].setComponents(d+n,g+u,m+y,v+R).normalize(),s[3].setComponents(d-n,g-u,m-y,v-R).normalize(),s[4].setComponents(d-p,g-c,m-_,v-b).normalize(),r===WebGLCoordinateSystem)s[5].setComponents(d+p,g+c,m+_,v+b).normalize();else if(r===WebGPUCoordinateSystem)s[5].setComponents(p,c,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_sphere$4.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),_sphere$4.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_sphere$4)}intersectsSprite(e){return _sphere$4.center.set(0,0,0),_sphere$4.radius=.7071067811865476,_sphere$4.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$4)}intersectsSphere(e){const r=this.planes,s=e.center,o=-e.radius;for(let i=0;i<6;i++)if(r[i].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const r=this.planes;for(let s=0;s<6;s++){const o=r[s];if(_vector$6.x=o.normal.x>0?e.max.x:e.min.x,_vector$6.y=o.normal.y>0?e.max.y:e.min.y,_vector$6.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(_vector$6)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let s=0;s<6;s++)if(r[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let t=null,e=!1,r=null,s=null;function o(i,n){r(i,n),s=t.requestAnimationFrame(o)}return{start:function(){e!==!0&&r!==null&&(s=t.requestAnimationFrame(o),e=!0)},stop:function(){t.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(i){r=i},setContext:function(i){t=i}}}function WebGLAttributes(t,e){const r=e.isWebGL2,s=new WeakMap;function o(l,u){const c=l.array,g=l.usage,f=t.createBuffer();t.bindBuffer(u,f),t.bufferData(u,c,g),l.onUploadCallback();let y;if(c instanceof Float32Array)y=t.FLOAT;else if(c instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(r)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)y=t.SHORT;else if(c instanceof Uint32Array)y=t.UNSIGNED_INT;else if(c instanceof Int32Array)y=t.INT;else if(c instanceof Int8Array)y=t.BYTE;else if(c instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:y,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version}}function i(l,u,c){const g=u.array,f=u.updateRange;t.bindBuffer(c,l),f.count===-1?t.bufferSubData(c,0,g):(r?t.bufferSubData(c,f.offset*g.BYTES_PER_ELEMENT,g,f.offset,f.count):t.bufferSubData(c,f.offset*g.BYTES_PER_ELEMENT,g.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function n(l){return l.isInterleavedBufferAttribute&&(l=l.data),s.get(l)}function p(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=s.get(l);u&&(t.deleteBuffer(u.buffer),s.delete(l))}function d(l,u){if(l.isGLBufferAttribute){const g=s.get(l);(!g||g.version<l.version)&&s.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const c=s.get(l);c===void 0?s.set(l,o(l,u)):c.version<l.version&&(i(c.buffer,l,u),c.version=l.version)}return{get:n,remove:p,update:d}}class PlaneGeometry extends BufferGeometry{constructor(e=1,r=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:s,heightSegments:o};const i=e/2,n=r/2,p=Math.floor(s),d=Math.floor(o),l=p+1,u=d+1,c=e/p,g=r/d,f=[],y=[],_=[],m=[];for(let h=0;h<u;h++){const R=h*g-n;for(let b=0;b<l;b++){const v=b*c-i;y.push(v,-R,0),_.push(0,0,1),m.push(b/p),m.push(1-h/d)}}for(let h=0;h<d;h++)for(let R=0;R<p;R++){const b=R+l*h,v=R+l*(h+1),S=R+1+l*(h+1),T=R+1+l*h;f.push(b,v,T),f.push(v,S,T)}this.setIndex(f),this.setAttribute("position",new Float32BufferAttribute(y,3)),this.setAttribute("normal",new Float32BufferAttribute(_,3)),this.setAttribute("uv",new Float32BufferAttribute(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}var alphahash_fragment=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,envmap_physical_pars_fragment=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$e=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fragment$e=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vertex$d=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fragment$d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$b=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$a=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fragment$a=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$9=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$9=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$8=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fragment$8=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$7=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fragment$7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$6=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fragment$5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fragment$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$2=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0};function WebGLBackground(t,e,r,s,o,i,n){const p=new Color(0);let d=i===!0?0:1,l,u,c=null,g=0,f=null;function y(m,h){let R=!1,b=h.isScene===!0?h.background:null;switch(b&&b.isTexture&&(b=(h.backgroundBlurriness>0?r:e).get(b)),b===null?_(p,d):b&&b.isColor&&(_(b,1),R=!0),t.xr.getEnvironmentBlendMode()){case"opaque":R=!0;break;case"additive":s.buffers.color.setClear(0,0,0,1,n),R=!0;break;case"alpha-blend":s.buffers.color.setClear(0,0,0,0,n),R=!0;break}(t.autoClear||R)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),b&&(b.isCubeTexture||b.mapping===CubeUVReflectionMapping)?(u===void 0&&(u=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,O,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=b.colorSpace!==SRGBColorSpace,(c!==b||g!==b.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=b,g=b.version,f=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=b.colorSpace!==SRGBColorSpace,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(c!==b||g!==b.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,c=b,g=b.version,f=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,h){m.getRGB(_rgb,getUnlitUniformColorSpace(t)),s.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,h,n)}return{getClearColor:function(){return p},setClearColor:function(m,h=1){p.set(m),d=h,_(p,d)},getClearAlpha:function(){return d},setClearAlpha:function(m){d=m,_(p,d)},render:y}}function WebGLBindingStates(t,e,r,s){const o=t.getParameter(t.MAX_VERTEX_ATTRIBS),i=s.isWebGL2?null:e.get("OES_vertex_array_object"),n=s.isWebGL2||i!==null,p={},d=m(null);let l=d,u=!1;function c(D,G,K,j,Y){let J=!1;if(n){const q=_(j,K,G);l!==q&&(l=q,f(l.object)),J=h(D,j,K,Y),J&&R(D,j,K,Y)}else{const q=G.wireframe===!0;(l.geometry!==j.id||l.program!==K.id||l.wireframe!==q)&&(l.geometry=j.id,l.program=K.id,l.wireframe=q,J=!0)}Y!==null&&r.update(Y,t.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,C(D,G,K,j),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r.get(Y).buffer))}function g(){return s.isWebGL2?t.createVertexArray():i.createVertexArrayOES()}function f(D){return s.isWebGL2?t.bindVertexArray(D):i.bindVertexArrayOES(D)}function y(D){return s.isWebGL2?t.deleteVertexArray(D):i.deleteVertexArrayOES(D)}function _(D,G,K){const j=K.wireframe===!0;let Y=p[D.id];Y===void 0&&(Y={},p[D.id]=Y);let J=Y[G.id];J===void 0&&(J={},Y[G.id]=J);let q=J[j];return q===void 0&&(q=m(g()),J[j]=q),q}function m(D){const G=[],K=[],j=[];for(let Y=0;Y<o;Y++)G[Y]=0,K[Y]=0,j[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:j,object:D,attributes:{},index:null}}function h(D,G,K,j){const Y=l.attributes,J=G.attributes;let q=0;const U=K.getAttributes();for(const W in U)if(U[W].location>=0){const ae=Y[W];let se=J[W];if(se===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),ae===void 0||ae.attribute!==se||se&&ae.data!==se.data)return!0;q++}return l.attributesNum!==q||l.index!==j}function R(D,G,K,j){const Y={},J=G.attributes;let q=0;const U=K.getAttributes();for(const W in U)if(U[W].location>=0){let ae=J[W];ae===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor));const se={};se.attribute=ae,ae&&ae.data&&(se.data=ae.data),Y[W]=se,q++}l.attributes=Y,l.attributesNum=q,l.index=j}function b(){const D=l.newAttributes;for(let G=0,K=D.length;G<K;G++)D[G]=0}function v(D){S(D,0)}function S(D,G){const K=l.newAttributes,j=l.enabledAttributes,Y=l.attributeDivisors;K[D]=1,j[D]===0&&(t.enableVertexAttribArray(D),j[D]=1),Y[D]!==G&&((s.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),Y[D]=G)}function T(){const D=l.newAttributes,G=l.enabledAttributes;for(let K=0,j=G.length;K<j;K++)G[K]!==D[K]&&(t.disableVertexAttribArray(K),G[K]=0)}function O(D,G,K,j,Y,J,q){q===!0?t.vertexAttribIPointer(D,G,K,Y,J):t.vertexAttribPointer(D,G,K,j,Y,J)}function C(D,G,K,j){if(s.isWebGL2===!1&&(D.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const Y=j.attributes,J=K.getAttributes(),q=G.defaultAttributeValues;for(const U in J){const W=J[U];if(W.location>=0){let ne=Y[U];if(ne===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),ne!==void 0){const ae=ne.normalized,se=ne.itemSize,he=r.get(ne);if(he===void 0)continue;const Ee=he.buffer,_e=he.type,Be=he.bytesPerElement,Ke=s.isWebGL2===!0&&(_e===t.INT||_e===t.UNSIGNED_INT||ne.gpuType===IntType);if(ne.isInterleavedBufferAttribute){const Ae=ne.data,I=Ae.stride,Ve=ne.offset;if(Ae.isInstancedInterleavedBuffer){for(let ye=0;ye<W.locationSize;ye++)S(W.location+ye,Ae.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let ye=0;ye<W.locationSize;ye++)v(W.location+ye);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let ye=0;ye<W.locationSize;ye++)O(W.location+ye,se/W.locationSize,_e,ae,I*Be,(Ve+se/W.locationSize*ye)*Be,Ke)}else{if(ne.isInstancedBufferAttribute){for(let Ae=0;Ae<W.locationSize;Ae++)S(W.location+Ae,ne.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)v(W.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Ae=0;Ae<W.locationSize;Ae++)O(W.location+Ae,se/W.locationSize,_e,ae,se*Be,se/W.locationSize*Ae*Be,Ke)}}else if(q!==void 0){const ae=q[U];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(W.location,ae);break;case 3:t.vertexAttrib3fv(W.location,ae);break;case 4:t.vertexAttrib4fv(W.location,ae);break;default:t.vertexAttrib1fv(W.location,ae)}}}}T()}function M(){N();for(const D in p){const G=p[D];for(const K in G){const j=G[K];for(const Y in j)y(j[Y].object),delete j[Y];delete G[K]}delete p[D]}}function E(D){if(p[D.id]===void 0)return;const G=p[D.id];for(const K in G){const j=G[K];for(const Y in j)y(j[Y].object),delete j[Y];delete G[K]}delete p[D.id]}function B(D){for(const G in p){const K=p[G];if(K[D.id]===void 0)continue;const j=K[D.id];for(const Y in j)y(j[Y].object),delete j[Y];delete K[D.id]}}function N(){w(),u=!0,l!==d&&(l=d,f(l.object))}function w(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:c,reset:N,resetDefaultState:w,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:v,disableUnusedAttributes:T}}function WebGLBufferRenderer(t,e,r,s){const o=s.isWebGL2;let i;function n(l){i=l}function p(l,u){t.drawArrays(i,l,u),r.update(u,i,1)}function d(l,u,c){if(c===0)return;let g,f;if(o)g=t,f="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[f](i,l,u,c),r.update(u,i,c)}this.setMode=n,this.render=p,this.renderInstances=d}function WebGLCapabilities(t,e,r){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function i(O){if(O==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const n=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let p=r.precision!==void 0?r.precision:"highp";const d=i(p);d!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",d,"instead."),p=d);const l=n||e.has("WEBGL_draw_buffers"),u=r.logarithmicDepthBuffer===!0,c=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),R=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,v=n||e.has("OES_texture_float"),S=b&&v,T=n?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:n,drawBuffers:l,getMaxAnisotropy:o,getMaxPrecision:i,precision:p,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:g,maxTextureSize:f,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:R,vertexTextures:b,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:T}}function WebGLClipping(t){const e=this;let r=null,s=0,o=!1,i=!1;const n=new Plane,p=new Matrix3,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(c,g){const f=c.length!==0||g||s!==0||o;return o=g,s=c.length,f},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(c,g){r=u(c,g,0)},this.setState=function(c,g,f){const y=c.clippingPlanes,_=c.clipIntersection,m=c.clipShadows,h=t.get(c);if(!o||y===null||y.length===0||i&&!m)i?u(null):l();else{const R=i?0:s,b=R*4;let v=h.clippingState||null;d.value=v,v=u(y,g,b,f);for(let S=0;S!==b;++S)v[S]=r[S];h.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=R}};function l(){d.value!==r&&(d.value=r,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function u(c,g,f,y){const _=c!==null?c.length:0;let m=null;if(_!==0){if(m=d.value,y!==!0||m===null){const h=f+_*4,R=g.matrixWorldInverse;p.getNormalMatrix(R),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,v=f;b!==_;++b,v+=4)n.copy(c[b]).applyMatrix4(R,p),n.normal.toArray(m,v),m[v+3]=n.constant}d.value=m,d.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function WebGLCubeMaps(t){let e=new WeakMap;function r(n,p){return p===EquirectangularReflectionMapping?n.mapping=CubeReflectionMapping:p===EquirectangularRefractionMapping&&(n.mapping=CubeRefractionMapping),n}function s(n){if(n&&n.isTexture&&n.isRenderTargetTexture===!1){const p=n.mapping;if(p===EquirectangularReflectionMapping||p===EquirectangularRefractionMapping)if(e.has(n)){const d=e.get(n).texture;return r(d,n.mapping)}else{const d=n.image;if(d&&d.height>0){const l=new WebGLCubeRenderTarget(d.height/2);return l.fromEquirectangularTexture(t,n),e.set(n,l),n.addEventListener("dispose",o),r(l.texture,n.mapping)}else return null}}return n}function o(n){const p=n.target;p.removeEventListener("dispose",o);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function i(){e=new WeakMap}return{get:s,dispose:i}}class OrthographicCamera extends Camera{constructor(e=-1,r=1,s=1,o=-1,i=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=s,this.bottom=o,this.near=i,this.far=n,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,s,o,i,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=s,this.view.offsetY=o,this.view.width=i,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let i=s-e,n=s+e,p=o+r,d=o-r;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=l*this.view.offsetX,n=i+l*this.view.width,p-=u*this.view.offsetY,d=p-u*this.view.height}this.projectionMatrix.makeOrthographic(i,n,p,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(1,1,1),new Vector3(-1,1,1),new Vector3(1,1,-1),new Vector3(-1,1,-1),new Vector3(0,PHI,INV_PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(INV_PHI,0,PHI),new Vector3(-INV_PHI,0,PHI),new Vector3(PHI,INV_PHI,0),new Vector3(-PHI,INV_PHI,0)];class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,r=0,s=.1,o=100){_oldTarget=this._renderer.getRenderTarget(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,s,o,i),r>0&&this._blur(i,0,0,r),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget),e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget();const s=r||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,s={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},o=_createRenderTarget(e,r,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,r,s);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(i)),this._blurMaterial=_getBlurShader(i,e,r)}return o}_compileMaterial(e){const r=new Mesh(this._lodPlanes[0],e);this._renderer.compile(r,_flatCamera)}_sceneToCubeUV(e,r,s,o){const p=new PerspectiveCamera(90,1,r,s),d=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,g=u.toneMapping;u.getClearColor(_clearColor),u.toneMapping=NoToneMapping,u.autoClear=!1;const f=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),y=new Mesh(new BoxGeometry,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(_clearColor),_=!0);for(let h=0;h<6;h++){const R=h%3;R===0?(p.up.set(0,d[h],0),p.lookAt(l[h],0,0)):R===1?(p.up.set(0,0,d[h]),p.lookAt(0,l[h],0)):(p.up.set(0,d[h],0),p.lookAt(0,0,l[h]));const b=this._cubeSize;_setViewport(o,R*b,h>2?b:0,b,b),u.setRenderTarget(o),_&&u.render(y,p),u.render(e,p)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=g,u.autoClear=c,e.background=m}_textureToCubeUV(e,r){const s=this._renderer,o=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const i=o?this._cubemapMaterial:this._equirectMaterial,n=new Mesh(this._lodPlanes[0],i),p=i.uniforms;p.envMap.value=e;const d=this._cubeSize;_setViewport(r,0,0,3*d,2*d),s.setRenderTarget(r),s.render(n,_flatCamera)}_applyPMREM(e){const r=this._renderer,s=r.autoClear;r.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const i=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),n=_axisDirections[(o-1)%_axisDirections.length];this._blur(e,o-1,o,i,n)}r.autoClear=s}_blur(e,r,s,o,i){const n=this._pingPongRenderTarget;this._halfBlur(e,n,r,s,o,"latitudinal",i),this._halfBlur(n,e,s,s,o,"longitudinal",i)}_halfBlur(e,r,s,o,i,n,p){const d=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new Mesh(this._lodPlanes[o],l),g=l.uniforms,f=this._sizeLods[s]-1,y=isFinite(i)?Math.PI/(2*f):2*Math.PI/(2*MAX_SAMPLES-1),_=i/y,m=isFinite(i)?1+Math.floor(u*_):MAX_SAMPLES;m>MAX_SAMPLES&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${MAX_SAMPLES}`);const h=[];let R=0;for(let O=0;O<MAX_SAMPLES;++O){const C=O/_,M=Math.exp(-C*C/2);h.push(M),O===0?R+=M:O<m&&(R+=2*M)}for(let O=0;O<h.length;O++)h[O]=h[O]/R;g.envMap.value=e.texture,g.samples.value=m,g.weights.value=h,g.latitudinal.value=n==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:b}=this;g.dTheta.value=y,g.mipInt.value=b-s;const v=this._sizeLods[o],S=3*v*(o>b-LOD_MIN?o-b+LOD_MIN:0),T=4*(this._cubeSize-v);_setViewport(r,S,T,3*v,2*v),d.setRenderTarget(r),d.render(c,_flatCamera)}}function _createPlanes(t){const e=[],r=[],s=[];let o=t;const i=t-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let n=0;n<i;n++){const p=Math.pow(2,o);r.push(p);let d=1/p;n>t-LOD_MIN?d=EXTRA_LOD_SIGMA[n-t+LOD_MIN-1]:n===0&&(d=0),s.push(d);const l=1/(p-2),u=-l,c=1+l,g=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,y=6,_=3,m=2,h=1,R=new Float32Array(_*y*f),b=new Float32Array(m*y*f),v=new Float32Array(h*y*f);for(let T=0;T<f;T++){const O=T%3*2/3-1,C=T>2?0:-1,M=[O,C,0,O+2/3,C,0,O+2/3,C+1,0,O,C,0,O+2/3,C+1,0,O,C+1,0];R.set(M,_*y*T),b.set(g,m*y*T);const E=[T,T,T,T,T,T];v.set(E,h*y*T)}const S=new BufferGeometry;S.setAttribute("position",new BufferAttribute(R,_)),S.setAttribute("uv",new BufferAttribute(b,m)),S.setAttribute("faceIndex",new BufferAttribute(v,h)),e.push(S),o>LOD_MIN&&o--}return{lodPlanes:e,sizeLods:r,sigmas:s}}function _createRenderTarget(t,e,r){const s=new WebGLRenderTarget(t,e,r);return s.texture.mapping=CubeUVReflectionMapping,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function _setViewport(t,e,r,s,o){t.viewport.set(e,r,s,o),t.scissor.set(e,r,s,o)}function _getBlurShader(t,e,r){const s=new Float32Array(MAX_SAMPLES),o=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WebGLCubeUVMaps(t){let e=new WeakMap,r=null;function s(p){if(p&&p.isTexture){const d=p.mapping,l=d===EquirectangularReflectionMapping||d===EquirectangularRefractionMapping,u=d===CubeReflectionMapping||d===CubeRefractionMapping;if(l||u)if(p.isRenderTargetTexture&&p.needsPMREMUpdate===!0){p.needsPMREMUpdate=!1;let c=e.get(p);return r===null&&(r=new PMREMGenerator(t)),c=l?r.fromEquirectangular(p,c):r.fromCubemap(p,c),e.set(p,c),c.texture}else{if(e.has(p))return e.get(p).texture;{const c=p.image;if(l&&c&&c.height>0||u&&c&&o(c)){r===null&&(r=new PMREMGenerator(t));const g=l?r.fromEquirectangular(p):r.fromCubemap(p);return e.set(p,g),p.addEventListener("dispose",i),g.texture}else return null}}}return p}function o(p){let d=0;const l=6;for(let u=0;u<l;u++)p[u]!==void 0&&d++;return d===l}function i(p){const d=p.target;d.removeEventListener("dispose",i);const l=e.get(d);l!==void 0&&(e.delete(d),l.dispose())}function n(){e=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:s,dispose:n}}function WebGLExtensions(t){const e={};function r(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=t.getExtension(s)}return e[s]=o,o}return{has:function(s){return r(s)!==null},init:function(s){s.isWebGL2?r("EXT_color_buffer_float"):(r("WEBGL_depth_texture"),r("OES_texture_float"),r("OES_texture_half_float"),r("OES_texture_half_float_linear"),r("OES_standard_derivatives"),r("OES_element_index_uint"),r("OES_vertex_array_object"),r("ANGLE_instanced_arrays")),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture")},get:function(s){const o=r(s);return o===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function WebGLGeometries(t,e,r,s){const o={},i=new WeakMap;function n(c){const g=c.target;g.index!==null&&e.remove(g.index);for(const y in g.attributes)e.remove(g.attributes[y]);for(const y in g.morphAttributes){const _=g.morphAttributes[y];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}g.removeEventListener("dispose",n),delete o[g.id];const f=i.get(g);f&&(e.remove(f),i.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,r.memory.geometries--}function p(c,g){return o[g.id]===!0||(g.addEventListener("dispose",n),o[g.id]=!0,r.memory.geometries++),g}function d(c){const g=c.attributes;for(const y in g)e.update(g[y],t.ARRAY_BUFFER);const f=c.morphAttributes;for(const y in f){const _=f[y];for(let m=0,h=_.length;m<h;m++)e.update(_[m],t.ARRAY_BUFFER)}}function l(c){const g=[],f=c.index,y=c.attributes.position;let _=0;if(f!==null){const R=f.array;_=f.version;for(let b=0,v=R.length;b<v;b+=3){const S=R[b+0],T=R[b+1],O=R[b+2];g.push(S,T,T,O,O,S)}}else{const R=y.array;_=y.version;for(let b=0,v=R.length/3-1;b<v;b+=3){const S=b+0,T=b+1,O=b+2;g.push(S,T,T,O,O,S)}}const m=new(arrayNeedsUint32(g)?Uint32BufferAttribute:Uint16BufferAttribute)(g,1);m.version=_;const h=i.get(c);h&&e.remove(h),i.set(c,m)}function u(c){const g=i.get(c);if(g){const f=c.index;f!==null&&g.version<f.version&&l(c)}else l(c);return i.get(c)}return{get:p,update:d,getWireframeAttribute:u}}function WebGLIndexedBufferRenderer(t,e,r,s){const o=s.isWebGL2;let i;function n(g){i=g}let p,d;function l(g){p=g.type,d=g.bytesPerElement}function u(g,f){t.drawElements(i,f,p,g*d),r.update(f,i,1)}function c(g,f,y){if(y===0)return;let _,m;if(o)_=t,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](i,f,p,g*d,y),r.update(f,i,y)}this.setMode=n,this.setIndex=l,this.render=u,this.renderInstances=c}function WebGLInfo(t){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function s(i,n,p){switch(r.calls++,n){case t.TRIANGLES:r.triangles+=p*(i/3);break;case t.LINES:r.lines+=p*(i/2);break;case t.LINE_STRIP:r.lines+=p*(i-1);break;case t.LINE_LOOP:r.lines+=p*i;break;case t.POINTS:r.points+=p*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n);break}}function o(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:o,update:s}}function numericalSort(t,e){return t[0]-e[0]}function absNumericalSort(t,e){return Math.abs(e[1])-Math.abs(t[1])}function WebGLMorphtargets(t,e,r){const s={},o=new Float32Array(8),i=new WeakMap,n=new Vector4,p=[];for(let l=0;l<8;l++)p[l]=[l,0];function d(l,u,c){const g=l.morphTargetInfluences;if(e.isWebGL2===!0){const y=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=y!==void 0?y.length:0;let m=i.get(u);if(m===void 0||m.count!==_){let G=function(){w.dispose(),i.delete(u),u.removeEventListener("dispose",G)};var f=G;m!==void 0&&m.texture.dispose();const b=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],O=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let M=0;b===!0&&(M=1),v===!0&&(M=2),S===!0&&(M=3);let E=u.attributes.position.count*M,B=1;E>e.maxTextureSize&&(B=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const N=new Float32Array(E*B*4*_),w=new DataArrayTexture(N,E,B,_);w.type=FloatType,w.needsUpdate=!0;const D=M*4;for(let K=0;K<_;K++){const j=T[K],Y=O[K],J=C[K],q=E*B*4*K;for(let U=0;U<j.count;U++){const W=U*D;b===!0&&(n.fromBufferAttribute(j,U),N[q+W+0]=n.x,N[q+W+1]=n.y,N[q+W+2]=n.z,N[q+W+3]=0),v===!0&&(n.fromBufferAttribute(Y,U),N[q+W+4]=n.x,N[q+W+5]=n.y,N[q+W+6]=n.z,N[q+W+7]=0),S===!0&&(n.fromBufferAttribute(J,U),N[q+W+8]=n.x,N[q+W+9]=n.y,N[q+W+10]=n.z,N[q+W+11]=J.itemSize===4?n.w:1)}}m={count:_,texture:w,size:new Vector2(E,B)},i.set(u,m),u.addEventListener("dispose",G)}let h=0;for(let b=0;b<g.length;b++)h+=g[b];const R=u.morphTargetsRelative?1:1-h;c.getUniforms().setValue(t,"morphTargetBaseInfluence",R),c.getUniforms().setValue(t,"morphTargetInfluences",g),c.getUniforms().setValue(t,"morphTargetsTexture",m.texture,r),c.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const y=g===void 0?0:g.length;let _=s[u.id];if(_===void 0||_.length!==y){_=[];for(let v=0;v<y;v++)_[v]=[v,0];s[u.id]=_}for(let v=0;v<y;v++){const S=_[v];S[0]=v,S[1]=g[v]}_.sort(absNumericalSort);for(let v=0;v<8;v++)v<y&&_[v][1]?(p[v][0]=_[v][0],p[v][1]=_[v][1]):(p[v][0]=Number.MAX_SAFE_INTEGER,p[v][1]=0);p.sort(numericalSort);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let R=0;for(let v=0;v<8;v++){const S=p[v],T=S[0],O=S[1];T!==Number.MAX_SAFE_INTEGER&&O?(m&&u.getAttribute("morphTarget"+v)!==m[T]&&u.setAttribute("morphTarget"+v,m[T]),h&&u.getAttribute("morphNormal"+v)!==h[T]&&u.setAttribute("morphNormal"+v,h[T]),o[v]=O,R+=O):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),h&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),o[v]=0)}const b=u.morphTargetsRelative?1:1-R;c.getUniforms().setValue(t,"morphTargetBaseInfluence",b),c.getUniforms().setValue(t,"morphTargetInfluences",o)}}return{update:d}}function WebGLObjects(t,e,r,s){let o=new WeakMap;function i(d){const l=s.render.frame,u=d.geometry,c=e.get(d,u);if(o.get(c)!==l&&(e.update(c),o.set(c,l)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),o.get(d)!==l&&(r.update(d.instanceMatrix,t.ARRAY_BUFFER),d.instanceColor!==null&&r.update(d.instanceColor,t.ARRAY_BUFFER),o.set(d,l))),d.isSkinnedMesh){const g=d.skeleton;o.get(g)!==l&&(g.update(),o.set(g,l))}return c}function n(){o=new WeakMap}function p(d){const l=d.target;l.removeEventListener("dispose",p),r.remove(l.instanceMatrix),l.instanceColor!==null&&r.remove(l.instanceColor)}return{update:i,dispose:n}}const emptyTexture=new Texture,emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(t,e,r){const s=t[0];if(s<=0||s>0)return t;const o=e*r;let i=arrayCacheF32[o];if(i===void 0&&(i=new Float32Array(o),arrayCacheF32[o]=i),e!==0){s.toArray(i,0);for(let n=1,p=0;n!==e;++n)p+=r,t[n].toArray(i,p)}return i}function arraysEqual(t,e){if(t.length!==e.length)return!1;for(let r=0,s=t.length;r<s;r++)if(t[r]!==e[r])return!1;return!0}function copyArray(t,e){for(let r=0,s=e.length;r<s;r++)t[r]=e[r]}function allocTexUnits(t,e){let r=arrayCacheI32[e];r===void 0&&(r=new Int32Array(e),arrayCacheI32[e]=r);for(let s=0;s!==e;++s)r[s]=t.allocateTextureUnit();return r}function setValueV1f(t,e){const r=this.cache;r[0]!==e&&(t.uniform1f(this.addr,e),r[0]=e)}function setValueV2f(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(arraysEqual(r,e))return;t.uniform2fv(this.addr,e),copyArray(r,e)}}function setValueV3f(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(arraysEqual(r,e))return;t.uniform3fv(this.addr,e),copyArray(r,e)}}function setValueV4f(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(arraysEqual(r,e))return;t.uniform4fv(this.addr,e),copyArray(r,e)}}function setValueM2(t,e){const r=this.cache,s=e.elements;if(s===void 0){if(arraysEqual(r,e))return;t.uniformMatrix2fv(this.addr,!1,e),copyArray(r,e)}else{if(arraysEqual(r,s))return;mat2array.set(s),t.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(r,s)}}function setValueM3(t,e){const r=this.cache,s=e.elements;if(s===void 0){if(arraysEqual(r,e))return;t.uniformMatrix3fv(this.addr,!1,e),copyArray(r,e)}else{if(arraysEqual(r,s))return;mat3array.set(s),t.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(r,s)}}function setValueM4(t,e){const r=this.cache,s=e.elements;if(s===void 0){if(arraysEqual(r,e))return;t.uniformMatrix4fv(this.addr,!1,e),copyArray(r,e)}else{if(arraysEqual(r,s))return;mat4array.set(s),t.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(r,s)}}function setValueV1i(t,e){const r=this.cache;r[0]!==e&&(t.uniform1i(this.addr,e),r[0]=e)}function setValueV2i(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(arraysEqual(r,e))return;t.uniform2iv(this.addr,e),copyArray(r,e)}}function setValueV3i(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(arraysEqual(r,e))return;t.uniform3iv(this.addr,e),copyArray(r,e)}}function setValueV4i(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(arraysEqual(r,e))return;t.uniform4iv(this.addr,e),copyArray(r,e)}}function setValueV1ui(t,e){const r=this.cache;r[0]!==e&&(t.uniform1ui(this.addr,e),r[0]=e)}function setValueV2ui(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(arraysEqual(r,e))return;t.uniform2uiv(this.addr,e),copyArray(r,e)}}function setValueV3ui(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(arraysEqual(r,e))return;t.uniform3uiv(this.addr,e),copyArray(r,e)}}function setValueV4ui(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(arraysEqual(r,e))return;t.uniform4uiv(this.addr,e),copyArray(r,e)}}function setValueT1(t,e,r){const s=this.cache,o=r.allocateTextureUnit();s[0]!==o&&(t.uniform1i(this.addr,o),s[0]=o),r.setTexture2D(e||emptyTexture,o)}function setValueT3D1(t,e,r){const s=this.cache,o=r.allocateTextureUnit();s[0]!==o&&(t.uniform1i(this.addr,o),s[0]=o),r.setTexture3D(e||empty3dTexture,o)}function setValueT6(t,e,r){const s=this.cache,o=r.allocateTextureUnit();s[0]!==o&&(t.uniform1i(this.addr,o),s[0]=o),r.setTextureCube(e||emptyCubeTexture,o)}function setValueT2DArray1(t,e,r){const s=this.cache,o=r.allocateTextureUnit();s[0]!==o&&(t.uniform1i(this.addr,o),s[0]=o),r.setTexture2DArray(e||emptyArrayTexture,o)}function getSingularSetter(t){switch(t){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(t,e){t.uniform1fv(this.addr,e)}function setValueV2fArray(t,e){const r=flatten(e,this.size,2);t.uniform2fv(this.addr,r)}function setValueV3fArray(t,e){const r=flatten(e,this.size,3);t.uniform3fv(this.addr,r)}function setValueV4fArray(t,e){const r=flatten(e,this.size,4);t.uniform4fv(this.addr,r)}function setValueM2Array(t,e){const r=flatten(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,r)}function setValueM3Array(t,e){const r=flatten(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,r)}function setValueM4Array(t,e){const r=flatten(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,r)}function setValueV1iArray(t,e){t.uniform1iv(this.addr,e)}function setValueV2iArray(t,e){t.uniform2iv(this.addr,e)}function setValueV3iArray(t,e){t.uniform3iv(this.addr,e)}function setValueV4iArray(t,e){t.uniform4iv(this.addr,e)}function setValueV1uiArray(t,e){t.uniform1uiv(this.addr,e)}function setValueV2uiArray(t,e){t.uniform2uiv(this.addr,e)}function setValueV3uiArray(t,e){t.uniform3uiv(this.addr,e)}function setValueV4uiArray(t,e){t.uniform4uiv(this.addr,e)}function setValueT1Array(t,e,r){const s=this.cache,o=e.length,i=allocTexUnits(r,o);arraysEqual(s,i)||(t.uniform1iv(this.addr,i),copyArray(s,i));for(let n=0;n!==o;++n)r.setTexture2D(e[n]||emptyTexture,i[n])}function setValueT3DArray(t,e,r){const s=this.cache,o=e.length,i=allocTexUnits(r,o);arraysEqual(s,i)||(t.uniform1iv(this.addr,i),copyArray(s,i));for(let n=0;n!==o;++n)r.setTexture3D(e[n]||empty3dTexture,i[n])}function setValueT6Array(t,e,r){const s=this.cache,o=e.length,i=allocTexUnits(r,o);arraysEqual(s,i)||(t.uniform1iv(this.addr,i),copyArray(s,i));for(let n=0;n!==o;++n)r.setTextureCube(e[n]||emptyCubeTexture,i[n])}function setValueT2DArrayArray(t,e,r){const s=this.cache,o=e.length,i=allocTexUnits(r,o);arraysEqual(s,i)||(t.uniform1iv(this.addr,i),copyArray(s,i));for(let n=0;n!==o;++n)r.setTexture2DArray(e[n]||emptyArrayTexture,i[n])}function getPureArraySetter(t){switch(t){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,r,s){this.id=e,this.addr=s,this.cache=[],this.setValue=getSingularSetter(r.type)}}class PureArrayUniform{constructor(e,r,s){this.id=e,this.addr=s,this.cache=[],this.size=r.size,this.setValue=getPureArraySetter(r.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,s){const o=this.seq;for(let i=0,n=o.length;i!==n;++i){const p=o[i];p.setValue(e,r[p.id],s)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(t,e){t.seq.push(e),t.map[e.id]=e}function parseUniform(t,e,r){const s=t.name,o=s.length;for(RePathPart.lastIndex=0;;){const i=RePathPart.exec(s),n=RePathPart.lastIndex;let p=i[1];const d=i[2]==="]",l=i[3];if(d&&(p=p|0),l===void 0||l==="["&&n+2===o){addUniform(r,l===void 0?new SingleUniform(p,t,e):new PureArrayUniform(p,t,e));break}else{let c=r.map[p];c===void 0&&(c=new StructuredUniform(p),addUniform(r,c)),r=c}}}class WebGLUniforms{constructor(e,r){this.seq=[],this.map={};const s=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const i=e.getActiveUniform(r,o),n=e.getUniformLocation(r,i.name);parseUniform(i,n,this)}}setValue(e,r,s,o){const i=this.map[r];i!==void 0&&i.setValue(e,s,o)}setOptional(e,r,s){const o=r[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,r,s,o){for(let i=0,n=r.length;i!==n;++i){const p=r[i],d=s[p.id];d.needsUpdate!==!1&&p.setValue(e,d.value,o)}}static seqWithValue(e,r){const s=[];for(let o=0,i=e.length;o!==i;++o){const n=e[o];n.id in r&&s.push(n)}return s}}function WebGLShader(t,e,r){const s=t.createShader(e);return t.shaderSource(s,r),t.compileShader(s),s}let programIdCount=0;function handleSource(t,e){const r=t.split(`
`),s=[],o=Math.max(e-6,0),i=Math.min(e+6,r.length);for(let n=o;n<i;n++){const p=n+1;s.push(`${p===e?">":" "} ${p}: ${r[n]}`)}return s.join(`
`)}function getEncodingComponents(t){switch(t){case LinearSRGBColorSpace:return["Linear","( value )"];case SRGBColorSpace:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function getShaderErrors(t,e,r){const s=t.getShaderParameter(e,t.COMPILE_STATUS),o=t.getShaderInfoLog(e).trim();if(s&&o==="")return"";const i=/ERROR: 0:(\d+)/.exec(o);if(i){const n=parseInt(i[1]);return r.toUpperCase()+`

`+o+`

`+handleSource(t.getShaderSource(e),n)}else return o}function getTexelEncodingFunction(t,e){const r=getEncodingComponents(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+r[0]+r[1]+"; }"}function getToneMappingFunction(t,e){let r;switch(e){case LinearToneMapping:r="Linear";break;case ReinhardToneMapping:r="Reinhard";break;case CineonToneMapping:r="OptimizedCineon";break;case ACESFilmicToneMapping:r="ACESFilmic";break;case CustomToneMapping:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),r="Linear"}return"vec3 "+t+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}function generateExtensions(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(filterEmptyLine).join(`
`)}function generateDefines(t){const e=[];for(const r in t){const s=t[r];s!==!1&&e.push("#define "+r+" "+s)}return e.join(`
`)}function fetchAttributeLocations(t,e){const r={},s=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const i=t.getActiveAttrib(e,o),n=i.name;let p=1;i.type===t.FLOAT_MAT2&&(p=2),i.type===t.FLOAT_MAT3&&(p=3),i.type===t.FLOAT_MAT4&&(p=4),r[n]={type:i.type,location:t.getAttribLocation(e,n),locationSize:p}}return r}function filterEmptyLine(t){return t!==""}function replaceLightNums(t,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(t){return t.replace(includePattern,includeReplacer)}const shaderChunkMap=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function includeReplacer(t,e){let r=ShaderChunk[e];if(r===void 0){const s=shaderChunkMap.get(e);if(s!==void 0)r=ShaderChunk[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return resolveIncludes(r)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(t){return t.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(t,e,r,s){let o="";for(let i=parseInt(e);i<parseInt(r);i++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return o}function generatePrecision(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),7*16)),texelHeight:s,maxMip:r}}function WebGLProgram(t,e,r,s){const o=t.getContext(),i=r.defines;let n=r.vertexShader,p=r.fragmentShader;const d=generateShadowMapTypeDefine(r),l=generateEnvMapTypeDefine(r),u=generateEnvMapModeDefine(r),c=generateEnvMapBlendingDefine(r),g=generateCubeUVSize(r),f=r.isWebGL2?"":generateExtensions(r),y=generateDefines(i),_=o.createProgram();let m,h,R=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(m=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y].filter(filterEmptyLine).join(`
`),m.length>0&&(m+=`
`),h=[f,"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y].filter(filterEmptyLine).join(`
`),h.length>0&&(h+=`
`)):(m=[generatePrecision(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y,r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+u:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors&&r.isWebGL2?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+d:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.useLegacyLights?"#define LEGACY_LIGHTS":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.logarithmicDepthBuffer&&r.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),h=[f,generatePrecision(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+l:"",r.envMap?"#define "+u:"",r.envMap?"#define "+c:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+d:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.useLegacyLights?"#define LEGACY_LIGHTS":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.logarithmicDepthBuffer&&r.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",r.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",r.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",r.outputColorSpace),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),n=resolveIncludes(n),n=replaceLightNums(n,r),n=replaceClippingPlaneNums(n,r),p=resolveIncludes(p),p=replaceLightNums(p,r),p=replaceClippingPlaneNums(p,r),n=unrollLoops(n),p=unrollLoops(p),r.isWebGL2&&r.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",r.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=R+m+n,v=R+h+p,S=WebGLShader(o,o.VERTEX_SHADER,b),T=WebGLShader(o,o.FRAGMENT_SHADER,v);if(o.attachShader(_,S),o.attachShader(_,T),r.index0AttributeName!==void 0?o.bindAttribLocation(_,0,r.index0AttributeName):r.morphTargets===!0&&o.bindAttribLocation(_,0,"position"),o.linkProgram(_),t.debug.checkShaderErrors){const M=o.getProgramInfoLog(_).trim(),E=o.getShaderInfoLog(S).trim(),B=o.getShaderInfoLog(T).trim();let N=!0,w=!0;if(o.getProgramParameter(_,o.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(o,_,S,T);else{const D=getShaderErrors(o,S,"vertex"),G=getShaderErrors(o,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(_,o.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+D+`
`+G)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(E===""||B==="")&&(w=!1);w&&(this.diagnostics={runnable:N,programLog:M,vertexShader:{log:E,prefix:m},fragmentShader:{log:B,prefix:h}})}o.deleteShader(S),o.deleteShader(T);let O;this.getUniforms=function(){return O===void 0&&(O=new WebGLUniforms(o,_)),O};let C;return this.getAttributes=function(){return C===void 0&&(C=fetchAttributeLocations(o,_)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(_),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}let _id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const r=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(r),i=this._getShaderStage(s),n=this._getShaderCacheForMaterial(e);return n.has(o)===!1&&(n.add(o),o.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const s of r)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let s=r.get(e);return s===void 0&&(s=new Set,r.set(e,s)),s}_getShaderStage(e){const r=this.shaderCache;let s=r.get(e);return s===void 0&&(s=new WebGLShaderStage(e),r.set(e,s)),s}}class WebGLShaderStage{constructor(e){this.id=_id++,this.code=e,this.usedTimes=0}}function WebGLPrograms(t,e,r,s,o,i,n){const p=new Layers,d=new WebGLShaderCache,l=[],u=o.isWebGL2,c=o.logarithmicDepthBuffer,g=o.vertexTextures;let f=o.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,E,B,N,w){const D=N.fog,G=w.geometry,K=M.isMeshStandardMaterial?N.environment:null,j=(M.isMeshStandardMaterial?r:e).get(M.envMap||K),Y=j&&j.mapping===CubeUVReflectionMapping?j.image.height:null,J=y[M.type];M.precision!==null&&(f=o.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,U=q!==void 0?q.length:0;let W=0;G.morphAttributes.position!==void 0&&(W=1),G.morphAttributes.normal!==void 0&&(W=2),G.morphAttributes.color!==void 0&&(W=3);let ne,ae,se,he;if(J){const Ze=ShaderLib[J];ne=Ze.vertexShader,ae=Ze.fragmentShader}else ne=M.vertexShader,ae=M.fragmentShader,d.update(M),se=d.getVertexShaderID(M),he=d.getFragmentShaderID(M);const Ee=t.getRenderTarget(),_e=w.isInstancedMesh===!0,Be=!!M.map,Ke=!!M.matcap,Ae=!!j,I=!!M.aoMap,Ve=!!M.lightMap,ye=!!M.bumpMap,Te=!!M.normalMap,ve=!!M.displacementMap,Ie=!!M.emissiveMap,Ce=!!M.metalnessMap,Oe=!!M.roughnessMap,ke=M.anisotropy>0,He=M.clearcoat>0,Xe=M.iridescence>0,A=M.sheen>0,F=M.transmission>0,V=ke&&!!M.anisotropyMap,Z=He&&!!M.clearcoatMap,Q=He&&!!M.clearcoatNormalMap,re=He&&!!M.clearcoatRoughnessMap,ce=Xe&&!!M.iridescenceMap,ie=Xe&&!!M.iridescenceThicknessMap,$=A&&!!M.sheenColorMap,ue=A&&!!M.sheenRoughnessMap,ge=!!M.specularMap,me=!!M.specularColorMap,de=!!M.specularIntensityMap,le=F&&!!M.transmissionMap,Fe=F&&!!M.thicknessMap,De=!!M.gradientMap,L=!!M.alphaMap,te=M.alphaTest>0,z=!!M.alphaHash,ee=!!M.extensions,oe=!!G.attributes.uv1,we=!!G.attributes.uv2,Pe=!!G.attributes.uv3;return{isWebGL2:u,shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:ne,fragmentShader:ae,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:_e,instancingColor:_e&&w.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Ee===null?t.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:LinearSRGBColorSpace,map:Be,matcap:Ke,envMap:Ae,envMapMode:Ae&&j.mapping,envMapCubeUVHeight:Y,aoMap:I,lightMap:Ve,bumpMap:ye,normalMap:Te,displacementMap:g&&ve,emissiveMap:Ie,normalMapObjectSpace:Te&&M.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:Te&&M.normalMapType===TangentSpaceNormalMap,metalnessMap:Ce,roughnessMap:Oe,anisotropy:ke,anisotropyMap:V,clearcoat:He,clearcoatMap:Z,clearcoatNormalMap:Q,clearcoatRoughnessMap:re,iridescence:Xe,iridescenceMap:ce,iridescenceThicknessMap:ie,sheen:A,sheenColorMap:$,sheenRoughnessMap:ue,specularMap:ge,specularColorMap:me,specularIntensityMap:de,transmission:F,transmissionMap:le,thicknessMap:Fe,gradientMap:De,opaque:M.transparent===!1&&M.blending===NormalBlending,alphaMap:L,alphaTest:te,alphaHash:z,combine:M.combine,mapUv:Be&&_(M.map.channel),aoMapUv:I&&_(M.aoMap.channel),lightMapUv:Ve&&_(M.lightMap.channel),bumpMapUv:ye&&_(M.bumpMap.channel),normalMapUv:Te&&_(M.normalMap.channel),displacementMapUv:ve&&_(M.displacementMap.channel),emissiveMapUv:Ie&&_(M.emissiveMap.channel),metalnessMapUv:Ce&&_(M.metalnessMap.channel),roughnessMapUv:Oe&&_(M.roughnessMap.channel),anisotropyMapUv:V&&_(M.anisotropyMap.channel),clearcoatMapUv:Z&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Q&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:$&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ue&&_(M.sheenRoughnessMap.channel),specularMapUv:ge&&_(M.specularMap.channel),specularColorMapUv:me&&_(M.specularColorMap.channel),specularIntensityMapUv:de&&_(M.specularIntensityMap.channel),transmissionMapUv:le&&_(M.transmissionMap.channel),thicknessMapUv:Fe&&_(M.thicknessMap.channel),alphaMapUv:L&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Te||ke),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:oe,vertexUv2s:we,vertexUv3s:Pe,pointsUvs:w.isPoints===!0&&!!G.attributes.uv&&(Be||L),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:w.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:W,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:M.toneMapped?t.toneMapping:NoToneMapping,useLegacyLights:t.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===DoubleSide,flipSided:M.side===BackSide,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ee&&M.extensions.derivatives===!0,extensionFragDepth:ee&&M.extensions.fragDepth===!0,extensionDrawBuffers:ee&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ee&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||s.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)E.push(B),E.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(R(E,M),b(E,M),E.push(t.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function R(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function b(M,E){p.disableAll(),E.isWebGL2&&p.enable(0),E.supportsVertexTextures&&p.enable(1),E.instancing&&p.enable(2),E.instancingColor&&p.enable(3),E.matcap&&p.enable(4),E.envMap&&p.enable(5),E.normalMapObjectSpace&&p.enable(6),E.normalMapTangentSpace&&p.enable(7),E.clearcoat&&p.enable(8),E.iridescence&&p.enable(9),E.alphaTest&&p.enable(10),E.vertexColors&&p.enable(11),E.vertexAlphas&&p.enable(12),E.vertexUv1s&&p.enable(13),E.vertexUv2s&&p.enable(14),E.vertexUv3s&&p.enable(15),E.vertexTangents&&p.enable(16),E.anisotropy&&p.enable(17),M.push(p.mask),p.disableAll(),E.fog&&p.enable(0),E.useFog&&p.enable(1),E.flatShading&&p.enable(2),E.logarithmicDepthBuffer&&p.enable(3),E.skinning&&p.enable(4),E.morphTargets&&p.enable(5),E.morphNormals&&p.enable(6),E.morphColors&&p.enable(7),E.premultipliedAlpha&&p.enable(8),E.shadowMapEnabled&&p.enable(9),E.useLegacyLights&&p.enable(10),E.doubleSided&&p.enable(11),E.flipSided&&p.enable(12),E.useDepthPacking&&p.enable(13),E.dithering&&p.enable(14),E.transmission&&p.enable(15),E.sheen&&p.enable(16),E.opaque&&p.enable(17),E.pointsUvs&&p.enable(18),M.push(p.mask)}function v(M){const E=y[M.type];let B;if(E){const N=ShaderLib[E];B=UniformsUtils.clone(N.uniforms)}else B=M.uniforms;return B}function S(M,E){let B;for(let N=0,w=l.length;N<w;N++){const D=l[N];if(D.cacheKey===E){B=D,++B.usedTimes;break}}return B===void 0&&(B=new WebGLProgram(t,E,M,i),l.push(B)),B}function T(M){if(--M.usedTimes===0){const E=l.indexOf(M);l[E]=l[l.length-1],l.pop(),M.destroy()}}function O(M){d.remove(M)}function C(){d.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:S,releaseProgram:T,releaseShaderCache:O,programs:l,dispose:C}}function WebGLProperties(){let t=new WeakMap;function e(i){let n=t.get(i);return n===void 0&&(n={},t.set(i,n)),n}function r(i){t.delete(i)}function s(i,n,p){t.get(i)[n]=p}function o(){t=new WeakMap}return{get:e,remove:r,update:s,dispose:o}}function painterSortStable(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function reversePainterSortStable(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function WebGLRenderList(){const t=[];let e=0;const r=[],s=[],o=[];function i(){e=0,r.length=0,s.length=0,o.length=0}function n(c,g,f,y,_,m){let h=t[e];return h===void 0?(h={id:c.id,object:c,geometry:g,material:f,groupOrder:y,renderOrder:c.renderOrder,z:_,group:m},t[e]=h):(h.id=c.id,h.object=c,h.geometry=g,h.material=f,h.groupOrder=y,h.renderOrder=c.renderOrder,h.z=_,h.group=m),e++,h}function p(c,g,f,y,_,m){const h=n(c,g,f,y,_,m);f.transmission>0?s.push(h):f.transparent===!0?o.push(h):r.push(h)}function d(c,g,f,y,_,m){const h=n(c,g,f,y,_,m);f.transmission>0?s.unshift(h):f.transparent===!0?o.unshift(h):r.unshift(h)}function l(c,g){r.length>1&&r.sort(c||painterSortStable),s.length>1&&s.sort(g||reversePainterSortStable),o.length>1&&o.sort(g||reversePainterSortStable)}function u(){for(let c=e,g=t.length;c<g;c++){const f=t[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:r,transmissive:s,transparent:o,init:i,push:p,unshift:d,finish:u,sort:l}}function WebGLRenderLists(){let t=new WeakMap;function e(s,o){const i=t.get(s);let n;return i===void 0?(n=new WebGLRenderList,t.set(s,[n])):o>=i.length?(n=new WebGLRenderList,i.push(n)):n=i[o],n}function r(){t=new WeakMap}return{get:e,dispose:r}}function UniformsCache(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new Vector3,color:new Color};break;case"SpotLight":r={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":r={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":r={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return t[e.id]=r,r}}}function ShadowUniformsCache(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=r,r}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function WebGLLights(t,e){const r=new UniformsCache,s=ShadowUniformsCache(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)o.probe.push(new Vector3);const i=new Vector3,n=new Matrix4,p=new Matrix4;function d(u,c){let g=0,f=0,y=0;for(let B=0;B<9;B++)o.probe[B].set(0,0,0);let _=0,m=0,h=0,R=0,b=0,v=0,S=0,T=0,O=0,C=0;u.sort(shadowCastingAndTexturingLightsFirst);const M=c===!0?Math.PI:1;for(let B=0,N=u.length;B<N;B++){const w=u[B],D=w.color,G=w.intensity,K=w.distance,j=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)g+=D.r*G*M,f+=D.g*G*M,y+=D.b*G*M;else if(w.isLightProbe)for(let Y=0;Y<9;Y++)o.probe[Y].addScaledVector(w.sh.coefficients[Y],G);else if(w.isDirectionalLight){const Y=r.get(w);if(Y.color.copy(w.color).multiplyScalar(w.intensity*M),w.castShadow){const J=w.shadow,q=s.get(w);q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,o.directionalShadow[_]=q,o.directionalShadowMap[_]=j,o.directionalShadowMatrix[_]=w.shadow.matrix,v++}o.directional[_]=Y,_++}else if(w.isSpotLight){const Y=r.get(w);Y.position.setFromMatrixPosition(w.matrixWorld),Y.color.copy(D).multiplyScalar(G*M),Y.distance=K,Y.coneCos=Math.cos(w.angle),Y.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),Y.decay=w.decay,o.spot[h]=Y;const J=w.shadow;if(w.map&&(o.spotLightMap[O]=w.map,O++,J.updateMatrices(w),w.castShadow&&C++),o.spotLightMatrix[h]=J.matrix,w.castShadow){const q=s.get(w);q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,o.spotShadow[h]=q,o.spotShadowMap[h]=j,T++}h++}else if(w.isRectAreaLight){const Y=r.get(w);Y.color.copy(D).multiplyScalar(G),Y.halfWidth.set(w.width*.5,0,0),Y.halfHeight.set(0,w.height*.5,0),o.rectArea[R]=Y,R++}else if(w.isPointLight){const Y=r.get(w);if(Y.color.copy(w.color).multiplyScalar(w.intensity*M),Y.distance=w.distance,Y.decay=w.decay,w.castShadow){const J=w.shadow,q=s.get(w);q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,o.pointShadow[m]=q,o.pointShadowMap[m]=j,o.pointShadowMatrix[m]=w.shadow.matrix,S++}o.point[m]=Y,m++}else if(w.isHemisphereLight){const Y=r.get(w);Y.skyColor.copy(w.color).multiplyScalar(G*M),Y.groundColor.copy(w.groundColor).multiplyScalar(G*M),o.hemi[b]=Y,b++}}R>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,o.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=UniformsLib.LTC_HALF_1,o.rectAreaLTC2=UniformsLib.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=g,o.ambient[1]=f,o.ambient[2]=y;const E=o.hash;(E.directionalLength!==_||E.pointLength!==m||E.spotLength!==h||E.rectAreaLength!==R||E.hemiLength!==b||E.numDirectionalShadows!==v||E.numPointShadows!==S||E.numSpotShadows!==T||E.numSpotMaps!==O)&&(o.directional.length=_,o.spot.length=h,o.rectArea.length=R,o.point.length=m,o.hemi.length=b,o.directionalShadow.length=v,o.directionalShadowMap.length=v,o.pointShadow.length=S,o.pointShadowMap.length=S,o.spotShadow.length=T,o.spotShadowMap.length=T,o.directionalShadowMatrix.length=v,o.pointShadowMatrix.length=S,o.spotLightMatrix.length=T+O-C,o.spotLightMap.length=O,o.numSpotLightShadowsWithMaps=C,E.directionalLength=_,E.pointLength=m,E.spotLength=h,E.rectAreaLength=R,E.hemiLength=b,E.numDirectionalShadows=v,E.numPointShadows=S,E.numSpotShadows=T,E.numSpotMaps=O,o.version=nextVersion++)}function l(u,c){let g=0,f=0,y=0,_=0,m=0;const h=c.matrixWorldInverse;for(let R=0,b=u.length;R<b;R++){const v=u[R];if(v.isDirectionalLight){const S=o.directional[g];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(h),g++}else if(v.isSpotLight){const S=o.spot[y];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(h),y++}else if(v.isRectAreaLight){const S=o.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(h),p.identity(),n.copy(v.matrixWorld),n.premultiply(h),p.extractRotation(n),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(p),S.halfHeight.applyMatrix4(p),_++}else if(v.isPointLight){const S=o.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(h),f++}else if(v.isHemisphereLight){const S=o.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(h),m++}}}return{setup:d,setupView:l,state:o}}function WebGLRenderState(t,e){const r=new WebGLLights(t,e),s=[],o=[];function i(){s.length=0,o.length=0}function n(c){s.push(c)}function p(c){o.push(c)}function d(c){r.setup(s,c)}function l(c){r.setupView(s,c)}return{init:i,state:{lightsArray:s,shadowsArray:o,lights:r},setupLights:d,setupLightsView:l,pushLight:n,pushShadow:p}}function WebGLRenderStates(t,e){let r=new WeakMap;function s(i,n=0){const p=r.get(i);let d;return p===void 0?(d=new WebGLRenderState(t,e),r.set(i,[d])):n>=p.length?(d=new WebGLRenderState(t,e),p.push(d)):d=p[n],d}function o(){r=new WeakMap}return{get:s,dispose:o}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WebGLShadowMap(t,e,r){let s=new Frustum;const o=new Vector2,i=new Vector2,n=new Vector4,p=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),d=new MeshDistanceMaterial,l={},u=r.maxTextureSize,c={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},g=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),f=g.clone();f.defines.HORIZONTAL_PASS=1;const y=new BufferGeometry;y.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mesh(y,g),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap;let h=this.type;this.render=function(S,T,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const C=t.getRenderTarget(),M=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),B=t.state;B.setBlending(NoBlending),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=h!==VSMShadowMap&&this.type===VSMShadowMap,w=h===VSMShadowMap&&this.type!==VSMShadowMap;for(let D=0,G=S.length;D<G;D++){const K=S[D],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const Y=j.getFrameExtents();if(o.multiply(Y),i.copy(j.mapSize),(o.x>u||o.y>u)&&(o.x>u&&(i.x=Math.floor(u/Y.x),o.x=i.x*Y.x,j.mapSize.x=i.x),o.y>u&&(i.y=Math.floor(u/Y.y),o.y=i.y*Y.y,j.mapSize.y=i.y)),j.map===null||N===!0||w===!0){const q=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};j.map!==null&&j.map.dispose(),j.map=new WebGLRenderTarget(o.x,o.y,q),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}t.setRenderTarget(j.map),t.clear();const J=j.getViewportCount();for(let q=0;q<J;q++){const U=j.getViewport(q);n.set(i.x*U.x,i.y*U.y,i.x*U.z,i.y*U.w),B.viewport(n),j.updateMatrices(K,q),s=j.getFrustum(),v(T,O,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===VSMShadowMap&&R(j,O),j.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(C,M,E)};function R(S,T){const O=e.update(_);g.defines.VSM_SAMPLES!==S.blurSamples&&(g.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,g.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new WebGLRenderTarget(o.x,o.y)),g.uniforms.shadow_pass.value=S.map.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(T,null,O,g,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(T,null,O,f,_,null)}function b(S,T,O,C){let M=null;const E=O.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)M=E;else if(M=O.isPointLight===!0?d:p,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=M.uuid,N=T.uuid;let w=l[B];w===void 0&&(w={},l[B]=w);let D=w[N];D===void 0&&(D=M.clone(),w[N]=D),M=D}if(M.visible=T.visible,M.wireframe=T.wireframe,C===VSMShadowMap?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:c[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=t.properties.get(M);B.light=O}return M}function v(S,T,O,C,M){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===VSMShadowMap)&&(!S.frustumCulled||s.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld);const N=e.update(S),w=S.material;if(Array.isArray(w)){const D=N.groups;for(let G=0,K=D.length;G<K;G++){const j=D[G],Y=w[j.materialIndex];if(Y&&Y.visible){const J=b(S,Y,C,M);t.renderBufferDirect(O,null,N,J,S,j)}}}else if(w.visible){const D=b(S,w,C,M);t.renderBufferDirect(O,null,N,D,S,null)}}const B=S.children;for(let N=0,w=B.length;N<w;N++)v(B[N],T,O,C,M)}}function WebGLState(t,e,r){const s=r.isWebGL2;function o(){let L=!1;const te=new Vector4;let z=null;const ee=new Vector4(0,0,0,0);return{setMask:function(oe){z!==oe&&!L&&(t.colorMask(oe,oe,oe,oe),z=oe)},setLocked:function(oe){L=oe},setClear:function(oe,we,Pe,je,Ze){Ze===!0&&(oe*=je,we*=je,Pe*=je),te.set(oe,we,Pe,je),ee.equals(te)===!1&&(t.clearColor(oe,we,Pe,je),ee.copy(te))},reset:function(){L=!1,z=null,ee.set(-1,0,0,0)}}}function i(){let L=!1,te=null,z=null,ee=null;return{setTest:function(oe){oe?Ee(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(oe){te!==oe&&!L&&(t.depthMask(oe),te=oe)},setFunc:function(oe){if(z!==oe){switch(oe){case NeverDepth:t.depthFunc(t.NEVER);break;case AlwaysDepth:t.depthFunc(t.ALWAYS);break;case LessDepth:t.depthFunc(t.LESS);break;case LessEqualDepth:t.depthFunc(t.LEQUAL);break;case EqualDepth:t.depthFunc(t.EQUAL);break;case GreaterEqualDepth:t.depthFunc(t.GEQUAL);break;case GreaterDepth:t.depthFunc(t.GREATER);break;case NotEqualDepth:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}z=oe}},setLocked:function(oe){L=oe},setClear:function(oe){ee!==oe&&(t.clearDepth(oe),ee=oe)},reset:function(){L=!1,te=null,z=null,ee=null}}}function n(){let L=!1,te=null,z=null,ee=null,oe=null,we=null,Pe=null,je=null,Ze=null;return{setTest:function(Ge){L||(Ge?Ee(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(Ge){te!==Ge&&!L&&(t.stencilMask(Ge),te=Ge)},setFunc:function(Ge,Qe,$e){(z!==Ge||ee!==Qe||oe!==$e)&&(t.stencilFunc(Ge,Qe,$e),z=Ge,ee=Qe,oe=$e)},setOp:function(Ge,Qe,$e){(we!==Ge||Pe!==Qe||je!==$e)&&(t.stencilOp(Ge,Qe,$e),we=Ge,Pe=Qe,je=$e)},setLocked:function(Ge){L=Ge},setClear:function(Ge){Ze!==Ge&&(t.clearStencil(Ge),Ze=Ge)},reset:function(){L=!1,te=null,z=null,ee=null,oe=null,we=null,Pe=null,je=null,Ze=null}}}const p=new o,d=new i,l=new n,u=new WeakMap,c=new WeakMap;let g={},f={},y=new WeakMap,_=[],m=null,h=!1,R=null,b=null,v=null,S=null,T=null,O=null,C=null,M=!1,E=null,B=null,N=null,w=null,D=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=j>=2);let J=null,q={};const U=t.getParameter(t.SCISSOR_BOX),W=t.getParameter(t.VIEWPORT),ne=new Vector4().fromArray(U),ae=new Vector4().fromArray(W);function se(L,te,z,ee){const oe=new Uint8Array(4),we=t.createTexture();t.bindTexture(L,we),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<z;Pe++)s&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(te,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(te+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return we}const he={};he[t.TEXTURE_2D]=se(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(he[t.TEXTURE_2D_ARRAY]=se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=se(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),p.setClear(0,0,0,1),d.setClear(1),l.setClear(0),Ee(t.DEPTH_TEST),d.setFunc(LessEqualDepth),ve(!1),Ie(CullFaceBack),Ee(t.CULL_FACE),ye(NoBlending);function Ee(L){g[L]!==!0&&(t.enable(L),g[L]=!0)}function _e(L){g[L]!==!1&&(t.disable(L),g[L]=!1)}function Be(L,te){return f[L]!==te?(t.bindFramebuffer(L,te),f[L]=te,s&&(L===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=te),L===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=te)),!0):!1}function Ke(L,te){let z=_,ee=!1;if(L)if(z=y.get(te),z===void 0&&(z=[],y.set(te,z)),L.isWebGLMultipleRenderTargets){const oe=L.texture;if(z.length!==oe.length||z[0]!==t.COLOR_ATTACHMENT0){for(let we=0,Pe=oe.length;we<Pe;we++)z[we]=t.COLOR_ATTACHMENT0+we;z.length=oe.length,ee=!0}}else z[0]!==t.COLOR_ATTACHMENT0&&(z[0]=t.COLOR_ATTACHMENT0,ee=!0);else z[0]!==t.BACK&&(z[0]=t.BACK,ee=!0);ee&&(r.isWebGL2?t.drawBuffers(z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))}function Ae(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const I={[AddEquation]:t.FUNC_ADD,[SubtractEquation]:t.FUNC_SUBTRACT,[ReverseSubtractEquation]:t.FUNC_REVERSE_SUBTRACT};if(s)I[MinEquation]=t.MIN,I[MaxEquation]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(I[MinEquation]=L.MIN_EXT,I[MaxEquation]=L.MAX_EXT)}const Ve={[ZeroFactor]:t.ZERO,[OneFactor]:t.ONE,[SrcColorFactor]:t.SRC_COLOR,[SrcAlphaFactor]:t.SRC_ALPHA,[SrcAlphaSaturateFactor]:t.SRC_ALPHA_SATURATE,[DstColorFactor]:t.DST_COLOR,[DstAlphaFactor]:t.DST_ALPHA,[OneMinusSrcColorFactor]:t.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:t.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:t.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:t.ONE_MINUS_DST_ALPHA};function ye(L,te,z,ee,oe,we,Pe,je){if(L===NoBlending){h===!0&&(_e(t.BLEND),h=!1);return}if(h===!1&&(Ee(t.BLEND),h=!0),L!==CustomBlending){if(L!==R||je!==M){if((b!==AddEquation||T!==AddEquation)&&(t.blendEquation(t.FUNC_ADD),b=AddEquation,T=AddEquation),je)switch(L){case NormalBlending:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:t.blendFunc(t.ONE,t.ONE);break;case SubtractiveBlending:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case MultiplyBlending:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case NormalBlending:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case SubtractiveBlending:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case MultiplyBlending:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,S=null,O=null,C=null,R=L,M=je}return}oe=oe||te,we=we||z,Pe=Pe||ee,(te!==b||oe!==T)&&(t.blendEquationSeparate(I[te],I[oe]),b=te,T=oe),(z!==v||ee!==S||we!==O||Pe!==C)&&(t.blendFuncSeparate(Ve[z],Ve[ee],Ve[we],Ve[Pe]),v=z,S=ee,O=we,C=Pe),R=L,M=!1}function Te(L,te){L.side===DoubleSide?_e(t.CULL_FACE):Ee(t.CULL_FACE);let z=L.side===BackSide;te&&(z=!z),ve(z),L.blending===NormalBlending&&L.transparent===!1?ye(NoBlending):ye(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),d.setFunc(L.depthFunc),d.setTest(L.depthTest),d.setMask(L.depthWrite),p.setMask(L.colorWrite);const ee=L.stencilWrite;l.setTest(ee),ee&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Oe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ee(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function ve(L){E!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),E=L)}function Ie(L){L!==CullFaceNone?(Ee(t.CULL_FACE),L!==B&&(L===CullFaceBack?t.cullFace(t.BACK):L===CullFaceFront?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),B=L}function Ce(L){L!==N&&(K&&t.lineWidth(L),N=L)}function Oe(L,te,z){L?(Ee(t.POLYGON_OFFSET_FILL),(w!==te||D!==z)&&(t.polygonOffset(te,z),w=te,D=z)):_e(t.POLYGON_OFFSET_FILL)}function ke(L){L?Ee(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function He(L){L===void 0&&(L=t.TEXTURE0+G-1),J!==L&&(t.activeTexture(L),J=L)}function Xe(L,te,z){z===void 0&&(J===null?z=t.TEXTURE0+G-1:z=J);let ee=q[z];ee===void 0&&(ee={type:void 0,texture:void 0},q[z]=ee),(ee.type!==L||ee.texture!==te)&&(J!==z&&(t.activeTexture(z),J=z),t.bindTexture(L,te||he[L]),ee.type=L,ee.texture=te)}function A(){const L=q[J];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function F(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(L){ne.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ne.copy(L))}function de(L){ae.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ae.copy(L))}function le(L,te){let z=c.get(te);z===void 0&&(z=new WeakMap,c.set(te,z));let ee=z.get(L);ee===void 0&&(ee=t.getUniformBlockIndex(te,L.name),z.set(L,ee))}function Fe(L,te){const ee=c.get(te).get(L);u.get(te)!==ee&&(t.uniformBlockBinding(te,ee,L.__bindingPointIndex),u.set(te,ee))}function De(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),s===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),g={},J=null,q={},f={},y=new WeakMap,_=[],m=null,h=!1,R=null,b=null,v=null,S=null,T=null,O=null,C=null,M=!1,E=null,B=null,N=null,w=null,D=null,ne.set(0,0,t.canvas.width,t.canvas.height),ae.set(0,0,t.canvas.width,t.canvas.height),p.reset(),d.reset(),l.reset()}return{buffers:{color:p,depth:d,stencil:l},enable:Ee,disable:_e,bindFramebuffer:Be,drawBuffers:Ke,useProgram:Ae,setBlending:ye,setMaterial:Te,setFlipSided:ve,setCullFace:Ie,setLineWidth:Ce,setPolygonOffset:Oe,setScissorTest:ke,activeTexture:He,bindTexture:Xe,unbindTexture:A,compressedTexImage2D:F,compressedTexImage3D:V,texImage2D:ue,texImage3D:ge,updateUBOMapping:le,uniformBlockBinding:Fe,texStorage2D:ie,texStorage3D:$,texSubImage2D:Z,texSubImage3D:Q,compressedTexSubImage2D:re,compressedTexSubImage3D:ce,scissor:me,viewport:de,reset:De}}function WebGLTextures(t,e,r,s,o,i,n){const p=o.isWebGL2,d=o.maxTextures,l=o.maxCubemapSize,u=o.maxTextureSize,c=o.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let _;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(A,F){return h?new OffscreenCanvas(A,F):createElementNS("canvas")}function b(A,F,V,Z){let Q=1;if((A.width>Z||A.height>Z)&&(Q=Z/Math.max(A.width,A.height)),Q<1||F===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const re=F?floorPowerOfTwo:Math.floor,ce=re(Q*A.width),ie=re(Q*A.height);_===void 0&&(_=R(ce,ie));const $=V?R(ce,ie):_;return $.width=ce,$.height=ie,$.getContext("2d").drawImage(A,0,0,ce,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ce+"x"+ie+")."),$}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return isPowerOfTwo(A.width)&&isPowerOfTwo(A.height)}function S(A){return p?!1:A.wrapS!==ClampToEdgeWrapping||A.wrapT!==ClampToEdgeWrapping||A.minFilter!==NearestFilter&&A.minFilter!==LinearFilter}function T(A,F){return A.generateMipmaps&&F&&A.minFilter!==NearestFilter&&A.minFilter!==LinearFilter}function O(A){t.generateMipmap(A)}function C(A,F,V,Z,Q=!1){if(p===!1)return F;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re=F;return F===t.RED&&(V===t.FLOAT&&(re=t.R32F),V===t.HALF_FLOAT&&(re=t.R16F),V===t.UNSIGNED_BYTE&&(re=t.R8)),F===t.RG&&(V===t.FLOAT&&(re=t.RG32F),V===t.HALF_FLOAT&&(re=t.RG16F),V===t.UNSIGNED_BYTE&&(re=t.RG8)),F===t.RGBA&&(V===t.FLOAT&&(re=t.RGBA32F),V===t.HALF_FLOAT&&(re=t.RGBA16F),V===t.UNSIGNED_BYTE&&(re=Z===SRGBColorSpace&&Q===!1?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)),(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(A,F,V){return T(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==NearestFilter&&A.minFilter!==LinearFilter?Math.log2(Math.max(F.width,F.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?F.mipmaps.length:1}function E(A){return A===NearestFilter||A===NearestMipmapNearestFilter||A===NearestMipmapLinearFilter?t.NEAREST:t.LINEAR}function B(A){const F=A.target;F.removeEventListener("dispose",B),w(F),F.isVideoTexture&&y.delete(F)}function N(A){const F=A.target;F.removeEventListener("dispose",N),G(F)}function w(A){const F=s.get(A);if(F.__webglInit===void 0)return;const V=A.source,Z=m.get(V);if(Z){const Q=Z[F.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(A),Object.keys(Z).length===0&&m.delete(V)}s.remove(A)}function D(A){const F=s.get(A);t.deleteTexture(F.__webglTexture);const V=A.source,Z=m.get(V);delete Z[F.__cacheKey],n.memory.textures--}function G(A){const F=A.texture,V=s.get(A),Z=s.get(F);if(Z.__webglTexture!==void 0&&(t.deleteTexture(Z.__webglTexture),n.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)t.deleteFramebuffer(V.__webglFramebuffer[Q]),V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[Q]);else{if(t.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let Q=0;Q<V.__webglColorRenderbuffer.length;Q++)V.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[Q]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,re=F.length;Q<re;Q++){const ce=s.get(F[Q]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),n.memory.textures--),s.remove(F[Q])}s.remove(F),s.remove(A)}let K=0;function j(){K=0}function Y(){const A=K;return A>=d&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+d),K+=1,A}function J(A){const F=[];return F.push(A.wrapS),F.push(A.wrapT),F.push(A.wrapR||0),F.push(A.magFilter),F.push(A.minFilter),F.push(A.anisotropy),F.push(A.internalFormat),F.push(A.format),F.push(A.type),F.push(A.generateMipmaps),F.push(A.premultiplyAlpha),F.push(A.flipY),F.push(A.unpackAlignment),F.push(A.colorSpace),F.join()}function q(A,F){const V=s.get(A);if(A.isVideoTexture&&He(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(V,A,F);return}}r.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+F)}function U(A,F){const V=s.get(A);if(A.version>0&&V.__version!==A.version){Be(V,A,F);return}r.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+F)}function W(A,F){const V=s.get(A);if(A.version>0&&V.__version!==A.version){Be(V,A,F);return}r.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+F)}function ne(A,F){const V=s.get(A);if(A.version>0&&V.__version!==A.version){Ke(V,A,F);return}r.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+F)}const ae={[RepeatWrapping]:t.REPEAT,[ClampToEdgeWrapping]:t.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:t.MIRRORED_REPEAT},se={[NearestFilter]:t.NEAREST,[NearestMipmapNearestFilter]:t.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:t.NEAREST_MIPMAP_LINEAR,[LinearFilter]:t.LINEAR,[LinearMipmapNearestFilter]:t.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:t.LINEAR_MIPMAP_LINEAR},he={[NeverCompare]:t.NEVER,[AlwaysCompare]:t.ALWAYS,[LessCompare]:t.LESS,[LessEqualCompare]:t.LEQUAL,[EqualCompare]:t.EQUAL,[GreaterEqualCompare]:t.GEQUAL,[GreaterCompare]:t.GREATER,[NotEqualCompare]:t.NOTEQUAL};function Ee(A,F,V){if(V?(t.texParameteri(A,t.TEXTURE_WRAP_S,ae[F.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ae[F.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ae[F.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,se[F.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,se[F.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(F.wrapS!==ClampToEdgeWrapping||F.wrapT!==ClampToEdgeWrapping)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,E(F.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,E(F.minFilter)),F.minFilter!==NearestFilter&&F.minFilter!==LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),F.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,he[F.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(F.magFilter===NearestFilter||F.minFilter!==NearestMipmapLinearFilter&&F.minFilter!==LinearMipmapLinearFilter||F.type===FloatType&&e.has("OES_texture_float_linear")===!1||p===!1&&F.type===HalfFloatType&&e.has("OES_texture_half_float_linear")===!1)return;(F.anisotropy>1||s.get(F).__currentAnisotropy)&&(t.texParameterf(A,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,o.getMaxAnisotropy())),s.get(F).__currentAnisotropy=F.anisotropy)}}function _e(A,F){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,F.addEventListener("dispose",B));const Z=F.source;let Q=m.get(Z);Q===void 0&&(Q={},m.set(Z,Q));const re=J(F);if(re!==A.__cacheKey){Q[re]===void 0&&(Q[re]={texture:t.createTexture(),usedTimes:0},n.memory.textures++,V=!0),Q[re].usedTimes++;const ce=Q[A.__cacheKey];ce!==void 0&&(Q[A.__cacheKey].usedTimes--,ce.usedTimes===0&&D(F)),A.__cacheKey=re,A.__webglTexture=Q[re].texture}return V}function Be(A,F,V){let Z=t.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),F.isData3DTexture&&(Z=t.TEXTURE_3D);const Q=_e(A,F),re=F.source;r.bindTexture(Z,A.__webglTexture,t.TEXTURE0+V);const ce=s.get(re);if(re.version!==ce.__version||Q===!0){r.activeTexture(t.TEXTURE0+V),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,F.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,F.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ie=S(F)&&v(F.image)===!1;let $=b(F.image,ie,!1,u);$=Xe(F,$);const ue=v($)||p,ge=i.convert(F.format,F.colorSpace);let me=i.convert(F.type),de=C(F.internalFormat,ge,me,F.colorSpace);Ee(Z,F,ue);let le;const Fe=F.mipmaps,De=p&&F.isVideoTexture!==!0,L=ce.__version===void 0||Q===!0,te=M(F,$,ue);if(F.isDepthTexture)de=t.DEPTH_COMPONENT,p?F.type===FloatType?de=t.DEPTH_COMPONENT32F:F.type===UnsignedIntType?de=t.DEPTH_COMPONENT24:F.type===UnsignedInt248Type?de=t.DEPTH24_STENCIL8:de=t.DEPTH_COMPONENT16:F.type===FloatType&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),F.format===DepthFormat&&de===t.DEPTH_COMPONENT&&F.type!==UnsignedShortType&&F.type!==UnsignedIntType&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),F.type=UnsignedIntType,me=i.convert(F.type)),F.format===DepthStencilFormat&&de===t.DEPTH_COMPONENT&&(de=t.DEPTH_STENCIL,F.type!==UnsignedInt248Type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),F.type=UnsignedInt248Type,me=i.convert(F.type))),L&&(De?r.texStorage2D(t.TEXTURE_2D,1,de,$.width,$.height):r.texImage2D(t.TEXTURE_2D,0,de,$.width,$.height,0,ge,me,null));else if(F.isDataTexture)if(Fe.length>0&&ue){De&&L&&r.texStorage2D(t.TEXTURE_2D,te,de,Fe[0].width,Fe[0].height);for(let z=0,ee=Fe.length;z<ee;z++)le=Fe[z],De?r.texSubImage2D(t.TEXTURE_2D,z,0,0,le.width,le.height,ge,me,le.data):r.texImage2D(t.TEXTURE_2D,z,de,le.width,le.height,0,ge,me,le.data);F.generateMipmaps=!1}else De?(L&&r.texStorage2D(t.TEXTURE_2D,te,de,$.width,$.height),r.texSubImage2D(t.TEXTURE_2D,0,0,0,$.width,$.height,ge,me,$.data)):r.texImage2D(t.TEXTURE_2D,0,de,$.width,$.height,0,ge,me,$.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){De&&L&&r.texStorage3D(t.TEXTURE_2D_ARRAY,te,de,Fe[0].width,Fe[0].height,$.depth);for(let z=0,ee=Fe.length;z<ee;z++)le=Fe[z],F.format!==RGBAFormat?ge!==null?De?r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,le.width,le.height,$.depth,ge,le.data,0,0):r.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,de,le.width,le.height,$.depth,0,le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?r.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,le.width,le.height,$.depth,ge,me,le.data):r.texImage3D(t.TEXTURE_2D_ARRAY,z,de,le.width,le.height,$.depth,0,ge,me,le.data)}else{De&&L&&r.texStorage2D(t.TEXTURE_2D,te,de,Fe[0].width,Fe[0].height);for(let z=0,ee=Fe.length;z<ee;z++)le=Fe[z],F.format!==RGBAFormat?ge!==null?De?r.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,le.width,le.height,ge,le.data):r.compressedTexImage2D(t.TEXTURE_2D,z,de,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?r.texSubImage2D(t.TEXTURE_2D,z,0,0,le.width,le.height,ge,me,le.data):r.texImage2D(t.TEXTURE_2D,z,de,le.width,le.height,0,ge,me,le.data)}else if(F.isDataArrayTexture)De?(L&&r.texStorage3D(t.TEXTURE_2D_ARRAY,te,de,$.width,$.height,$.depth),r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ge,me,$.data)):r.texImage3D(t.TEXTURE_2D_ARRAY,0,de,$.width,$.height,$.depth,0,ge,me,$.data);else if(F.isData3DTexture)De?(L&&r.texStorage3D(t.TEXTURE_3D,te,de,$.width,$.height,$.depth),r.texSubImage3D(t.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ge,me,$.data)):r.texImage3D(t.TEXTURE_3D,0,de,$.width,$.height,$.depth,0,ge,me,$.data);else if(F.isFramebufferTexture){if(L)if(De)r.texStorage2D(t.TEXTURE_2D,te,de,$.width,$.height);else{let z=$.width,ee=$.height;for(let oe=0;oe<te;oe++)r.texImage2D(t.TEXTURE_2D,oe,de,z,ee,0,ge,me,null),z>>=1,ee>>=1}}else if(Fe.length>0&&ue){De&&L&&r.texStorage2D(t.TEXTURE_2D,te,de,Fe[0].width,Fe[0].height);for(let z=0,ee=Fe.length;z<ee;z++)le=Fe[z],De?r.texSubImage2D(t.TEXTURE_2D,z,0,0,ge,me,le):r.texImage2D(t.TEXTURE_2D,z,de,ge,me,le);F.generateMipmaps=!1}else De?(L&&r.texStorage2D(t.TEXTURE_2D,te,de,$.width,$.height),r.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,me,$)):r.texImage2D(t.TEXTURE_2D,0,de,ge,me,$);T(F,ue)&&O(Z),ce.__version=re.version,F.onUpdate&&F.onUpdate(F)}A.__version=F.version}function Ke(A,F,V){if(F.image.length!==6)return;const Z=_e(A,F),Q=F.source;r.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+V);const re=s.get(Q);if(Q.version!==re.__version||Z===!0){r.activeTexture(t.TEXTURE0+V),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,F.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,F.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ce=F.isCompressedTexture||F.image[0].isCompressedTexture,ie=F.image[0]&&F.image[0].isDataTexture,$=[];for(let z=0;z<6;z++)!ce&&!ie?$[z]=b(F.image[z],!1,!0,l):$[z]=ie?F.image[z].image:F.image[z],$[z]=Xe(F,$[z]);const ue=$[0],ge=v(ue)||p,me=i.convert(F.format,F.colorSpace),de=i.convert(F.type),le=C(F.internalFormat,me,de,F.colorSpace),Fe=p&&F.isVideoTexture!==!0,De=re.__version===void 0||Z===!0;let L=M(F,ue,ge);Ee(t.TEXTURE_CUBE_MAP,F,ge);let te;if(ce){Fe&&De&&r.texStorage2D(t.TEXTURE_CUBE_MAP,L,le,ue.width,ue.height);for(let z=0;z<6;z++){te=$[z].mipmaps;for(let ee=0;ee<te.length;ee++){const oe=te[ee];F.format!==RGBAFormat?me!==null?Fe?r.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ee,0,0,oe.width,oe.height,me,oe.data):r.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ee,le,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ee,0,0,oe.width,oe.height,me,de,oe.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ee,le,oe.width,oe.height,0,me,de,oe.data)}}}else{te=F.mipmaps,Fe&&De&&(te.length>0&&L++,r.texStorage2D(t.TEXTURE_CUBE_MAP,L,le,$[0].width,$[0].height));for(let z=0;z<6;z++)if(ie){Fe?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,$[z].width,$[z].height,me,de,$[z].data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,le,$[z].width,$[z].height,0,me,de,$[z].data);for(let ee=0;ee<te.length;ee++){const we=te[ee].image[z].image;Fe?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ee+1,0,0,we.width,we.height,me,de,we.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ee+1,le,we.width,we.height,0,me,de,we.data)}}else{Fe?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,me,de,$[z]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,le,me,de,$[z]);for(let ee=0;ee<te.length;ee++){const oe=te[ee];Fe?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ee+1,0,0,me,de,oe.image[z]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ee+1,le,me,de,oe.image[z])}}}T(F,ge)&&O(t.TEXTURE_CUBE_MAP),re.__version=Q.version,F.onUpdate&&F.onUpdate(F)}A.__version=F.version}function Ae(A,F,V,Z,Q){const re=i.convert(V.format,V.colorSpace),ce=i.convert(V.type),ie=C(V.internalFormat,re,ce,V.colorSpace);s.get(F).__hasExternalTextures||(Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,ie,F.width,F.height,F.depth,0,re,ce,null):r.texImage2D(Q,0,ie,F.width,F.height,0,re,ce,null)),r.bindFramebuffer(t.FRAMEBUFFER,A),ke(F)?g.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,Q,s.get(V).__webglTexture,0,Oe(F)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,Q,s.get(V).__webglTexture,0),r.bindFramebuffer(t.FRAMEBUFFER,null)}function I(A,F,V){if(t.bindRenderbuffer(t.RENDERBUFFER,A),F.depthBuffer&&!F.stencilBuffer){let Z=t.DEPTH_COMPONENT16;if(V||ke(F)){const Q=F.depthTexture;Q&&Q.isDepthTexture&&(Q.type===FloatType?Z=t.DEPTH_COMPONENT32F:Q.type===UnsignedIntType&&(Z=t.DEPTH_COMPONENT24));const re=Oe(F);ke(F)?g.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,Z,F.width,F.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,Z,F.width,F.height)}else t.renderbufferStorage(t.RENDERBUFFER,Z,F.width,F.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(F.depthBuffer&&F.stencilBuffer){const Z=Oe(F);V&&ke(F)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,F.width,F.height):ke(F)?g.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,F.width,F.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,F.width,F.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const Z=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let Q=0;Q<Z.length;Q++){const re=Z[Q],ce=i.convert(re.format,re.colorSpace),ie=i.convert(re.type),$=C(re.internalFormat,ce,ie,re.colorSpace),ue=Oe(F);V&&ke(F)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,$,F.width,F.height):ke(F)?g.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,$,F.width,F.height):t.renderbufferStorage(t.RENDERBUFFER,$,F.width,F.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ve(A,F){if(F&&F.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(t.FRAMEBUFFER,A),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(F.depthTexture).__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),q(F.depthTexture,0);const Z=s.get(F.depthTexture).__webglTexture,Q=Oe(F);if(F.depthTexture.format===DepthFormat)ke(F)?g.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(F.depthTexture.format===DepthStencilFormat)ke(F)?g.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ye(A){const F=s.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!F.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ve(F.__webglFramebuffer,A)}else if(V){F.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)r.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer[Z]),F.__webglDepthbuffer[Z]=t.createRenderbuffer(),I(F.__webglDepthbuffer[Z],A,!1)}else r.bindFramebuffer(t.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer=t.createRenderbuffer(),I(F.__webglDepthbuffer,A,!1);r.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(A,F,V){const Z=s.get(A);F!==void 0&&Ae(Z.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),V!==void 0&&ye(A)}function ve(A){const F=A.texture,V=s.get(A),Z=s.get(F);A.addEventListener("dispose",N),A.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=F.version,n.memory.textures++);const Q=A.isWebGLCubeRenderTarget===!0,re=A.isWebGLMultipleRenderTargets===!0,ce=v(A)||p;if(Q){V.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)V.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(V.__webglFramebuffer=t.createFramebuffer(),re)if(o.drawBuffers){const ie=A.texture;for(let $=0,ue=ie.length;$<ue;$++){const ge=s.get(ie[$]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),n.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(p&&A.samples>0&&ke(A)===!1){const ie=re?F:[F];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],r.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let $=0;$<ie.length;$++){const ue=ie[$];V.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[$]);const ge=i.convert(ue.format,ue.colorSpace),me=i.convert(ue.type),de=C(ue.internalFormat,ge,me,ue.colorSpace,A.isXRRenderTarget===!0),le=Oe(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,le,de,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,V.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),I(V.__webglDepthRenderbuffer,A,!0)),r.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){r.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,F,ce);for(let ie=0;ie<6;ie++)Ae(V.__webglFramebuffer[ie],A,F,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie);T(F,ce)&&O(t.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(re){const ie=A.texture;for(let $=0,ue=ie.length;$<ue;$++){const ge=ie[$],me=s.get(ge);r.bindTexture(t.TEXTURE_2D,me.__webglTexture),Ee(t.TEXTURE_2D,ge,ce),Ae(V.__webglFramebuffer,A,ge,t.COLOR_ATTACHMENT0+$,t.TEXTURE_2D),T(ge,ce)&&O(t.TEXTURE_2D)}r.unbindTexture()}else{let ie=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(p?ie=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),r.bindTexture(ie,Z.__webglTexture),Ee(ie,F,ce),Ae(V.__webglFramebuffer,A,F,t.COLOR_ATTACHMENT0,ie),T(F,ce)&&O(ie),r.unbindTexture()}A.depthBuffer&&ye(A)}function Ie(A){const F=v(A)||p,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Z=0,Q=V.length;Z<Q;Z++){const re=V[Z];if(T(re,F)){const ce=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ie=s.get(re).__webglTexture;r.bindTexture(ce,ie),O(ce),r.unbindTexture()}}}function Ce(A){if(p&&A.samples>0&&ke(A)===!1){const F=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,Z=A.height;let Q=t.COLOR_BUFFER_BIT;const re=[],ce=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=s.get(A),$=A.isWebGLMultipleRenderTargets===!0;if($)for(let ue=0;ue<F.length;ue++)r.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),r.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);r.bindFramebuffer(t.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let ue=0;ue<F.length;ue++){re.push(t.COLOR_ATTACHMENT0+ue),A.depthBuffer&&re.push(ce);const ge=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(ge===!1&&(A.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),$&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ie.__webglColorRenderbuffer[ue]),ge===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ce]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ce])),$){const me=s.get(F[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,me,0)}t.blitFramebuffer(0,0,V,Z,0,0,V,Z,Q,t.NEAREST),f&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(r.bindFramebuffer(t.READ_FRAMEBUFFER,null),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let ue=0;ue<F.length;ue++){r.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ie.__webglColorRenderbuffer[ue]);const ge=s.get(F[ue]).__webglTexture;r.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,ge,0)}r.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function Oe(A){return Math.min(c,A.samples)}function ke(A){const F=s.get(A);return p&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function He(A){const F=n.render.frame;y.get(A)!==F&&(y.set(A,F),A.update())}function Xe(A,F){const V=A.colorSpace,Z=A.format,Q=A.type;return A.isCompressedTexture===!0||A.format===_SRGBAFormat||V!==LinearSRGBColorSpace&&V!==NoColorSpace&&(V===SRGBColorSpace?p===!1?e.has("EXT_sRGB")===!0&&Z===RGBAFormat?(A.format=_SRGBAFormat,A.minFilter=LinearFilter,A.generateMipmaps=!1):F=ImageUtils.sRGBToLinear(F):(Z!==RGBAFormat||Q!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),F}this.allocateTextureUnit=Y,this.resetTextureUnits=j,this.setTexture2D=q,this.setTexture2DArray=U,this.setTexture3D=W,this.setTextureCube=ne,this.rebindTextures=Te,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ke}function WebGLUtils(t,e,r){const s=r.isWebGL2;function o(i,n=NoColorSpace){let p;if(i===UnsignedByteType)return t.UNSIGNED_BYTE;if(i===UnsignedShort4444Type)return t.UNSIGNED_SHORT_4_4_4_4;if(i===UnsignedShort5551Type)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ByteType)return t.BYTE;if(i===ShortType)return t.SHORT;if(i===UnsignedShortType)return t.UNSIGNED_SHORT;if(i===IntType)return t.INT;if(i===UnsignedIntType)return t.UNSIGNED_INT;if(i===FloatType)return t.FLOAT;if(i===HalfFloatType)return s?t.HALF_FLOAT:(p=e.get("OES_texture_half_float"),p!==null?p.HALF_FLOAT_OES:null);if(i===AlphaFormat)return t.ALPHA;if(i===RGBAFormat)return t.RGBA;if(i===LuminanceFormat)return t.LUMINANCE;if(i===LuminanceAlphaFormat)return t.LUMINANCE_ALPHA;if(i===DepthFormat)return t.DEPTH_COMPONENT;if(i===DepthStencilFormat)return t.DEPTH_STENCIL;if(i===_SRGBAFormat)return p=e.get("EXT_sRGB"),p!==null?p.SRGB_ALPHA_EXT:null;if(i===RedFormat)return t.RED;if(i===RedIntegerFormat)return t.RED_INTEGER;if(i===RGFormat)return t.RG;if(i===RGIntegerFormat)return t.RG_INTEGER;if(i===RGBAIntegerFormat)return t.RGBA_INTEGER;if(i===RGB_S3TC_DXT1_Format||i===RGBA_S3TC_DXT1_Format||i===RGBA_S3TC_DXT3_Format||i===RGBA_S3TC_DXT5_Format)if(n===SRGBColorSpace)if(p=e.get("WEBGL_compressed_texture_s3tc_srgb"),p!==null){if(i===RGB_S3TC_DXT1_Format)return p.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT1_Format)return p.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT3_Format)return p.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===RGBA_S3TC_DXT5_Format)return p.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(p=e.get("WEBGL_compressed_texture_s3tc"),p!==null){if(i===RGB_S3TC_DXT1_Format)return p.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT1_Format)return p.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT3_Format)return p.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===RGBA_S3TC_DXT5_Format)return p.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===RGB_PVRTC_4BPPV1_Format||i===RGB_PVRTC_2BPPV1_Format||i===RGBA_PVRTC_4BPPV1_Format||i===RGBA_PVRTC_2BPPV1_Format)if(p=e.get("WEBGL_compressed_texture_pvrtc"),p!==null){if(i===RGB_PVRTC_4BPPV1_Format)return p.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===RGB_PVRTC_2BPPV1_Format)return p.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===RGBA_PVRTC_4BPPV1_Format)return p.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===RGBA_PVRTC_2BPPV1_Format)return p.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===RGB_ETC1_Format)return p=e.get("WEBGL_compressed_texture_etc1"),p!==null?p.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===RGB_ETC2_Format||i===RGBA_ETC2_EAC_Format)if(p=e.get("WEBGL_compressed_texture_etc"),p!==null){if(i===RGB_ETC2_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ETC2:p.COMPRESSED_RGB8_ETC2;if(i===RGBA_ETC2_EAC_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:p.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===RGBA_ASTC_4x4_Format||i===RGBA_ASTC_5x4_Format||i===RGBA_ASTC_5x5_Format||i===RGBA_ASTC_6x5_Format||i===RGBA_ASTC_6x6_Format||i===RGBA_ASTC_8x5_Format||i===RGBA_ASTC_8x6_Format||i===RGBA_ASTC_8x8_Format||i===RGBA_ASTC_10x5_Format||i===RGBA_ASTC_10x6_Format||i===RGBA_ASTC_10x8_Format||i===RGBA_ASTC_10x10_Format||i===RGBA_ASTC_12x10_Format||i===RGBA_ASTC_12x12_Format)if(p=e.get("WEBGL_compressed_texture_astc"),p!==null){if(i===RGBA_ASTC_4x4_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:p.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===RGBA_ASTC_5x4_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:p.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===RGBA_ASTC_5x5_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:p.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===RGBA_ASTC_6x5_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:p.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===RGBA_ASTC_6x6_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:p.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===RGBA_ASTC_8x5_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:p.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===RGBA_ASTC_8x6_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:p.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===RGBA_ASTC_8x8_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:p.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===RGBA_ASTC_10x5_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:p.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===RGBA_ASTC_10x6_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:p.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===RGBA_ASTC_10x8_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:p.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===RGBA_ASTC_10x10_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:p.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===RGBA_ASTC_12x10_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:p.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===RGBA_ASTC_12x12_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:p.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===RGBA_BPTC_Format)if(p=e.get("EXT_texture_compression_bptc"),p!==null){if(i===RGBA_BPTC_Format)return n===SRGBColorSpace?p.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:p.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(i===RED_RGTC1_Format||i===SIGNED_RED_RGTC1_Format||i===RED_GREEN_RGTC2_Format||i===SIGNED_RED_GREEN_RGTC2_Format)if(p=e.get("EXT_texture_compression_rgtc"),p!==null){if(i===RGBA_BPTC_Format)return p.COMPRESSED_RED_RGTC1_EXT;if(i===SIGNED_RED_RGTC1_Format)return p.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===RED_GREEN_RGTC2_Format)return p.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===SIGNED_RED_GREEN_RGTC2_Format)return p.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===UnsignedInt248Type?s?t.UNSIGNED_INT_24_8:(p=e.get("WEBGL_depth_texture"),p!==null?p.UNSIGNED_INT_24_8_WEBGL:null):t[i]!==void 0?t[i]:null}return{convert:o}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const s of e.hand.values())this._getHandJoint(r,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,s){let o=null,i=null,n=null;const p=this._targetRay,d=this._grip,l=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(const _ of e.hand.values()){const m=r.getJointPose(_,s),h=this._getHandJoint(l,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],g=u.position.distanceTo(c.position),f=.02,y=.005;l.inputState.pinching&&g>f+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&g<=f-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(i=r.getPose(e.gripSpace,s),i!==null&&(d.matrix.fromArray(i.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,i.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(i.linearVelocity)):d.hasLinearVelocity=!1,i.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(i.angularVelocity)):d.hasAngularVelocity=!1));p!==null&&(o=r.getPose(e.targetRaySpace,s),o===null&&i!==null&&(o=i),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return p!==null&&(p.visible=o!==null),d!==null&&(d.visible=i!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const s=new Group;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[r.jointName]=s,e.add(s)}return e.joints[r.jointName]}}class DepthTexture extends Texture{constructor(e,r,s,o,i,n,p,d,l,u){if(u=u!==void 0?u:DepthFormat,u!==DepthFormat&&u!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&u===DepthFormat&&(s=UnsignedIntType),s===void 0&&u===DepthStencilFormat&&(s=UnsignedInt248Type),super(null,o,i,n,p,d,u,s,l),this.isDepthTexture=!0,this.image={width:e,height:r},this.magFilter=p!==void 0?p:NearestFilter,this.minFilter=d!==void 0?d:NearestFilter,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}class WebXRManager extends EventDispatcher{constructor(e,r){super();const s=this;let o=null,i=1,n=null,p="local-floor",d=1,l=null,u=null,c=null,g=null,f=null,y=null;const _=r.getContextAttributes();let m=null,h=null;const R=[],b=[],v=new PerspectiveCamera;v.layers.enable(1),v.viewport=new Vector4;const S=new PerspectiveCamera;S.layers.enable(2),S.viewport=new Vector4;const T=[v,S],O=new ArrayCamera;O.layers.enable(1),O.layers.enable(2);let C=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let W=R[U];return W===void 0&&(W=new WebXRController,R[U]=W),W.getTargetRaySpace()},this.getControllerGrip=function(U){let W=R[U];return W===void 0&&(W=new WebXRController,R[U]=W),W.getGripSpace()},this.getHand=function(U){let W=R[U];return W===void 0&&(W=new WebXRController,R[U]=W),W.getHandSpace()};function E(U){const W=b.indexOf(U.inputSource);if(W===-1)return;const ne=R[W];ne!==void 0&&(ne.update(U.inputSource,U.frame,l||n),ne.dispatchEvent({type:U.type,data:U.inputSource}))}function B(){o.removeEventListener("select",E),o.removeEventListener("selectstart",E),o.removeEventListener("selectend",E),o.removeEventListener("squeeze",E),o.removeEventListener("squeezestart",E),o.removeEventListener("squeezeend",E),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",N);for(let U=0;U<R.length;U++){const W=b[U];W!==null&&(b[U]=null,R[U].disconnect(W))}C=null,M=null,e.setRenderTarget(m),f=null,g=null,c=null,o=null,h=null,q.stop(),s.isPresenting=!1,s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){i=U,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){p=U,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return g!==null?g:f},this.getBinding=function(){return c},this.getFrame=function(){return y},this.getSession=function(){return o},this.setSession=async function(U){if(o=U,o!==null){if(m=e.getRenderTarget(),o.addEventListener("select",E),o.addEventListener("selectstart",E),o.addEventListener("selectend",E),o.addEventListener("squeeze",E),o.addEventListener("squeezestart",E),o.addEventListener("squeezeend",E),o.addEventListener("end",B),o.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await r.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:o.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(o,r,W),o.updateRenderState({baseLayer:f}),h=new WebGLRenderTarget(f.framebufferWidth,f.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let W=null,ne=null,ae=null;_.depth&&(ae=_.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,W=_.stencil?DepthStencilFormat:DepthFormat,ne=_.stencil?UnsignedInt248Type:UnsignedIntType);const se={colorFormat:r.RGBA8,depthFormat:ae,scaleFactor:i};c=new XRWebGLBinding(o,r),g=c.createProjectionLayer(se),o.updateRenderState({layers:[g]}),h=new WebGLRenderTarget(g.textureWidth,g.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(g.textureWidth,g.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const he=e.properties.get(h);he.__ignoreDepthValues=g.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(d),l=null,n=await o.requestReferenceSpace(p),q.setContext(o),q.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function N(U){for(let W=0;W<U.removed.length;W++){const ne=U.removed[W],ae=b.indexOf(ne);ae>=0&&(b[ae]=null,R[ae].disconnect(ne))}for(let W=0;W<U.added.length;W++){const ne=U.added[W];let ae=b.indexOf(ne);if(ae===-1){for(let he=0;he<R.length;he++)if(he>=b.length){b.push(ne),ae=he;break}else if(b[he]===null){b[he]=ne,ae=he;break}if(ae===-1)break}const se=R[ae];se&&se.connect(ne)}}const w=new Vector3,D=new Vector3;function G(U,W,ne){w.setFromMatrixPosition(W.matrixWorld),D.setFromMatrixPosition(ne.matrixWorld);const ae=w.distanceTo(D),se=W.projectionMatrix.elements,he=ne.projectionMatrix.elements,Ee=se[14]/(se[10]-1),_e=se[14]/(se[10]+1),Be=(se[9]+1)/se[5],Ke=(se[9]-1)/se[5],Ae=(se[8]-1)/se[0],I=(he[8]+1)/he[0],Ve=Ee*Ae,ye=Ee*I,Te=ae/(-Ae+I),ve=Te*-Ae;W.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ve),U.translateZ(Te),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Ie=Ee+Te,Ce=_e+Te,Oe=Ve-ve,ke=ye+(ae-ve),He=Be*_e/Ce*Ie,Xe=Ke*_e/Ce*Ie;U.projectionMatrix.makePerspective(Oe,ke,He,Xe,Ie,Ce),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function K(U,W){W===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(W.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(o===null)return;O.near=S.near=v.near=U.near,O.far=S.far=v.far=U.far,(C!==O.near||M!==O.far)&&(o.updateRenderState({depthNear:O.near,depthFar:O.far}),C=O.near,M=O.far);const W=U.parent,ne=O.cameras;K(O,W);for(let ae=0;ae<ne.length;ae++)K(ne[ae],W);ne.length===2?G(O,v,S):O.projectionMatrix.copy(v.projectionMatrix),j(U,O,W)};function j(U,W,ne){ne===null?U.matrix.copy(W.matrixWorld):(U.matrix.copy(ne.matrixWorld),U.matrix.invert(),U.matrix.multiply(W.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0);const ae=U.children;for(let se=0,he=ae.length;se<he;se++)ae[se].updateMatrixWorld(!0);U.projectionMatrix.copy(W.projectionMatrix),U.projectionMatrixInverse.copy(W.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=RAD2DEG*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(g===null&&f===null))return d},this.setFoveation=function(U){d=U,g!==null&&(g.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)};let Y=null;function J(U,W){if(u=W.getViewerPose(l||n),y=W,u!==null){const ne=u.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let ae=!1;ne.length!==O.cameras.length&&(O.cameras.length=0,ae=!0);for(let se=0;se<ne.length;se++){const he=ne[se];let Ee=null;if(f!==null)Ee=f.getViewport(he);else{const Be=c.getViewSubImage(g,he);Ee=Be.viewport,se===0&&(e.setRenderTargetTextures(h,Be.colorTexture,g.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(h))}let _e=T[se];_e===void 0&&(_e=new PerspectiveCamera,_e.layers.enable(se),_e.viewport=new Vector4,T[se]=_e),_e.matrix.fromArray(he.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(he.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),se===0&&(O.matrix.copy(_e.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),ae===!0&&O.cameras.push(_e)}}for(let ne=0;ne<R.length;ne++){const ae=b[ne],se=R[ne];ae!==null&&se!==void 0&&se.update(ae,W,l||n)}Y&&Y(U,W),W.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:W}),y=null}const q=new WebGLAnimation;q.setAnimationLoop(J),this.setAnimationLoop=function(U){Y=U},this.dispose=function(){}}}function WebGLMaterials(t,e){function r(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function s(m,h){h.color.getRGB(m.fogColor.value,getUnlitUniformColorSpace(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function o(m,h,R,b,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(m,h):h.isMeshToonMaterial?(i(m,h),c(m,h)):h.isMeshPhongMaterial?(i(m,h),u(m,h)):h.isMeshStandardMaterial?(i(m,h),g(m,h),h.isMeshPhysicalMaterial&&f(m,h,v)):h.isMeshMatcapMaterial?(i(m,h),y(m,h)):h.isMeshDepthMaterial?i(m,h):h.isMeshDistanceMaterial?(i(m,h),_(m,h)):h.isMeshNormalMaterial?i(m,h):h.isLineBasicMaterial?(n(m,h),h.isLineDashedMaterial&&p(m,h)):h.isPointsMaterial?d(m,h,R,b):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,r(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,r(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,r(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===BackSide&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,r(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===BackSide&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,r(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,r(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,r(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const R=e.get(h).envMap;if(R&&(m.envMap.value=R,m.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const b=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*b,r(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,r(h.aoMap,m.aoMapTransform))}function n(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,r(h.map,m.mapTransform))}function p(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function d(m,h,R,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*R,m.scale.value=b*.5,h.map&&(m.map.value=h.map,r(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,r(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,r(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,r(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function c(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function g(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,r(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,r(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,R){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,r(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,r(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,r(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,r(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,r(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===BackSide&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,r(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,r(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,r(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,r(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,r(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,r(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,r(h.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const R=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function WebGLUniformsGroups(t,e,r,s){let o={},i={},n=[];const p=r.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(R,b){const v=b.program;s.uniformBlockBinding(R,v)}function l(R,b){let v=o[R.id];v===void 0&&(y(R),v=u(R),o[R.id]=v,R.addEventListener("dispose",m));const S=b.program;s.updateUBOMapping(R,S);const T=e.render.frame;i[R.id]!==T&&(g(R),i[R.id]=T)}function u(R){const b=c();R.__bindingPointIndex=b;const v=t.createBuffer(),S=R.__size,T=R.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,S,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,v),v}function c(){for(let R=0;R<p;R++)if(n.indexOf(R)===-1)return n.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const b=o[R.id],v=R.uniforms,S=R.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let T=0,O=v.length;T<O;T++){const C=v[T];if(f(C,T,S)===!0){const M=C.__offset,E=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let N=0;N<E.length;N++){const w=E[N],D=_(w);typeof w=="number"?(C.__data[0]=w,t.bufferSubData(t.UNIFORM_BUFFER,M+B,C.__data)):w.isMatrix3?(C.__data[0]=w.elements[0],C.__data[1]=w.elements[1],C.__data[2]=w.elements[2],C.__data[3]=w.elements[0],C.__data[4]=w.elements[3],C.__data[5]=w.elements[4],C.__data[6]=w.elements[5],C.__data[7]=w.elements[0],C.__data[8]=w.elements[6],C.__data[9]=w.elements[7],C.__data[10]=w.elements[8],C.__data[11]=w.elements[0]):(w.toArray(C.__data,B),B+=D.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,C.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(R,b,v){const S=R.value;if(v[b]===void 0){if(typeof S=="number")v[b]=S;else{const T=Array.isArray(S)?S:[S],O=[];for(let C=0;C<T.length;C++)O.push(T[C].clone());v[b]=O}return!0}else if(typeof S=="number"){if(v[b]!==S)return v[b]=S,!0}else{const T=Array.isArray(v[b])?v[b]:[v[b]],O=Array.isArray(S)?S:[S];for(let C=0;C<T.length;C++){const M=T[C];if(M.equals(O[C])===!1)return M.copy(O[C]),!0}}return!1}function y(R){const b=R.uniforms;let v=0;const S=16;let T=0;for(let O=0,C=b.length;O<C;O++){const M=b[O],E={boundary:0,storage:0},B=Array.isArray(M.value)?M.value:[M.value];for(let N=0,w=B.length;N<w;N++){const D=B[N],G=_(D);E.boundary+=G.boundary,E.storage+=G.storage}if(M.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,O>0){T=v%S;const N=S-T;T!==0&&N-E.boundary<0&&(v+=S-T,M.__offset=v)}v+=E.storage}return T=v%S,T>0&&(v+=S-T),R.__size=v,R.__cache={},this}function _(R){const b={boundary:0,storage:0};return typeof R=="number"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),b}function m(R){const b=R.target;b.removeEventListener("dispose",m);const v=n.indexOf(b.__bindingPointIndex);n.splice(v,1),t.deleteBuffer(o[b.id]),delete o[b.id],delete i[b.id]}function h(){for(const R in o)t.deleteBuffer(o[R]);n=[],o={},i={}}return{bind:d,update:l,dispose:h}}function createCanvasElement(){const t=createElementNS("canvas");return t.style.display="block",t}class WebGLRenderer{constructor(e={}){const{canvas:r=createCanvasElement(),context:s=null,depth:o=!0,stencil:i=!0,alpha:n=!1,antialias:p=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let g;s!==null?g=s.getContextAttributes().alpha:g=n;const f=new Uint32Array(4),y=new Int32Array(4);let _=null,m=null;const h=[],R=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=SRGBColorSpace,this.useLegacyLights=!0,this.toneMapping=NoToneMapping,this.toneMappingExposure=1;const b=this;let v=!1,S=0,T=0,O=null,C=-1,M=null;const E=new Vector4,B=new Vector4;let N=null;const w=new Color(0);let D=0,G=r.width,K=r.height,j=1,Y=null,J=null;const q=new Vector4(0,0,G,K),U=new Vector4(0,0,G,K);let W=!1;const ne=new Frustum;let ae=!1,se=!1,he=null;const Ee=new Matrix4,_e=new Vector2,Be=new Vector3,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return O===null?j:1}let I=s;function Ve(x,P){for(let H=0;H<x.length;H++){const k=x[H],X=r.getContext(k,P);if(X!==null)return X}return null}try{const x={alpha:!0,depth:o,stencil:i,antialias:p,premultipliedAlpha:d,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${REVISION}`),r.addEventListener("webglcontextlost",te,!1),r.addEventListener("webglcontextrestored",z,!1),r.addEventListener("webglcontextcreationerror",ee,!1),I===null){const P=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&P.shift(),I=Ve(P,x),I===null)throw Ve(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ye,Te,ve,Ie,Ce,Oe,ke,He,Xe,A,F,V,Z,Q,re,ce,ie,$,ue,ge,me,de,le,Fe;function De(){ye=new WebGLExtensions(I),Te=new WebGLCapabilities(I,ye,e),ye.init(Te),de=new WebGLUtils(I,ye,Te),ve=new WebGLState(I,ye,Te),Ie=new WebGLInfo(I),Ce=new WebGLProperties,Oe=new WebGLTextures(I,ye,ve,Ce,Te,de,Ie),ke=new WebGLCubeMaps(b),He=new WebGLCubeUVMaps(b),Xe=new WebGLAttributes(I,Te),le=new WebGLBindingStates(I,ye,Xe,Te),A=new WebGLGeometries(I,Xe,Ie,le),F=new WebGLObjects(I,A,Xe,Ie),ue=new WebGLMorphtargets(I,Te,Oe),ce=new WebGLClipping(Ce),V=new WebGLPrograms(b,ke,He,ye,Te,le,ce),Z=new WebGLMaterials(b,Ce),Q=new WebGLRenderLists,re=new WebGLRenderStates(ye,Te),$=new WebGLBackground(b,ke,He,ve,F,g,d),ie=new WebGLShadowMap(b,F,Te),Fe=new WebGLUniformsGroups(I,Ie,Te,ve),ge=new WebGLBufferRenderer(I,ye,Ie,Te),me=new WebGLIndexedBufferRenderer(I,ye,Ie,Te),Ie.programs=V.programs,b.capabilities=Te,b.extensions=ye,b.properties=Ce,b.renderLists=Q,b.shadowMap=ie,b.state=ve,b.info=Ie}De();const L=new WebXRManager(b,I);this.xr=L,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=ye.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ye.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(G,K,!1))},this.getSize=function(x){return x.set(G,K)},this.setSize=function(x,P,H=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,K=P,r.width=Math.floor(x*j),r.height=Math.floor(P*j),H===!0&&(r.style.width=x+"px",r.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(G*j,K*j).floor()},this.setDrawingBufferSize=function(x,P,H){G=x,K=P,j=H,r.width=Math.floor(x*H),r.height=Math.floor(P*H),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(E)},this.getViewport=function(x){return x.copy(q)},this.setViewport=function(x,P,H,k){x.isVector4?q.set(x.x,x.y,x.z,x.w):q.set(x,P,H,k),ve.viewport(E.copy(q).multiplyScalar(j).floor())},this.getScissor=function(x){return x.copy(U)},this.setScissor=function(x,P,H,k){x.isVector4?U.set(x.x,x.y,x.z,x.w):U.set(x,P,H,k),ve.scissor(B.copy(U).multiplyScalar(j).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(x){ve.setScissorTest(W=x)},this.setOpaqueSort=function(x){Y=x},this.setTransparentSort=function(x){J=x},this.getClearColor=function(x){return x.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(x=!0,P=!0,H=!0){let k=0;if(x){let X=!1;if(O!==null){const pe=O.texture.format;X=pe===RGBAIntegerFormat||pe===RGIntegerFormat||pe===RedIntegerFormat}if(X){const pe=O.texture.type,fe=pe===UnsignedByteType||pe===UnsignedIntType||pe===UnsignedShortType||pe===UnsignedInt248Type||pe===UnsignedShort4444Type||pe===UnsignedShort5551Type,be=$.getClearColor(),Me=$.getClearAlpha(),xe=be.r,Se=be.g,Re=be.b;fe?(f[0]=xe,f[1]=Se,f[2]=Re,f[3]=Me,I.clearBufferuiv(I.COLOR,0,f)):(y[0]=xe,y[1]=Se,y[2]=Re,y[3]=Me,I.clearBufferiv(I.COLOR,0,y))}else k|=I.COLOR_BUFFER_BIT}P&&(k|=I.DEPTH_BUFFER_BIT),H&&(k|=I.STENCIL_BUFFER_BIT),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",te,!1),r.removeEventListener("webglcontextrestored",z,!1),r.removeEventListener("webglcontextcreationerror",ee,!1),Q.dispose(),re.dispose(),Ce.dispose(),ke.dispose(),He.dispose(),F.dispose(),le.dispose(),Fe.dispose(),V.dispose(),L.dispose(),L.removeEventListener("sessionstart",Ge),L.removeEventListener("sessionend",Qe),he&&(he.dispose(),he=null),$e.stop()};function te(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const x=Ie.autoReset,P=ie.enabled,H=ie.autoUpdate,k=ie.needsUpdate,X=ie.type;De(),Ie.autoReset=x,ie.enabled=P,ie.autoUpdate=H,ie.needsUpdate=k,ie.type=X}function ee(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function oe(x){const P=x.target;P.removeEventListener("dispose",oe),we(P)}function we(x){Pe(x),Ce.remove(x)}function Pe(x){const P=Ce.get(x).programs;P!==void 0&&(P.forEach(function(H){V.releaseProgram(H)}),x.isShaderMaterial&&V.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,H,k,X,pe){P===null&&(P=Ke);const fe=X.isMesh&&X.matrixWorld.determinant()<0,be=_t(x,P,H,k,X);ve.setMaterial(k,fe);let Me=H.index,xe=1;k.wireframe===!0&&(Me=A.getWireframeAttribute(H),xe=2);const Se=H.drawRange,Re=H.attributes.position;let Ne=Se.start*xe,Ue=(Se.start+Se.count)*xe;pe!==null&&(Ne=Math.max(Ne,pe.start*xe),Ue=Math.min(Ue,(pe.start+pe.count)*xe)),Me!==null?(Ne=Math.max(Ne,0),Ue=Math.min(Ue,Me.count)):Re!=null&&(Ne=Math.max(Ne,0),Ue=Math.min(Ue,Re.count));const Je=Ue-Ne;if(Je<0||Je===1/0)return;le.setup(X,k,be,H,Me);let et,ze=ge;if(Me!==null&&(et=Xe.get(Me),ze=me,ze.setIndex(et)),X.isMesh)k.wireframe===!0?(ve.setLineWidth(k.wireframeLinewidth*Ae()),ze.setMode(I.LINES)):ze.setMode(I.TRIANGLES);else if(X.isLine){let Le=k.linewidth;Le===void 0&&(Le=1),ve.setLineWidth(Le*Ae()),X.isLineSegments?ze.setMode(I.LINES):X.isLineLoop?ze.setMode(I.LINE_LOOP):ze.setMode(I.LINE_STRIP)}else X.isPoints?ze.setMode(I.POINTS):X.isSprite&&ze.setMode(I.TRIANGLES);if(X.isInstancedMesh)ze.renderInstances(Ne,Je,X.count);else if(H.isInstancedBufferGeometry){const Le=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,at=Math.min(H.instanceCount,Le);ze.renderInstances(Ne,Je,at)}else ze.render(Ne,Je)},this.compile=function(x,P){function H(k,X,pe){k.transparent===!0&&k.side===DoubleSide&&k.forceSinglePass===!1?(k.side=BackSide,k.needsUpdate=!0,nt(k,X,pe),k.side=FrontSide,k.needsUpdate=!0,nt(k,X,pe),k.side=DoubleSide):nt(k,X,pe)}m=re.get(x),m.init(),R.push(m),x.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(b.useLegacyLights),x.traverse(function(k){const X=k.material;if(X)if(Array.isArray(X))for(let pe=0;pe<X.length;pe++){const fe=X[pe];H(fe,x,k)}else H(X,x,k)}),R.pop(),m=null};let je=null;function Ze(x){je&&je(x)}function Ge(){$e.stop()}function Qe(){$e.start()}const $e=new WebGLAnimation;$e.setAnimationLoop(Ze),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(x){je=x,L.setAnimationLoop(x),x===null?$e.stop():$e.start()},L.addEventListener("sessionstart",Ge),L.addEventListener("sessionend",Qe),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(P),P=L.getCamera()),x.isScene===!0&&x.onBeforeRender(b,x,P,O),m=re.get(x,R.length),m.init(),R.push(m),Ee.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),ne.setFromProjectionMatrix(Ee),se=this.localClippingEnabled,ae=ce.init(this.clippingPlanes,se),_=Q.get(x,h.length),_.init(),h.push(_),lt(x,P,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(Y,J),this.info.render.frame++,ae===!0&&ce.beginShadows();const H=m.state.shadowsArray;if(ie.render(H,x,P),ae===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(_,x),m.setupLights(b.useLegacyLights),P.isArrayCamera){const k=P.cameras;for(let X=0,pe=k.length;X<pe;X++){const fe=k[X];ct(_,x,fe,fe.viewport)}}else ct(_,x,P);O!==null&&(Oe.updateMultisampleRenderTarget(O),Oe.updateRenderTargetMipmap(O)),x.isScene===!0&&x.onAfterRender(b,x,P),le.resetDefaultState(),C=-1,M=null,R.pop(),R.length>0?m=R[R.length-1]:m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function lt(x,P,H,k){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)m.pushLight(x),x.castShadow&&m.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ne.intersectsSprite(x)){k&&Be.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ee);const fe=F.update(x),be=x.material;be.visible&&_.push(x,fe,be,H,Be.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ne.intersectsObject(x))){const fe=F.update(x),be=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Be.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Be.copy(fe.boundingSphere.center)),Be.applyMatrix4(x.matrixWorld).applyMatrix4(Ee)),Array.isArray(be)){const Me=fe.groups;for(let xe=0,Se=Me.length;xe<Se;xe++){const Re=Me[xe],Ne=be[Re.materialIndex];Ne&&Ne.visible&&_.push(x,fe,Ne,H,Be.z,Re)}}else be.visible&&_.push(x,fe,be,H,Be.z,null)}}const pe=x.children;for(let fe=0,be=pe.length;fe<be;fe++)lt(pe[fe],P,H,k)}function ct(x,P,H,k){const X=x.opaque,pe=x.transmissive,fe=x.transparent;m.setupLightsView(H),ae===!0&&ce.setGlobalState(b.clippingPlanes,H),pe.length>0&&mt(X,pe,P,H),k&&ve.viewport(E.copy(k)),X.length>0&&ot(X,P,H),pe.length>0&&ot(pe,P,H),fe.length>0&&ot(fe,P,H),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function mt(x,P,H,k){const X=Te.isWebGL2;he===null&&(he=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:X?4:0})),b.getDrawingBufferSize(_e),X?he.setSize(_e.x,_e.y):he.setSize(floorPowerOfTwo(_e.x),floorPowerOfTwo(_e.y));const pe=b.getRenderTarget();b.setRenderTarget(he),b.getClearColor(w),D=b.getClearAlpha(),D<1&&b.setClearColor(16777215,.5),b.clear();const fe=b.toneMapping;b.toneMapping=NoToneMapping,ot(x,H,k),Oe.updateMultisampleRenderTarget(he),Oe.updateRenderTargetMipmap(he);let be=!1;for(let Me=0,xe=P.length;Me<xe;Me++){const Se=P[Me],Re=Se.object,Ne=Se.geometry,Ue=Se.material,Je=Se.group;if(Ue.side===DoubleSide&&Re.layers.test(k.layers)){const et=Ue.side;Ue.side=BackSide,Ue.needsUpdate=!0,ut(Re,H,k,Ne,Ue,Je),Ue.side=et,Ue.needsUpdate=!0,be=!0}}be===!0&&(Oe.updateMultisampleRenderTarget(he),Oe.updateRenderTargetMipmap(he)),b.setRenderTarget(pe),b.setClearColor(w,D),b.toneMapping=fe}function ot(x,P,H){const k=P.isScene===!0?P.overrideMaterial:null;for(let X=0,pe=x.length;X<pe;X++){const fe=x[X],be=fe.object,Me=fe.geometry,xe=k===null?fe.material:k,Se=fe.group;be.layers.test(H.layers)&&ut(be,P,H,Me,xe,Se)}}function ut(x,P,H,k,X,pe){x.onBeforeRender(b,P,H,k,X,pe),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),X.onBeforeRender(b,P,H,k,x,pe),X.transparent===!0&&X.side===DoubleSide&&X.forceSinglePass===!1?(X.side=BackSide,X.needsUpdate=!0,b.renderBufferDirect(H,P,k,X,x,pe),X.side=FrontSide,X.needsUpdate=!0,b.renderBufferDirect(H,P,k,X,x,pe),X.side=DoubleSide):b.renderBufferDirect(H,P,k,X,x,pe),x.onAfterRender(b,P,H,k,X,pe)}function nt(x,P,H){P.isScene!==!0&&(P=Ke);const k=Ce.get(x),X=m.state.lights,pe=m.state.shadowsArray,fe=X.state.version,be=V.getParameters(x,X.state,pe,P,H),Me=V.getProgramCacheKey(be);let xe=k.programs;k.environment=x.isMeshStandardMaterial?P.environment:null,k.fog=P.fog,k.envMap=(x.isMeshStandardMaterial?He:ke).get(x.envMap||k.environment),xe===void 0&&(x.addEventListener("dispose",oe),xe=new Map,k.programs=xe);let Se=xe.get(Me);if(Se!==void 0){if(k.currentProgram===Se&&k.lightsStateVersion===fe)return gt(x,be),Se}else be.uniforms=V.getUniforms(x),x.onBuild(H,be,b),x.onBeforeCompile(be,b),Se=V.acquireProgram(be,Me),xe.set(Me,Se),k.uniforms=be.uniforms;const Re=k.uniforms;(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Re.clippingPlanes=ce.uniform),gt(x,be),k.needsLights=bt(x),k.lightsStateVersion=fe,k.needsLights&&(Re.ambientLightColor.value=X.state.ambient,Re.lightProbe.value=X.state.probe,Re.directionalLights.value=X.state.directional,Re.directionalLightShadows.value=X.state.directionalShadow,Re.spotLights.value=X.state.spot,Re.spotLightShadows.value=X.state.spotShadow,Re.rectAreaLights.value=X.state.rectArea,Re.ltc_1.value=X.state.rectAreaLTC1,Re.ltc_2.value=X.state.rectAreaLTC2,Re.pointLights.value=X.state.point,Re.pointLightShadows.value=X.state.pointShadow,Re.hemisphereLights.value=X.state.hemi,Re.directionalShadowMap.value=X.state.directionalShadowMap,Re.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Re.spotShadowMap.value=X.state.spotShadowMap,Re.spotLightMatrix.value=X.state.spotLightMatrix,Re.spotLightMap.value=X.state.spotLightMap,Re.pointShadowMap.value=X.state.pointShadowMap,Re.pointShadowMatrix.value=X.state.pointShadowMatrix);const Ne=Se.getUniforms(),Ue=WebGLUniforms.seqWithValue(Ne.seq,Re);return k.currentProgram=Se,k.uniformsList=Ue,Se}function gt(x,P){const H=Ce.get(x);H.outputColorSpace=P.outputColorSpace,H.instancing=P.instancing,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function _t(x,P,H,k,X){P.isScene!==!0&&(P=Ke),Oe.resetTextureUnits();const pe=P.fog,fe=k.isMeshStandardMaterial?P.environment:null,be=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:LinearSRGBColorSpace,Me=(k.isMeshStandardMaterial?He:ke).get(k.envMap||fe),xe=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Se=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!H.morphAttributes.position,Ne=!!H.morphAttributes.normal,Ue=!!H.morphAttributes.color,Je=k.toneMapped?b.toneMapping:NoToneMapping,et=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ze=et!==void 0?et.length:0,Le=Ce.get(k),at=m.state.lights;if(ae===!0&&(se===!0||x!==M)){const qe=x===M&&k.id===C;ce.setState(k,x,qe)}let We=!1;k.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==at.state.version||Le.outputColorSpace!==be||X.isInstancedMesh&&Le.instancing===!1||!X.isInstancedMesh&&Le.instancing===!0||X.isSkinnedMesh&&Le.skinning===!1||!X.isSkinnedMesh&&Le.skinning===!0||Le.envMap!==Me||k.fog===!0&&Le.fog!==pe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ce.numPlanes||Le.numIntersection!==ce.numIntersection)||Le.vertexAlphas!==xe||Le.vertexTangents!==Se||Le.morphTargets!==Re||Le.morphNormals!==Ne||Le.morphColors!==Ue||Le.toneMapping!==Je||Te.isWebGL2===!0&&Le.morphTargetsCount!==ze)&&(We=!0):(We=!0,Le.__version=k.version);let tt=Le.currentProgram;We===!0&&(tt=nt(k,P,X));let ft=!1,it=!1,st=!1;const Ye=tt.getUniforms(),rt=Le.uniforms;if(ve.useProgram(tt.program)&&(ft=!0,it=!0,st=!0),k.id!==C&&(C=k.id,it=!0),ft||M!==x){if(Ye.setValue(I,"projectionMatrix",x.projectionMatrix),Te.logarithmicDepthBuffer&&Ye.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),M!==x&&(M=x,it=!0,st=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const qe=Ye.map.cameraPosition;qe!==void 0&&qe.setValue(I,Be.setFromMatrixPosition(x.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ye.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||X.isSkinnedMesh)&&Ye.setValue(I,"viewMatrix",x.matrixWorldInverse)}if(X.isSkinnedMesh){Ye.setOptional(I,X,"bindMatrix"),Ye.setOptional(I,X,"bindMatrixInverse");const qe=X.skeleton;qe&&(Te.floatVertexTextures?(qe.boneTexture===null&&qe.computeBoneTexture(),Ye.setValue(I,"boneTexture",qe.boneTexture,Oe),Ye.setValue(I,"boneTextureSize",qe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pt=H.morphAttributes;if((pt.position!==void 0||pt.normal!==void 0||pt.color!==void 0&&Te.isWebGL2===!0)&&ue.update(X,H,tt),(it||Le.receiveShadow!==X.receiveShadow)&&(Le.receiveShadow=X.receiveShadow,Ye.setValue(I,"receiveShadow",X.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(rt.envMap.value=Me,rt.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),it&&(Ye.setValue(I,"toneMappingExposure",b.toneMappingExposure),Le.needsLights&&yt(rt,st),pe&&k.fog===!0&&Z.refreshFogUniforms(rt,pe),Z.refreshMaterialUniforms(rt,k,j,K,he),WebGLUniforms.upload(I,Le.uniformsList,rt,Oe)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(I,Le.uniformsList,rt,Oe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ye.setValue(I,"center",X.center),Ye.setValue(I,"modelViewMatrix",X.modelViewMatrix),Ye.setValue(I,"normalMatrix",X.normalMatrix),Ye.setValue(I,"modelMatrix",X.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const qe=k.uniformsGroups;for(let dt=0,Mt=qe.length;dt<Mt;dt++)if(Te.isWebGL2){const ht=qe[dt];Fe.update(ht,tt),Fe.bind(ht,tt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tt}function yt(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function bt(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(x,P,H){Ce.get(x.texture).__webglTexture=P,Ce.get(x.depthTexture).__webglTexture=H;const k=Ce.get(x);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=H===void 0,k.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,P){const H=Ce.get(x);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,H=0){O=x,S=P,T=H;let k=!0,X=null,pe=!1,fe=!1;if(x){const Me=Ce.get(x);Me.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(I.FRAMEBUFFER,null),k=!1):Me.__webglFramebuffer===void 0?Oe.setupRenderTarget(x):Me.__hasExternalTextures&&Oe.rebindTextures(x,Ce.get(x.texture).__webglTexture,Ce.get(x.depthTexture).__webglTexture);const xe=x.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(fe=!0);const Se=Ce.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(X=Se[P],pe=!0):Te.isWebGL2&&x.samples>0&&Oe.useMultisampledRTT(x)===!1?X=Ce.get(x).__webglMultisampledFramebuffer:X=Se,E.copy(x.viewport),B.copy(x.scissor),N=x.scissorTest}else E.copy(q).multiplyScalar(j).floor(),B.copy(U).multiplyScalar(j).floor(),N=W;if(ve.bindFramebuffer(I.FRAMEBUFFER,X)&&Te.drawBuffers&&k&&ve.drawBuffers(x,X),ve.viewport(E),ve.scissor(B),ve.setScissorTest(N),pe){const Me=Ce.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,Me.__webglTexture,H)}else if(fe){const Me=Ce.get(x.texture),xe=P||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.__webglTexture,H||0,xe)}C=-1},this.readRenderTargetPixels=function(x,P,H,k,X,pe,fe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ce.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(be=be[fe]),be){ve.bindFramebuffer(I.FRAMEBUFFER,be);try{const Me=x.texture,xe=Me.format,Se=Me.type;if(xe!==RGBAFormat&&de.convert(xe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Se===HalfFloatType&&(ye.has("EXT_color_buffer_half_float")||Te.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Se!==UnsignedByteType&&de.convert(Se)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Se===FloatType&&(Te.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-k&&H>=0&&H<=x.height-X&&I.readPixels(P,H,k,X,de.convert(xe),de.convert(Se),pe)}finally{const Me=O!==null?Ce.get(O).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(x,P,H=0){const k=Math.pow(2,-H),X=Math.floor(P.image.width*k),pe=Math.floor(P.image.height*k);Oe.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,x.x,x.y,X,pe),ve.unbindTexture()},this.copyTextureToTexture=function(x,P,H,k=0){const X=P.image.width,pe=P.image.height,fe=de.convert(H.format),be=de.convert(H.type);Oe.setTexture2D(H,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment),P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,x.x,x.y,X,pe,fe,be,P.image.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,x.x,x.y,P.mipmaps[0].width,P.mipmaps[0].height,fe,P.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,k,x.x,x.y,fe,be,P.image),k===0&&H.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(x,P,H,k,X=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=x.max.x-x.min.x+1,fe=x.max.y-x.min.y+1,be=x.max.z-x.min.z+1,Me=de.convert(k.format),xe=de.convert(k.type);let Se;if(k.isData3DTexture)Oe.setTexture3D(k,0),Se=I.TEXTURE_3D;else if(k.isDataArrayTexture)Oe.setTexture2DArray(k,0),Se=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Re=I.getParameter(I.UNPACK_ROW_LENGTH),Ne=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ue=I.getParameter(I.UNPACK_SKIP_PIXELS),Je=I.getParameter(I.UNPACK_SKIP_ROWS),et=I.getParameter(I.UNPACK_SKIP_IMAGES),ze=H.isCompressedTexture?H.mipmaps[0]:H.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ze.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ze.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,x.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,x.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,x.min.z),H.isDataTexture||H.isData3DTexture?I.texSubImage3D(Se,X,P.x,P.y,P.z,pe,fe,be,Me,xe,ze.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Se,X,P.x,P.y,P.z,pe,fe,be,Me,ze.data)):I.texSubImage3D(Se,X,P.x,P.y,P.z,pe,fe,be,Me,xe,ze),I.pixelStorei(I.UNPACK_ROW_LENGTH,Re),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ne),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),I.pixelStorei(I.UNPACK_SKIP_ROWS,Je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,et),X===0&&k.generateMipmaps&&I.generateMipmap(Se),ve.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?Oe.setTextureCube(x,0):x.isData3DTexture?Oe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Oe.setTexture2DArray(x,0):Oe.setTexture2D(x,0),ve.unbindTexture()},this.resetState=function(){S=0,T=0,O=null,ve.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===SRGBColorSpace?sRGBEncoding:LinearEncoding}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sRGBEncoding?SRGBColorSpace:LinearSRGBColorSpace}}class WebGL1Renderer extends WebGLRenderer{}WebGL1Renderer.prototype.isWebGL1Renderer=!0;class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r}}class SphereGeometry extends BufferGeometry{constructor(e=1,r=32,s=16,o=0,i=Math.PI*2,n=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:r,heightSegments:s,phiStart:o,phiLength:i,thetaStart:n,thetaLength:p},r=Math.max(3,Math.floor(r)),s=Math.max(2,Math.floor(s));const d=Math.min(n+p,Math.PI);let l=0;const u=[],c=new Vector3,g=new Vector3,f=[],y=[],_=[],m=[];for(let h=0;h<=s;h++){const R=[],b=h/s;let v=0;h===0&&n===0?v=.5/r:h===s&&d===Math.PI&&(v=-.5/r);for(let S=0;S<=r;S++){const T=S/r;c.x=-e*Math.cos(o+T*i)*Math.sin(n+b*p),c.y=e*Math.cos(n+b*p),c.z=e*Math.sin(o+T*i)*Math.sin(n+b*p),y.push(c.x,c.y,c.z),g.copy(c).normalize(),_.push(g.x,g.y,g.z),m.push(T+v,1-b),R.push(l++)}u.push(R)}for(let h=0;h<s;h++)for(let R=0;R<r;R++){const b=u[h][R+1],v=u[h][R],S=u[h+1][R],T=u[h+1][R+1];(h!==0||n>0)&&f.push(b,v,T),(h!==s-1||d<Math.PI)&&f.push(v,S,T)}this.setIndex(f),this.setAttribute("position",new Float32BufferAttribute(y,3)),this.setAttribute("normal",new Float32BufferAttribute(_,3)),this.setAttribute("uv",new Float32BufferAttribute(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new SphereGeometry(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Cache={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class LoadingManager{constructor(e,r,s){const o=this;let i=!1,n=0,p=0,d;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=r,this.onError=s,this.itemStart=function(u){p++,i===!1&&o.onStart!==void 0&&o.onStart(u,n,p),i=!0},this.itemEnd=function(u){n++,o.onProgress!==void 0&&o.onProgress(u,n,p),n===p&&(i=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(u){o.onError!==void 0&&o.onError(u)},this.resolveURL=function(u){return d?d(u):u},this.setURLModifier=function(u){return d=u,this},this.addHandler=function(u,c){return l.push(u,c),this},this.removeHandler=function(u){const c=l.indexOf(u);return c!==-1&&l.splice(c,2),this},this.getHandler=function(u){for(let c=0,g=l.length;c<g;c+=2){const f=l[c],y=l[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return y}return null}}}const DefaultLoadingManager=new LoadingManager;class Loader{constructor(e){this.manager=e!==void 0?e:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,r){const s=this;return new Promise(function(o,i){s.load(e,o,r,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Loader.DEFAULT_MATERIAL_NAME="__DEFAULT";class ImageLoader extends Loader{constructor(e){super(e)}load(e,r,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,n=Cache.get(e);if(n!==void 0)return i.manager.itemStart(e),setTimeout(function(){r&&r(n),i.manager.itemEnd(e)},0),n;const p=createElementNS("img");function d(){u(),Cache.add(e,this),r&&r(this),i.manager.itemEnd(e)}function l(c){u(),o&&o(c),i.manager.itemError(e),i.manager.itemEnd(e)}function u(){p.removeEventListener("load",d,!1),p.removeEventListener("error",l,!1)}return p.addEventListener("load",d,!1),p.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),i.manager.itemStart(e),p.src=e,p}}class TextureLoader extends Loader{constructor(e){super(e)}load(e,r,s,o){const i=new Texture,n=new ImageLoader(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(p){i.image=p,i.needsUpdate=!0,r!==void 0&&r(i)},s,o),i}}class Raycaster{constructor(e,r,s=0,o=1/0){this.ray=new Ray(e,r),this.near=s,this.far=o,this.camera=null,this.layers=new Layers,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,r){this.ray.set(e,r)}setFromCamera(e,r){r.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(r.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(r).sub(this.ray.origin).normalize(),this.camera=r):r.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(r.near+r.far)/(r.near-r.far)).unproject(r),this.ray.direction.set(0,0,-1).transformDirection(r.matrixWorld),this.camera=r):console.error("THREE.Raycaster: Unsupported camera type: "+r.type)}intersectObject(e,r=!0,s=[]){return intersectObject(e,this,s,r),s.sort(ascSort),s}intersectObjects(e,r=!0,s=[]){for(let o=0,i=e.length;o<i;o++)intersectObject(e[o],this,s,r);return s.sort(ascSort),s}}function ascSort(t,e){return t.distance-e.distance}function intersectObject(t,e,r,s){if(t.layers.test(e.layers)&&t.raycast(e,r),s===!0){const o=t.children;for(let i=0,n=o.length;i<n;i++)intersectObject(o[i],e,r,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vision={},fileset_resolver={};let supportsSimd;Object.defineProperty(fileset_resolver,"__esModule",{value:!0}),fileset_resolver.FilesetResolver=void 0;const WASM_SIMD_CHECK=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function isSimdSupported(){if(supportsSimd===void 0)try{await WebAssembly.instantiate(WASM_SIMD_CHECK),supportsSimd=!0}catch{supportsSimd=!1}return supportsSimd}async function createFileset(t,e=""){const r=await isSimdSupported()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${r}.js`,wasmBinaryPath:`${e}/${t}_${r}.wasm`}}class FilesetResolver$1{static isSimdSupported(){return isSimdSupported()}static forAudioTasks(e){return createFileset("audio",e)}static forTextTasks(e){return createFileset("text",e)}static forVisionTasks(e){return createFileset("vision",e)}}fileset_resolver.FilesetResolver=FilesetResolver$1;var drawing_utils={};Object.defineProperty(drawing_utils,"__esModule",{value:!0}),drawing_utils.DrawingUtils=void 0;const DEFAULT_OPTIONS={color:"white",lineWidth:4,radius:6};function addDefaultOptions(t){return t=t||{},Object.assign(Object.assign(Object.assign({},DEFAULT_OPTIONS),{fillColor:t.color}),t)}function resolve(t,e){return t instanceof Function?t(e):t}class DrawingUtils$1{constructor(e){this.ctx=e}static clamp(e,r,s){const o=Math.min(r,s),i=Math.max(r,s);return Math.max(o,Math.min(i,e))}static lerp(e,r,s,o,i){const n=o*(1-(e-r)/(s-r))+i*(1-(s-e)/(s-r));return DrawingUtils$1.clamp(n,o,i)}drawLandmarks(e,r){if(!e)return;const s=this.ctx,o=addDefaultOptions(r);s.save();const i=s.canvas;let n=0;for(const p of e){s.fillStyle=resolve(o.fillColor,{index:n,from:p}),s.strokeStyle=resolve(o.color,{index:n,from:p}),s.lineWidth=resolve(o.lineWidth,{index:n,from:p});const d=new Path2D;d.arc(p.x*i.width,p.y*i.height,resolve(o.radius,{index:n,from:p}),0,2*Math.PI),s.fill(d),s.stroke(d),++n}s.restore()}drawConnectors(e,r,s){if(!e||!r)return;const o=this.ctx,i=addDefaultOptions(s);o.save();const n=o.canvas;let p=0;for(const d of r){o.beginPath();const l=e[d.start],u=e[d.end];l&&u&&(o.strokeStyle=resolve(i.color,{index:p,from:l,to:u}),o.lineWidth=resolve(i.lineWidth,{index:p,from:l,to:u}),o.moveTo(l.x*n.width,l.y*n.height),o.lineTo(u.x*n.width,u.y*n.height)),++p,o.stroke()}o.restore()}drawBoundingBox(e,r){const s=this.ctx,o=addDefaultOptions(r);s.save(),s.beginPath(),s.lineWidth=resolve(o.lineWidth,{}),s.strokeStyle=resolve(o.color,{}),s.fillStyle=resolve(o.fillColor,{}),s.moveTo(e.originX,e.originY),s.lineTo(e.originX+e.width,e.originY),s.lineTo(e.originX+e.width,e.originY+e.height),s.lineTo(e.originX,e.originY+e.height),s.lineTo(e.originX,e.originY),s.stroke(),s.fill(),s.restore()}}drawing_utils.DrawingUtils=DrawingUtils$1;var image={},image_shader_context={};Object.defineProperty(image_shader_context,"__esModule",{value:!0}),image_shader_context.MPImageShaderContext=image_shader_context.assertNotNull=void 0;const VERTEX_SHADER=`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,FRAGMENT_SHADER=`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
   void main() {
     gl_FragColor = texture2D(inputTexture, vTex);
   }
 `;function assertNotNull(t,e){if(t===null)throw new Error(`Unable to obtain required WebGL resource: ${e}`);return t}image_shader_context.assertNotNull=assertNotNull;class MPImageShaderBuffers{constructor(e,r,s,o){this.gl=e,this.vertexArrayObject=r,this.vertexBuffer=s,this.textureBuffer=o}bind(){this.gl.bindVertexArray(this.vertexArrayObject)}unbind(){this.gl.bindVertexArray(null)}close(){this.gl.deleteVertexArray(this.vertexArrayObject),this.gl.deleteBuffer(this.vertexBuffer),this.gl.deleteBuffer(this.textureBuffer)}}class MPImageShaderContext{compileShader(e,r){const s=this.gl,o=assertNotNull(s.createShader(r),"Failed to create WebGL shader");if(s.shaderSource(o,e),s.compileShader(o),!s.getShaderParameter(o,s.COMPILE_STATUS)){const i=s.getShaderInfoLog(o);throw new Error(`Could not compile WebGL shader: ${i}`)}return s.attachShader(this.program,o),o}setupShaders(){const e=this.gl;if(this.program=assertNotNull(e.createProgram(),"Failed to create WebGL program"),this.vertexShader=this.compileShader(VERTEX_SHADER,e.VERTEX_SHADER),this.fragmentShader=this.compileShader(FRAGMENT_SHADER,e.FRAGMENT_SHADER),e.linkProgram(this.program),!e.getProgramParameter(this.program,e.LINK_STATUS)){const r=e.getProgramInfoLog(this.program);throw new Error(`Error during program linking: ${r}`)}this.aVertex=e.getAttribLocation(this.program,"aVertex"),this.aTex=e.getAttribLocation(this.program,"aTex")}createBuffers(e){const r=this.gl,s=assertNotNull(r.createVertexArray(),"Failed to create vertex array");r.bindVertexArray(s);const o=assertNotNull(r.createBuffer(),"Failed to create buffer");r.bindBuffer(r.ARRAY_BUFFER,o),r.enableVertexAttribArray(this.aVertex),r.vertexAttribPointer(this.aVertex,2,r.FLOAT,!1,0,0),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),r.STATIC_DRAW);const i=assertNotNull(r.createBuffer(),"Failed to create buffer");r.bindBuffer(r.ARRAY_BUFFER,i),r.enableVertexAttribArray(this.aTex),r.vertexAttribPointer(this.aTex,2,r.FLOAT,!1,0,0);const n=e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0];return r.bufferData(r.ARRAY_BUFFER,new Float32Array(n),r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,null),r.bindVertexArray(null),new MPImageShaderBuffers(r,s,o,i)}getShaderBuffers(e){return e?(this.shaderBuffersFlipVertically||(this.shaderBuffersFlipVertically=this.createBuffers(!0)),this.shaderBuffersFlipVertically):(this.shaderBuffersPassthrough||(this.shaderBuffersPassthrough=this.createBuffers(!1)),this.shaderBuffersPassthrough)}maybeInitGL(e){if(this.gl){if(e!==this.gl)throw new Error("Cannot change GL context once initialized")}else this.gl=e}run(e,r,s){this.maybeInitGL(e),this.program||this.setupShaders();const o=this.getShaderBuffers(r);e.useProgram(this.program),o.bind();const i=s();return o.unbind(),i}bindFramebuffer(e,r){this.maybeInitGL(e),this.framebuffer||(this.framebuffer=assertNotNull(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0)}unbindFramebuffer(){var e;(e=this.gl)===null||e===void 0||e.bindFramebuffer(this.gl.FRAMEBUFFER,null)}close(){if(this.program){const e=this.gl;e.deleteProgram(this.program),e.deleteShader(this.vertexShader),e.deleteShader(this.fragmentShader)}this.framebuffer&&this.gl.deleteFramebuffer(this.framebuffer),this.shaderBuffersPassthrough&&this.shaderBuffersPassthrough.close(),this.shaderBuffersFlipVertically&&this.shaderBuffersFlipVertically.close()}}image_shader_context.MPImageShaderContext=MPImageShaderContext,Object.defineProperty(image,"__esModule",{value:!0}),image.MPImage=void 0;const image_shader_context_1$2=image_shader_context,INSTANCE_COUNT_WARNING_THRESHOLD$1=250;var MPImageType;(function(t){t[t.IMAGE_DATA=0]="IMAGE_DATA",t[t.IMAGE_BITMAP=1]="IMAGE_BITMAP",t[t.WEBGL_TEXTURE=2]="WEBGL_TEXTURE"})(MPImageType||(MPImageType={}));class MPImage$1{constructor(e,r,s,o,i,n,p){this.containers=e,this.ownsImageBitmap=r,this.ownsWebGLTexture=s,this.canvas=o,this.shaderContext=i,this.width=n,this.height=p,(this.ownsImageBitmap||this.ownsWebGLTexture)&&(--MPImage$1.instancesBeforeWarning,MPImage$1.instancesBeforeWarning===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources."))}hasImageData(){return!!this.getContainer(MPImageType.IMAGE_DATA)}hasImageBitmap(){return!!this.getContainer(MPImageType.IMAGE_BITMAP)}hasWebGLTexture(){return!!this.getContainer(MPImageType.WEBGL_TEXTURE)}getAsImageData(){return this.convertToImageData()}getAsImageBitmap(){return this.convertToImageBitmap()}getAsWebGLTexture(){return this.convertToWebGLTexture()}getContainer(e){switch(e){case MPImageType.IMAGE_DATA:return this.containers.find(r=>r instanceof ImageData);case MPImageType.IMAGE_BITMAP:return this.containers.find(r=>typeof ImageBitmap<"u"&&r instanceof ImageBitmap);case MPImageType.WEBGL_TEXTURE:return this.containers.find(r=>typeof WebGLTexture<"u"&&r instanceof WebGLTexture);default:throw new Error(`Type is not supported: ${e}`)}}clone(){const e=[];for(const r of this.containers){let s;if(r instanceof ImageData)s=new ImageData(r.data,this.width,this.height);else if(r instanceof WebGLTexture){const o=this.getGL(),i=this.getShaderContext();o.activeTexture(o.TEXTURE1),s=(0,image_shader_context_1$2.assertNotNull)(o.createTexture(),"Failed to create texture"),o.bindTexture(o.TEXTURE_2D,s),this.configureTextureParams(),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,this.width,this.height,0,o.RGBA,o.UNSIGNED_BYTE,null),o.bindTexture(o.TEXTURE_2D,null),i.bindFramebuffer(o,s),i.run(o,!1,()=>{this.bindTexture(),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLE_FAN,0,4),this.unbindTexture()}),i.unbindFramebuffer(),this.unbindTexture()}else{if(!(r instanceof ImageBitmap))throw new Error(`Type is not supported: ${r}`);this.convertToWebGLTexture(),this.bindTexture(),s=this.copyTextureToBitmap(),this.unbindTexture()}e.push(s)}return new MPImage$1(e,this.hasImageBitmap(),this.hasWebGLTexture(),this.canvas,this.shaderContext,this.width,this.height)}getOffscreenCanvas(){if(!(this.canvas instanceof OffscreenCanvas))throw new Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return this.canvas}getGL(){if(!this.canvas)throw new Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return this.gl||(this.gl=(0,image_shader_context_1$2.assertNotNull)(this.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),this.gl}getShaderContext(){return this.shaderContext||(this.shaderContext=new image_shader_context_1$2.MPImageShaderContext),this.shaderContext}convertToImageBitmap(){let e=this.getContainer(MPImageType.IMAGE_BITMAP);return e||(this.convertToWebGLTexture(),e=this.convertWebGLTextureToImageBitmap(),this.containers.push(e),this.ownsImageBitmap=!0),e}convertToImageData(){let e=this.getContainer(MPImageType.IMAGE_DATA);if(!e){const r=this.getGL(),s=this.getShaderContext(),o=new Uint8Array(this.width*this.height*4),i=this.convertToWebGLTexture();s.bindFramebuffer(r,i),r.readPixels(0,0,this.width,this.height,r.RGBA,r.UNSIGNED_BYTE,o),s.unbindFramebuffer(),e=new ImageData(new Uint8ClampedArray(o.buffer),this.width,this.height),this.containers.push(e)}return e}convertToWebGLTexture(){let e=this.getContainer(MPImageType.WEBGL_TEXTURE);if(!e){const r=this.getGL();e=this.bindTexture();const s=this.getContainer(MPImageType.IMAGE_BITMAP)||this.convertToImageData();r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,s),this.unbindTexture()}return e}configureTextureParams(){const e=this.getGL();e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR)}bindTexture(){const e=this.getGL();e.viewport(0,0,this.width,this.height),e.activeTexture(e.TEXTURE0);let r=this.getContainer(MPImageType.WEBGL_TEXTURE);return r?e.bindTexture(e.TEXTURE_2D,r):(r=(0,image_shader_context_1$2.assertNotNull)(e.createTexture(),"Failed to create texture"),this.containers.push(r),this.ownsWebGLTexture=!0,e.bindTexture(e.TEXTURE_2D,r),this.configureTextureParams()),r}unbindTexture(){this.gl.bindTexture(this.gl.TEXTURE_2D,null)}copyTextureToBitmap(){const e=this.getGL();return this.getShaderContext().run(e,!0,()=>this.runWithResizedCanvas(()=>(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),this.getOffscreenCanvas().transferToImageBitmap())))}convertWebGLTextureToImageBitmap(){this.bindTexture();const e=this.copyTextureToBitmap();return this.unbindTexture(),e}runWithResizedCanvas(e){const r=this.canvas;if(r.width===this.width&&r.height===this.height)return e();const s=r.width,o=r.height;r.width=this.width,r.height=this.height;const i=e();return r.width=s,r.height=o,i}close(){this.ownsImageBitmap&&this.getContainer(MPImageType.IMAGE_BITMAP).close(),this.ownsWebGLTexture&&this.getGL().deleteTexture(this.getContainer(MPImageType.WEBGL_TEXTURE)),MPImage$1.instancesBeforeWarning=-1}}image.MPImage=MPImage$1,MPImage$1.instancesBeforeWarning=INSTANCE_COUNT_WARNING_THRESHOLD$1;var mask={},platform_utils={};function isWebKit(t=navigator){const e=t.userAgent;return e.includes("Safari")&&!e.includes("Chrome")}function isIOS(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}Object.defineProperty(platform_utils,"__esModule",{value:!0}),platform_utils.isIOS=platform_utils.isWebKit=void 0,platform_utils.isWebKit=isWebKit,platform_utils.isIOS=isIOS,Object.defineProperty(mask,"__esModule",{value:!0}),mask.MPMask=void 0;const image_shader_context_1$1=image_shader_context,platform_utils_1$1=platform_utils,INSTANCE_COUNT_WARNING_THRESHOLD=250;var MPMaskType;(function(t){t[t.UINT8_ARRAY=0]="UINT8_ARRAY",t[t.FLOAT32_ARRAY=1]="FLOAT32_ARRAY",t[t.WEBGL_TEXTURE=2]="WEBGL_TEXTURE"})(MPMaskType||(MPMaskType={}));class MPMask$1{constructor(e,r,s,o,i,n){this.containers=e,this.ownsWebGLTexture=r,this.canvas=s,this.shaderContext=o,this.width=i,this.height=n,this.ownsWebGLTexture&&(--MPMask$1.instancesBeforeWarning,MPMask$1.instancesBeforeWarning===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources."))}hasUint8Array(){return!!this.getContainer(MPMaskType.UINT8_ARRAY)}hasFloat32Array(){return!!this.getContainer(MPMaskType.FLOAT32_ARRAY)}hasWebGLTexture(){return!!this.getContainer(MPMaskType.WEBGL_TEXTURE)}getAsUint8Array(){return this.convertToUint8Array()}getAsFloat32Array(){return this.convertToFloat32Array()}getAsWebGLTexture(){return this.convertToWebGLTexture()}getTexImage2DFormat(){const e=this.getGL();if(!MPMask$1.texImage2DFormat)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))MPMask$1.texImage2DFormat=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw new Error("GPU does not fully support 4-channel float32 or float16 formats");MPMask$1.texImage2DFormat=e.R16F}return MPMask$1.texImage2DFormat}getContainer(e){switch(e){case MPMaskType.UINT8_ARRAY:return this.containers.find(r=>r instanceof Uint8Array);case MPMaskType.FLOAT32_ARRAY:return this.containers.find(r=>r instanceof Float32Array);case MPMaskType.WEBGL_TEXTURE:return this.containers.find(r=>typeof WebGLTexture<"u"&&r instanceof WebGLTexture);default:throw new Error(`Type is not supported: ${e}`)}}clone(){const e=[];for(const r of this.containers){let s;if(r instanceof Uint8Array)s=new Uint8Array(r);else if(r instanceof Float32Array)s=new Float32Array(r);else{if(!(r instanceof WebGLTexture))throw new Error(`Type is not supported: ${r}`);{const o=this.getGL(),i=this.getShaderContext();o.activeTexture(o.TEXTURE1),s=(0,image_shader_context_1$1.assertNotNull)(o.createTexture(),"Failed to create texture"),o.bindTexture(o.TEXTURE_2D,s),this.configureTextureParams();const n=this.getTexImage2DFormat();o.texImage2D(o.TEXTURE_2D,0,n,this.width,this.height,0,o.RED,o.FLOAT,null),o.bindTexture(o.TEXTURE_2D,null),i.bindFramebuffer(o,s),i.run(o,!1,()=>{this.bindTexture(),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLE_FAN,0,4),this.unbindTexture()}),i.unbindFramebuffer(),this.unbindTexture()}}e.push(s)}return new MPMask$1(e,this.hasWebGLTexture(),this.canvas,this.shaderContext,this.width,this.height)}getGL(){if(!this.canvas)throw new Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return this.gl||(this.gl=(0,image_shader_context_1$1.assertNotNull)(this.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),this.gl}getShaderContext(){return this.shaderContext||(this.shaderContext=new image_shader_context_1$1.MPImageShaderContext),this.shaderContext}convertToFloat32Array(){let e=this.getContainer(MPMaskType.FLOAT32_ARRAY);if(!e){const r=this.getContainer(MPMaskType.UINT8_ARRAY);if(r)e=new Float32Array(r).map(s=>s/255);else{e=new Float32Array(this.width*this.height);const s=this.getGL(),o=this.getShaderContext(),i=this.convertToWebGLTexture();if(o.bindFramebuffer(s,i),(0,platform_utils_1$1.isIOS)()){const n=new Float32Array(this.width*this.height*4);s.readPixels(0,0,this.width,this.height,s.RGBA,s.FLOAT,n);for(let p=0,d=0;p<e.length;++p,d+=4)e[p]=n[d]}else s.readPixels(0,0,this.width,this.height,s.RED,s.FLOAT,e)}this.containers.push(e)}return e}convertToUint8Array(){let e=this.getContainer(MPMaskType.UINT8_ARRAY);if(!e){const r=this.convertToFloat32Array();e=new Uint8Array(r.map(s=>255*s)),this.containers.push(e)}return e}convertToWebGLTexture(){let e=this.getContainer(MPMaskType.WEBGL_TEXTURE);if(!e){const r=this.getGL();e=this.bindTexture();const s=this.convertToFloat32Array(),o=this.getTexImage2DFormat();r.texImage2D(r.TEXTURE_2D,0,o,this.width,this.height,0,r.RED,r.FLOAT,s),this.unbindTexture()}return e}configureTextureParams(){const e=this.getGL();e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST)}bindTexture(){const e=this.getGL();e.viewport(0,0,this.width,this.height),e.activeTexture(e.TEXTURE0);let r=this.getContainer(MPMaskType.WEBGL_TEXTURE);return r?e.bindTexture(e.TEXTURE_2D,r):(r=(0,image_shader_context_1$1.assertNotNull)(e.createTexture(),"Failed to create texture"),this.containers.push(r),this.ownsWebGLTexture=!0,e.bindTexture(e.TEXTURE_2D,r),this.configureTextureParams()),r}unbindTexture(){this.gl.bindTexture(this.gl.TEXTURE_2D,null)}close(){this.ownsWebGLTexture&&this.getGL().deleteTexture(this.getContainer(MPMaskType.WEBGL_TEXTURE)),MPMask$1.instancesBeforeWarning=-1}}mask.MPMask=MPMask$1,MPMask$1.instancesBeforeWarning=INSTANCE_COUNT_WARNING_THRESHOLD;var face_detector={},calculator_pb={},googleProtobuf={};(function(exports){var $jscomp=$jscomp||{};$jscomp.scope={},$jscomp.findInternal=function(t,e,r){t instanceof String&&(t=String(t));for(var s=t.length,o=0;o<s;o++){var i=t[o];if(e.call(r,i,o,t))return{i:o,v:i}}return{i:-1,v:void 0}},$jscomp.ASSUME_ES5=!1,$jscomp.ASSUME_NO_NATIVE_MAP=!1,$jscomp.ASSUME_NO_NATIVE_SET=!1,$jscomp.SIMPLE_FROUND_POLYFILL=!1,$jscomp.defineProperty=$jscomp.ASSUME_ES5||typeof Object.defineProperties=="function"?Object.defineProperty:function(t,e,r){t!=Array.prototype&&t!=Object.prototype&&(t[e]=r.value)},$jscomp.getGlobal=function(t){return typeof window<"u"&&window===t?t:commonjsGlobal!==void 0&&commonjsGlobal!=null?commonjsGlobal:t},$jscomp.global=$jscomp.getGlobal(commonjsGlobal),$jscomp.polyfill=function(t,e,r,s){if(e){for(r=$jscomp.global,t=t.split("."),s=0;s<t.length-1;s++){var o=t[s];o in r||(r[o]={}),r=r[o]}(e=e(s=r[t=t[t.length-1]]))!=s&&e!=null&&$jscomp.defineProperty(r,t,{configurable:!0,writable:!0,value:e})}},$jscomp.polyfill("Array.prototype.findIndex",function(t){return t||function(e,r){return $jscomp.findInternal(this,e,r).i}},"es6","es3"),$jscomp.checkStringArgs=function(t,e,r){if(t==null)throw new TypeError("The 'this' value for String.prototype."+r+" must not be null or undefined");if(e instanceof RegExp)throw new TypeError("First argument to String.prototype."+r+" must not be a regular expression");return t+""},$jscomp.polyfill("String.prototype.endsWith",function(t){return t||function(e,r){var s=$jscomp.checkStringArgs(this,e,"endsWith");e+="",r===void 0&&(r=s.length),r=Math.max(0,Math.min(0|r,s.length));for(var o=e.length;0<o&&0<r;)if(s[--r]!=e[--o])return!1;return 0>=o}},"es6","es3"),$jscomp.polyfill("Array.prototype.find",function(t){return t||function(e,r){return $jscomp.findInternal(this,e,r).v}},"es6","es3"),$jscomp.polyfill("String.prototype.startsWith",function(t){return t||function(e,r){var s=$jscomp.checkStringArgs(this,e,"startsWith");e+="";var o=s.length,i=e.length;r=Math.max(0,Math.min(0|r,s.length));for(var n=0;n<i&&r<o;)if(s[r++]!=e[n++])return!1;return n>=i}},"es6","es3"),$jscomp.polyfill("String.prototype.repeat",function(t){return t||function(e){var r=$jscomp.checkStringArgs(this,null,"repeat");if(0>e||1342177279<e)throw new RangeError("Invalid count value");e|=0;for(var s="";e;)1&e&&(s+=r),(e>>>=1)&&(r+=r);return s}},"es6","es3");var COMPILED=!0,goog=goog||{};goog.global=commonjsGlobal||self,goog.exportPath_=function(t,e,r){t=t.split("."),r=r||goog.global,t[0]in r||r.execScript===void 0||r.execScript("var "+t[0]);for(var s;t.length&&(s=t.shift());)t.length||e===void 0?r=r[s]&&r[s]!==Object.prototype[s]?r[s]:r[s]={}:r[s]=e},goog.define=function(t,e){return e},goog.FEATURESET_YEAR=2012,goog.DEBUG=!0,goog.LOCALE="en",goog.TRUSTED_SITE=!0,goog.STRICT_MODE_COMPATIBLE=!1,goog.DISALLOW_TEST_ONLY_CODE=!goog.DEBUG,goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING=!1,goog.provide=function(t){if(goog.isInModuleLoader_())throw Error("goog.provide cannot be used within a module.");goog.constructNamespace_(t)},goog.constructNamespace_=function(t,e){goog.exportPath_(t,e)},goog.getScriptNonce=function(t){return t&&t!=goog.global?goog.getScriptNonce_(t.document):(goog.cspNonce_===null&&(goog.cspNonce_=goog.getScriptNonce_(goog.global.document)),goog.cspNonce_)},goog.NONCE_PATTERN_=/^[\w+/_-]+[=]{0,2}$/,goog.cspNonce_=null,goog.getScriptNonce_=function(t){return(t=t.querySelector&&t.querySelector("script[nonce]"))&&(t=t.nonce||t.getAttribute("nonce"))&&goog.NONCE_PATTERN_.test(t)?t:""},goog.VALID_MODULE_RE_=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/,goog.module=function(t){if(typeof t!="string"||!t||t.search(goog.VALID_MODULE_RE_)==-1)throw Error("Invalid module identifier");if(!goog.isInGoogModuleLoader_())throw Error("Module "+t+" has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");if(goog.moduleLoaderState_.moduleName)throw Error("goog.module may only be called once per module.");goog.moduleLoaderState_.moduleName=t},goog.module.get=function(t){return goog.module.getInternal_(t)},goog.module.getInternal_=function(t){return null},goog.ModuleType={ES6:"es6",GOOG:"goog"},goog.moduleLoaderState_=null,goog.isInModuleLoader_=function(){return goog.isInGoogModuleLoader_()||goog.isInEs6ModuleLoader_()},goog.isInGoogModuleLoader_=function(){return!!goog.moduleLoaderState_&&goog.moduleLoaderState_.type==goog.ModuleType.GOOG},goog.isInEs6ModuleLoader_=function(){if(goog.moduleLoaderState_&&goog.moduleLoaderState_.type==goog.ModuleType.ES6)return!0;var t=goog.global.$jscomp;return!!t&&typeof t.getCurrentModulePath=="function"&&!!t.getCurrentModulePath()},goog.module.declareLegacyNamespace=function(){goog.moduleLoaderState_.declareLegacyNamespace=!0},goog.declareModuleId=function(t){if(goog.moduleLoaderState_)goog.moduleLoaderState_.moduleName=t;else{var e=goog.global.$jscomp;if(!e||typeof e.getCurrentModulePath!="function")throw Error('Module with namespace "'+t+'" has been loaded incorrectly.');e=e.require(e.getCurrentModulePath()),goog.loadedModules_[t]={exports:e,type:goog.ModuleType.ES6,moduleId:t}}},goog.setTestOnly=function(t){if(goog.DISALLOW_TEST_ONLY_CODE)throw t=t||"",Error("Importing test-only code into non-debug environment"+(t?": "+t:"."))},goog.forwardDeclare=function(t){},goog.getObjectByName=function(t,e){t=t.split("."),e=e||goog.global;for(var r=0;r<t.length;r++)if((e=e[t[r]])==null)return null;return e},goog.globalize=function(t,e){for(var r in e=e||goog.global,t)e[r]=t[r]},goog.addDependency=function(t,e,r,s){},goog.ENABLE_DEBUG_LOADER=!0,goog.logToConsole_=function(t){goog.global.console&&goog.global.console.error(t)},goog.require=function(t){},goog.requireType=function(t){return{}},goog.basePath="",goog.nullFunction=function(){},goog.abstractMethod=function(){throw Error("unimplemented abstract method")},goog.addSingletonGetter=function(t){t.instance_=void 0,t.getInstance=function(){return t.instance_?t.instance_:(goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=t),t.instance_=new t)}},goog.instantiatedSingletons_=[],goog.LOAD_MODULE_USING_EVAL=!0,goog.SEAL_MODULE_EXPORTS=goog.DEBUG,goog.loadedModules_={},goog.DEPENDENCIES_ENABLED=!COMPILED,goog.TRANSPILE="detect",goog.ASSUME_ES_MODULES_TRANSPILED=!1,goog.TRANSPILE_TO_LANGUAGE="",goog.TRANSPILER="transpile.js",goog.hasBadLetScoping=null,goog.useSafari10Workaround=function(){if(goog.hasBadLetScoping==null){try{var a=!eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')}catch(t){a=!1}goog.hasBadLetScoping=a}return goog.hasBadLetScoping},goog.workaroundSafari10EvalBug=function(t){return"(function(){"+t+`
;})();
`},goog.loadModule=function(t){var e=goog.moduleLoaderState_;try{if(goog.moduleLoaderState_={moduleName:"",declareLegacyNamespace:!1,type:goog.ModuleType.GOOG},goog.isFunction(t))var r=t.call(void 0,{});else{if(typeof t!="string")throw Error("Invalid module definition");goog.useSafari10Workaround()&&(t=goog.workaroundSafari10EvalBug(t)),r=goog.loadModuleFromSource_.call(void 0,t)}var s=goog.moduleLoaderState_.moduleName;if(typeof s!="string"||!s)throw Error('Invalid module name "'+s+'"');goog.moduleLoaderState_.declareLegacyNamespace?goog.constructNamespace_(s,r):goog.SEAL_MODULE_EXPORTS&&Object.seal&&typeof r=="object"&&r!=null&&Object.seal(r),goog.loadedModules_[s]={exports:r,type:goog.ModuleType.GOOG,moduleId:goog.moduleLoaderState_.moduleName}}finally{goog.moduleLoaderState_=e}},goog.loadModuleFromSource_=function(a){return eval(a),{}},goog.normalizePath_=function(t){t=t.split("/");for(var e=0;e<t.length;)t[e]=="."?t.splice(e,1):e&&t[e]==".."&&t[e-1]&&t[e-1]!=".."?t.splice(--e,2):e++;return t.join("/")},goog.loadFileSync_=function(t){if(goog.global.CLOSURE_LOAD_FILE_SYNC)return goog.global.CLOSURE_LOAD_FILE_SYNC(t);try{var e=new goog.global.XMLHttpRequest;return e.open("get",t,!1),e.send(),e.status==0||e.status==200?e.responseText:null}catch{return null}},goog.transpile_=function(t,e,r){var s=goog.global.$jscomp;s||(goog.global.$jscomp=s={});var o=s.transpile;if(!o){var i=goog.basePath+goog.TRANSPILER,n=goog.loadFileSync_(i);if(n){if((function(){(0,eval)(n+`
//# sourceURL=`+i)}).call(goog.global),goog.global.$gwtExport&&goog.global.$gwtExport.$jscomp&&!goog.global.$gwtExport.$jscomp.transpile)throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: '+JSON.stringify(goog.global.$gwtExport));goog.global.$jscomp.transpile=goog.global.$gwtExport.$jscomp.transpile,o=(s=goog.global.$jscomp).transpile}}return o||(o=s.transpile=function(p,d){return goog.logToConsole_(d+" requires transpilation but no transpiler was found."),p}),o(t,e,r)},goog.typeOf=function(t){var e=typeof t;if(e=="object"){if(!t)return"null";if(t instanceof Array)return"array";if(t instanceof Object)return e;var r=Object.prototype.toString.call(t);if(r=="[object Window]")return"object";if(r=="[object Array]"||typeof t.length=="number"&&t.splice!==void 0&&t.propertyIsEnumerable!==void 0&&!t.propertyIsEnumerable("splice"))return"array";if(r=="[object Function]"||t.call!==void 0&&t.propertyIsEnumerable!==void 0&&!t.propertyIsEnumerable("call"))return"function"}else if(e=="function"&&t.call===void 0)return"object";return e},goog.isArray=function(t){return goog.typeOf(t)=="array"},goog.isArrayLike=function(t){var e=goog.typeOf(t);return e=="array"||e=="object"&&typeof t.length=="number"},goog.isDateLike=function(t){return goog.isObject(t)&&typeof t.getFullYear=="function"},goog.isFunction=function(t){return goog.typeOf(t)=="function"},goog.isObject=function(t){var e=typeof t;return e=="object"&&t!=null||e=="function"},goog.getUid=function(t){return Object.prototype.hasOwnProperty.call(t,goog.UID_PROPERTY_)&&t[goog.UID_PROPERTY_]||(t[goog.UID_PROPERTY_]=++goog.uidCounter_)},goog.hasUid=function(t){return!!t[goog.UID_PROPERTY_]},goog.removeUid=function(t){t!==null&&"removeAttribute"in t&&t.removeAttribute(goog.UID_PROPERTY_);try{delete t[goog.UID_PROPERTY_]}catch{}},goog.UID_PROPERTY_="closure_uid_"+(1e9*Math.random()>>>0),goog.uidCounter_=0,goog.getHashCode=goog.getUid,goog.removeHashCode=goog.removeUid,goog.cloneObject=function(t){var e=goog.typeOf(t);if(e=="object"||e=="array"){if(typeof t.clone=="function")return t.clone();for(var r in e=e=="array"?[]:{},t)e[r]=goog.cloneObject(t[r]);return e}return t},goog.bindNative_=function(t,e,r){return t.call.apply(t.bind,arguments)},goog.bindJs_=function(t,e,r){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var o=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(o,s),t.apply(e,o)}}return function(){return t.apply(e,arguments)}},goog.bind=function(t,e,r){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?goog.bind=goog.bindNative_:goog.bind=goog.bindJs_,goog.bind.apply(null,arguments)},goog.partial=function(t,e){var r=Array.prototype.slice.call(arguments,1);return function(){var s=r.slice();return s.push.apply(s,arguments),t.apply(this,s)}},goog.mixin=function(t,e){for(var r in e)t[r]=e[r]},goog.now=goog.TRUSTED_SITE&&Date.now||function(){return+new Date},goog.globalEval=function(t){if(goog.global.execScript)goog.global.execScript(t,"JavaScript");else{if(!goog.global.eval)throw Error("goog.globalEval not available");if(goog.evalWorksForGlobals_==null){try{goog.global.eval("var _evalTest_ = 1;")}catch{}if(goog.global._evalTest_!==void 0){try{delete goog.global._evalTest_}catch{}goog.evalWorksForGlobals_=!0}else goog.evalWorksForGlobals_=!1}if(goog.evalWorksForGlobals_)goog.global.eval(t);else{var e=goog.global.document,r=e.createElement("script");r.type="text/javascript",r.defer=!1,r.appendChild(e.createTextNode(t)),e.head.appendChild(r),e.head.removeChild(r)}}},goog.evalWorksForGlobals_=null,goog.getCssName=function(t,e){if(String(t).charAt(0)==".")throw Error('className passed in goog.getCssName must not start with ".". You passed: '+t);var r=function(o){return goog.cssNameMapping_[o]||o},s=function(o){o=o.split("-");for(var i=[],n=0;n<o.length;n++)i.push(r(o[n]));return i.join("-")};return s=goog.cssNameMapping_?goog.cssNameMappingStyle_=="BY_WHOLE"?r:s:function(o){return o},t=e?t+"-"+s(e):s(t),goog.global.CLOSURE_CSS_NAME_MAP_FN?goog.global.CLOSURE_CSS_NAME_MAP_FN(t):t},goog.setCssNameMapping=function(t,e){goog.cssNameMapping_=t,goog.cssNameMappingStyle_=e},goog.getMsg=function(t,e,r){return r&&r.html&&(t=t.replace(/</g,"&lt;")),e&&(t=t.replace(/\{\$([^}]+)}/g,function(s,o){return e!=null&&o in e?e[o]:s})),t},goog.getMsgWithFallback=function(t,e){return t},goog.exportSymbol=function(t,e,r){goog.exportPath_(t,e,r)},goog.exportProperty=function(t,e,r){t[e]=r},goog.inherits=function(t,e){function r(){}r.prototype=e.prototype,t.superClass_=e.prototype,t.prototype=new r,t.prototype.constructor=t,t.base=function(s,o,i){for(var n=Array(arguments.length-2),p=2;p<arguments.length;p++)n[p-2]=arguments[p];return e.prototype[o].apply(s,n)}},goog.scope=function(t){if(goog.isInModuleLoader_())throw Error("goog.scope is not supported within a module.");t.call(goog.global)},goog.defineClass=function(t,e){var r=e.constructor,s=e.statics;return r&&r!=Object.prototype.constructor||(r=function(){throw Error("cannot instantiate an interface (no constructor defined).")}),r=goog.defineClass.createSealingConstructor_(r,t),t&&goog.inherits(r,t),delete e.constructor,delete e.statics,goog.defineClass.applyProperties_(r.prototype,e),s!=null&&(s instanceof Function?s(r):goog.defineClass.applyProperties_(r,s)),r},goog.defineClass.SEAL_CLASS_INSTANCES=goog.DEBUG,goog.defineClass.createSealingConstructor_=function(t,e){if(!goog.defineClass.SEAL_CLASS_INSTANCES)return t;var r=!goog.defineClass.isUnsealable_(e),s=function(){var o=t.apply(this,arguments)||this;return o[goog.UID_PROPERTY_]=o[goog.UID_PROPERTY_],this.constructor===s&&r&&Object.seal instanceof Function&&Object.seal(o),o};return s},goog.defineClass.isUnsealable_=function(t){return t&&t.prototype&&t.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]},goog.defineClass.OBJECT_PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),goog.defineClass.applyProperties_=function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);for(var s=0;s<goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;s++)r=goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[s],Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},goog.tagUnsealableClass=function(t){},goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_="goog_defineClass_legacy_unsealable",goog.TRUSTED_TYPES_POLICY_NAME="",goog.identity_=function(t){return t},goog.createTrustedTypesPolicy=function(t){var e=null,r=goog.global.trustedTypes||goog.global.TrustedTypes;if(!r||!r.createPolicy)return e;try{e=r.createPolicy(t,{createHTML:goog.identity_,createScript:goog.identity_,createScriptURL:goog.identity_,createURL:goog.identity_})}catch(s){goog.logToConsole_(s.message)}return e},goog.TRUSTED_TYPES_POLICY_=goog.TRUSTED_TYPES_POLICY_NAME?goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME+"#base"):null,goog.object={},goog.object.is=function(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e},goog.object.forEach=function(t,e,r){for(var s in t)e.call(r,t[s],s,t)},goog.object.filter=function(t,e,r){var s,o={};for(s in t)e.call(r,t[s],s,t)&&(o[s]=t[s]);return o},goog.object.map=function(t,e,r){var s,o={};for(s in t)o[s]=e.call(r,t[s],s,t);return o},goog.object.some=function(t,e,r){for(var s in t)if(e.call(r,t[s],s,t))return!0;return!1},goog.object.every=function(t,e,r){for(var s in t)if(!e.call(r,t[s],s,t))return!1;return!0},goog.object.getCount=function(t){var e,r=0;for(e in t)r++;return r},goog.object.getAnyKey=function(t){for(var e in t)return e},goog.object.getAnyValue=function(t){for(var e in t)return t[e]},goog.object.contains=function(t,e){return goog.object.containsValue(t,e)},goog.object.getValues=function(t){var e,r=[],s=0;for(e in t)r[s++]=t[e];return r},goog.object.getKeys=function(t){var e,r=[],s=0;for(e in t)r[s++]=e;return r},goog.object.getValueByKeys=function(t,e){var r=goog.isArrayLike(e),s=r?e:arguments;for(r=r?0:1;r<s.length;r++){if(t==null)return;t=t[s[r]]}return t},goog.object.containsKey=function(t,e){return t!==null&&e in t},goog.object.containsValue=function(t,e){for(var r in t)if(t[r]==e)return!0;return!1},goog.object.findKey=function(t,e,r){for(var s in t)if(e.call(r,t[s],s,t))return s},goog.object.findValue=function(t,e,r){return(e=goog.object.findKey(t,e,r))&&t[e]},goog.object.isEmpty=function(t){for(var e in t)return!1;return!0},goog.object.clear=function(t){for(var e in t)delete t[e]},goog.object.remove=function(t,e){var r;return(r=e in t)&&delete t[e],r},goog.object.add=function(t,e,r){if(t!==null&&e in t)throw Error('The object already contains the key "'+e+'"');goog.object.set(t,e,r)},goog.object.get=function(t,e,r){return t!==null&&e in t?t[e]:r},goog.object.set=function(t,e,r){t[e]=r},goog.object.setIfUndefined=function(t,e,r){return e in t?t[e]:t[e]=r},goog.object.setWithReturnValueIfNotSet=function(t,e,r){return e in t?t[e]:(r=r(),t[e]=r)},goog.object.equals=function(t,e){for(var r in t)if(!(r in e)||t[r]!==e[r])return!1;for(var s in e)if(!(s in t))return!1;return!0},goog.object.clone=function(t){var e,r={};for(e in t)r[e]=t[e];return r},goog.object.unsafeClone=function(t){var e=goog.typeOf(t);if(e=="object"||e=="array"){if(goog.isFunction(t.clone))return t.clone();for(var r in e=e=="array"?[]:{},t)e[r]=goog.object.unsafeClone(t[r]);return e}return t},goog.object.transpose=function(t){var e,r={};for(e in t)r[t[e]]=e;return r},goog.object.PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),goog.object.extend=function(t,e){for(var r,s,o=1;o<arguments.length;o++){for(r in s=arguments[o])t[r]=s[r];for(var i=0;i<goog.object.PROTOTYPE_FIELDS_.length;i++)r=goog.object.PROTOTYPE_FIELDS_[i],Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}},goog.object.create=function(t){var e=arguments.length;if(e==1&&Array.isArray(arguments[0]))return goog.object.create.apply(null,arguments[0]);if(e%2)throw Error("Uneven number of arguments");for(var r={},s=0;s<e;s+=2)r[arguments[s]]=arguments[s+1];return r},goog.object.createSet=function(t){var e=arguments.length;if(e==1&&Array.isArray(arguments[0]))return goog.object.createSet.apply(null,arguments[0]);for(var r={},s=0;s<e;s++)r[arguments[s]]=!0;return r},goog.object.createImmutableView=function(t){var e=t;return Object.isFrozen&&!Object.isFrozen(t)&&(e=Object.create(t),Object.freeze(e)),e},goog.object.isImmutableView=function(t){return!!Object.isFrozen&&Object.isFrozen(t)},goog.object.getAllPropertyNames=function(t,e,r){if(!t)return[];if(!Object.getOwnPropertyNames||!Object.getPrototypeOf)return goog.object.getKeys(t);for(var s={};t&&(t!==Object.prototype||e)&&(t!==Function.prototype||r);){for(var o=Object.getOwnPropertyNames(t),i=0;i<o.length;i++)s[o[i]]=!0;t=Object.getPrototypeOf(t)}return goog.object.getKeys(s)},goog.object.getSuperClass=function(t){return(t=Object.getPrototypeOf(t.prototype))&&t.constructor};var jspb={asserts:{}};jspb.asserts.doAssertFailure=function(t,e,r,s){var o="Assertion failed";if(r){o+=": "+r;var i=s}else t&&(o+=": "+t,i=e);throw Error(""+o,i||[])},jspb.asserts.assert=function(t,e,r){for(var s=[],o=2;o<arguments.length;++o)s[o-2]=arguments[o];return t||jspb.asserts.doAssertFailure("",null,e,s),t},jspb.asserts.assertString=function(t,e,r){for(var s=[],o=2;o<arguments.length;++o)s[o-2]=arguments[o];return typeof t!="string"&&jspb.asserts.doAssertFailure("Expected string but got %s: %s.",[goog.typeOf(t),t],e,s),t},jspb.asserts.assertArray=function(t,e,r){for(var s=[],o=2;o<arguments.length;++o)s[o-2]=arguments[o];return Array.isArray(t)||jspb.asserts.doAssertFailure("Expected array but got %s: %s.",[goog.typeOf(t),t],e,s),t},jspb.asserts.fail=function(t,e){for(var r=[],s=1;s<arguments.length;++s)r[s-1]=arguments[s];throw Error("Failure"+(t?": "+t:""),r)},jspb.asserts.assertInstanceof=function(t,e,r,s){for(var o=[],i=3;i<arguments.length;++i)o[i-3]=arguments[i];return t instanceof e||jspb.asserts.doAssertFailure("Expected instanceof %s but got %s.",[jspb.asserts.getType(e),jspb.asserts.getType(t)],r,o),t},jspb.asserts.getType=function(t){return t instanceof Function?t.displayName||t.name||"unknown type name":t instanceof Object?t.constructor.displayName||t.constructor.name||Object.prototype.toString.call(t):t===null?"null":typeof t},jspb.BinaryConstants={},jspb.ConstBinaryMessage=function(){},jspb.BinaryMessage=function(){},jspb.BinaryConstants.FieldType={INVALID:-1,DOUBLE:1,FLOAT:2,INT64:3,UINT64:4,INT32:5,FIXED64:6,FIXED32:7,BOOL:8,STRING:9,GROUP:10,MESSAGE:11,BYTES:12,UINT32:13,ENUM:14,SFIXED32:15,SFIXED64:16,SINT32:17,SINT64:18,FHASH64:30,VHASH64:31},jspb.BinaryConstants.WireType={INVALID:-1,VARINT:0,FIXED64:1,DELIMITED:2,START_GROUP:3,END_GROUP:4,FIXED32:5},jspb.BinaryConstants.FieldTypeToWireType=function(t){var e=jspb.BinaryConstants.FieldType,r=jspb.BinaryConstants.WireType;switch(t){case e.INT32:case e.INT64:case e.UINT32:case e.UINT64:case e.SINT32:case e.SINT64:case e.BOOL:case e.ENUM:case e.VHASH64:return r.VARINT;case e.DOUBLE:case e.FIXED64:case e.SFIXED64:case e.FHASH64:return r.FIXED64;case e.STRING:case e.MESSAGE:case e.BYTES:return r.DELIMITED;case e.FLOAT:case e.FIXED32:case e.SFIXED32:return r.FIXED32;default:return r.INVALID}},jspb.BinaryConstants.INVALID_FIELD_NUMBER=-1,jspb.BinaryConstants.FLOAT32_EPS=1401298464324817e-60,jspb.BinaryConstants.FLOAT32_MIN=11754943508222875e-54,jspb.BinaryConstants.FLOAT32_MAX=34028234663852886e22,jspb.BinaryConstants.FLOAT64_EPS=5e-324,jspb.BinaryConstants.FLOAT64_MIN=22250738585072014e-324,jspb.BinaryConstants.FLOAT64_MAX=17976931348623157e292,jspb.BinaryConstants.TWO_TO_20=1048576,jspb.BinaryConstants.TWO_TO_23=8388608,jspb.BinaryConstants.TWO_TO_31=2147483648,jspb.BinaryConstants.TWO_TO_32=4294967296,jspb.BinaryConstants.TWO_TO_52=4503599627370496,jspb.BinaryConstants.TWO_TO_63=9223372036854776e3,jspb.BinaryConstants.TWO_TO_64=18446744073709552e3,jspb.BinaryConstants.ZERO_HASH="\0\0\0\0\0\0\0\0",goog.debug={},goog.debug.Error=function(t){if(Error.captureStackTrace)Error.captureStackTrace(this,goog.debug.Error);else{var e=Error().stack;e&&(this.stack=e)}t&&(this.message=String(t)),this.reportErrorToServer=!0},goog.inherits(goog.debug.Error,Error),goog.debug.Error.prototype.name="CustomError",goog.dom={},goog.dom.NodeType={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12},goog.asserts={},goog.asserts.ENABLE_ASSERTS=goog.DEBUG,goog.asserts.AssertionError=function(t,e){goog.debug.Error.call(this,goog.asserts.subs_(t,e)),this.messagePattern=t},goog.inherits(goog.asserts.AssertionError,goog.debug.Error),goog.asserts.AssertionError.prototype.name="AssertionError",goog.asserts.DEFAULT_ERROR_HANDLER=function(t){throw t},goog.asserts.errorHandler_=goog.asserts.DEFAULT_ERROR_HANDLER,goog.asserts.subs_=function(t,e){for(var r="",s=(t=t.split("%s")).length-1,o=0;o<s;o++)r+=t[o]+(o<e.length?e[o]:"%s");return r+t[s]},goog.asserts.doAssertFailure_=function(t,e,r,s){var o="Assertion failed";if(r){o+=": "+r;var i=s}else t&&(o+=": "+t,i=e);t=new goog.asserts.AssertionError(""+o,i||[]),goog.asserts.errorHandler_(t)},goog.asserts.setErrorHandler=function(t){goog.asserts.ENABLE_ASSERTS&&(goog.asserts.errorHandler_=t)},goog.asserts.assert=function(t,e,r){return goog.asserts.ENABLE_ASSERTS&&!t&&goog.asserts.doAssertFailure_("",null,e,Array.prototype.slice.call(arguments,2)),t},goog.asserts.assertExists=function(t,e,r){return goog.asserts.ENABLE_ASSERTS&&t==null&&goog.asserts.doAssertFailure_("Expected to exist: %s.",[t],e,Array.prototype.slice.call(arguments,2)),t},goog.asserts.fail=function(t,e){goog.asserts.ENABLE_ASSERTS&&goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1)))},goog.asserts.assertNumber=function(t,e,r){return goog.asserts.ENABLE_ASSERTS&&typeof t!="number"&&goog.asserts.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(t),t],e,Array.prototype.slice.call(arguments,2)),t},goog.asserts.assertString=function(t,e,r){return goog.asserts.ENABLE_ASSERTS&&typeof t!="string"&&goog.asserts.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(t),t],e,Array.prototype.slice.call(arguments,2)),t},goog.asserts.assertFunction=function(t,e,r){return goog.asserts.ENABLE_ASSERTS&&!goog.isFunction(t)&&goog.asserts.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(t),t],e,Array.prototype.slice.call(arguments,2)),t},goog.asserts.assertObject=function(t,e,r){return goog.asserts.ENABLE_ASSERTS&&!goog.isObject(t)&&goog.asserts.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(t),t],e,Array.prototype.slice.call(arguments,2)),t},goog.asserts.assertArray=function(t,e,r){return goog.asserts.ENABLE_ASSERTS&&!Array.isArray(t)&&goog.asserts.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(t),t],e,Array.prototype.slice.call(arguments,2)),t},goog.asserts.assertBoolean=function(t,e,r){return goog.asserts.ENABLE_ASSERTS&&typeof t!="boolean"&&goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(t),t],e,Array.prototype.slice.call(arguments,2)),t},goog.asserts.assertElement=function(t,e,r){return!goog.asserts.ENABLE_ASSERTS||goog.isObject(t)&&t.nodeType==goog.dom.NodeType.ELEMENT||goog.asserts.doAssertFailure_("Expected Element but got %s: %s.",[goog.typeOf(t),t],e,Array.prototype.slice.call(arguments,2)),t},goog.asserts.assertInstanceof=function(t,e,r,s){return!goog.asserts.ENABLE_ASSERTS||t instanceof e||goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.",[goog.asserts.getType_(e),goog.asserts.getType_(t)],r,Array.prototype.slice.call(arguments,3)),t},goog.asserts.assertFinite=function(t,e,r){return!goog.asserts.ENABLE_ASSERTS||typeof t=="number"&&isFinite(t)||goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.",[t],e,Array.prototype.slice.call(arguments,2)),t},goog.asserts.assertObjectPrototypeIsIntact=function(){for(var t in Object.prototype)goog.asserts.fail(t+" should not be enumerable in Object.prototype.")},goog.asserts.getType_=function(t){return t instanceof Function?t.displayName||t.name||"unknown type name":t instanceof Object?t.constructor.displayName||t.constructor.name||Object.prototype.toString.call(t):t===null?"null":typeof t},goog.array={},goog.NATIVE_ARRAY_PROTOTYPES=goog.TRUSTED_SITE,goog.array.ASSUME_NATIVE_FUNCTIONS=2012<goog.FEATURESET_YEAR,goog.array.peek=function(t){return t[t.length-1]},goog.array.last=goog.array.peek,goog.array.indexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.indexOf)?function(t,e,r){return goog.asserts.assert(t.length!=null),Array.prototype.indexOf.call(t,e,r)}:function(t,e,r){if(r=r==null?0:0>r?Math.max(0,t.length+r):r,typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,r);for(;r<t.length;r++)if(r in t&&t[r]===e)return r;return-1},goog.array.lastIndexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.lastIndexOf)?function(t,e,r){return goog.asserts.assert(t.length!=null),Array.prototype.lastIndexOf.call(t,e,r??t.length-1)}:function(t,e,r){if(0>(r=r??t.length-1)&&(r=Math.max(0,t.length+r)),typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.lastIndexOf(e,r);for(;0<=r;r--)if(r in t&&t[r]===e)return r;return-1},goog.array.forEach=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.forEach)?function(t,e,r){goog.asserts.assert(t.length!=null),Array.prototype.forEach.call(t,e,r)}:function(t,e,r){for(var s=t.length,o=typeof t=="string"?t.split(""):t,i=0;i<s;i++)i in o&&e.call(r,o[i],i,t)},goog.array.forEachRight=function(t,e,r){var s=t.length,o=typeof t=="string"?t.split(""):t;for(--s;0<=s;--s)s in o&&e.call(r,o[s],s,t)},goog.array.filter=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.filter)?function(t,e,r){return goog.asserts.assert(t.length!=null),Array.prototype.filter.call(t,e,r)}:function(t,e,r){for(var s=t.length,o=[],i=0,n=typeof t=="string"?t.split(""):t,p=0;p<s;p++)if(p in n){var d=n[p];e.call(r,d,p,t)&&(o[i++]=d)}return o},goog.array.map=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.map)?function(t,e,r){return goog.asserts.assert(t.length!=null),Array.prototype.map.call(t,e,r)}:function(t,e,r){for(var s=t.length,o=Array(s),i=typeof t=="string"?t.split(""):t,n=0;n<s;n++)n in i&&(o[n]=e.call(r,i[n],n,t));return o},goog.array.reduce=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduce)?function(t,e,r,s){return goog.asserts.assert(t.length!=null),s&&(e=goog.bind(e,s)),Array.prototype.reduce.call(t,e,r)}:function(t,e,r,s){var o=r;return goog.array.forEach(t,function(i,n){o=e.call(s,o,i,n,t)}),o},goog.array.reduceRight=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduceRight)?function(t,e,r,s){return goog.asserts.assert(t.length!=null),goog.asserts.assert(e!=null),s&&(e=goog.bind(e,s)),Array.prototype.reduceRight.call(t,e,r)}:function(t,e,r,s){var o=r;return goog.array.forEachRight(t,function(i,n){o=e.call(s,o,i,n,t)}),o},goog.array.some=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.some)?function(t,e,r){return goog.asserts.assert(t.length!=null),Array.prototype.some.call(t,e,r)}:function(t,e,r){for(var s=t.length,o=typeof t=="string"?t.split(""):t,i=0;i<s;i++)if(i in o&&e.call(r,o[i],i,t))return!0;return!1},goog.array.every=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.every)?function(t,e,r){return goog.asserts.assert(t.length!=null),Array.prototype.every.call(t,e,r)}:function(t,e,r){for(var s=t.length,o=typeof t=="string"?t.split(""):t,i=0;i<s;i++)if(i in o&&!e.call(r,o[i],i,t))return!1;return!0},goog.array.count=function(t,e,r){var s=0;return goog.array.forEach(t,function(o,i,n){e.call(r,o,i,n)&&++s},r),s},goog.array.find=function(t,e,r){return 0>(e=goog.array.findIndex(t,e,r))?null:typeof t=="string"?t.charAt(e):t[e]},goog.array.findIndex=function(t,e,r){for(var s=t.length,o=typeof t=="string"?t.split(""):t,i=0;i<s;i++)if(i in o&&e.call(r,o[i],i,t))return i;return-1},goog.array.findRight=function(t,e,r){return 0>(e=goog.array.findIndexRight(t,e,r))?null:typeof t=="string"?t.charAt(e):t[e]},goog.array.findIndexRight=function(t,e,r){var s=t.length,o=typeof t=="string"?t.split(""):t;for(--s;0<=s;s--)if(s in o&&e.call(r,o[s],s,t))return s;return-1},goog.array.contains=function(t,e){return 0<=goog.array.indexOf(t,e)},goog.array.isEmpty=function(t){return t.length==0},goog.array.clear=function(t){if(!Array.isArray(t))for(var e=t.length-1;0<=e;e--)delete t[e];t.length=0},goog.array.insert=function(t,e){goog.array.contains(t,e)||t.push(e)},goog.array.insertAt=function(t,e,r){goog.array.splice(t,r,0,e)},goog.array.insertArrayAt=function(t,e,r){goog.partial(goog.array.splice,t,r,0).apply(null,e)},goog.array.insertBefore=function(t,e,r){var s;arguments.length==2||0>(s=goog.array.indexOf(t,r))?t.push(e):goog.array.insertAt(t,e,s)},goog.array.remove=function(t,e){var r;return(r=0<=(e=goog.array.indexOf(t,e)))&&goog.array.removeAt(t,e),r},goog.array.removeLast=function(t,e){return 0<=(e=goog.array.lastIndexOf(t,e))&&(goog.array.removeAt(t,e),!0)},goog.array.removeAt=function(t,e){return goog.asserts.assert(t.length!=null),Array.prototype.splice.call(t,e,1).length==1},goog.array.removeIf=function(t,e,r){return 0<=(e=goog.array.findIndex(t,e,r))&&(goog.array.removeAt(t,e),!0)},goog.array.removeAllIf=function(t,e,r){var s=0;return goog.array.forEachRight(t,function(o,i){e.call(r,o,i,t)&&goog.array.removeAt(t,i)&&s++}),s},goog.array.concat=function(t){return Array.prototype.concat.apply([],arguments)},goog.array.join=function(t){return Array.prototype.concat.apply([],arguments)},goog.array.toArray=function(t){var e=t.length;if(0<e){for(var r=Array(e),s=0;s<e;s++)r[s]=t[s];return r}return[]},goog.array.clone=goog.array.toArray,goog.array.extend=function(t,e){for(var r=1;r<arguments.length;r++){var s=arguments[r];if(goog.isArrayLike(s)){var o=t.length||0,i=s.length||0;t.length=o+i;for(var n=0;n<i;n++)t[o+n]=s[n]}else t.push(s)}},goog.array.splice=function(t,e,r,s){return goog.asserts.assert(t.length!=null),Array.prototype.splice.apply(t,goog.array.slice(arguments,1))},goog.array.slice=function(t,e,r){return goog.asserts.assert(t.length!=null),2>=arguments.length?Array.prototype.slice.call(t,e):Array.prototype.slice.call(t,e,r)},goog.array.removeDuplicates=function(t,e,r){e=e||t;var s=function(d){return goog.isObject(d)?"o"+goog.getUid(d):(typeof d).charAt(0)+d};r=r||s,s={};for(var o=0,i=0;i<t.length;){var n=t[i++],p=r(n);Object.prototype.hasOwnProperty.call(s,p)||(s[p]=!0,e[o++]=n)}e.length=o},goog.array.binarySearch=function(t,e,r){return goog.array.binarySearch_(t,r||goog.array.defaultCompare,!1,e)},goog.array.binarySelect=function(t,e,r){return goog.array.binarySearch_(t,e,!0,void 0,r)},goog.array.binarySearch_=function(t,e,r,s,o){for(var i,n=0,p=t.length;n<p;){var d=n+(p-n>>>1),l=r?e.call(o,t[d],d,t):e(s,t[d]);0<l?n=d+1:(p=d,i=!l)}return i?n:-n-1},goog.array.sort=function(t,e){t.sort(e||goog.array.defaultCompare)},goog.array.stableSort=function(t,e){for(var r=Array(t.length),s=0;s<t.length;s++)r[s]={index:s,value:t[s]};var o=e||goog.array.defaultCompare;for(goog.array.sort(r,function(i,n){return o(i.value,n.value)||i.index-n.index}),s=0;s<t.length;s++)t[s]=r[s].value},goog.array.sortByKey=function(t,e,r){var s=r||goog.array.defaultCompare;goog.array.sort(t,function(o,i){return s(e(o),e(i))})},goog.array.sortObjectsByKey=function(t,e,r){goog.array.sortByKey(t,function(s){return s[e]},r)},goog.array.isSorted=function(t,e,r){e=e||goog.array.defaultCompare;for(var s=1;s<t.length;s++){var o=e(t[s-1],t[s]);if(0<o||o==0&&r)return!1}return!0},goog.array.equals=function(t,e,r){if(!goog.isArrayLike(t)||!goog.isArrayLike(e)||t.length!=e.length)return!1;var s=t.length;r=r||goog.array.defaultCompareEquality;for(var o=0;o<s;o++)if(!r(t[o],e[o]))return!1;return!0},goog.array.compare3=function(t,e,r){r=r||goog.array.defaultCompare;for(var s=Math.min(t.length,e.length),o=0;o<s;o++){var i=r(t[o],e[o]);if(i!=0)return i}return goog.array.defaultCompare(t.length,e.length)},goog.array.defaultCompare=function(t,e){return t>e?1:t<e?-1:0},goog.array.inverseDefaultCompare=function(t,e){return-goog.array.defaultCompare(t,e)},goog.array.defaultCompareEquality=function(t,e){return t===e},goog.array.binaryInsert=function(t,e,r){return 0>(r=goog.array.binarySearch(t,e,r))&&(goog.array.insertAt(t,e,-(r+1)),!0)},goog.array.binaryRemove=function(t,e,r){return 0<=(e=goog.array.binarySearch(t,e,r))&&goog.array.removeAt(t,e)},goog.array.bucket=function(t,e,r){for(var s={},o=0;o<t.length;o++){var i=t[o],n=e.call(r,i,o,t);n!==void 0&&(s[n]||(s[n]=[])).push(i)}return s},goog.array.toObject=function(t,e,r){var s={};return goog.array.forEach(t,function(o,i){s[e.call(r,o,i,t)]=o}),s},goog.array.range=function(t,e,r){var s=[],o=0,i=t;if(e!==void 0&&(o=t,i=e),0>(r=r||1)*(i-o))return[];if(0<r)for(t=o;t<i;t+=r)s.push(t);else for(t=o;t>i;t+=r)s.push(t);return s},goog.array.repeat=function(t,e){for(var r=[],s=0;s<e;s++)r[s]=t;return r},goog.array.flatten=function(t){for(var e=[],r=0;r<arguments.length;r++){var s=arguments[r];if(Array.isArray(s))for(var o=0;o<s.length;o+=8192){var i=goog.array.slice(s,o,o+8192);i=goog.array.flatten.apply(null,i);for(var n=0;n<i.length;n++)e.push(i[n])}else e.push(s)}return e},goog.array.rotate=function(t,e){return goog.asserts.assert(t.length!=null),t.length&&(0<(e%=t.length)?Array.prototype.unshift.apply(t,t.splice(-e,e)):0>e&&Array.prototype.push.apply(t,t.splice(0,-e))),t},goog.array.moveItem=function(t,e,r){goog.asserts.assert(0<=e&&e<t.length),goog.asserts.assert(0<=r&&r<t.length),e=Array.prototype.splice.call(t,e,1),Array.prototype.splice.call(t,r,0,e[0])},goog.array.zip=function(t){if(!arguments.length)return[];for(var e=[],r=arguments[0].length,s=1;s<arguments.length;s++)arguments[s].length<r&&(r=arguments[s].length);for(s=0;s<r;s++){for(var o=[],i=0;i<arguments.length;i++)o.push(arguments[i][s]);e.push(o)}return e},goog.array.shuffle=function(t,e){e=e||Math.random;for(var r=t.length-1;0<r;r--){var s=Math.floor(e()*(r+1)),o=t[r];t[r]=t[s],t[s]=o}},goog.array.copyByIndex=function(t,e){var r=[];return goog.array.forEach(e,function(s){r.push(t[s])}),r},goog.array.concatMap=function(t,e,r){return goog.array.concat.apply([],goog.array.map(t,e,r))},goog.crypt={},goog.crypt.stringToByteArray=function(t){for(var e=[],r=0,s=0;s<t.length;s++){var o=t.charCodeAt(s);255<o&&(e[r++]=255&o,o>>=8),e[r++]=o}return e},goog.crypt.byteArrayToString=function(t){if(8192>=t.length)return String.fromCharCode.apply(null,t);for(var e="",r=0;r<t.length;r+=8192){var s=goog.array.slice(t,r,r+8192);e+=String.fromCharCode.apply(null,s)}return e},goog.crypt.byteArrayToHex=function(t,e){return goog.array.map(t,function(r){return 1<(r=r.toString(16)).length?r:"0"+r}).join(e||"")},goog.crypt.hexToByteArray=function(t){goog.asserts.assert(t.length%2==0,"Key string length must be multiple of 2");for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substring(r,r+2),16));return e},goog.crypt.stringToUtf8ByteArray=function(t){for(var e=[],r=0,s=0;s<t.length;s++){var o=t.charCodeAt(s);128>o?e[r++]=o:(2048>o?e[r++]=o>>6|192:((64512&o)==55296&&s+1<t.length&&(64512&t.charCodeAt(s+1))==56320?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++s)),e[r++]=o>>18|240,e[r++]=o>>12&63|128):e[r++]=o>>12|224,e[r++]=o>>6&63|128),e[r++]=63&o|128)}return e},goog.crypt.utf8ByteArrayToString=function(t){for(var e=[],r=0,s=0;r<t.length;){var o=t[r++];if(128>o)e[s++]=String.fromCharCode(o);else if(191<o&&224>o){var i=t[r++];e[s++]=String.fromCharCode((31&o)<<6|63&i)}else if(239<o&&365>o){i=t[r++];var n=t[r++];o=((7&o)<<18|(63&i)<<12|(63&n)<<6|63&t[r++])-65536,e[s++]=String.fromCharCode(55296+(o>>10)),e[s++]=String.fromCharCode(56320+(1023&o))}else i=t[r++],n=t[r++],e[s++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&n)}return e.join("")},goog.crypt.xorByteArray=function(t,e){goog.asserts.assert(t.length==e.length,"XOR array lengths must match");for(var r=[],s=0;s<t.length;s++)r.push(t[s]^e[s]);return r},goog.dom.asserts={},goog.dom.asserts.assertIsLocation=function(t){if(goog.asserts.ENABLE_ASSERTS){var e=goog.dom.asserts.getWindow_(t);e&&(!t||!(t instanceof e.Location)&&t instanceof e.Element)&&goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s",goog.dom.asserts.debugStringForType_(t))}return t},goog.dom.asserts.assertIsElementType_=function(t,e){if(goog.asserts.ENABLE_ASSERTS){var r=goog.dom.asserts.getWindow_(t);r&&r[e]!==void 0&&(t&&(t instanceof r[e]||!(t instanceof r.Location||t instanceof r.Element))||goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s",e,goog.dom.asserts.debugStringForType_(t)))}return t},goog.dom.asserts.assertIsHTMLAnchorElement=function(t){return goog.dom.asserts.assertIsElementType_(t,"HTMLAnchorElement")},goog.dom.asserts.assertIsHTMLButtonElement=function(t){return goog.dom.asserts.assertIsElementType_(t,"HTMLButtonElement")},goog.dom.asserts.assertIsHTMLLinkElement=function(t){return goog.dom.asserts.assertIsElementType_(t,"HTMLLinkElement")},goog.dom.asserts.assertIsHTMLImageElement=function(t){return goog.dom.asserts.assertIsElementType_(t,"HTMLImageElement")},goog.dom.asserts.assertIsHTMLAudioElement=function(t){return goog.dom.asserts.assertIsElementType_(t,"HTMLAudioElement")},goog.dom.asserts.assertIsHTMLVideoElement=function(t){return goog.dom.asserts.assertIsElementType_(t,"HTMLVideoElement")},goog.dom.asserts.assertIsHTMLInputElement=function(t){return goog.dom.asserts.assertIsElementType_(t,"HTMLInputElement")},goog.dom.asserts.assertIsHTMLTextAreaElement=function(t){return goog.dom.asserts.assertIsElementType_(t,"HTMLTextAreaElement")},goog.dom.asserts.assertIsHTMLCanvasElement=function(t){return goog.dom.asserts.assertIsElementType_(t,"HTMLCanvasElement")},goog.dom.asserts.assertIsHTMLEmbedElement=function(t){return goog.dom.asserts.assertIsElementType_(t,"HTMLEmbedElement")},goog.dom.asserts.assertIsHTMLFormElement=function(t){return goog.dom.asserts.assertIsElementType_(t,"HTMLFormElement")},goog.dom.asserts.assertIsHTMLFrameElement=function(t){return goog.dom.asserts.assertIsElementType_(t,"HTMLFrameElement")},goog.dom.asserts.assertIsHTMLIFrameElement=function(t){return goog.dom.asserts.assertIsElementType_(t,"HTMLIFrameElement")},goog.dom.asserts.assertIsHTMLObjectElement=function(t){return goog.dom.asserts.assertIsElementType_(t,"HTMLObjectElement")},goog.dom.asserts.assertIsHTMLScriptElement=function(t){return goog.dom.asserts.assertIsElementType_(t,"HTMLScriptElement")},goog.dom.asserts.debugStringForType_=function(t){if(!goog.isObject(t))return t===void 0?"undefined":t===null?"null":typeof t;try{return t.constructor.displayName||t.constructor.name||Object.prototype.toString.call(t)}catch{return"<object could not be stringified>"}},goog.dom.asserts.getWindow_=function(t){try{var e=t&&t.ownerDocument,r=e&&(e.defaultView||e.parentWindow);if((r=r||goog.global).Element&&r.Location)return r}catch{}return null},goog.functions={},goog.functions.constant=function(t){return function(){return t}},goog.functions.FALSE=function(){return!1},goog.functions.TRUE=function(){return!0},goog.functions.NULL=function(){return null},goog.functions.identity=function(t,e){return t},goog.functions.error=function(t){return function(){throw Error(t)}},goog.functions.fail=function(t){return function(){throw t}},goog.functions.lock=function(t,e){return e=e||0,function(){return t.apply(this,Array.prototype.slice.call(arguments,0,e))}},goog.functions.nth=function(t){return function(){return arguments[t]}},goog.functions.partialRight=function(t,e){var r=Array.prototype.slice.call(arguments,1);return function(){var s=Array.prototype.slice.call(arguments);return s.push.apply(s,r),t.apply(this,s)}},goog.functions.withReturnValue=function(t,e){return goog.functions.sequence(t,goog.functions.constant(e))},goog.functions.equalTo=function(t,e){return function(r){return e?t==r:t===r}},goog.functions.compose=function(t,e){var r=arguments,s=r.length;return function(){var o;s&&(o=r[s-1].apply(this,arguments));for(var i=s-2;0<=i;i--)o=r[i].call(this,o);return o}},goog.functions.sequence=function(t){var e=arguments,r=e.length;return function(){for(var s,o=0;o<r;o++)s=e[o].apply(this,arguments);return s}},goog.functions.and=function(t){var e=arguments,r=e.length;return function(){for(var s=0;s<r;s++)if(!e[s].apply(this,arguments))return!1;return!0}},goog.functions.or=function(t){var e=arguments,r=e.length;return function(){for(var s=0;s<r;s++)if(e[s].apply(this,arguments))return!0;return!1}},goog.functions.not=function(t){return function(){return!t.apply(this,arguments)}},goog.functions.create=function(t,e){var r=function(){};return r.prototype=t.prototype,r=new r,t.apply(r,Array.prototype.slice.call(arguments,1)),r},goog.functions.CACHE_RETURN_VALUE=!0,goog.functions.cacheReturnValue=function(t){var e,r=!1;return function(){return goog.functions.CACHE_RETURN_VALUE?(r||(e=t(),r=!0),e):t()}},goog.functions.once=function(t){var e=t;return function(){if(e){var r=e;e=null,r()}}},goog.functions.debounce=function(t,e,r){var s=0;return function(o){goog.global.clearTimeout(s);var i=arguments;s=goog.global.setTimeout(function(){t.apply(r,i)},e)}},goog.functions.throttle=function(t,e,r){var s=0,o=!1,i=[],n=function(){s=0,o&&(o=!1,p())},p=function(){s=goog.global.setTimeout(n,e),t.apply(r,i)};return function(d){i=arguments,s?o=!0:p()}},goog.functions.rateLimit=function(t,e,r){var s=0,o=function(){s=0};return function(i){s||(s=goog.global.setTimeout(o,e),t.apply(r,arguments))}},goog.dom.HtmlElement=function(){},goog.dom.TagName=function(t){this.tagName_=t},goog.dom.TagName.prototype.toString=function(){return this.tagName_},goog.dom.TagName.A=new goog.dom.TagName("A"),goog.dom.TagName.ABBR=new goog.dom.TagName("ABBR"),goog.dom.TagName.ACRONYM=new goog.dom.TagName("ACRONYM"),goog.dom.TagName.ADDRESS=new goog.dom.TagName("ADDRESS"),goog.dom.TagName.APPLET=new goog.dom.TagName("APPLET"),goog.dom.TagName.AREA=new goog.dom.TagName("AREA"),goog.dom.TagName.ARTICLE=new goog.dom.TagName("ARTICLE"),goog.dom.TagName.ASIDE=new goog.dom.TagName("ASIDE"),goog.dom.TagName.AUDIO=new goog.dom.TagName("AUDIO"),goog.dom.TagName.B=new goog.dom.TagName("B"),goog.dom.TagName.BASE=new goog.dom.TagName("BASE"),goog.dom.TagName.BASEFONT=new goog.dom.TagName("BASEFONT"),goog.dom.TagName.BDI=new goog.dom.TagName("BDI"),goog.dom.TagName.BDO=new goog.dom.TagName("BDO"),goog.dom.TagName.BIG=new goog.dom.TagName("BIG"),goog.dom.TagName.BLOCKQUOTE=new goog.dom.TagName("BLOCKQUOTE"),goog.dom.TagName.BODY=new goog.dom.TagName("BODY"),goog.dom.TagName.BR=new goog.dom.TagName("BR"),goog.dom.TagName.BUTTON=new goog.dom.TagName("BUTTON"),goog.dom.TagName.CANVAS=new goog.dom.TagName("CANVAS"),goog.dom.TagName.CAPTION=new goog.dom.TagName("CAPTION"),goog.dom.TagName.CENTER=new goog.dom.TagName("CENTER"),goog.dom.TagName.CITE=new goog.dom.TagName("CITE"),goog.dom.TagName.CODE=new goog.dom.TagName("CODE"),goog.dom.TagName.COL=new goog.dom.TagName("COL"),goog.dom.TagName.COLGROUP=new goog.dom.TagName("COLGROUP"),goog.dom.TagName.COMMAND=new goog.dom.TagName("COMMAND"),goog.dom.TagName.DATA=new goog.dom.TagName("DATA"),goog.dom.TagName.DATALIST=new goog.dom.TagName("DATALIST"),goog.dom.TagName.DD=new goog.dom.TagName("DD"),goog.dom.TagName.DEL=new goog.dom.TagName("DEL"),goog.dom.TagName.DETAILS=new goog.dom.TagName("DETAILS"),goog.dom.TagName.DFN=new goog.dom.TagName("DFN"),goog.dom.TagName.DIALOG=new goog.dom.TagName("DIALOG"),goog.dom.TagName.DIR=new goog.dom.TagName("DIR"),goog.dom.TagName.DIV=new goog.dom.TagName("DIV"),goog.dom.TagName.DL=new goog.dom.TagName("DL"),goog.dom.TagName.DT=new goog.dom.TagName("DT"),goog.dom.TagName.EM=new goog.dom.TagName("EM"),goog.dom.TagName.EMBED=new goog.dom.TagName("EMBED"),goog.dom.TagName.FIELDSET=new goog.dom.TagName("FIELDSET"),goog.dom.TagName.FIGCAPTION=new goog.dom.TagName("FIGCAPTION"),goog.dom.TagName.FIGURE=new goog.dom.TagName("FIGURE"),goog.dom.TagName.FONT=new goog.dom.TagName("FONT"),goog.dom.TagName.FOOTER=new goog.dom.TagName("FOOTER"),goog.dom.TagName.FORM=new goog.dom.TagName("FORM"),goog.dom.TagName.FRAME=new goog.dom.TagName("FRAME"),goog.dom.TagName.FRAMESET=new goog.dom.TagName("FRAMESET"),goog.dom.TagName.H1=new goog.dom.TagName("H1"),goog.dom.TagName.H2=new goog.dom.TagName("H2"),goog.dom.TagName.H3=new goog.dom.TagName("H3"),goog.dom.TagName.H4=new goog.dom.TagName("H4"),goog.dom.TagName.H5=new goog.dom.TagName("H5"),goog.dom.TagName.H6=new goog.dom.TagName("H6"),goog.dom.TagName.HEAD=new goog.dom.TagName("HEAD"),goog.dom.TagName.HEADER=new goog.dom.TagName("HEADER"),goog.dom.TagName.HGROUP=new goog.dom.TagName("HGROUP"),goog.dom.TagName.HR=new goog.dom.TagName("HR"),goog.dom.TagName.HTML=new goog.dom.TagName("HTML"),goog.dom.TagName.I=new goog.dom.TagName("I"),goog.dom.TagName.IFRAME=new goog.dom.TagName("IFRAME"),goog.dom.TagName.IMG=new goog.dom.TagName("IMG"),goog.dom.TagName.INPUT=new goog.dom.TagName("INPUT"),goog.dom.TagName.INS=new goog.dom.TagName("INS"),goog.dom.TagName.ISINDEX=new goog.dom.TagName("ISINDEX"),goog.dom.TagName.KBD=new goog.dom.TagName("KBD"),goog.dom.TagName.KEYGEN=new goog.dom.TagName("KEYGEN"),goog.dom.TagName.LABEL=new goog.dom.TagName("LABEL"),goog.dom.TagName.LEGEND=new goog.dom.TagName("LEGEND"),goog.dom.TagName.LI=new goog.dom.TagName("LI"),goog.dom.TagName.LINK=new goog.dom.TagName("LINK"),goog.dom.TagName.MAIN=new goog.dom.TagName("MAIN"),goog.dom.TagName.MAP=new goog.dom.TagName("MAP"),goog.dom.TagName.MARK=new goog.dom.TagName("MARK"),goog.dom.TagName.MATH=new goog.dom.TagName("MATH"),goog.dom.TagName.MENU=new goog.dom.TagName("MENU"),goog.dom.TagName.MENUITEM=new goog.dom.TagName("MENUITEM"),goog.dom.TagName.META=new goog.dom.TagName("META"),goog.dom.TagName.METER=new goog.dom.TagName("METER"),goog.dom.TagName.NAV=new goog.dom.TagName("NAV"),goog.dom.TagName.NOFRAMES=new goog.dom.TagName("NOFRAMES"),goog.dom.TagName.NOSCRIPT=new goog.dom.TagName("NOSCRIPT"),goog.dom.TagName.OBJECT=new goog.dom.TagName("OBJECT"),goog.dom.TagName.OL=new goog.dom.TagName("OL"),goog.dom.TagName.OPTGROUP=new goog.dom.TagName("OPTGROUP"),goog.dom.TagName.OPTION=new goog.dom.TagName("OPTION"),goog.dom.TagName.OUTPUT=new goog.dom.TagName("OUTPUT"),goog.dom.TagName.P=new goog.dom.TagName("P"),goog.dom.TagName.PARAM=new goog.dom.TagName("PARAM"),goog.dom.TagName.PICTURE=new goog.dom.TagName("PICTURE"),goog.dom.TagName.PRE=new goog.dom.TagName("PRE"),goog.dom.TagName.PROGRESS=new goog.dom.TagName("PROGRESS"),goog.dom.TagName.Q=new goog.dom.TagName("Q"),goog.dom.TagName.RP=new goog.dom.TagName("RP"),goog.dom.TagName.RT=new goog.dom.TagName("RT"),goog.dom.TagName.RTC=new goog.dom.TagName("RTC"),goog.dom.TagName.RUBY=new goog.dom.TagName("RUBY"),goog.dom.TagName.S=new goog.dom.TagName("S"),goog.dom.TagName.SAMP=new goog.dom.TagName("SAMP"),goog.dom.TagName.SCRIPT=new goog.dom.TagName("SCRIPT"),goog.dom.TagName.SECTION=new goog.dom.TagName("SECTION"),goog.dom.TagName.SELECT=new goog.dom.TagName("SELECT"),goog.dom.TagName.SMALL=new goog.dom.TagName("SMALL"),goog.dom.TagName.SOURCE=new goog.dom.TagName("SOURCE"),goog.dom.TagName.SPAN=new goog.dom.TagName("SPAN"),goog.dom.TagName.STRIKE=new goog.dom.TagName("STRIKE"),goog.dom.TagName.STRONG=new goog.dom.TagName("STRONG"),goog.dom.TagName.STYLE=new goog.dom.TagName("STYLE"),goog.dom.TagName.SUB=new goog.dom.TagName("SUB"),goog.dom.TagName.SUMMARY=new goog.dom.TagName("SUMMARY"),goog.dom.TagName.SUP=new goog.dom.TagName("SUP"),goog.dom.TagName.SVG=new goog.dom.TagName("SVG"),goog.dom.TagName.TABLE=new goog.dom.TagName("TABLE"),goog.dom.TagName.TBODY=new goog.dom.TagName("TBODY"),goog.dom.TagName.TD=new goog.dom.TagName("TD"),goog.dom.TagName.TEMPLATE=new goog.dom.TagName("TEMPLATE"),goog.dom.TagName.TEXTAREA=new goog.dom.TagName("TEXTAREA"),goog.dom.TagName.TFOOT=new goog.dom.TagName("TFOOT"),goog.dom.TagName.TH=new goog.dom.TagName("TH"),goog.dom.TagName.THEAD=new goog.dom.TagName("THEAD"),goog.dom.TagName.TIME=new goog.dom.TagName("TIME"),goog.dom.TagName.TITLE=new goog.dom.TagName("TITLE"),goog.dom.TagName.TR=new goog.dom.TagName("TR"),goog.dom.TagName.TRACK=new goog.dom.TagName("TRACK"),goog.dom.TagName.TT=new goog.dom.TagName("TT"),goog.dom.TagName.U=new goog.dom.TagName("U"),goog.dom.TagName.UL=new goog.dom.TagName("UL"),goog.dom.TagName.VAR=new goog.dom.TagName("VAR"),goog.dom.TagName.VIDEO=new goog.dom.TagName("VIDEO"),goog.dom.TagName.WBR=new goog.dom.TagName("WBR"),goog.dom.tags={},goog.dom.tags.VOID_TAGS_={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},goog.dom.tags.isVoidTag=function(t){return goog.dom.tags.VOID_TAGS_[t]===!0},goog.html={},goog.html.trustedtypes={},goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY=goog.TRUSTED_TYPES_POLICY_NAME?goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME+"#html"):null,goog.string={},goog.string.TypedString=function(){},goog.string.Const=function(t,e){this.stringConstValueWithSecurityContract__googStringSecurityPrivate_=t===goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_&&e||"",this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_=goog.string.Const.TYPE_MARKER_},goog.string.Const.prototype.implementsGoogStringTypedString=!0,goog.string.Const.prototype.getTypedStringValue=function(){return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_},goog.DEBUG&&(goog.string.Const.prototype.toString=function(){return"Const{"+this.stringConstValueWithSecurityContract__googStringSecurityPrivate_+"}"}),goog.string.Const.unwrap=function(t){return t instanceof goog.string.Const&&t.constructor===goog.string.Const&&t.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_===goog.string.Const.TYPE_MARKER_?t.stringConstValueWithSecurityContract__googStringSecurityPrivate_:(goog.asserts.fail("expected object of type Const, got '"+t+"'"),"type_error:Const")},goog.string.Const.from=function(t){return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_,t)},goog.string.Const.TYPE_MARKER_={},goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_={},goog.string.Const.EMPTY=goog.string.Const.from(""),goog.html.SafeScript=function(){this.privateDoNotAccessOrElseSafeScriptWrappedValue_="",this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_},goog.html.SafeScript.prototype.implementsGoogStringTypedString=!0,goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.SafeScript.fromConstant=function(t){return(t=goog.string.Const.unwrap(t)).length===0?goog.html.SafeScript.EMPTY:goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(t)},goog.html.SafeScript.fromConstantAndArgs=function(t,e){for(var r=[],s=1;s<arguments.length;s++)r.push(goog.html.SafeScript.stringify_(arguments[s]));return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("("+goog.string.Const.unwrap(t)+")("+r.join(", ")+");")},goog.html.SafeScript.fromJson=function(t){return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(t))},goog.html.SafeScript.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString()},goog.DEBUG&&(goog.html.SafeScript.prototype.toString=function(){return"SafeScript{"+this.privateDoNotAccessOrElseSafeScriptWrappedValue_+"}"}),goog.html.SafeScript.unwrap=function(t){return goog.html.SafeScript.unwrapTrustedScript(t).toString()},goog.html.SafeScript.unwrapTrustedScript=function(t){return t instanceof goog.html.SafeScript&&t.constructor===goog.html.SafeScript&&t.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?t.privateDoNotAccessOrElseSafeScriptWrappedValue_:(goog.asserts.fail("expected object of type SafeScript, got '"+t+"' of type "+goog.typeOf(t)),"type_error:SafeScript")},goog.html.SafeScript.stringify_=function(t){return JSON.stringify(t).replace(/</g,"\\x3c")},goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse=function(t){return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(t)},goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_=function(t){return this.privateDoNotAccessOrElseSafeScriptWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(t):t,this},goog.html.SafeScript.EMPTY=goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(""),goog.fs={},goog.fs.url={},goog.fs.url.createObjectUrl=function(t){return goog.fs.url.getUrlObject_().createObjectURL(t)},goog.fs.url.revokeObjectUrl=function(t){goog.fs.url.getUrlObject_().revokeObjectURL(t)},goog.fs.url.UrlObject_=function(){},goog.fs.url.UrlObject_.prototype.createObjectURL=function(t){},goog.fs.url.UrlObject_.prototype.revokeObjectURL=function(t){},goog.fs.url.getUrlObject_=function(){var t=goog.fs.url.findUrlObject_();if(t!=null)return t;throw Error("This browser doesn't seem to support blob URLs")},goog.fs.url.findUrlObject_=function(){return goog.global.URL!==void 0&&goog.global.URL.createObjectURL!==void 0?goog.global.URL:goog.global.webkitURL!==void 0&&goog.global.webkitURL.createObjectURL!==void 0?goog.global.webkitURL:goog.global.createObjectURL!==void 0?goog.global:null},goog.fs.url.browserSupportsObjectUrls=function(){return goog.fs.url.findUrlObject_()!=null},goog.fs.blob={},goog.fs.blob.getBlob=function(t){var e=goog.global.BlobBuilder||goog.global.WebKitBlobBuilder;if(e!==void 0){e=new e;for(var r=0;r<arguments.length;r++)e.append(arguments[r]);return e.getBlob()}return goog.fs.blob.getBlobWithProperties(goog.array.toArray(arguments))},goog.fs.blob.getBlobWithProperties=function(t,e,r){var s=goog.global.BlobBuilder||goog.global.WebKitBlobBuilder;if(s!==void 0){s=new s;for(var o=0;o<t.length;o++)s.append(t[o],r);return s.getBlob(e)}if(goog.global.Blob!==void 0)return s={},e&&(s.type=e),r&&(s.endings=r),new Blob(t,s);throw Error("This browser doesn't seem to support creating Blobs")},goog.i18n={},goog.i18n.bidi={},goog.i18n.bidi.FORCE_RTL=!1,goog.i18n.bidi.IS_RTL=goog.i18n.bidi.FORCE_RTL||(goog.LOCALE.substring(0,2).toLowerCase()=="ar"||goog.LOCALE.substring(0,2).toLowerCase()=="fa"||goog.LOCALE.substring(0,2).toLowerCase()=="he"||goog.LOCALE.substring(0,2).toLowerCase()=="iw"||goog.LOCALE.substring(0,2).toLowerCase()=="ps"||goog.LOCALE.substring(0,2).toLowerCase()=="sd"||goog.LOCALE.substring(0,2).toLowerCase()=="ug"||goog.LOCALE.substring(0,2).toLowerCase()=="ur"||goog.LOCALE.substring(0,2).toLowerCase()=="yi")&&(goog.LOCALE.length==2||goog.LOCALE.substring(2,3)=="-"||goog.LOCALE.substring(2,3)=="_")||3<=goog.LOCALE.length&&goog.LOCALE.substring(0,3).toLowerCase()=="ckb"&&(goog.LOCALE.length==3||goog.LOCALE.substring(3,4)=="-"||goog.LOCALE.substring(3,4)=="_")||7<=goog.LOCALE.length&&(goog.LOCALE.substring(2,3)=="-"||goog.LOCALE.substring(2,3)=="_")&&(goog.LOCALE.substring(3,7).toLowerCase()=="adlm"||goog.LOCALE.substring(3,7).toLowerCase()=="arab"||goog.LOCALE.substring(3,7).toLowerCase()=="hebr"||goog.LOCALE.substring(3,7).toLowerCase()=="nkoo"||goog.LOCALE.substring(3,7).toLowerCase()=="rohg"||goog.LOCALE.substring(3,7).toLowerCase()=="thaa")||8<=goog.LOCALE.length&&(goog.LOCALE.substring(3,4)=="-"||goog.LOCALE.substring(3,4)=="_")&&(goog.LOCALE.substring(4,8).toLowerCase()=="adlm"||goog.LOCALE.substring(4,8).toLowerCase()=="arab"||goog.LOCALE.substring(4,8).toLowerCase()=="hebr"||goog.LOCALE.substring(4,8).toLowerCase()=="nkoo"||goog.LOCALE.substring(4,8).toLowerCase()=="rohg"||goog.LOCALE.substring(4,8).toLowerCase()=="thaa"),goog.i18n.bidi.Format={LRE:"‪",RLE:"‫",PDF:"‬",LRM:"‎",RLM:"‏"},goog.i18n.bidi.Dir={LTR:1,RTL:-1,NEUTRAL:0},goog.i18n.bidi.RIGHT="right",goog.i18n.bidi.LEFT="left",goog.i18n.bidi.I18N_RIGHT=goog.i18n.bidi.IS_RTL?goog.i18n.bidi.LEFT:goog.i18n.bidi.RIGHT,goog.i18n.bidi.I18N_LEFT=goog.i18n.bidi.IS_RTL?goog.i18n.bidi.RIGHT:goog.i18n.bidi.LEFT,goog.i18n.bidi.toDir=function(t,e){return typeof t=="number"?0<t?goog.i18n.bidi.Dir.LTR:0>t?goog.i18n.bidi.Dir.RTL:e?null:goog.i18n.bidi.Dir.NEUTRAL:t==null?null:t?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR},goog.i18n.bidi.ltrChars_="A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿‎Ⰰ-\uD801\uD804-\uD839\uD83C-\uDBFF豈-﬜︀-﹯﻽-￿",goog.i18n.bidi.rtlChars_="֑-ۯۺ-ࣿ‏\uD802-\uD803\uD83A-\uD83Bיִ-﷿ﹰ-ﻼ",goog.i18n.bidi.htmlSkipReg_=/<[^>]*>|&[^;]+;/g,goog.i18n.bidi.stripHtmlIfNeeded_=function(t,e){return e?t.replace(goog.i18n.bidi.htmlSkipReg_,""):t},goog.i18n.bidi.rtlCharReg_=new RegExp("["+goog.i18n.bidi.rtlChars_+"]"),goog.i18n.bidi.ltrCharReg_=new RegExp("["+goog.i18n.bidi.ltrChars_+"]"),goog.i18n.bidi.hasAnyRtl=function(t,e){return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(t,e))},goog.i18n.bidi.hasRtlChar=goog.i18n.bidi.hasAnyRtl,goog.i18n.bidi.hasAnyLtr=function(t,e){return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(t,e))},goog.i18n.bidi.ltrRe_=new RegExp("^["+goog.i18n.bidi.ltrChars_+"]"),goog.i18n.bidi.rtlRe_=new RegExp("^["+goog.i18n.bidi.rtlChars_+"]"),goog.i18n.bidi.isRtlChar=function(t){return goog.i18n.bidi.rtlRe_.test(t)},goog.i18n.bidi.isLtrChar=function(t){return goog.i18n.bidi.ltrRe_.test(t)},goog.i18n.bidi.isNeutralChar=function(t){return!goog.i18n.bidi.isLtrChar(t)&&!goog.i18n.bidi.isRtlChar(t)},goog.i18n.bidi.ltrDirCheckRe_=new RegExp("^[^"+goog.i18n.bidi.rtlChars_+"]*["+goog.i18n.bidi.ltrChars_+"]"),goog.i18n.bidi.rtlDirCheckRe_=new RegExp("^[^"+goog.i18n.bidi.ltrChars_+"]*["+goog.i18n.bidi.rtlChars_+"]"),goog.i18n.bidi.startsWithRtl=function(t,e){return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(t,e))},goog.i18n.bidi.isRtlText=goog.i18n.bidi.startsWithRtl,goog.i18n.bidi.startsWithLtr=function(t,e){return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(t,e))},goog.i18n.bidi.isLtrText=goog.i18n.bidi.startsWithLtr,goog.i18n.bidi.isRequiredLtrRe_=/^http:\/\/.*/,goog.i18n.bidi.isNeutralText=function(t,e){return t=goog.i18n.bidi.stripHtmlIfNeeded_(t,e),goog.i18n.bidi.isRequiredLtrRe_.test(t)||!goog.i18n.bidi.hasAnyLtr(t)&&!goog.i18n.bidi.hasAnyRtl(t)},goog.i18n.bidi.ltrExitDirCheckRe_=new RegExp("["+goog.i18n.bidi.ltrChars_+"][^"+goog.i18n.bidi.rtlChars_+"]*$"),goog.i18n.bidi.rtlExitDirCheckRe_=new RegExp("["+goog.i18n.bidi.rtlChars_+"][^"+goog.i18n.bidi.ltrChars_+"]*$"),goog.i18n.bidi.endsWithLtr=function(t,e){return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(t,e))},goog.i18n.bidi.isLtrExitText=goog.i18n.bidi.endsWithLtr,goog.i18n.bidi.endsWithRtl=function(t,e){return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(t,e))},goog.i18n.bidi.isRtlExitText=goog.i18n.bidi.endsWithRtl,goog.i18n.bidi.rtlLocalesRe_=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,goog.i18n.bidi.isRtlLanguage=function(t){return goog.i18n.bidi.rtlLocalesRe_.test(t)},goog.i18n.bidi.bracketGuardTextRe_=/(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g,goog.i18n.bidi.guardBracketInText=function(t,e){return e=(e===void 0?goog.i18n.bidi.hasAnyRtl(t):e)?goog.i18n.bidi.Format.RLM:goog.i18n.bidi.Format.LRM,t.replace(goog.i18n.bidi.bracketGuardTextRe_,e+"$&"+e)},goog.i18n.bidi.enforceRtlInHtml=function(t){return t.charAt(0)=="<"?t.replace(/<\w+/,"$& dir=rtl"):`
<span dir=rtl>`+t+"</span>"},goog.i18n.bidi.enforceRtlInText=function(t){return goog.i18n.bidi.Format.RLE+t+goog.i18n.bidi.Format.PDF},goog.i18n.bidi.enforceLtrInHtml=function(t){return t.charAt(0)=="<"?t.replace(/<\w+/,"$& dir=ltr"):`
<span dir=ltr>`+t+"</span>"},goog.i18n.bidi.enforceLtrInText=function(t){return goog.i18n.bidi.Format.LRE+t+goog.i18n.bidi.Format.PDF},goog.i18n.bidi.dimensionsRe_=/:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g,goog.i18n.bidi.leftRe_=/left/gi,goog.i18n.bidi.rightRe_=/right/gi,goog.i18n.bidi.tempRe_=/%%%%/g,goog.i18n.bidi.mirrorCSS=function(t){return t.replace(goog.i18n.bidi.dimensionsRe_,":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_,"%%%%").replace(goog.i18n.bidi.rightRe_,goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_,goog.i18n.bidi.RIGHT)},goog.i18n.bidi.doubleQuoteSubstituteRe_=/([\u0591-\u05f2])"/g,goog.i18n.bidi.singleQuoteSubstituteRe_=/([\u0591-\u05f2])'/g,goog.i18n.bidi.normalizeHebrewQuote=function(t){return t.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_,"$1״").replace(goog.i18n.bidi.singleQuoteSubstituteRe_,"$1׳")},goog.i18n.bidi.wordSeparatorRe_=/\s+/,goog.i18n.bidi.hasNumeralsRe_=/[\d\u06f0-\u06f9]/,goog.i18n.bidi.rtlDetectionThreshold_=.4,goog.i18n.bidi.estimateDirection=function(t,e){var r=0,s=0,o=!1;for(t=goog.i18n.bidi.stripHtmlIfNeeded_(t,e).split(goog.i18n.bidi.wordSeparatorRe_),e=0;e<t.length;e++){var i=t[e];goog.i18n.bidi.startsWithRtl(i)?(r++,s++):goog.i18n.bidi.isRequiredLtrRe_.test(i)?o=!0:goog.i18n.bidi.hasAnyLtr(i)?s++:goog.i18n.bidi.hasNumeralsRe_.test(i)&&(o=!0)}return s==0?o?goog.i18n.bidi.Dir.LTR:goog.i18n.bidi.Dir.NEUTRAL:r/s>goog.i18n.bidi.rtlDetectionThreshold_?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR},goog.i18n.bidi.detectRtlDirectionality=function(t,e){return goog.i18n.bidi.estimateDirection(t,e)==goog.i18n.bidi.Dir.RTL},goog.i18n.bidi.setElementDirAndAlign=function(t,e){t&&(e=goog.i18n.bidi.toDir(e))&&(t.style.textAlign=e==goog.i18n.bidi.Dir.RTL?goog.i18n.bidi.RIGHT:goog.i18n.bidi.LEFT,t.dir=e==goog.i18n.bidi.Dir.RTL?"rtl":"ltr")},goog.i18n.bidi.setElementDirByTextDirectionality=function(t,e){switch(goog.i18n.bidi.estimateDirection(e)){case goog.i18n.bidi.Dir.LTR:t.dir="ltr";break;case goog.i18n.bidi.Dir.RTL:t.dir="rtl";break;default:t.removeAttribute("dir")}},goog.i18n.bidi.DirectionalString=function(){},goog.html.TrustedResourceUrl=function(t,e){this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_=t===goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_&&e||"",this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_},goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString=!0,goog.html.TrustedResourceUrl.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString()},goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString=!0,goog.html.TrustedResourceUrl.prototype.getDirection=function(){return goog.i18n.bidi.Dir.LTR},goog.html.TrustedResourceUrl.prototype.cloneWithParams=function(t,e){var r=goog.html.TrustedResourceUrl.unwrap(this),s=(r=goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(r))[3]||"";return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(r[1]+goog.html.TrustedResourceUrl.stringifyParams_("?",r[2]||"",t)+goog.html.TrustedResourceUrl.stringifyParams_("#",s,e))},goog.DEBUG&&(goog.html.TrustedResourceUrl.prototype.toString=function(){return"TrustedResourceUrl{"+this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_+"}"}),goog.html.TrustedResourceUrl.unwrap=function(t){return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t).toString()},goog.html.TrustedResourceUrl.unwrapTrustedScriptURL=function(t){return t instanceof goog.html.TrustedResourceUrl&&t.constructor===goog.html.TrustedResourceUrl&&t.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?t.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_:(goog.asserts.fail("expected object of type TrustedResourceUrl, got '"+t+"' of type "+goog.typeOf(t)),"type_error:TrustedResourceUrl")},goog.html.TrustedResourceUrl.format=function(t,e){var r=goog.string.Const.unwrap(t);if(!goog.html.TrustedResourceUrl.BASE_URL_.test(r))throw Error("Invalid TrustedResourceUrl format: "+r);return t=r.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_,function(s,o){if(!Object.prototype.hasOwnProperty.call(e,o))throw Error('Found marker, "'+o+'", in format string, "'+r+'", but no valid label mapping found in args: '+JSON.stringify(e));return(s=e[o])instanceof goog.string.Const?goog.string.Const.unwrap(s):encodeURIComponent(String(s))}),goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t)},goog.html.TrustedResourceUrl.FORMAT_MARKER_=/%{(\w+)}/g,goog.html.TrustedResourceUrl.BASE_URL_=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,goog.html.TrustedResourceUrl.URL_PARAM_PARSER_=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,goog.html.TrustedResourceUrl.formatWithParams=function(t,e,r,s){return goog.html.TrustedResourceUrl.format(t,e).cloneWithParams(r,s)},goog.html.TrustedResourceUrl.fromConstant=function(t){return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(t))},goog.html.TrustedResourceUrl.fromConstants=function(t){for(var e="",r=0;r<t.length;r++)e+=goog.string.Const.unwrap(t[r]);return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(e)},goog.html.TrustedResourceUrl.fromSafeScript=function(t){return t=goog.fs.blob.getBlobWithProperties([goog.html.SafeScript.unwrap(t)],"text/javascript"),t=goog.fs.url.createObjectUrl(t),goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t)},goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse=function(t){return t=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(t):t,new goog.html.TrustedResourceUrl(goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_,t)},goog.html.TrustedResourceUrl.stringifyParams_=function(t,e,r){if(r==null)return e;if(typeof r=="string")return r?t+encodeURIComponent(r):"";for(var s in r){var o=r[s];o=Array.isArray(o)?o:[o];for(var i=0;i<o.length;i++){var n=o[i];n!=null&&(e||(e=t),e+=(e.length>t.length?"&":"")+encodeURIComponent(s)+"="+encodeURIComponent(String(n)))}}return e},goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_={},goog.string.internal={},goog.string.internal.startsWith=function(t,e){return t.lastIndexOf(e,0)==0},goog.string.internal.endsWith=function(t,e){var r=t.length-e.length;return 0<=r&&t.indexOf(e,r)==r},goog.string.internal.caseInsensitiveStartsWith=function(t,e){return goog.string.internal.caseInsensitiveCompare(e,t.substr(0,e.length))==0},goog.string.internal.caseInsensitiveEndsWith=function(t,e){return goog.string.internal.caseInsensitiveCompare(e,t.substr(t.length-e.length,e.length))==0},goog.string.internal.caseInsensitiveEquals=function(t,e){return t.toLowerCase()==e.toLowerCase()},goog.string.internal.isEmptyOrWhitespace=function(t){return/^[\s\xa0]*$/.test(t)},goog.string.internal.trim=goog.TRUSTED_SITE&&String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},goog.string.internal.caseInsensitiveCompare=function(t,e){return(t=String(t).toLowerCase())<(e=String(e).toLowerCase())?-1:t==e?0:1},goog.string.internal.newLineToBr=function(t,e){return t.replace(/(\r\n|\r|\n)/g,e?"<br />":"<br>")},goog.string.internal.htmlEscape=function(t,e){if(e)t=t.replace(goog.string.internal.AMP_RE_,"&amp;").replace(goog.string.internal.LT_RE_,"&lt;").replace(goog.string.internal.GT_RE_,"&gt;").replace(goog.string.internal.QUOT_RE_,"&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_,"&#39;").replace(goog.string.internal.NULL_RE_,"&#0;");else{if(!goog.string.internal.ALL_RE_.test(t))return t;t.indexOf("&")!=-1&&(t=t.replace(goog.string.internal.AMP_RE_,"&amp;")),t.indexOf("<")!=-1&&(t=t.replace(goog.string.internal.LT_RE_,"&lt;")),t.indexOf(">")!=-1&&(t=t.replace(goog.string.internal.GT_RE_,"&gt;")),t.indexOf('"')!=-1&&(t=t.replace(goog.string.internal.QUOT_RE_,"&quot;")),t.indexOf("'")!=-1&&(t=t.replace(goog.string.internal.SINGLE_QUOTE_RE_,"&#39;")),t.indexOf("\0")!=-1&&(t=t.replace(goog.string.internal.NULL_RE_,"&#0;"))}return t},goog.string.internal.AMP_RE_=/&/g,goog.string.internal.LT_RE_=/</g,goog.string.internal.GT_RE_=/>/g,goog.string.internal.QUOT_RE_=/"/g,goog.string.internal.SINGLE_QUOTE_RE_=/'/g,goog.string.internal.NULL_RE_=/\x00/g,goog.string.internal.ALL_RE_=/[\x00&<>"']/,goog.string.internal.whitespaceEscape=function(t,e){return goog.string.internal.newLineToBr(t.replace(/  /g," &#160;"),e)},goog.string.internal.contains=function(t,e){return t.indexOf(e)!=-1},goog.string.internal.caseInsensitiveContains=function(t,e){return goog.string.internal.contains(t.toLowerCase(),e.toLowerCase())},goog.string.internal.compareVersions=function(t,e){var r=0;t=goog.string.internal.trim(String(t)).split("."),e=goog.string.internal.trim(String(e)).split(".");for(var s=Math.max(t.length,e.length),o=0;r==0&&o<s;o++){var i=t[o]||"",n=e[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],n=/(\d*)(\D*)(.*)/.exec(n)||["","","",""],i[0].length==0&&n[0].length==0)break;r=i[1].length==0?0:parseInt(i[1],10);var p=n[1].length==0?0:parseInt(n[1],10);r=goog.string.internal.compareElements_(r,p)||goog.string.internal.compareElements_(i[2].length==0,n[2].length==0)||goog.string.internal.compareElements_(i[2],n[2]),i=i[3],n=n[3]}while(r==0)}return r},goog.string.internal.compareElements_=function(t,e){return t<e?-1:t>e?1:0},goog.html.SafeUrl=function(t,e){this.privateDoNotAccessOrElseSafeUrlWrappedValue_=t===goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_&&e||"",this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_},goog.html.SafeUrl.INNOCUOUS_STRING="about:invalid#zClosurez",goog.html.SafeUrl.prototype.implementsGoogStringTypedString=!0,goog.html.SafeUrl.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString()},goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString=!0,goog.html.SafeUrl.prototype.getDirection=function(){return goog.i18n.bidi.Dir.LTR},goog.DEBUG&&(goog.html.SafeUrl.prototype.toString=function(){return"SafeUrl{"+this.privateDoNotAccessOrElseSafeUrlWrappedValue_+"}"}),goog.html.SafeUrl.unwrap=function(t){return t instanceof goog.html.SafeUrl&&t.constructor===goog.html.SafeUrl&&t.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?t.privateDoNotAccessOrElseSafeUrlWrappedValue_:(goog.asserts.fail("expected object of type SafeUrl, got '"+t+"' of type "+goog.typeOf(t)),"type_error:SafeUrl")},goog.html.SafeUrl.fromConstant=function(t){return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(t))},goog.html.SAFE_MIME_TYPE_PATTERN_=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,goog.html.SafeUrl.isSafeMimeType=function(t){return goog.html.SAFE_MIME_TYPE_PATTERN_.test(t)},goog.html.SafeUrl.fromBlob=function(t){return t=goog.html.SafeUrl.isSafeMimeType(t.type)?goog.fs.url.createObjectUrl(t):goog.html.SafeUrl.INNOCUOUS_STRING,goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)},goog.html.SafeUrl.fromMediaSource=function(t){return goog.asserts.assert("MediaSource"in goog.global,"No support for MediaSource"),t=t instanceof MediaSource?goog.fs.url.createObjectUrl(t):goog.html.SafeUrl.INNOCUOUS_STRING,goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)},goog.html.DATA_URL_PATTERN_=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,goog.html.SafeUrl.fromDataUrl=function(t){var e=(t=t.replace(/(%0A|%0D)/g,"")).match(goog.html.DATA_URL_PATTERN_);return e=e&&goog.html.SafeUrl.isSafeMimeType(e[1]),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e?t:goog.html.SafeUrl.INNOCUOUS_STRING)},goog.html.SafeUrl.fromTelUrl=function(t){return goog.string.internal.caseInsensitiveStartsWith(t,"tel:")||(t=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)},goog.html.SIP_URL_PATTERN_=/^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i,goog.html.SafeUrl.fromSipUrl=function(t){return goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(t))||(t=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)},goog.html.SafeUrl.fromFacebookMessengerUrl=function(t){return goog.string.internal.caseInsensitiveStartsWith(t,"fb-messenger://share")||(t=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)},goog.html.SafeUrl.fromWhatsAppUrl=function(t){return goog.string.internal.caseInsensitiveStartsWith(t,"whatsapp://send")||(t=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)},goog.html.SafeUrl.fromSmsUrl=function(t){return goog.string.internal.caseInsensitiveStartsWith(t,"sms:")&&goog.html.SafeUrl.isSmsUrlBodyValid_(t)||(t=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)},goog.html.SafeUrl.isSmsUrlBodyValid_=function(t){var e=t.indexOf("#");if(0<e&&(t=t.substring(0,e)),!(e=t.match(/[?&]body=/gi)))return!0;if(1<e.length)return!1;if(!(t=t.match(/[?&]body=([^&]*)/)[1]))return!0;try{decodeURIComponent(t)}catch{return!1}return/^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(t)},goog.html.SafeUrl.fromSshUrl=function(t){return goog.string.internal.caseInsensitiveStartsWith(t,"ssh://")||(t=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)},goog.html.SafeUrl.sanitizeChromeExtensionUrl=function(t,e){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//,t,e)},goog.html.SafeUrl.sanitizeFirefoxExtensionUrl=function(t,e){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//,t,e)},goog.html.SafeUrl.sanitizeEdgeExtensionUrl=function(t,e){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//,t,e)},goog.html.SafeUrl.sanitizeExtensionUrl_=function(t,e,r){return(t=t.exec(e))?(t=t[1],(r instanceof goog.string.Const?[goog.string.Const.unwrap(r)]:r.map(function(s){return goog.string.Const.unwrap(s)})).indexOf(t)==-1&&(e=goog.html.SafeUrl.INNOCUOUS_STRING)):e=goog.html.SafeUrl.INNOCUOUS_STRING,goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)},goog.html.SafeUrl.fromTrustedResourceUrl=function(t){return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(t))},goog.html.SAFE_URL_PATTERN_=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,goog.html.SafeUrl.SAFE_URL_PATTERN=goog.html.SAFE_URL_PATTERN_,goog.html.SafeUrl.sanitize=function(t){return t instanceof goog.html.SafeUrl?t:(t=typeof t=="object"&&t.implementsGoogStringTypedString?t.getTypedStringValue():String(t),goog.html.SAFE_URL_PATTERN_.test(t)||(t=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t))},goog.html.SafeUrl.sanitizeAssertUnchanged=function(t,e){return t instanceof goog.html.SafeUrl?t:(t=typeof t=="object"&&t.implementsGoogStringTypedString?t.getTypedStringValue():String(t),e&&/^data:/i.test(t)&&(e=goog.html.SafeUrl.fromDataUrl(t)).getTypedStringValue()==t?e:(goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(t),"%s does not match the safe URL pattern",t)||(t=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)))},goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse=function(t){return new goog.html.SafeUrl(goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_,t)},goog.html.SafeUrl.ABOUT_BLANK=goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank"),goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_={},goog.html.SafeStyle=function(){this.privateDoNotAccessOrElseSafeStyleWrappedValue_="",this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_},goog.html.SafeStyle.prototype.implementsGoogStringTypedString=!0,goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.SafeStyle.fromConstant=function(t){return(t=goog.string.Const.unwrap(t)).length===0?goog.html.SafeStyle.EMPTY:(goog.asserts.assert(goog.string.internal.endsWith(t,";"),"Last character of style string is not ';': "+t),goog.asserts.assert(goog.string.internal.contains(t,":"),`Style string must contain at least one ':', to specify a "name: value" pair: `+t),goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t))},goog.html.SafeStyle.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeStyleWrappedValue_},goog.DEBUG&&(goog.html.SafeStyle.prototype.toString=function(){return"SafeStyle{"+this.privateDoNotAccessOrElseSafeStyleWrappedValue_+"}"}),goog.html.SafeStyle.unwrap=function(t){return t instanceof goog.html.SafeStyle&&t.constructor===goog.html.SafeStyle&&t.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?t.privateDoNotAccessOrElseSafeStyleWrappedValue_:(goog.asserts.fail("expected object of type SafeStyle, got '"+t+"' of type "+goog.typeOf(t)),"type_error:SafeStyle")},goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse=function(t){return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(t)},goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_=function(t){return this.privateDoNotAccessOrElseSafeStyleWrappedValue_=t,this},goog.html.SafeStyle.EMPTY=goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(""),goog.html.SafeStyle.INNOCUOUS_STRING="zClosurez",goog.html.SafeStyle.create=function(t){var e,r="";for(e in t){if(!/^[-_a-zA-Z0-9]+$/.test(e))throw Error("Name allows only [-_a-zA-Z0-9], got: "+e);var s=t[e];s!=null&&(r+=e+":"+(s=Array.isArray(s)?goog.array.map(s,goog.html.SafeStyle.sanitizePropertyValue_).join(" "):goog.html.SafeStyle.sanitizePropertyValue_(s))+";")}return r?goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(r):goog.html.SafeStyle.EMPTY},goog.html.SafeStyle.sanitizePropertyValue_=function(t){if(t instanceof goog.html.SafeUrl)return'url("'+goog.html.SafeUrl.unwrap(t).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(t=t instanceof goog.string.Const?goog.string.Const.unwrap(t):goog.html.SafeStyle.sanitizePropertyValueString_(String(t)),/[{;}]/.test(t))throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.",[t]);return t},goog.html.SafeStyle.sanitizePropertyValueString_=function(t){var e=t.replace(goog.html.SafeStyle.FUNCTIONS_RE_,"$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_,"$1").replace(goog.html.SafeStyle.URL_RE_,"url");return goog.html.SafeStyle.VALUE_RE_.test(e)?goog.html.SafeStyle.COMMENT_RE_.test(t)?(goog.asserts.fail("String value disallows comments, got: "+t),goog.html.SafeStyle.INNOCUOUS_STRING):goog.html.SafeStyle.hasBalancedQuotes_(t)?goog.html.SafeStyle.hasBalancedSquareBrackets_(t)?goog.html.SafeStyle.sanitizeUrl_(t):(goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: "+t),goog.html.SafeStyle.INNOCUOUS_STRING):(goog.asserts.fail("String value requires balanced quotes, got: "+t),goog.html.SafeStyle.INNOCUOUS_STRING):(goog.asserts.fail("String value allows only "+goog.html.SafeStyle.VALUE_ALLOWED_CHARS_+" and simple functions, got: "+t),goog.html.SafeStyle.INNOCUOUS_STRING)},goog.html.SafeStyle.hasBalancedQuotes_=function(t){for(var e=!0,r=!0,s=0;s<t.length;s++){var o=t.charAt(s);o=="'"&&r?e=!e:o=='"'&&e&&(r=!r)}return e&&r},goog.html.SafeStyle.hasBalancedSquareBrackets_=function(t){for(var e=!0,r=/^[-_a-zA-Z0-9]$/,s=0;s<t.length;s++){var o=t.charAt(s);if(o=="]"){if(e)return!1;e=!0}else if(o=="["){if(!e)return!1;e=!1}else if(!e&&!r.test(o))return!1}return e},goog.html.SafeStyle.VALUE_ALLOWED_CHARS_=`[-,."'%_!# a-zA-Z0-9\\[\\]]`,goog.html.SafeStyle.VALUE_RE_=new RegExp("^"+goog.html.SafeStyle.VALUE_ALLOWED_CHARS_+"+$"),goog.html.SafeStyle.URL_RE_=/\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,goog.html.SafeStyle.ALLOWED_FUNCTIONS_="calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(" "),goog.html.SafeStyle.FUNCTIONS_RE_=new RegExp("\\b("+goog.html.SafeStyle.ALLOWED_FUNCTIONS_.join("|")+")\\([-+*/0-9a-z.%\\[\\], ]+\\)","g"),goog.html.SafeStyle.COMMENT_RE_=/\/\*/,goog.html.SafeStyle.sanitizeUrl_=function(t){return t.replace(goog.html.SafeStyle.URL_RE_,function(e,r,s,o){var i="";return s=s.replace(/^(['"])(.*)\1$/,function(n,p,d){return i=p,d}),e=goog.html.SafeUrl.sanitize(s).getTypedStringValue(),r+i+e+i+o})},goog.html.SafeStyle.concat=function(t){var e="",r=function(s){Array.isArray(s)?goog.array.forEach(s,r):e+=goog.html.SafeStyle.unwrap(s)};return goog.array.forEach(arguments,r),e?goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(e):goog.html.SafeStyle.EMPTY},goog.html.SafeStyleSheet=function(){this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_="",this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_},goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString=!0,goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.SafeStyleSheet.createRule=function(t,e){if(goog.string.internal.contains(t,"<"))throw Error("Selector does not allow '<', got: "+t);var r=t.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(r))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+t);if(!goog.html.SafeStyleSheet.hasBalancedBrackets_(r))throw Error("() and [] in selector must be balanced, got: "+t);return e instanceof goog.html.SafeStyle||(e=goog.html.SafeStyle.create(e)),t=t+"{"+goog.html.SafeStyle.unwrap(e).replace(/</g,"\\3C ")+"}",goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t)},goog.html.SafeStyleSheet.hasBalancedBrackets_=function(t){for(var e={"(":")","[":"]"},r=[],s=0;s<t.length;s++){var o=t[s];if(e[o])r.push(e[o]);else if(goog.object.contains(e,o)&&r.pop()!=o)return!1}return r.length==0},goog.html.SafeStyleSheet.concat=function(t){var e="",r=function(s){Array.isArray(s)?goog.array.forEach(s,r):e+=goog.html.SafeStyleSheet.unwrap(s)};return goog.array.forEach(arguments,r),goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e)},goog.html.SafeStyleSheet.fromConstant=function(t){return(t=goog.string.Const.unwrap(t)).length===0?goog.html.SafeStyleSheet.EMPTY:(goog.asserts.assert(!goog.string.internal.contains(t,"<"),"Forbidden '<' character in style sheet string: "+t),goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t))},goog.html.SafeStyleSheet.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_},goog.DEBUG&&(goog.html.SafeStyleSheet.prototype.toString=function(){return"SafeStyleSheet{"+this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_+"}"}),goog.html.SafeStyleSheet.unwrap=function(t){return t instanceof goog.html.SafeStyleSheet&&t.constructor===goog.html.SafeStyleSheet&&t.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?t.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_:(goog.asserts.fail("expected object of type SafeStyleSheet, got '"+t+"' of type "+goog.typeOf(t)),"type_error:SafeStyleSheet")},goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse=function(t){return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(t)},goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_=function(t){return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_=t,this},goog.html.SafeStyleSheet.EMPTY=goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(""),goog.labs={},goog.labs.userAgent={},goog.labs.userAgent.util={},goog.labs.userAgent.util.getNativeUserAgentString_=function(){var t=goog.labs.userAgent.util.getNavigator_();return t&&(t=t.userAgent)?t:""},goog.labs.userAgent.util.getNavigator_=function(){return goog.global.navigator},goog.labs.userAgent.util.userAgent_=goog.labs.userAgent.util.getNativeUserAgentString_(),goog.labs.userAgent.util.setUserAgent=function(t){goog.labs.userAgent.util.userAgent_=t||goog.labs.userAgent.util.getNativeUserAgentString_()},goog.labs.userAgent.util.getUserAgent=function(){return goog.labs.userAgent.util.userAgent_},goog.labs.userAgent.util.matchUserAgent=function(t){var e=goog.labs.userAgent.util.getUserAgent();return goog.string.internal.contains(e,t)},goog.labs.userAgent.util.matchUserAgentIgnoreCase=function(t){var e=goog.labs.userAgent.util.getUserAgent();return goog.string.internal.caseInsensitiveContains(e,t)},goog.labs.userAgent.util.extractVersionTuples=function(t){for(var e,r=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,s=[];e=r.exec(t);)s.push([e[1],e[2],e[3]||void 0]);return s},goog.labs.userAgent.browser={},goog.labs.userAgent.browser.matchOpera_=function(){return goog.labs.userAgent.util.matchUserAgent("Opera")},goog.labs.userAgent.browser.matchIE_=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")},goog.labs.userAgent.browser.matchEdgeHtml_=function(){return goog.labs.userAgent.util.matchUserAgent("Edge")},goog.labs.userAgent.browser.matchEdgeChromium_=function(){return goog.labs.userAgent.util.matchUserAgent("Edg/")},goog.labs.userAgent.browser.matchOperaChromium_=function(){return goog.labs.userAgent.util.matchUserAgent("OPR")},goog.labs.userAgent.browser.matchFirefox_=function(){return goog.labs.userAgent.util.matchUserAgent("Firefox")||goog.labs.userAgent.util.matchUserAgent("FxiOS")},goog.labs.userAgent.browser.matchSafari_=function(){return goog.labs.userAgent.util.matchUserAgent("Safari")&&!(goog.labs.userAgent.browser.matchChrome_()||goog.labs.userAgent.browser.matchCoast_()||goog.labs.userAgent.browser.matchOpera_()||goog.labs.userAgent.browser.matchEdgeHtml_()||goog.labs.userAgent.browser.matchEdgeChromium_()||goog.labs.userAgent.browser.matchOperaChromium_()||goog.labs.userAgent.browser.matchFirefox_()||goog.labs.userAgent.browser.isSilk()||goog.labs.userAgent.util.matchUserAgent("Android"))},goog.labs.userAgent.browser.matchCoast_=function(){return goog.labs.userAgent.util.matchUserAgent("Coast")},goog.labs.userAgent.browser.matchIosWebview_=function(){return(goog.labs.userAgent.util.matchUserAgent("iPad")||goog.labs.userAgent.util.matchUserAgent("iPhone"))&&!goog.labs.userAgent.browser.matchSafari_()&&!goog.labs.userAgent.browser.matchChrome_()&&!goog.labs.userAgent.browser.matchCoast_()&&!goog.labs.userAgent.browser.matchFirefox_()&&goog.labs.userAgent.util.matchUserAgent("AppleWebKit")},goog.labs.userAgent.browser.matchChrome_=function(){return(goog.labs.userAgent.util.matchUserAgent("Chrome")||goog.labs.userAgent.util.matchUserAgent("CriOS"))&&!goog.labs.userAgent.browser.matchEdgeHtml_()},goog.labs.userAgent.browser.matchAndroidBrowser_=function(){return goog.labs.userAgent.util.matchUserAgent("Android")&&!(goog.labs.userAgent.browser.isChrome()||goog.labs.userAgent.browser.isFirefox()||goog.labs.userAgent.browser.isOpera()||goog.labs.userAgent.browser.isSilk())},goog.labs.userAgent.browser.isOpera=goog.labs.userAgent.browser.matchOpera_,goog.labs.userAgent.browser.isIE=goog.labs.userAgent.browser.matchIE_,goog.labs.userAgent.browser.isEdge=goog.labs.userAgent.browser.matchEdgeHtml_,goog.labs.userAgent.browser.isEdgeChromium=goog.labs.userAgent.browser.matchEdgeChromium_,goog.labs.userAgent.browser.isOperaChromium=goog.labs.userAgent.browser.matchOperaChromium_,goog.labs.userAgent.browser.isFirefox=goog.labs.userAgent.browser.matchFirefox_,goog.labs.userAgent.browser.isSafari=goog.labs.userAgent.browser.matchSafari_,goog.labs.userAgent.browser.isCoast=goog.labs.userAgent.browser.matchCoast_,goog.labs.userAgent.browser.isIosWebview=goog.labs.userAgent.browser.matchIosWebview_,goog.labs.userAgent.browser.isChrome=goog.labs.userAgent.browser.matchChrome_,goog.labs.userAgent.browser.isAndroidBrowser=goog.labs.userAgent.browser.matchAndroidBrowser_,goog.labs.userAgent.browser.isSilk=function(){return goog.labs.userAgent.util.matchUserAgent("Silk")},goog.labs.userAgent.browser.getVersion=function(){function t(o){return o=goog.array.find(o,s),r[o]||""}var e=goog.labs.userAgent.util.getUserAgent();if(goog.labs.userAgent.browser.isIE())return goog.labs.userAgent.browser.getIEVersion_(e);e=goog.labs.userAgent.util.extractVersionTuples(e);var r={};goog.array.forEach(e,function(o){r[o[0]]=o[1]});var s=goog.partial(goog.object.containsKey,r);return goog.labs.userAgent.browser.isOpera()?t(["Version","Opera"]):goog.labs.userAgent.browser.isEdge()?t(["Edge"]):goog.labs.userAgent.browser.isEdgeChromium()?t(["Edg"]):goog.labs.userAgent.browser.isChrome()?t(["Chrome","CriOS","HeadlessChrome"]):(e=e[2])&&e[1]||""},goog.labs.userAgent.browser.isVersionOrHigher=function(t){return 0<=goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(),t)},goog.labs.userAgent.browser.getIEVersion_=function(t){var e=/rv: *([\d\.]*)/.exec(t);if(e&&e[1])return e[1];e="";var r=/MSIE +([\d\.]+)/.exec(t);if(r&&r[1])if(t=/Trident\/(\d.\d)/.exec(t),r[1]=="7.0")if(t&&t[1])switch(t[1]){case"4.0":e="8.0";break;case"5.0":e="9.0";break;case"6.0":e="10.0";break;case"7.0":e="11.0"}else e="7.0";else e=r[1];return e},goog.html.SafeHtml=function(){this.privateDoNotAccessOrElseSafeHtmlWrappedValue_="",this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_,this.dir_=null},goog.html.SafeHtml.ENABLE_ERROR_MESSAGES=goog.DEBUG,goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE=!0,goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString=!0,goog.html.SafeHtml.prototype.getDirection=function(){return this.dir_},goog.html.SafeHtml.prototype.implementsGoogStringTypedString=!0,goog.html.SafeHtml.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString()},goog.DEBUG&&(goog.html.SafeHtml.prototype.toString=function(){return"SafeHtml{"+this.privateDoNotAccessOrElseSafeHtmlWrappedValue_+"}"}),goog.html.SafeHtml.unwrap=function(t){return goog.html.SafeHtml.unwrapTrustedHTML(t).toString()},goog.html.SafeHtml.unwrapTrustedHTML=function(t){return t instanceof goog.html.SafeHtml&&t.constructor===goog.html.SafeHtml&&t.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?t.privateDoNotAccessOrElseSafeHtmlWrappedValue_:(goog.asserts.fail("expected object of type SafeHtml, got '"+t+"' of type "+goog.typeOf(t)),"type_error:SafeHtml")},goog.html.SafeHtml.htmlEscape=function(t){if(t instanceof goog.html.SafeHtml)return t;var e=typeof t=="object",r=null;return e&&t.implementsGoogI18nBidiDirectionalString&&(r=t.getDirection()),t=e&&t.implementsGoogStringTypedString?t.getTypedStringValue():String(t),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(t),r)},goog.html.SafeHtml.htmlEscapePreservingNewlines=function(t){return t instanceof goog.html.SafeHtml?t:(t=goog.html.SafeHtml.htmlEscape(t),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(t)),t.getDirection()))},goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces=function(t){return t instanceof goog.html.SafeHtml?t:(t=goog.html.SafeHtml.htmlEscape(t),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(t)),t.getDirection()))},goog.html.SafeHtml.from=goog.html.SafeHtml.htmlEscape,goog.html.SafeHtml.comment=function(t){return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!--"+goog.string.internal.htmlEscape(t)+"-->",null)},goog.html.SafeHtml.VALID_NAMES_IN_TAG_=/^[a-zA-Z0-9-]+$/,goog.html.SafeHtml.URL_ATTRIBUTES_={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},goog.html.SafeHtml.create=function(t,e,r){return goog.html.SafeHtml.verifyTagName(String(t)),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(t),e,r)},goog.html.SafeHtml.verifyTagName=function(t){if(!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(t))throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?"Invalid tag name <"+t+">.":"");if(t.toUpperCase()in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?"Tag name <"+t+"> is not allowed for SafeHtml.":"")},goog.html.SafeHtml.createIframe=function(t,e,r,s){t&&goog.html.TrustedResourceUrl.unwrap(t);var o={};return o.src=t||null,o.srcdoc=e&&goog.html.SafeHtml.unwrap(e),t=goog.html.SafeHtml.combineAttributes(o,{sandbox:""},r),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe",t,s)},goog.html.SafeHtml.createSandboxIframe=function(t,e,r,s){if(!goog.html.SafeHtml.canUseSandboxIframe())throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?"The browser does not support sandboxed iframes.":"");var o={};return o.src=t?goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(t)):null,o.srcdoc=e||null,o.sandbox="",t=goog.html.SafeHtml.combineAttributes(o,{},r),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe",t,s)},goog.html.SafeHtml.canUseSandboxIframe=function(){return goog.global.HTMLIFrameElement&&"sandbox"in goog.global.HTMLIFrameElement.prototype},goog.html.SafeHtml.createScriptSrc=function(t,e){return goog.html.TrustedResourceUrl.unwrap(t),t=goog.html.SafeHtml.combineAttributes({src:t},{},e),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script",t)},goog.html.SafeHtml.createScript=function(t,e){for(var r in e){var s=r.toLowerCase();if(s=="language"||s=="src"||s=="text"||s=="type")throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Cannot set "'+s+'" attribute':"")}for(r="",t=goog.array.concat(t),s=0;s<t.length;s++)r+=goog.html.SafeScript.unwrap(t[s]);return t=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(r,goog.i18n.bidi.Dir.NEUTRAL),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script",e,t)},goog.html.SafeHtml.createStyle=function(t,e){e=goog.html.SafeHtml.combineAttributes({type:"text/css"},{},e);var r="";t=goog.array.concat(t);for(var s=0;s<t.length;s++)r+=goog.html.SafeStyleSheet.unwrap(t[s]);return t=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(r,goog.i18n.bidi.Dir.NEUTRAL),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style",e,t)},goog.html.SafeHtml.createMetaRefresh=function(t,e){return t=goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(t)),(goog.labs.userAgent.browser.isIE()||goog.labs.userAgent.browser.isEdge())&&goog.string.internal.contains(t,";")&&(t="'"+t.replace(/'/g,"%27")+"'"),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta",{"http-equiv":"refresh",content:(e||0)+"; url="+t})},goog.html.SafeHtml.getAttrNameAndValue_=function(t,e,r){if(r instanceof goog.string.Const)r=goog.string.Const.unwrap(r);else if(e.toLowerCase()=="style"){if(!goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Attribute "style" not supported.':"");r=goog.html.SafeHtml.getStyleValue_(r)}else{if(/^on/i.test(e))throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Attribute "'+e+'" requires goog.string.Const value, "'+r+'" given.':"");if(e.toLowerCase()in goog.html.SafeHtml.URL_ATTRIBUTES_)if(r instanceof goog.html.TrustedResourceUrl)r=goog.html.TrustedResourceUrl.unwrap(r);else if(r instanceof goog.html.SafeUrl)r=goog.html.SafeUrl.unwrap(r);else{if(typeof r!="string")throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Attribute "'+e+'" on tag "'+t+'" requires goog.html.SafeUrl, goog.string.Const, or string, value "'+r+'" given.':"");r=goog.html.SafeUrl.sanitize(r).getTypedStringValue()}}return r.implementsGoogStringTypedString&&(r=r.getTypedStringValue()),goog.asserts.assert(typeof r=="string"||typeof r=="number","String or number value expected, got "+typeof r+" with value: "+r),e+'="'+goog.string.internal.htmlEscape(String(r))+'"'},goog.html.SafeHtml.getStyleValue_=function(t){if(!goog.isObject(t))throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof t+" given: "+t:"");return t instanceof goog.html.SafeStyle||(t=goog.html.SafeStyle.create(t)),goog.html.SafeStyle.unwrap(t)},goog.html.SafeHtml.createWithDir=function(t,e,r,s){return(e=goog.html.SafeHtml.create(e,r,s)).dir_=t,e},goog.html.SafeHtml.join=function(t,e){var r=(t=goog.html.SafeHtml.htmlEscape(t)).getDirection(),s=[],o=function(i){Array.isArray(i)?goog.array.forEach(i,o):(i=goog.html.SafeHtml.htmlEscape(i),s.push(goog.html.SafeHtml.unwrap(i)),i=i.getDirection(),r==goog.i18n.bidi.Dir.NEUTRAL?r=i:i!=goog.i18n.bidi.Dir.NEUTRAL&&r!=i&&(r=null))};return goog.array.forEach(e,o),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(s.join(goog.html.SafeHtml.unwrap(t)),r)},goog.html.SafeHtml.concat=function(t){return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY,Array.prototype.slice.call(arguments))},goog.html.SafeHtml.concatWithDir=function(t,e){var r=goog.html.SafeHtml.concat(goog.array.slice(arguments,1));return r.dir_=t,r},goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse=function(t,e){return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(t,e)},goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_=function(t,e){return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(t):t,this.dir_=e,this},goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse=function(t,e,r){var s=null,o="<"+t+goog.html.SafeHtml.stringifyAttributes(t,e);return r==null?r=[]:Array.isArray(r)||(r=[r]),goog.dom.tags.isVoidTag(t.toLowerCase())?(goog.asserts.assert(!r.length,"Void tag <"+t+"> does not allow content."),o+=">"):(s=goog.html.SafeHtml.concat(r),o+=">"+goog.html.SafeHtml.unwrap(s)+"</"+t+">",s=s.getDirection()),(t=e&&e.dir)&&(s=/^(ltr|rtl|auto)$/i.test(t)?goog.i18n.bidi.Dir.NEUTRAL:null),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(o,s)},goog.html.SafeHtml.stringifyAttributes=function(t,e){var r="";if(e)for(var s in e){if(!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(s))throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Invalid attribute name "'+s+'".':"");var o=e[s];o!=null&&(r+=" "+goog.html.SafeHtml.getAttrNameAndValue_(t,s,o))}return r},goog.html.SafeHtml.combineAttributes=function(t,e,r){var s,o={};for(s in t)goog.asserts.assert(s.toLowerCase()==s,"Must be lower case"),o[s]=t[s];for(s in e)goog.asserts.assert(s.toLowerCase()==s,"Must be lower case"),o[s]=e[s];if(r)for(s in r){var i=s.toLowerCase();if(i in t)throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Cannot override "'+i+'" attribute, got "'+s+'" with value "'+r[s]+'"':"");i in e&&delete o[i],o[s]=r[s]}return o},goog.html.SafeHtml.DOCTYPE_HTML=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>",goog.i18n.bidi.Dir.NEUTRAL),goog.html.SafeHtml.EMPTY=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("",goog.i18n.bidi.Dir.NEUTRAL),goog.html.SafeHtml.BR=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>",goog.i18n.bidi.Dir.NEUTRAL),goog.html.uncheckedconversions={},goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract=function(t,e,r){return goog.asserts.assertString(goog.string.Const.unwrap(t),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(t)),"must provide non-empty justification"),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e,r||null)},goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract=function(t,e){return goog.asserts.assertString(goog.string.Const.unwrap(t),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(t)),"must provide non-empty justification"),goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(e)},goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract=function(t,e){return goog.asserts.assertString(goog.string.Const.unwrap(t),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(t)),"must provide non-empty justification"),goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(e)},goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract=function(t,e){return goog.asserts.assertString(goog.string.Const.unwrap(t),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(t)),"must provide non-empty justification"),goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e)},goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract=function(t,e){return goog.asserts.assertString(goog.string.Const.unwrap(t),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(t)),"must provide non-empty justification"),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)},goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract=function(t,e){return goog.asserts.assertString(goog.string.Const.unwrap(t),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(t)),"must provide non-empty justification"),goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(e)},goog.dom.safe={},goog.dom.safe.InsertAdjacentHtmlPosition={AFTERBEGIN:"afterbegin",AFTEREND:"afterend",BEFOREBEGIN:"beforebegin",BEFOREEND:"beforeend"},goog.dom.safe.insertAdjacentHtml=function(t,e,r){t.insertAdjacentHTML(e,goog.html.SafeHtml.unwrapTrustedHTML(r))},goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},goog.dom.safe.isInnerHtmlCleanupRecursive_=goog.functions.cacheReturnValue(function(){if(goog.DEBUG&&typeof document>"u")return!1;var t=document.createElement("div"),e=document.createElement("div");return e.appendChild(document.createElement("div")),t.appendChild(e),!(goog.DEBUG&&!t.firstChild)&&(e=t.firstChild.firstChild,t.innerHTML=goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY),!e.parentElement)}),goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse=function(t,e){if(goog.dom.safe.isInnerHtmlCleanupRecursive_())for(;t.lastChild;)t.removeChild(t.lastChild);t.innerHTML=goog.html.SafeHtml.unwrapTrustedHTML(e)},goog.dom.safe.setInnerHtml=function(t,e){if(goog.asserts.ENABLE_ASSERTS){var r=t.tagName.toUpperCase();if(goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[r])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+t.tagName+".")}goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(t,e)},goog.dom.safe.setOuterHtml=function(t,e){t.outerHTML=goog.html.SafeHtml.unwrapTrustedHTML(e)},goog.dom.safe.setFormElementAction=function(t,e){e=e instanceof goog.html.SafeUrl?e:goog.html.SafeUrl.sanitizeAssertUnchanged(e),goog.dom.asserts.assertIsHTMLFormElement(t).action=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.setButtonFormAction=function(t,e){e=e instanceof goog.html.SafeUrl?e:goog.html.SafeUrl.sanitizeAssertUnchanged(e),goog.dom.asserts.assertIsHTMLButtonElement(t).formAction=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.setInputFormAction=function(t,e){e=e instanceof goog.html.SafeUrl?e:goog.html.SafeUrl.sanitizeAssertUnchanged(e),goog.dom.asserts.assertIsHTMLInputElement(t).formAction=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.setStyle=function(t,e){t.style.cssText=goog.html.SafeStyle.unwrap(e)},goog.dom.safe.documentWrite=function(t,e){t.write(goog.html.SafeHtml.unwrapTrustedHTML(e))},goog.dom.safe.setAnchorHref=function(t,e){goog.dom.asserts.assertIsHTMLAnchorElement(t),e=e instanceof goog.html.SafeUrl?e:goog.html.SafeUrl.sanitizeAssertUnchanged(e),t.href=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.setImageSrc=function(t,e){if(goog.dom.asserts.assertIsHTMLImageElement(t),!(e instanceof goog.html.SafeUrl)){var r=/^data:image\//i.test(e);e=goog.html.SafeUrl.sanitizeAssertUnchanged(e,r)}t.src=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.setAudioSrc=function(t,e){if(goog.dom.asserts.assertIsHTMLAudioElement(t),!(e instanceof goog.html.SafeUrl)){var r=/^data:audio\//i.test(e);e=goog.html.SafeUrl.sanitizeAssertUnchanged(e,r)}t.src=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.setVideoSrc=function(t,e){if(goog.dom.asserts.assertIsHTMLVideoElement(t),!(e instanceof goog.html.SafeUrl)){var r=/^data:video\//i.test(e);e=goog.html.SafeUrl.sanitizeAssertUnchanged(e,r)}t.src=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.setEmbedSrc=function(t,e){goog.dom.asserts.assertIsHTMLEmbedElement(t),t.src=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(e)},goog.dom.safe.setFrameSrc=function(t,e){goog.dom.asserts.assertIsHTMLFrameElement(t),t.src=goog.html.TrustedResourceUrl.unwrap(e)},goog.dom.safe.setIframeSrc=function(t,e){goog.dom.asserts.assertIsHTMLIFrameElement(t),t.src=goog.html.TrustedResourceUrl.unwrap(e)},goog.dom.safe.setIframeSrcdoc=function(t,e){goog.dom.asserts.assertIsHTMLIFrameElement(t),t.srcdoc=goog.html.SafeHtml.unwrapTrustedHTML(e)},goog.dom.safe.setLinkHrefAndRel=function(t,e,r){goog.dom.asserts.assertIsHTMLLinkElement(t),t.rel=r,goog.string.internal.caseInsensitiveContains(r,"stylesheet")?(goog.asserts.assert(e instanceof goog.html.TrustedResourceUrl,'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'),t.href=goog.html.TrustedResourceUrl.unwrap(e)):t.href=e instanceof goog.html.TrustedResourceUrl?goog.html.TrustedResourceUrl.unwrap(e):e instanceof goog.html.SafeUrl?goog.html.SafeUrl.unwrap(e):goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitizeAssertUnchanged(e))},goog.dom.safe.setObjectData=function(t,e){goog.dom.asserts.assertIsHTMLObjectElement(t),t.data=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(e)},goog.dom.safe.setScriptSrc=function(t,e){goog.dom.asserts.assertIsHTMLScriptElement(t),t.src=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(e),(e=goog.getScriptNonce())&&t.setAttribute("nonce",e)},goog.dom.safe.setScriptContent=function(t,e){goog.dom.asserts.assertIsHTMLScriptElement(t),t.text=goog.html.SafeScript.unwrapTrustedScript(e),(e=goog.getScriptNonce())&&t.setAttribute("nonce",e)},goog.dom.safe.setLocationHref=function(t,e){goog.dom.asserts.assertIsLocation(t),e=e instanceof goog.html.SafeUrl?e:goog.html.SafeUrl.sanitizeAssertUnchanged(e),t.href=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.assignLocation=function(t,e){goog.dom.asserts.assertIsLocation(t),e=e instanceof goog.html.SafeUrl?e:goog.html.SafeUrl.sanitizeAssertUnchanged(e),t.assign(goog.html.SafeUrl.unwrap(e))},goog.dom.safe.replaceLocation=function(t,e){e=e instanceof goog.html.SafeUrl?e:goog.html.SafeUrl.sanitizeAssertUnchanged(e),t.replace(goog.html.SafeUrl.unwrap(e))},goog.dom.safe.openInWindow=function(t,e,r,s,o){return t=t instanceof goog.html.SafeUrl?t:goog.html.SafeUrl.sanitizeAssertUnchanged(t),e=e||goog.global,r=r instanceof goog.string.Const?goog.string.Const.unwrap(r):r||"",e.open(goog.html.SafeUrl.unwrap(t),r,s,o)},goog.dom.safe.parseFromStringHtml=function(t,e){return goog.dom.safe.parseFromString(t,e,"text/html")},goog.dom.safe.parseFromString=function(t,e,r){return t.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(e),r)},goog.dom.safe.createImageFromBlob=function(t){if(!/^image\/.*/g.test(t.type))throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");var e=goog.global.URL.createObjectURL(t);return(t=new goog.global.Image).onload=function(){goog.global.URL.revokeObjectURL(e)},goog.dom.safe.setImageSrc(t,goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."),e)),t},goog.string.DETECT_DOUBLE_ESCAPING=!1,goog.string.FORCE_NON_DOM_HTML_UNESCAPING=!1,goog.string.Unicode={NBSP:" "},goog.string.startsWith=goog.string.internal.startsWith,goog.string.endsWith=goog.string.internal.endsWith,goog.string.caseInsensitiveStartsWith=goog.string.internal.caseInsensitiveStartsWith,goog.string.caseInsensitiveEndsWith=goog.string.internal.caseInsensitiveEndsWith,goog.string.caseInsensitiveEquals=goog.string.internal.caseInsensitiveEquals,goog.string.subs=function(t,e){for(var r=t.split("%s"),s="",o=Array.prototype.slice.call(arguments,1);o.length&&1<r.length;)s+=r.shift()+o.shift();return s+r.join("%s")},goog.string.collapseWhitespace=function(t){return t.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},goog.string.isEmptyOrWhitespace=goog.string.internal.isEmptyOrWhitespace,goog.string.isEmptyString=function(t){return t.length==0},goog.string.isEmpty=goog.string.isEmptyOrWhitespace,goog.string.isEmptyOrWhitespaceSafe=function(t){return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(t))},goog.string.isEmptySafe=goog.string.isEmptyOrWhitespaceSafe,goog.string.isBreakingWhitespace=function(t){return!/[^\t\n\r ]/.test(t)},goog.string.isAlpha=function(t){return!/[^a-zA-Z]/.test(t)},goog.string.isNumeric=function(t){return!/[^0-9]/.test(t)},goog.string.isAlphaNumeric=function(t){return!/[^a-zA-Z0-9]/.test(t)},goog.string.isSpace=function(t){return t==" "},goog.string.isUnicodeChar=function(t){return t.length==1&&" "<=t&&"~">=t||""<=t&&"�">=t},goog.string.stripNewlines=function(t){return t.replace(/(\r\n|\r|\n)+/g," ")},goog.string.canonicalizeNewlines=function(t){return t.replace(/(\r\n|\r|\n)/g,`