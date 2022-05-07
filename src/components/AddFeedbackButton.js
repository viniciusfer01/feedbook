import { useState, useContext } from "react";

import { AuthContext } from "../context/auth-context";

const AddFeedbackButton = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [wasInputTouched, setWasInputTouched] = useState(false);
  const [wasToTouched, setWasToTouched] = useState(false);
  const [isInputActive, setisInputActive] = useState(false);
  const isInputValid = inputValue.length > 0 && wasInputTouched;
  const isToValid = toValue.length > 0 && wasToTouched;
  const isFormValid = isInputValid && isToValid;
  const authContext = useContext(AuthContext);

  const changeInputState = () => {
    setisInputActive(!isInputActive);
  };

  const handleNewFeedback = () => {
    if (isFormValid) {
      props.addFeedback({
        from: authContext.user.name,
        content: inputValue,
        to: toValue,
      });
      setInputValue("");
      setToValue("");
      changeInputState();
    }
  };

  if (isInputActive) {
    return (
      <>
        <input
          value={inputValue}
          onChange={(e) => {
            setWasInputTouched(true);
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Escreva seu feedback"
        />
        <input
          value={toValue}
          onChange={(e) => {
            setWasToTouched(true);
            setToValue(e.target.value);
          }}
          type="text"
          placeholder="Para:"
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
