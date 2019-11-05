
// var state = {
//   positions:[]
// }
// var objectPosition = state.positions;
//
// // canvas.addEventListener("click", handleClick);
// // function handleClick(e){
// //   console.log(e);
// //
// // }
//
//
// var canvas = document.querySelector("#screen");
// canvas.width = 500;
// canvas.height = 300;
//
// var ctx = canvas.getContext("2d");
//
// ctx.fillStyle = "green";
//
// ctx.fillRect(10,10,5,5);
// ctx.fillRect(20,20,5,5);
//
// ctx.fillStyle = "rgb(255,189,150)";
// ctx.fillRect(40,30,15,15);
//
// // var c = document.getElementById("myCanvas");
// // var ctx = c.getContext("2d");
// // ctx.fillRect(20, 20, 150, 100);
//
// // var canvas = docment.getElementById("screen");
//  function handleClick(e) {
//    console.log(e);
//  }
//
// canvas.addEventListener("click", handleClick);
//
// function handleClick(e) {
//   console.log(e);
//   ctx.fillStyle = "green";
//
//   ctx.fillRect(e.offsetX, e.offsetY, 5, 5);
// }
//
// canvas.addEventListener("click", handleClick);
//
// function handleClick(e){
//   console.log(e);
//   var number = Math.random()*50;
//   ctx.fillStyle = "blue";
//   ctx.fillRect(e.offsetX, e.offsetY, number, number)
// }
//
// function handleClick(e){
//   ctx.fillStyle = "white";
//   ctx.fillRect(0,0,canvas.width, canvas.height);
//   var size1 = (Math.random()*50) + 10;
//   var size2 = (Math.random()*50) + 10;
//   ctx.fillStyle = "purple";
//   ctx.fillRect(e.offsetX, e.offsetY, size1, size2);
//   var squarePosition = {
//     x: e.offsetX,
//     y: e.offsetY,
//   }
//   state.positions.push(squarePosition);
//   // var squarePosition = [e.offsetX, e.offsetY];
//   // state.positions.push(squarePosition);
//
//   console.log(state.positions);
// }
//
//// -------from Mgda lesson 13 -------
var state = {
  positions: [],
};



var canvas = document.querySelector("#screen")
canvas.width = 500;
canvas.height = 300;

var ctx = canvas.getContext("2d");
//
// ctx.fillStyle = "green";
//
// ctx.fillRect(10,10,50,50);
// ctx.fillRect(100,100,30,30);
//
// ctx.fillStyle = "yellow";
// ctx.fillRect(200,200,20,20);
// ctx.fillRect(600,400,20,20);
//
//
// function handleClick(e) {
//   ctx.fillStyle = "orange";
//   var number = Math.random()*50;
//   var number1 = Math.random()*50;
// ctx.fillRect(e.offsetX, e.offsetY, number, number1);
// var xPos = e.offsetX;
// var yPos = e.offsetY;
// var squarePosition = [e.offsetX, e.offsetY];
// state.positions.push(squarePosition);
// console.log(state.positions);
// }
//
// canvas.addEventListener("click", handleClick);
//
//
//


// function showEvent(e) {
//   console.log(e);
// }
//
// var body = document.querySelector("body");
//
// body.addEventListener("keydown", showEvent);
// body.addEventListener("keyup", showEvent);
//
// function handleKeypress(e) {
//   if (e.code === "Space") {
//     clearCanvas();
//   }
// }
//
// function clearCanvas(e) {
//     ctx.fillStyle = "white";
//     ctx.fillRect(0,0,500,300);
// }
//
// body.addEventListener("keydown", handleKeypress);
//
//
// function sayHello() {
//   console.log("Hello", Date.now());
// }
//
// var id = setInterval(sayHello, 1000);
//
// function stop() {
//   clearInterval(id)
//   console.log("we've stopped this");
// }
//
// setTimeout(stop,5000)
//
// function handleClick(e) {
// var squarePosition = {
//   x: e.offsetX,
//   y: e.offsetY
// }
// state.positions.push(squarePosition);
// drawBox(squarePosition);
// };
//
// canvas.addEventListener("click", handleClick);
//
// function drawBox(position) {
//   ctx.fillStyle = "green";
//   var number = Math.random()*50;
//   ctx.fillRect(position.x, position.y, number, number);
// }
//
// function makeBoxes() {
// for (i = 0; i<state.positions.length; i++) {
//   var boxPosition = state.positions[i];
//   drawBox(boxPosition);
// }
// }
//
//
//
// function animate() {
//   clearCanvas();
//   makeBoxes();
// }
//
// setInterval(animate,100);
//

// --------homework: moving drawing image in cnavas------------------
function draw (ctx,image) {
 if (!image.complete) {
   setTimeout(function(){
     draw(ctx,image);
   }, 100)
   return
 }
 ctx.drawImage(image, 50, 50, 100, 100);
}
var image = new Image();
image.src = '../html-canvas-template/img/panda.jpg'
draw(ctx,image);
