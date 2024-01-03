import { render, screen, fireEvent } from "@testing-library/react";

import { SearchButton } from "../SearchButton";

describe("SearchButton", () => {
  it("should have render correctly", () => {
    render(<SearchButton />);

    const elem = screen.getByRole("button");

    expect(elem).toBeInTheDocument();
  });

  it("should show dropdown when clicked", () => {
    render(<SearchButton />);

    const elem = screen.getByRole("button");

    fireEvent.click(elem);

    const dropdown = screen.getByTestId("dropdown-test");

    expect(dropdown).toBeInTheDocument();
  });
});
