/* eslint-disable import/no-extraneous-dependencies */
import { describe, it, expect } from "vitest";
import { add } from "../code/index";

describe("Hey", () => {
  it("should calculate a + b", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("should calculate a + b", () => {
    expect(add(3, 2)).toBe(5);
  });
});
