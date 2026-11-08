import Phaser from 'phaser';
import { PALETTE, toColorNumber } from '../config/palette.js';
import { Player } from '../entities/Player.js';
import { TEST_ROOM, TILE_SIZE } from '../levels/testRoom.js';

// First playable room: floor, walls, the player and a camera that follows them.
export class TestRoomScene extends Phaser.Scene {
  constructor() {
    super('TestRoomScene');
  }

  create() {
    const roomWidth = TEST_ROOM[0].length * TILE_SIZE;
    const roomHeight = TEST_ROOM.length * TILE_SIZE;

    // Floor: one big rectangle under everything.
    this.add.rectangle(0, 0, roomWidth, roomHeight, toColorNumber(PALETTE.steel900)).setOrigin(0);

    // Walls: static (never moving) physics blocks. Walls next to each other in the same row
    // are joined into one long block, so the game draws and checks far fewer objects.
    const walls = this.physics.add.staticGroup();
    const wallColor = toColorNumber(PALETTE.steel700);
    let playerStart = { x: TILE_SIZE * 1.5, y: TILE_SIZE * 1.5 };

    TEST_ROOM.forEach((row, rowIndex) => {
      const y = rowIndex * TILE_SIZE;
      let runStart = -1;

      // The extra space at the end closes a wall run that touches the right edge.
      [...`${row} `].forEach((cell, columnIndex) => {
        if (cell === '#') {
          if (runStart === -1) runStart = columnIndex;
          return;
        }

        if (runStart !== -1) {
          const runWidth = (columnIndex - runStart) * TILE_SIZE;
          const wall = this.add
            .rectangle(runStart * TILE_SIZE, y, runWidth, TILE_SIZE, wallColor)
            .setOrigin(0);
          walls.add(wall);
          runStart = -1;
        }

        if (cell === 'P') {
          playerStart = { x: columnIndex * TILE_SIZE + TILE_SIZE / 2, y: y + TILE_SIZE / 2 };
        }
      });
    });

    this.player = new Player(this, playerStart.x, playerStart.y);
    this.physics.add.collider(this.player, walls);

    // The camera follows the player smoothly and never shows outside the room.
    this.cameras.main.setBounds(0, 0, roomWidth, roomHeight);
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
    this.cameras.main.setBackgroundColor(PALETTE.void);
  }

  update() {
    this.player.update();
  }
}
