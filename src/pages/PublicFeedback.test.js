import { render, screen } from "@testing-library/react";
import PublicFeedbackList from "./PublicFeedbackList";

describe("PublicFeedbackList", () => {
  test('renders Title "Feed Público"', () => {
    //arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        { id: "p1", from: "de", content: "feedback", to: "para", likes: 0 },
      ],
    });

    render(<PublicFeedbackList />);

    //act
    //nothing in this case

    //assert
    const titleElement = screen.getByText("Feed Público", { exact: false });
    expect(titleElement).toBeInTheDocument();
  });
});
