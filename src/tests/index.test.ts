/* eslint-disable import/no-extraneous-dependencies */
import { expect, describe, it } from "@jest/globals";
import { add } from "../code/index";

describe("Hey", () => {
  it("should calculate a + b", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("should calculate a + b", () => {
    expect(add(3, 4)).toBe(7);
  });
});
