import { useState } from "react";

import AddFeedbackButton from "../components/AddFeedbackButton";
import PrivateFeedbacks from "../components/PrivateFeedbacks";

const PrivateFeedbackList = (props) => {
  const [feedbacks, setFeedbacks] = useState([
    { id: "1", from: "elisa", to: "viniboy", content: "bom trabalho" },
    {
      id: "2",
      from: "gabi",
      to: "viniboy",
      content: "hoje você trabalhou muito bem!",
    },
    {
      id: "3",
      from: "paulo",
      to: "viniboy",
      content: "obrigado por não ter comido meu bolinho (hoje)",
    },
  ]);

  const addNewFeedbackHandler = (newFeedback) => {
    const newFeedbackItem = {
      ...newFeedback,
      id: Math.random().toString(),
      to: "unknown",
      from: "unknown",
    };
    setFeedbacks([...feedbacks, newFeedbackItem]);
  };

  return (
    <div className="content">
      <PrivateFeedbacks feedbacks={feedbacks} />
      <AddFeedbackButton addFeedback={addNewFeedbackHandler} />
    </div>
  );
};
export default PrivateFeedbackList;
