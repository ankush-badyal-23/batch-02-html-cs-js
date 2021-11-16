namespace ingenuity {
    export class Point {
        constructor(public x: number, public y: number) { }
        public set(...args: number[]) {
            if (args.length == 1) {
                this.x = args[0];
                this.y = args[0];
            } else {
                this.x = args[0];
                this.y = args[1];
            }
        }
        public toString() {
            return `(${this.x}, ${this.y})`;
        }
        public getDistance(p: Point) {
            return Math.sqrt(Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2));
        }
    }
}