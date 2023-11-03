class RaiseError {
  constructor(frame_name, roll1, roll2, roll3 = null) {
    // takes 3/4 arguments: roll scores and frame number
    this.frame_name = frame_name;
    this.roll1 = parseInt(roll1);
    this.roll2 = parseInt(roll2);
    this.roll3 = roll3;
  }
  checkForError() {
    // checking if any error occur: returns True or False
    // if strike or spare occurs in frame10 and 3rd roll is not inputted
    if ((this.frame_name === 'frame10' && this.roll1 === 10 && this.roll3 === null) ||
    (this.frame_name === 'frame10' && this.roll2 === 10 && this.roll3 === null) ||
    (this.frame_name === 'frame10' && this.roll1 + this.roll2 === 10 && this.roll3 === null)) {
      return true;
    }
    // if 2 rolls are less than 10
    // if any single roll is more than 10
    else if (this.roll1 + this.roll2 > 10) {
        return true;
    }
    // if first roll is 10, second must be 0
    else if (this.roll1 === 10 && this.roll2 > 0) {
        return true;
    }
    else if (
      !Number.isInteger(this.roll1) ||
      !Number.isInteger(this.roll2)
    ) {

      return true
    }
    else {
        return false;
    }
}
generateError() {
    // returns error messages
    if ((this.frame_name === 'frame10' && this.roll1 === 10 && this.roll3 === null) ||
    (this.frame_name === 'frame10' && this.roll2 === 10 && this.roll3 === null) ||
    (this.frame_name === 'frame10' && this.roll1 + this.roll2 === 10 && this.roll3 === null)) {
        throw new Error("Error: You had strike or spare in 10th frame, please roll 3rd time!");
    }
    // if first roll is 10, second must be 0 (do not raise that error for frame10)
    else if (this.roll1 === 10 && this.roll2 > 0) {
        throw new Error("Error: First roll was a strike! Second roll should be 0.");
    }
    else if (this.roll1 + this.roll2 > 10) {
      throw new Error("Error: Sum of pins must be less than 10!");
    }
    else if (
      !Number.isInteger(this.roll1) ||
      !Number.isInteger(this.roll2)
    ) {
      throw new Error("Error: Your input should be a number!");
    }
  }
}

module.exports = RaiseError;
