import { render, screen } from "@testing-library/react";

import Home from "../page";

describe("Home", () => {
  it("should render the Header", () => {
    render(<Home />);

    const elem = screen.getByRole("banner");

    expect(elem).toBeInTheDocument();
  });
});
