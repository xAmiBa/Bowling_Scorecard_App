const IdentifyBonus = require("../lib/IdentifyBonus");

describe("class IdentifyBonus", () => {
  test("test if strike identified", () => {
    const identifybonus = new IdentifyBonus();
    expect(identifybonus.ifBonus(10, 0)).toEqual({
      status: true,
      type: "strike",
    });
  });
  test("test if spare identified", () => {
    const identifybonus = new IdentifyBonus();
    expect(identifybonus.ifBonus(4, 6)).toEqual({
      status: true,
      type: "spare",
    });
  });
  test("test if no bonus identified", () => {
    const identifybonus = new IdentifyBonus();
    expect(identifybonus.ifBonus(1, 6)).toEqual({
      status: false,
      type: null,
    });
  });
  test("test per perfect game", () => {
    const identifybonus = new IdentifyBonus();
    scorecard_object = this.scorecard = {
      frame1: {
        available: false,
        first_roll: 10,
        second_roll: 0,
        bonus: null,
      },
      frame2: {
        available: false,
        first_roll: 10,
        second_roll: 0,
        bonus: null,
      },
      frame3: {
        available: false,
        first_roll: 10,
        second_roll: 0,
        bonus: null,
      },
      frame4: {
        available: false,
        first_roll: 10,
        second_roll: 0,
        bonus: null,
      },
      frame5: {
        available: false,
        first_roll: 10,
        second_roll: 0,
        bonus: null,
      },
      frame6: {
        available: false,
        first_roll: 10,
        second_roll: 0,
        bonus: null,
      },
      frame7: {
        available: false,
        first_roll: 10,
        second_roll: 0,
        bonus: null,
      },
      frame8: {
        available: false,
        first_roll: 10,
        second_roll: 0,
        bonus: null,
      },
      frame9: {
        available: false,
        first_roll: 10,
        second_roll: 0,
        bonus: null,
      },
      frame10: {
        available: false,
        first_roll: 10,
        second_roll: 0,
        bonus: null,
        third_roll: 0,
      },
    };
    expect(identifybonus.ifPerfectGame(scorecard_object)).toEqual(true);
  });
});
