import "./Feedbacks.css";

const Feedbacks = (props) => {
  const feedbacks = props.feedbacks;

  const likeHandler = (id) => {
    console.log("dei like!");
    fetch(
      `https://feedbook-c5cbe-default-rtdb.firebaseio.com/feedbacks/${id}/likes.json`,
      { method: "UPDATE" }
    );
  };

  if (props.isPublic) {
    return (
      <div className="feedbacks">
        {feedbacks.map((feedback) => {
          return (
            <div key={feedback.id}>
              <p className="de">De: {feedback.from}</p>
              <p className="feedback">{feedback.content}</p>
              <p>Para: {feedback.to}</p>
              <p>
                Likes: {feedback.likes}{" "}
                <button onClick={() => likeHandler(feedback.id)}>Curtir</button>
              </p>
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
          </div>
        );
      })}
    </div>
  );
};
export default Feedbacks;
