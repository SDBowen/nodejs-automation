const robot = require('robotjs');

function clearAppScreen() {
  console.log('clearAppScreen run');

  // Clear all open menus
  robot.keyTap('w', 'alt');
  robot.keyTap('l');

  // Check for empty app screen
  const currentScreen = robot.getPixelColor(308, 84);
  const emptyScreen = '';

  while (currentScreen !== emptyScreen) {
    console.log(currentScreen);
    console.log('Waiting for empty screen...');
  }
}

module.exports = clearAppScreen;
