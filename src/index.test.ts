/* eslint-disable import/no-extraneous-dependencies */
import { expect, describe, it } from "@jest/globals";

describe("Hey", () => {
  it("should calculate a + b", () => {
    expect(add(1, 2)).toBe(3);
  });
});
