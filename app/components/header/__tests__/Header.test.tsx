import { render, screen } from "@testing-library/react";

import { Header } from "../Header";
import { HeaderChildren } from "../HeaderChildren";

it("should render correctly", () => {
  render(
    <Header>
      <HeaderChildren />
    </Header>
  );

  const elem = screen.getByRole("banner");

  expect(elem).toBeInTheDocument();
});
