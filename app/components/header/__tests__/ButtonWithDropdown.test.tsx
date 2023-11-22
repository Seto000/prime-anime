import { render, screen } from "@testing-library/react";

import { ButtonWithDropdown } from "../ButtonWithDropdown";

it("should have correct text", () => {
  render(<ButtonWithDropdown text="Test Text" />);

  const elem = screen.getByText("Test Text")

  expect(elem).toBeInTheDocument()
});
