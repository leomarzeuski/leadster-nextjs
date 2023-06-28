import React from "react";
import Button from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("should render the button with the correct label", () => {
    const label = "Test button";
    render(<Button label={label} />);

    const button = screen.getByText(label);
    expect(button).toBeTruthy();
  });
});
