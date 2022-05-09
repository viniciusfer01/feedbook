import { useState, useContext } from "react";

import { AuthContext } from "../context/auth-context";

const AddFeedbackButton = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [isPublicValue, setIsPublicValue] = useState("");
  const [wasInputTouched, setWasInputTouched] = useState(false);
  const [wasToTouched, setWasToTouched] = useState(false);
  const [wasIsPublicValueTouched, setIsPublicValueTouched] = useState(false);
  const [isInputActive, setisInputActive] = useState(false);
  const isInputValid = inputValue.length > 0 && wasInputTouched;
  const isToValid = toValue.length > 0 && wasToTouched;
  const isIsPublicValueValid = isPublicValue.length > 0 && wasIsPublicValueTouched;
  const isFormValid = isInputValid && isToValid && isIsPublicValueValid;
  const authContext = useContext(AuthContext);

  const changeInputState = () => {
    setisInputActive(!isInputActive);
  };

  const handleNewFeedback = () => {
    if (isFormValid) {
      let isPublic = isPublicValue === "sim" ? true : false;
      props.addFeedback({
        from: authContext.user.name,
        content: inputValue,
        to: toValue,
        isPublic: isPublic
      });
      setInputValue("");
      setWasInputTouched(false);
      setToValue("");
      setWasToTouched(false);
      setIsPublicValue("")
      setIsPublicValueTouched(false);
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
        <input value={isPublicValue} onChange={e => {setIsPublicValueTouched(true); setIsPublicValue(e.target.value);
          }} type="text" placeholder="É público? (sim ou não)"></input>

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
