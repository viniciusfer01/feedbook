import "./Feedbacks.css";
import { initializeApp } from "firebase/app";
import { getDatabase, update, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBFJJr973yr1338iccT9CaT0RXQOl6aG50",
  authDomain: "feedbook-c5cbe.firebaseapp.com",
  databaseURL: "https://feedbook-c5cbe-default-rtdb.firebaseio.com",
  projectId: "feedbook-c5cbe",
  storageBucket: "feedbook-c5cbe.appspot.com",
  messagingSenderId: "524611669918",
  appId: "1:524611669918:web:b23092eaffdcbe1abf508f",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

const Feedbacks = (props) => {
  const feedbacks = props.feedbacks;

  const likeHandler = (id, likes) => {
    console.log("dei like!");
    update(ref(database, `feedbacks/${id}`), { likes: likes + 1 });
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
                <button
                  onClick={() => likeHandler(feedback.id, feedback.likes)}
                >
                  Curtir
                </button>
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
