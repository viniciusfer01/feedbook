import { useEffect, useState } from "react";

import Feedbacks from "../components/Feedbacks";

const PublicFeedbackList = (props) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await fetch(
        "https://feedbook-c5cbe-default-rtdb.firebaseio.com/feedbacks.json"
      );
      const responseData = await response.json();

      const loadedFeedbacks = [];

      for (const key in responseData) {
        if (responseData[key].isPublic) {
          loadedFeedbacks.push({
            id: key,
            ...responseData[key],
          });
        }
      }

      setFeedbacks(loadedFeedbacks);
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="content">
      <h2>Feed Público</h2>
      <Feedbacks feedbacks={feedbacks} isPublic={true} />
    </div>
  );
};
export default PublicFeedbackList;
