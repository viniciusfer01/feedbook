import "./App.css";

const FEEDBACK = ['bom trabalho', 'hoje você trabalhou muito bem!', 'obrigado por não ter comido meu bolinho (hoje)']

function App() {
  return (
    <div className="App">
      <h1>Feedbook!</h1>
      <div className="content">
      {FEEDBACK.map((feedback) => {
        return <p className="feedback">{feedback}</p>
      })}
      </div>
    </div>
  );
}

export default App;
