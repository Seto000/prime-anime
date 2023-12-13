import { render, screen, fireEvent } from "@testing-library/react";
import { PlayButton } from "../PlayButton";

describe("PlayButton", () => {
  it("should render correctly", () => {
    render(<PlayButton href="/" />);

    const elem = screen.getByRole("link");

    expect(elem).toBeInTheDocument();
  });

  it("checks hover and tap events on PlayButton", () => {
    render(<PlayButton href="/" />);

    const elem = screen.getByRole("link");

    fireEvent.mouseOver(elem);
    fireEvent.mouseOut(elem);

    fireEvent.mouseDown(elem);
    fireEvent.mouseUp(elem);
  });
});
