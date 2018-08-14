/**
 * Basic example of interfacing a PS3 controller on a Raspberry Pi using NodeJS
 *
 * © 2018 Wouter De Schuyter
 * wouter.de.schuyter@gmail.com
 * https://wouterdeschuyter.be/
 */

// Libs
const joystick = require('joystick');
const raspi = require('raspi');
const gpio = require('raspi-gpio');
const pwm = require('raspi-soft-pwm');

// Init PS3 controller, 0 = /dev/input/js0
const ps3Controller = new joystick(0);

// Init Raspi board
raspi.init(() => {
  // Define digital outputs
  const ledYellow = new gpio.DigitalOutput('P1-22');
  const ledRed = new gpio.DigitalOutput('P1-24');
  const ledBlue = new gpio.DigitalOutput('P1-21');
  const ledGreen = new gpio.DigitalOutput('P1-23');

  // Define our software pwm outputs
  const pwmOutput1 = new pwm.SoftPWM('P1-19');
  const pwmOutput2 = new pwm.SoftPWM('P1-26');

  // On button press (triggers when pressed and when released)
  ps3Controller.on('button', button => {
    switch (button.number) {
      case 0: // cross
        ledBlue.write(button.value);
        break;
      case 1: // circle
        ledYellow.write(button.value);
        break;
      case 2: // triangle
        ledGreen.write(button.value);
        break;
      case 3: // square
        ledRed.write(button.value);
        break;
    }
  });

  // On axis movement
  ps3Controller.on('axis', axis => {
    // Max value in both directions
    const max = 32767;

    // Value between 0 and 1, default: 0.5
    const value = (axis.value * -1) / max / 2 + 0.5;

    switch (axis.number) {
      case 1: // left y-axis
        pwmOutput1.write(value);
        break;
      case 4: // right y-axis
        pwmOutput2.write(value);
        break;
    }
  });
});
