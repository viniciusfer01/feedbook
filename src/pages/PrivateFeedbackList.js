import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AddFeedbackButton from "../components/AddFeedbackButton";
import PrivateFeedbacks from "../components/PrivateFeedbacks";

const PrivateFeedbackList = (props) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await fetch(
        "https://feedbook-c5cbe-default-rtdb.firebaseio.com/feedbacks.json"
      );
      const responseData = await response.json();

      const loadedFeedbacks = [];

      for (const key in responseData) {
        if (responseData[key].to === userId) {
          loadedFeedbacks.push({
            id: key,
            ...responseData[key],
          });
        }
      }

      setFeedbacks(loadedFeedbacks);
    };

    fetchFeedbacks();
  }, [userId]);

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
      <h2>Feed Privado de {userId}</h2>
      <PrivateFeedbacks feedbacks={feedbacks} />
      <AddFeedbackButton addFeedback={addNewFeedbackHandler} />
    </div>
  );
};
export default PrivateFeedbackList;
