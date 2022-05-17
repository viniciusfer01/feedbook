import "./Feedbacks.css";

const Feedbacks = (props) => {
  const feedbacks = props.feedbacks;

  if (props.isPublic) {
    return (
      <div className="feedbacks">
        {feedbacks.map((feedback) => {
          return (
            <div key={feedback.id}>
              <p className="de">De: {feedback.from}</p>
              <p className="feedback">{feedback.content}</p>
              <p>Para: {feedback.to}</p>
              <p>Likes: {feedback.likes}</p>
              <br></br>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="feedbacks">
      {feedbacks.map((feedback) => {
        return (
          <div key={feedback.id}>
            <p className="de">De: {feedback.from}</p>
            <p className="feedback">{feedback.content}</p>
            <p>Likes: {feedback.likes}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Feedbacks;
