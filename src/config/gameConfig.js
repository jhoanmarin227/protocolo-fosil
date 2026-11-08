import Phaser from 'phaser';
import { PALETTE } from './palette.js';
import { TestRoomScene } from '../scenes/TestRoomScene.js';
import { TitleScene } from '../scenes/TitleScene.js';

// Main Phaser settings: canvas size, scaling and the list of scenes.
export const GAME_WIDTH = 960;
export const GAME_HEIGHT = 540;

export const gameConfig = {
  type: Phaser.AUTO,
  parent: 'game',
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  backgroundColor: PALETTE.void,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  // Arcade is Phaser's simple physics engine: boxes and circles that move and collide.
  physics: {
    default: 'arcade',
    arcade: {
      // Top-down view: nothing falls.
      gravity: { x: 0, y: 0 },
    },
  },
  // The first scene in the list is the one that starts.
  scene: [TitleScene, TestRoomScene],
};
