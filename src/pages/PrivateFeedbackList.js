import { useEffect, useState } from "react";

import AddFeedbackButton from "../components/AddFeedbackButton";
import PrivateFeedbacks from "../components/PrivateFeedbacks";

const PrivateFeedbackList = (props) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await fetch(
        "https://feedbook-c5cbe-default-rtdb.firebaseio.com/feedbacks.json"
      );
      const responseData = await response.json();

      const loadedFeedbacks = [];

      for (const key in responseData) {
        if (responseData[key].to === props.userName) {
          loadedFeedbacks.push({
            id: key,
            ...responseData[key],
          });
        }
      }

      setFeedbacks(loadedFeedbacks);
    };

    fetchFeedbacks();
  }, [props.userName]);

  const addNewFeedbackHandler = (newFeedback) => {
    const newFeedbackItem = {
      ...newFeedback,
      id: Math.random().toString(),
      to: "unknown",
      from: "unknown",
      isPublic: true,
    };
    fetch("https://feedbook-c5cbe-default-rtdb.firebaseio.com/feedbacks.json", {
      method: "POST",
      body: JSON.stringify(newFeedbackItem),
    });
  };

  return (
    <div className="content">
      <h2>Feed Privado de {props.userName}</h2>
      <PrivateFeedbacks feedbacks={feedbacks} />
      <AddFeedbackButton addFeedback={addNewFeedbackHandler} />
    </div>
  );
};
export default PrivateFeedbackList;
