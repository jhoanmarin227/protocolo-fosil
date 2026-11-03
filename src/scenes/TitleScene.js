import Phaser from 'phaser';
import { PALETTE } from '../config/palette.js';

const FONT = 'monospace';

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
        fontSize: '48px',
        color: PALETTE.textPrimary,
      })
      .setOrigin(0.5);

    this.add
      .text(centerX, centerY + 30, 'Mar de la Tranquilidad, Luna', {
        fontFamily: FONT,
        fontSize: '18px',
        color: PALETTE.textMuted,
      })
      .setOrigin(0.5);

    this.add
      .text(centerX, height - 30, 'Prototipo v0.1', {
        fontFamily: FONT,
        fontSize: '14px',
        color: PALETTE.textDim,
      })
      .setOrigin(0.5);
  }
}
