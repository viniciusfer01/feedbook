import { render, screen } from "@testing-library/react";
import PublicFeedbackList from "./PublicFeedbackList";

test('renders Title "Feed Público"', () => {
  //arrange
  render(<PublicFeedbackList />);

  //act
  //nothing in this case

  //assert
  const titleElement = screen.getByText("Feed Público", { exact: false });
  expect(titleElement).toBeInTheDocument();
});
