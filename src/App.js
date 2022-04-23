import "./App.css";

const FEEDBACK = ['bom trabalho', 'hoje você trabalhou muito bem!', 'obrigado por não ter comido meu bolinho (hoje)']

function App() {
  return (
    <div className="App">
      <h1>FeedBook</h1>
      <img src="18625.png" alt="House" width="56" height="60"></img>
      <div className="content">
      {FEEDBACK.map((feedback) => {
        return <p className="feedback">{feedback}</p>
      })}
      </div>
    </div>
  );
}

export default App;
