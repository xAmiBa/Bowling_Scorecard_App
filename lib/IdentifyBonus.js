class IdentifyBonus {
  ifBonus(roll1, roll2) {
    this.roll1 = roll1;
    this.roll2 = roll2;

    if (this.roll1 === 10 || this.roll2 === 10) {
      return {
        status: true,
        type: "strike",
      };
    } else if (this.roll1 + this.roll2 === 10) {
      return {
        status: true,
        type: "spare",
      };
    } else {
      return {
        status: false,
        type: null,
      };
    }
  }
  ifPerfectGame(scorecard_object) {
    let strike_count = 0;
    for (let frame in scorecard_object) {
      if (scorecard_object.hasOwnProperty(frame)) {
        let current_frame = scorecard_object[frame];
        if (current_frame.first_roll === 10) {
          strike_count += 1;
        }
      }
    }
    if (strike_count === 10) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = IdentifyBonus;
