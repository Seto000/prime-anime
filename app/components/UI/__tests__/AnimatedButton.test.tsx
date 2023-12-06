import { render, screen, fireEvent } from "@testing-library/react";
import { AnimatedButton } from "../AnimatedButton";

describe("AnimatedButton", () => {
  it("should render AnimatedButton without crashing", () => {
    render(
      <AnimatedButton>
        <svg />
      </AnimatedButton>
    );

    const elem = screen.getByRole("button");

    expect(elem).toBeInTheDocument();
  });

  it("checks hover and tap events on AnimatedButton", () => {
    render(
      <AnimatedButton>
        <svg />
      </AnimatedButton>
    );

    const elem = screen.getByRole("button");

    fireEvent.mouseOver(elem);
    fireEvent.mouseOut(elem);

    fireEvent.mouseDown(elem);
    fireEvent.mouseUp(elem);
  });
});
