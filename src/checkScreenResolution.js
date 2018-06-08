const robot = require('robotjs');

function checkScreenResolution() {
  const screenResolution = robot.getScreenSize();
  const requiredScreenResolution = { width: 1920, height: 1080 };

  if (
    screenResolution.width === requiredScreenResolution.width &&
    screenResolution.length === requiredScreenResolution.length
  ) {
    console.log('Screen check is OK!');
  } else {
    console.log('Screen resolution must be 1920x1080');
  }
}

module.exports = checkScreenResolution;
