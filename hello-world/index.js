const { Led, Board } = require('johnny-five');
const board = new Board();

board.on('ready', onReady);

function onReady() {
  // if no pin is specified as an argument it will fall back to the default
  // pin which is the on-board LED
  const led = new Led();

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  board.repl.inject({
    led: led
  });

  led.blink();
  // run led.stop() in the REPL for the LED to stop blinking
}
