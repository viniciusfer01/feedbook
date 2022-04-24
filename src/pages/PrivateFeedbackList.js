import Header from "../components/Header";

const PrivateFeedbackList = (props) => {
  const feedbacks = props.feedbacks;

  return (
    <>
      <Header />
      <div className="content">
        {feedbacks.map((feedback) => {
          return <p className="feedback">{feedback}</p>;
        })}
      </div>
    </>
  );
};
export default PrivateFeedbackList;
