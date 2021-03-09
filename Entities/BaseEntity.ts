export class Entity {
    private width?: number;
    private height?: number;
    private x?: number;
    private y?: number;
    private xVelocity?: number;
    private yVelocity?: number;
    public constructor(w: number, h: number, x: number, y: number) {
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;


    };
}