import { render } from "@testing-library/react";
import Header from "./Header";

test('renders app name "feedbook" correctly', () => {
  //arrange
  render(<Header />);

  //act
  //nothing in this case

  //assert
  const headerElement = screen.getByText("feedbook", { exact: false });
  expect(headerElement).toBeInTheDocument();
});
