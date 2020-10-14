let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

let months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

document.getElementById('setmoneyto5').addEventListener('click', setmoneyto5_handler);

function setmoneyto5_handler() {
  money = 5;
}

function drawGrid() {
  for (let i = 1; i <= 6; i++) {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(i * 96, 0);
    ctx.lineTo(i * 96, cnv.height - 30);
    ctx.stroke();
    ctx.font = "20px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText(months[i - 1], i * 96 - 20, cnv.height - 10);
  }

  for (let i = 1; i <= 57; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * 10);
    ctx.lineTo(cnv.width - 23, i * 10);
    ctx.stroke();
  }

  for (let i = 5; i >= 0; i--) {
    ctx.font = "11px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText((i - 2) * 2 + "%", cnv.width - 22, i * -96 + 576);
  }
}

let money = 0;
let stock1 = 5;
let stock2 = 400;
let stock3 = 32000;

let stock1Shares = 0;
let stock2Shares = 0;
let stock3Shares = 0;

requestAnimationFrame(draw);

function draw() {

  document.getElementById('money').innerHTML = "Money: $" + money + " Stock #1 Shares: " + stock1Shares + " Stock #2 Shares: " + stock2Shares + " Stock #3 Shares: " + stock3Shares;
  document.getElementById('stock1').innerHTML = "Stock #1, $" + stock1;
  document.getElementById('stock2').innerHTML = "Stock #2, $" + stock2;
  document.getElementById('stock3').innerHTML = "Stock #3, $" + stock3;

  requestAnimationFrame(draw);
}


drawGrid();

document.getElementById('submit').addEventListener('click', submit_handler);

function submit_handler() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  drawGrid();
  //Stock 1
  let stock1X = 0;
  let stock1Y = Math.ceil(Math.random() * 400) + 50;
  let stock1LastX = Math.ceil(Math.random() * 50);
  let stock1LastY = stock1Y + Math.ceil(Math.random() * 100) - 50;
  while (stock1X > stock1LastX) {
    stock1LastX += 2;
  }
  for (let i = 0; i < Math.ceil(Math.random() * 100) + 50; i++) {
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(stock1X, stock1Y);
    ctx.lineTo(stock1LastX, stock1LastY);
    ctx.stroke();
    stock1X = stock1LastX;
    stock1Y = stock1LastY;
    stock1LastX += Math.ceil(Math.random() * 50);
    stock1LastY = stock1Y + Math.ceil(Math.random() * 100) - 50;
    while (stock1X > stock1LastX) {
      stock1LastX += 2;
    }
  }

  //Stock 2
  let stock2X = 0;
  let stock2Y = Math.ceil(Math.random() * 400) + 50;
  let stock2LastX = Math.ceil(Math.random() * 50);
  let stock2LastY = stock2Y + Math.ceil(Math.random() * 100) - 50;
  while (stock2X > stock2LastX) {
    stock2LastX += 2;
  }
  for (let i = 0; i < Math.ceil(Math.random() * 100) + 50; i++) {
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(stock2X, stock2Y);
    ctx.lineTo(stock2LastX, stock2LastY);
    ctx.stroke();
    stock2X = stock2LastX;
    stock2Y = stock2LastY;
    stock2LastX += Math.ceil(Math.random() * 50);
    stock2LastY = stock2Y + Math.ceil(Math.random() * 100) - 50;
    while (stock2X > stock2LastX) {
      stock2LastX += 2;
    }
  }

  //Stock 3
  let stock3X = 0;
  let stock3Y = Math.ceil(Math.random() * 400) + 50;
  let stock3LastX = Math.ceil(Math.random() * 50);
  let stock3LastY = stock3Y + Math.ceil(Math.random() * 100) - 50;
  while (stock3X > stock3LastX) {
    stock3LastX += 2;
  }
  for (let i = 0; i < Math.ceil(Math.random() * 100) + 50; i++) {
    ctx.strokeStyle = 'lime';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(stock3X, stock3Y);
    ctx.lineTo(stock3LastX, stock3LastY);
    ctx.stroke();
    stock3X = stock3LastX;
    stock3Y = stock3LastY;
    stock3LastX += Math.ceil(Math.random() * 50);
    stock3LastY = stock3Y + Math.ceil(Math.random() * 100) - 50;
    while (stock3X > stock3LastX) {
      stock3LastX += 2;
    }
  }
}
