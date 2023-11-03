- each game 10 frames
- 10 pins
- 1-2 rolls per frame

### Class Scorecard()

- claculateScore()
- addFrame(pin_num1, pin_num2)

This class will do the action and contain JSON with scorecard
Additional frame with false until enabled.

### Class IdentifyBonus()

This class will recognise if scorecards are normal rolls or rolls with bonus and return True or False and name of bonus (strike or spare)

### Generate errors class or method? Class and pass 4 args, roll1, roll2, roll3 and next_frame
### Exceptions to include:

- both rolls must be less than 10
- if frame, roll1 = 10, other frame must be 0
- if any roll is more than 10
- if 10th frame is strike or spare, 3rd roll must be present!
