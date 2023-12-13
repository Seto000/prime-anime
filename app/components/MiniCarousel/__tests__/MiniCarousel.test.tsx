import { render, screen } from "@testing-library/react";
import MiniCarousel from "../MiniCarousel";
import "@/__mocks__/matchMedia";

describe("MiniCarousel", () => {
  it("should render correctly", () => {
    render(
      <MiniCarousel navAnimation={0} sectionTitle="Test Title" animate={true} />
    );

    const elem = screen.getByText("Test Title");

    expect(elem).toBeInTheDocument();
  });

  it("should render BigCard when animate prop is true", () => {
    render(
      <MiniCarousel navAnimation={0} sectionTitle="Test Title" animate={true} />
    );

    const elems = screen.getAllByTestId("big-card");

    elems.forEach((elem) => {
      expect(elem).toBeInTheDocument();
    });
  });

  it("should render SmallCard when animate prop is false", () => {
    render(
      <MiniCarousel navAnimation={0} sectionTitle="Test Title" animate={false} />
    );

    const elems = screen.getAllByTestId("small-card");

    elems.forEach((elem) => {
      expect(elem).toBeInTheDocument();
    });
  });
});
