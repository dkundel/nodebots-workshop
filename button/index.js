const { Button, Led, Board } = require('johnny-five');
const board = new Board();

let led;
let button;

board.on('ready', () => {
  led = new Led(6);
  button = new Button(5);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  board.repl.inject({
    led: led,
    button: button
  });

  button.on('press', () => {
    led.on();
  });

  button.on('release', () => {
    led.off();
  });
});
