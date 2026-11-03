// Every color in the game lives here. Use these names instead of writing hex codes in other files.
export const PALETTE = {
  // Darkness and background
  void: '#050608',
  shadow: '#0d1117',

  // Metal of the base: walls, floors and doors
  steel900: '#1a2028',
  steel700: '#2e3742',
  steel500: '#56616e',
  steel300: '#8a96a3',

  // Text
  textPrimary: '#d9e4dc',
  textMuted: '#7f8c85',
  textDim: '#4a5650',

  // Light sources
  flashlight: '#ffe9b0',
  terminal: '#4fd1c5',

  // Danger
  alarm: '#c1272d',
  blood: '#6b0f14',

  // Biodome
  jungle: '#3f7d3a',
  jungleDeep: '#1f3d1d',

  // Access cards by rank
  cardGreen: '#3ecf5a',
  cardYellow: '#f2c230',
  cardRed: '#e0413a',
  cardBlack: '#1c1c1c',
};

// Phaser shapes need colors as numbers (0xRRGGBB) instead of '#RRGGBB' strings.
export function toColorNumber(hex) {
  return Number.parseInt(hex.slice(1), 16);
}
