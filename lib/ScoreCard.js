const IdentifyBonus = require("./IdentifyBonus");
const Table = require('cli-table');


class ScoreCard {
  constructor() {
    this.identifybonus = new IdentifyBonus();
    this.scorecard = {
      frame1: {
        available: true,
        first_roll: null,
        second_roll: null,
        bonus: null,
        total_points: null      },
      frame2: {
        available: true,
        first_roll: null,
        second_roll: null,
        bonus: null,      },
      frame3: {
        available: true,
        first_roll: null,
        second_roll: null,
        bonus: null,
        total_points: null      },
      frame4: {
        available: true,
        first_roll: null,
        second_roll: null,
        bonus: null,
        total_points: null      },
      frame5: {
        available: true,
        first_roll: null,
        second_roll: null,
        bonus: null,
        total_points: null      },
      frame6: {
        available: true,
        first_roll: null,
        second_roll: null,
        bonus: null,
        total_points: null      },
      frame7: {
        available: true,
        first_roll: null,
        second_roll: null,
        bonus: null,
        total_points: null      },
      frame8: {
        available: true,
        first_roll: null,
        second_roll: null,
        bonus: null,
        total_points: null      },
      frame9: {
        available: true,
        first_roll: null,
        second_roll: null,
        bonus: null,
        total_points: null      },
      frame10: {
        available: true,
        first_roll: null,
        second_roll: null,
        bonus: null,
        third_roll: 0,
        total_points: null     
      },
    };
    this.frame = 'frame1'
    this.next_frame = 1;
  }
  addFrame(roll1, roll2, roll3 = 0) {
    if (this.next_frame < 11) {
      this.roll1 = parseInt(roll1);
      this.roll2 = parseInt(roll2);
      this.roll3 = parseInt(roll3);
  
      // find first frame replace score values and change frame to unavailable
      this.frame = "frame" + this.next_frame;
      this.scorecard[this.frame].first_roll = roll1;
      this.scorecard[this.frame].second_roll = roll2;
      this.scorecard[this.frame].available = false;
      this.scorecard[this.frame].total_points = this.calculateScore()
  
      // if third roll is added and it's frame 10 then add value to scorecard
      if (this.roll3 != 0 && this.frame === "frame10") {
        this.scorecard[this.frame].third_roll = roll3;
      }
  
      // check for bonus
      let bonus = this.identifybonus.ifBonus(parseInt(roll1), parseInt(roll2));
      if (bonus.status === true) {
        // change bonus key in scorecard to calculate bonuses later
        this.scorecard[this.frame].bonus = bonus.type;
      }

      // increase count by one to change the frame to next one for future rolls
      this.next_frame += 1;
    }
  }
  returnCurrentFrameName() {
    return this.frame
  }
  calculateScore() {
    this.score = 0;
    // for loop through all rolls
    for (let frame_object in this.scorecard) {
      // access properties of each object
      if (this.scorecard.hasOwnProperty(frame_object)) {
          let current_frame = this.scorecard[frame_object];
          // converting values to integers
          // if value is Nan it replaces it with 0
            this.score += parseInt(current_frame.first_roll, 10) || 0;
            this.score += parseInt(current_frame.second_roll, 10) || 0;

        // if there is a third roll it is added too
        if (current_frame.third_roll !== undefined) {
          this.score += parseInt(current_frame.third_roll, 10) || 0;
        }
      }
    }
    // add any bonus scores
    this.addBonus();

    // Perfect game if all frames are strikes
    if (this.identifybonus.ifPerfectGame(this.scorecard) === true) {
      return 300;
    }
    return this.score;
  }
  addBonus() {
    // goes through scorecard and checks for strikes and spares
    // then calculates bonus score
    this.bonus = 0;
    for (let frame_object in this.scorecard) {
      let frame_number = frame_object.toString().match(/\d/g)[0];
      let next_frame = "frame" + (parseInt(frame_number, 10) + 1);

      // access properties of each object
      if (this.scorecard.hasOwnProperty(frame_object)) {
        let current_frame = this.scorecard[frame_object];

        // if bonus detected
        if (current_frame.bonus == "strike") {
          // if it's last frame no points are added from next frame as it doesn't exists
          if (!current_frame === 'frame10') {
          }
          else {
            this.bonus += parseInt(this.scorecard[next_frame].first_roll);
            this.bonus += parseInt(this.scorecard[next_frame].second_roll);
          }
          // add points from next two rolls in next frame
        } else if (current_frame.bonus == "spare") {

          // add points from next one roll in next frame
          this.bonus += parseInt(this.scorecard[next_frame].first_roll);
        } else {
        }
      }
    }
    this.score += this.bonus;
  }
  printScorecard() {
    // Create a new table instance
    const table = new Table({
    head: ['FRAME', 'ROLL 1', 'ROLL 2', 'ROLL 3', 'BONUS', 'TOTAL POINTS'],
    });

    // Add rows to the table
    for (let frame_object in this.scorecard) {
        if (this.scorecard.hasOwnProperty(frame_object)) {
          let current_frame = this.scorecard[frame_object];
          table.push([
            frame_object ? frame_object.toString() : "",  // Check if frame_object is null
            current_frame.first_roll ? current_frame.first_roll.toString() : "",  // Check if first_roll is null
            current_frame.second_roll ? current_frame.second_roll.toString() : "",  // Check if second_roll is null
            current_frame.third_roll ? current_frame.third_roll.toString() : "-",  // Check if third_roll exists
            current_frame.bonus ? current_frame.bonus.toString() : "",  // Check if bonus is null
            current_frame.total_points ? current_frame.total_points.toString() : "", // No null check needed for calculateScore result
          ]);
        }
      }
      if (this.frame === 'frame10') {
        this.calculateScore()
        table.push([
          'YOUR',
          'FINAL',
          'SCORE: ',
          '',
          '',
          this.score
        ])

      }
      return table.toString();
}
}

module.exports = ScoreCard;
