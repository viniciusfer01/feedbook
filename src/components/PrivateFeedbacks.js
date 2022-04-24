import "./PrivateFeedbacks.css";

const PrivateFeedbacks = (props) => {
  const feedbacks = props.feedbacks;

  return (
    <div className="feedbacks">
      {feedbacks.map((feedback) => {
        return (
          <p key={feedback.id} className="feedback">
            {feedback.content}
          </p>
        );
      })}
    </div>
  );
};
export default PrivateFeedbacks;
