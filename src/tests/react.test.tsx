import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "../code/Button";

describe("Button component", () => {
  it("should render with the correct label", () => {
    const buttonName = "Click me";
    const { getByText } = render(
      <Button label={buttonName} onClick={() => {}} />,
    );
    expect(getByText(buttonName)).toBeTruthy();
  });

  it("should call the onClick handler when clicked", () => {
    const buttonName = "Click me";
    const onClickMock = vi.fn();
    const { getByText } = render(
      <Button label={buttonName} onClick={onClickMock} />,
    );
    fireEvent.click(getByText(buttonName));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
