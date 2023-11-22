import { render, screen } from "@testing-library/react";

import { LinkWithLabel } from "../LinkWithLabel";

describe("LinkWithLabel", () => {
  it("should render correctly", () => {
    render(
      <LinkWithLabel text="Test" href="/">
        Test
      </LinkWithLabel>
    );

    const elem = screen.getByRole("link");

    expect(elem).toBeInTheDocument();
  });

  it("shoudl have correct text", () => {
    render(
      <LinkWithLabel text="Test" href="/">
        Test
      </LinkWithLabel>
    );

    const elem = screen.getByText("Test");

    expect(elem).toBeInTheDocument();
  });
});
