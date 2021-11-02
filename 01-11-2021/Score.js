export class Score{
    constructor(ctx, options) {
        this.ctx = ctx;
        this.options = options;
        this.score = 0;
    }

    update(value) {
        this.score += value;
    }
    draw() {
        this.ctx.font = '30pt Arial';
        this.ctx.fillStyle = this.options.fill;
        this.ctx.textAlign = this.options.align;
        this.ctx.textBaseline = this.options.baseline;
        this.ctx.fillText(`Score: ${this.score}`, this.options.x, this.options.y);
    }
}