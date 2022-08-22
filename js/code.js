// Copyright(c) João Martiniano. All rights reserved.
// Licensed under the MIT license.

let canvas;
let ctx;
let snowFlakes = [];

window.onload = init;

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    for (i = 1; i <= 800; ++i)
    {
        snowFlakes.push(new snowflake(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * (-canvas.height)), Math.floor(Math.random() * 2) + 2, "#fff", 1, ctx))
    }

    window.requestAnimationFrame(scriptLoop);
}

function scriptLoop() {
    update();
    draw();

    window.requestAnimationFrame(scriptLoop);
}

function update() {
    snowFlakes.forEach(function(item){
        item.update(canvas)
    })
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowFlakes.forEach(function(item){
        item.draw()
    })

    drawText();
}

function drawText() {
    let textWidth;
    let x;
    let text1 = "Snowflakes";
    let text2 = "on";
    let text3 = "<canvas>";
    let text4 = "Made by João Martiniano (github.com/joaomartiniano)";

    ctx.fillStyle = "#fff";
    ctx.font = "normal normal 4rem 'Pacifico', Arial";

    textWidth = ctx.measureText(text1).width;
    x = (canvas.width / 2) - (textWidth/ 2);
    ctx.fillText(text1, x, 150);

    textWidth = ctx.measureText(text2).width;
    x = (canvas.width / 2) - (textWidth/ 2);
    ctx.fillText(text2, x, 220);

    textWidth = ctx.measureText(text3).width;
    x = (canvas.width / 2) - (textWidth/ 2);
    ctx.fillText(text3, x, 290);

    ctx.font = "normal normal 1.2rem 'Roboto', Calibri, Arial";
    textWidth = ctx.measureText(text4).width;
    x = (canvas.width / 2) - (textWidth/ 2);
    ctx.fillText(text4, x, canvas.height - 20);
}