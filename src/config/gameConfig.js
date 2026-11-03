import Phaser from 'phaser';
import { PALETTE } from './palette.js';
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
  scene: [TitleScene],
};
