import GameObject from "../engine/gameobject.js"

class HealthBar extends GameObject
{
    constructor(x, y, w, h)
    {
        super(x, y);
        this.width = w;
        this.height = h;
        this.maxValue = 1;
        this.currentValue = 1;
    }
    
    draw(ctx)
    {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'red';
        let w = (this.width-2) * (this.currentValue / this.maxValue);
        
        ctx.fillRect(this.x+1, this.y+1, w, this.height-2);
    }
    
}

export default HealthBar



