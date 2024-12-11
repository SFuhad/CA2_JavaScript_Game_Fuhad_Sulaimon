import UI from "../engine/ui.js";
import GraphicalUI from "../engine/graphicalUI.js";
import GameObject from "../engine/gameobject.js"
import Player from "./.player.js"
import Checkpoint from "./checkpoint.js"
class PlayerUI extends GameObject
{
    constructor(x, y)
    {
        super(x,y);
        this.ui = new UI('Lives: 3 Score: 0', 10,10);
        this.addComponent(this.ui);
       
    }
    addGameObject(gameObject, x, y)
    {
       let playerHealth = new GraphicalUI(x, y);
       this.addComponent(playerHealth);
       playerHealth.addGameObject(gameObject);
    }
    update(deltaTime)
    {
        const player = this.game.gameObjects.find((obj)=>obj instanceof Player);
        this.ui.setText("Lives: "+player.lives+ " Score: "+player.score);
    }
}

export default PlayerUI;
