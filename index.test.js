const canCompleteCircuit = require("./index");

describe("canCompleteCircuit", () => {
  it("can succeed", () => {
    const A = [1, 2];
    const B = [2, 1];

    expect(canCompleteCircuit(A, B)).toEqual(1);
  });

  it("can fail", () => {
    const A = [1, 2];
    const B = [20, 10];

    expect(canCompleteCircuit(A, B)).toEqual(-1);
  });
});
