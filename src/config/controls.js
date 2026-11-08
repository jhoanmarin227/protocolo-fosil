import Phaser from 'phaser';

const { KeyCodes } = Phaser.Input.Keyboard;

// Every key the game uses lives here, so changing a control means editing one line.
export const CONTROLS = {
  up: KeyCodes.W,
  down: KeyCodes.S,
  left: KeyCodes.A,
  right: KeyCodes.D,
  start: KeyCodes.ENTER,
};
