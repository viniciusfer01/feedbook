import { useContext, useEffect, useState } from "react";

import AddFeedbackButton from "../components/AddFeedbackButton";
import PrivateFeedbacks from "../components/PrivateFeedbacks";
import { AuthContext } from "../context/auth-context";
import Card from "../layout/Card";

const PrivateFeedbackList = () => {
  const authContext = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await fetch(
        "https://feedbook-c5cbe-default-rtdb.firebaseio.com/feedbacks.json"
      );
      const responseData = await response.json();

      console.log(authContext.user.name);

      const loadedFeedbacks = [];

      for (const key in responseData) {
        if (responseData[key].to === authContext.user.name) {
          loadedFeedbacks.push({
            id: key,
            ...responseData[key],
          });
        }
      }

      setFeedbacks(loadedFeedbacks);
    };

    setIsLoading(true);
    fetchFeedbacks();
    setIsLoading(false);
  }, [authContext]);

  const addNewFeedbackHandler = (newFeedback) => {
    const newFeedbackItem = {
      ...newFeedback,
      id: Math.random().toString(),
      to: newFeedback.to,
      from: newFeedback.from,
      isPublic: true,
    };
    fetch("https://feedbook-c5cbe-default-rtdb.firebaseio.com/feedbacks.json", {
      method: "POST",
      body: JSON.stringify(newFeedbackItem),
    });
  };

  if (isLoading) {
    return (
      <Card>
        <p>Loading...</p>;
      </Card>
    );
  }
  return (
    <Card>
      <h2>Feed Privado de {authContext.user.name}</h2>
      <PrivateFeedbacks feedbacks={feedbacks} />
      <AddFeedbackButton addFeedback={addNewFeedbackHandler} />
    </Card>
  );
};
export default PrivateFeedbackList;
