import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

test('renders app name "feedbook" correctly', () => {
  //arrange
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  //act
  //nothing in this case

  //assert
  const headerElement = screen.getByText("feedbook", { exact: false });
  expect(headerElement).toBeInTheDocument();
});
