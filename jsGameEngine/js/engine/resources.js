// Create an Images object to hold the Image instances for the player and the enemy.
const Images = {
  player: new Image(), // The Image instance for the player.
  enemy: new Image(),
  collectible: new Image(),// The Image instance for the enemy.
  projectile1: new Image(),
};

const RunImages = 
        [
            new Image(), // The Image instance for the player.
            new Image(),
            new Image(),// The Image instance for the enemy.
            new Image(),
        ];

// Create an AudioFiles object to hold the file paths of the audio resources.
const AudioFiles = {
  jump: './resources/audio/jump.mp3', // The file path of the jump sound.
  collect: './resources/audio/collect.mp3', // The file path of the collect sound.
  // Add more audio file paths as needed
};

// Set the source of the player image.
Images.player.src = './resources/images/player/player.png'; // Update the image path

// Set the source of the enemy image.
Images.enemy.src = './resources/images/enemy/enemy.png'; // Update the image path
Images.collectible.src = "./resources/images/collectible/star.png";
Images.projectile1.src = "./resources/images/player/Snowball.png";

RunImages[0].src = "./resources/images/player/Run1.png";
RunImages[1].src = "./resources/images/player/Run2.png";
RunImages[2].src = "./resources/images/player/Run3.png";
RunImages[3].src = "./resources/images/player/Run4.png";


// Export the Images and AudioFiles objects so they can be imported and used in other modules.
export { Images, AudioFiles, RunImages };
