const ScoreCard = require('./lib/ScoreCard');
const RaiseError = require('./lib/RaiseError');
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const scorecard = new ScoreCard();

RunApp = () => {

  rl.question("\nInput frame scores (example: 1-5) or X to exit: ", (answer) => {
    if (answer === "X") {
      rl.close();
    } else {
      try {
        // Extract scores
        let scores = answer.split("-");

        // Check for errors
        let frame_name = scorecard.returnCurrentFrameName()
        let errors = new RaiseError(frame_name, scores[0], scores[1], scores[2] ? scores[2] : 0);
        if (errors.checkForError() === true) {
          errors.generateError();
        } else {
          if (scores.length === 2) {
            scorecard.addFrame(scores[0], scores[1]);
            console.log(scorecard.printScorecard());
            RunApp();
          } else {
            scorecard.addFrame(scores[0], scores[1], scores[2]);
            console.log(scorecard.printScorecard());
            rl.close();
          }
          if (scorecard.returnCurrentFrameName() === 'frame10') {
            console.log(scorecard.printScorecard());
            console.log('It was the last frame. Game over!');
            rl.close();
          }
        }
      } catch (error) {
        console.error(error.message);
        RunApp();
      }
    }
  });
};

RunApp();

//BUG: when strike in frame10 and 3rd roll executed, program is adding two additional points.