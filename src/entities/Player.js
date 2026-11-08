import Phaser from 'phaser';
import { CONTROLS } from '../config/controls.js';
import { PALETTE, toColorNumber } from '../config/palette.js';
import { PLAYER } from '../config/playerConfig.js';

// The player: a circle with a physics body that moves with WASD.
export class Player extends Phaser.GameObjects.Arc {
  constructor(scene, x, y) {
    super(scene, x, y, PLAYER.radius, 0, 360, false, toColorNumber(PALETTE.textPrimary));

    // Show the player in the scene and give it a physics body.
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setCircle(PLAYER.radius);

    // Read the movement keys once and keep them.
    this.keys = scene.input.keyboard.addKeys({
      up: CONTROLS.up,
      down: CONTROLS.down,
      left: CONTROLS.left,
      right: CONTROLS.right,
    });

    // Reused every frame to avoid creating a new vector 60 times per second.
    this.direction = new Phaser.Math.Vector2();
  }

  // Called by the scene on every frame.
  update() {
    const { up, down, left, right } = this.keys;

    // -1, 0 or 1 on each axis, depending on which keys are held.
    this.direction.set(
      Number(right.isDown) - Number(left.isDown),
      Number(down.isDown) - Number(up.isDown),
    );

    // Without this, moving diagonally would be about 41% faster than moving straight.
    this.direction.normalize();

    this.body.setVelocity(this.direction.x * PLAYER.walkSpeed, this.direction.y * PLAYER.walkSpeed);
  }
}
