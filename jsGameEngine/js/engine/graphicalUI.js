// Import the Component parent class.
import Component from './component.js';

// Define the UI class which extends the Component parent class.
class GraphicalUI extends Component {
  // The constructor of the UI class.
  constructor(x, y) {
    super(); // Call the constructor of the parent class.

    // Assign the given parameters to instance variables.
    this.x = x; // The x-coordinate at which to start drawing the text.
    this.y = y; // The y-coordinate at which to start drawing the text.
    this.gameObjects = [];
  }
  
  addGameObject(gameObject)
  {
      gameObject.game = this.gameObject.game;
      this.gameObjects.push(gameObject);
  }
  // The draw method of the UI class.
  draw(ctx) {
    // Get the camera from the game associated with the current object.
    const camera = this.gameObject.game.camera;
   
    for(let obj of this.gameObjects)
    {
        ctx.save();
        ctx.translate(camera.x, camera.y);
        obj.draw(ctx);
        ctx.restore();
    }
    
  }

}

// Export the UI class so it can be used in other files.
export default GraphicalUI;