// Copyright(c) João Martiniano. All rights reserved.
// Licensed under the MIT license.

class snowflake {
    constructor(x, y, radius, color, speed, ctx) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.ctx = ctx;

        this.opacity = Math.random();

        if (this.opacity == 0)
        {
            this.opacity = 0.2;
        }

        this.color = `rgba(255, 255, 255, ${this.opacity})`;

        this.wait = Math.floor(Math.random() * 3);
        this.countdown = this.wait;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
    }

    update(canvas) {
        if (this.y < (canvas.height + this.radius))
        {
            if (this.countdown == 0)
            {
                this.y += this.speed;
                this.countdown = this.wait;
            }
            else
            {
                --this.countdown;
            }            
        }
        else
        {
            this.x = Math.floor(Math.random() * canvas.width);
            this.y = Math.floor(Math.random() * (-canvas.height));
            this.countdown = this.wait;
        }
    }
}