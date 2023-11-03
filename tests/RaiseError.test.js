const RaiseError = require("../lib/RaiseError");

describe("class RaiseError - checkForError", () => {
  test("checks if rolls are more than 10", () => {
    let raiseerror = new RaiseError("frame3", 4, 4);
    expect(raiseerror.checkForError()).toBe(false);

    raiseerror = new RaiseError("frame3", 0, 0);
    expect(raiseerror.checkForError()).toBe(false);

    raiseerror = new RaiseError("frame3", 9, 7);
    expect(raiseerror.checkForError()).toBe(true);
  });
  test("checks if when strike roll2 is 0", () => {
    let raiseerror = new RaiseError("frame3", 4, 4);
    expect(raiseerror.checkForError()).toBe(false);


    raiseerror = new RaiseError("frame3", 10, 7);
    expect(raiseerror.checkForError()).toBe(true);
  });
  test("checks if roll is more than 10", () => {
    raiseerror = new RaiseError("frame3", 1, 17);
    expect(raiseerror.checkForError()).toBe(true);
  });
  test("checks if 3rd roll present when 10th frame is strike", () => {
    raiseerror = new RaiseError("frame10", 0, 10);
    expect(raiseerror.checkForError()).toBe(true);

    raiseerror = new RaiseError("frame10", 5, 5, 8);
    expect(raiseerror.checkForError()).toBe(false);

    raiseerror = new RaiseError("frame10", 5, 5);
    expect(raiseerror.checkForError()).toBe(true);

  });
});

describe("class RaiseError - gerenateError", () => {
    test("error raised if total pins are more than 10", () => {
        const generateErrorWrapper = () => {
            const raiseerror = new RaiseError("frame3", 9, 4);
            raiseerror.generateError();
          };
      expect(generateErrorWrapper).toThrow(
        "Error: Sum of pins must be less than 10!"
        );
    });
    test("error raised if strike rules broken", () => {
        const generateErrorWrapper = () => {
            const raiseerror = new RaiseError("frame3", 10, 1);
            raiseerror.generateError();
          };
      expect(generateErrorWrapper).toThrow(
        "Error: First roll was a strike! Second roll should be 0."
        );
    });
    test("error raised if 3rd roll absent when neccessary", () => {
        const generateErrorWrapper = () => {
            const raiseerror = new RaiseError("frame10", 10, 0);
            raiseerror.generateError();
          };
      expect(generateErrorWrapper).toThrow(
        "Error: You had strike or spare in 10th frame, please roll 3rd time!"
        );
    });
});