const { Led, Board, Button } = require('johnny-five');
const express = require('express');
const got = require('got');
const board = new Board();
const app = express();

app.get('*', (req, res) => {
  led.on();
  // turn off LED after 1 second
  setTimeout(() => led.off(), 1000);
  res.send('Hello!');
});

board.on('ready', onReady);

let button;
let led;
function onReady() {
  button = new Button(5);
  led = new Led(6);
  button.on('press', () => {
    got
      .post('https://requestb.in/1fu4s0y1')
      .then(() => {
        console.log('Made request');
      })
      .catch(err => {
        console.error(err);
      });
  });

  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  board.repl.inject({
    led: led
  });
}
