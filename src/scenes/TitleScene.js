import Phaser from 'phaser';
import { CONTROLS } from '../config/controls.js';
import { PALETTE } from '../config/palette.js';

const FONT = 'monospace';

// The canvas is scaled up on big screens; drawing text at 2x keeps it sharp.
const TEXT_RESOLUTION = 2;

// First screen of the game: shows the title while the real levels are built.
export class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene');
  }

  create() {
    const { width, height } = this.scale;
    const centerX = width / 2;
    const centerY = height / 2;

    this.add
      .text(centerX, centerY - 20, 'PROTOCOLO FÓSIL', {
        fontFamily: FONT,
        resolution: TEXT_RESOLUTION,
        fontSize: '48px',
        color: PALETTE.textPrimary,
      })
      .setOrigin(0.5);

    this.add
      .text(centerX, centerY + 30, 'Mar de la Tranquilidad, Luna', {
        fontFamily: FONT,
        resolution: TEXT_RESOLUTION,
        fontSize: '18px',
        color: PALETTE.textMuted,
      })
      .setOrigin(0.5);

    this.add
      .text(centerX, centerY + 110, 'Presiona ENTER para empezar', {
        fontFamily: FONT,
        resolution: TEXT_RESOLUTION,
        fontSize: '16px',
        color: PALETTE.textMuted,
      })
      .setOrigin(0.5);

    // Start the test room when the player presses the start key.
    this.input.keyboard.addKey(CONTROLS.start).once('down', () => {
      this.scene.start('TestRoomScene');
    });

    this.add
      .text(centerX, height - 30, 'Prototipo v0.1', {
        fontFamily: FONT,
        resolution: TEXT_RESOLUTION,
        fontSize: '14px',
        color: PALETTE.textDim,
      })
      .setOrigin(0.5);
  }
}
