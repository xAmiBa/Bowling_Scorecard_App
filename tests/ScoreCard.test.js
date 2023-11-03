const ScoreCard = require("../lib/ScoreCard");

describe("class ScoreCard", () => {
  test("test addFrame", () => {
    const scorecard = new ScoreCard();
    scorecard.addFrame(1, 6);
    expected_scorecard = {
      available: false,
      first_roll: 1,
      second_roll: 6,
      bonus: null,
      total_points: 7
    };
    expect(scorecard.scorecard.frame1).toEqual(expected_scorecard);
  });
  test("test calcularescore", () => {
    const scorecard = new ScoreCard();
    scorecard.addFrame(1, 6);
    scorecard.addFrame(3, 3);
    scorecard.addFrame(5, 4);
    expect(scorecard.calculateScore()).toBe(22);
  });
  test("test addBonus with strike", () => {
    const scorecard = new ScoreCard();
    scorecard.addFrame(1, 6);
    scorecard.addFrame(10, 0);
    scorecard.addFrame(5, 4); // double points because strike in previous frame
    expect(scorecard.calculateScore()).toBe(35);
  });
  test("test addBonus with spare", () => {
    const scorecard = new ScoreCard();
    scorecard.addFrame(1, 6);
    scorecard.addFrame(5, 5);
    scorecard.addFrame(5, 4); // double points because strike in previous frame
    expect(scorecard.calculateScore()).toBe(31);
  });
  test("test return frame name", () => {
    const scorecard = new ScoreCard();
    scorecard.addFrame(1, 6);
    expect(scorecard.returnCurrentFrameName()).toBe('frame1');
    
    scorecard.addFrame(5, 4); // double points because strike in previous frame
    expect(scorecard.returnCurrentFrameName()).toBe('frame2');
  });
});

// BUG: test doesnt work
// describe('class Scorecard - printScorecard', () => {
//     test('if table generated', () => {
//         expected_table = [
//             '┌─────────┬────────┬────────┬────────┬──────────────┐',
//             '│ FRAME   │ ROLL 1 │ ROLL 2 │ BONUS  │ TOTAL POINTS │',
//             '├─────────┼────────┼────────┼────────┼──────────────┤',
//             '│ frame1  │ 1      │ 2      │        │ 3            │',
//             '├─────────┼────────┼────────┼────────┼──────────────┤',
//             '│ frame2  │ 10     │        │ strike │ 13           │',
//             '├─────────┼────────┼────────┼────────┼──────────────┤',
//             '│ frame3  │ 4      │ 4      │        │ 29           │',
//             '├─────────┼────────┼────────┼────────┼──────────────┤',
//             '│ frame4  │        │        │        │              │',
//             '├─────────┼────────┼────────┼────────┼──────────────┤',
//             '│ frame5  │        │        │        │              │',
//             '├─────────┼────────┼────────┼────────┼──────────────┤',
//             '│ frame6  │        │        │        │              │',
//             '├─────────┼────────┼────────┼────────┼──────────────┤',
//             '│ frame7  │        │        │        │              │',
//             '├─────────┼────────┼────────┼────────┼──────────────┤',
//             '│ frame8  │        │        │        │              │',
//             '├─────────┼────────┼────────┼────────┼──────────────┤',
//             '│ frame9  │        │        │        │              │',
//             '├─────────┼────────┼────────┼────────┼──────────────┤',
//             '│ frame10 │        │        │        │              │',
//             '└─────────┴────────┴────────┴────────┴──────────────┘',
//           ].join('\n');;
//         const Scorecard = new ScoreCard();
//         Scorecard.addFrame(1, 2);
//         Scorecard.addFrame(10, 0);
//         Scorecard.addFrame(4, 4);
//         expect(Scorecard.printScorecard()).toMatch(expected_table)


    // })
// })