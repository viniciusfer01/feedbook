import { useState } from "react";

const AddFeedbackButton = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputActive, setisInputActive] = useState(false);

  const changeInputState = () => {
    setisInputActive(!isInputActive);
  };

  const handleNewFeedback = () => {
    if (inputValue.length > 0) {
      props.addFeedback({ content: inputValue });
      setInputValue("");
      changeInputState();
    }
  };

  if (isInputActive) {
    return (
      <>
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Escreva seu feedback"
        />
        <button onClick={handleNewFeedback}>Enviar</button>
      </>
    );
  } else {
    return (
      <div className="botao">
        <button className="toggleFeedback" onClick={changeInputState}>
          Enviar Feedback
        </button>
      </div>
    );
  }
};

export default AddFeedbackButton;
