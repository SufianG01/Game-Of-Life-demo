const { applyRules } = require("./GOL");

describe("applyRules", () => {
    it("should return 0 if a live cell has fewer than 2 live neighbors", () => {
      const cell = 1;
      const neighbors = [0, 1, 0];
      expect(applyRules(cell, neighbors)).toBe(0);
    });
    it("should return 0 if a live cell has more than 3 live neighbors", () => {
      const cell = 1;
      const neighbors = [1, 1, 1, 1];
      expect(applyRules(cell, neighbors)).toBe(0);
    });
    it("should return 1 if a live cell has 2 or 3 live neighbors", () => {
      const cell = 1;
      const neighbors = [0, 1, 1];
      expect(applyRules(cell, neighbors)).toBe(1);
    });
    it("should return 1 if a dead cell has 3 live neighbors", () => {
      const cell = 0;
      const neighbors = [1, 1, 1];
      expect(applyRules(cell, neighbors)).toBe(1);
    });
  });