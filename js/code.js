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

}