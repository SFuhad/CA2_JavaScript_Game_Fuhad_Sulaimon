import GameObject from "../engine/gameobject.js";
import Renderer from "../engine/renderer.js";
import Physics from "../engine/physics.js";
import {Images} from "../engine/resources.js"

class Checkpoint extends GameObject
{
    constructor(x, y, width, height, color='blue')
    {
        super(x,y);
        this.addComponent(new Renderer(color, width, height));
        this.addComponent(new Physics({x:0, y:0},{x:0, y:0},{x:0, y:0}));
    }
}

export default Checkpoint;