import Header from "../components/Header";
import { useState } from "react";

const PrivateFeedbackList = (props) => {
  const feedbacks = props.feedbacks;
  const [isInputActive, setisInputActive] = useState(false);

  function botaoEnviarFeedback(){
    if(!isInputActive){
      return (
        <div className="botao">
        <button onClick={setisInputActive(true)}>Enviar Feedback</button>;
      </div>
      )
    }

    else{
      return (<>
      <input type='text' placeholder='Escreva seu feedback' />
      <button>Enviar</button>
      </>
      )
    }
  }

  return (
    <>
      <Header />
      <div className="content">
        {feedbacks.map((feedback) => {
          return <p className="feedback">{feedback}</p>;
        })}
      </div>

      {botaoEnviarFeedback()}
    </>
  );
};
export default PrivateFeedbackList;
