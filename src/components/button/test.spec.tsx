import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  it("should render the button with the correct label", () => {
    const label = "Test button";
    render(<Button label={label} />);
    const button = screen.getByText(label);
    expect(button).toBeTruthy();
  });
});
