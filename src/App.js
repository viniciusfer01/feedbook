import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import PrivateFeedbackList from "./pages/PrivateFeedbackList";
import ProxPagina from "./pages/ProxPagina";

const FEEDBACK = [
  "bom trabalho",
  "hoje você trabalhou muito bem!",
  "obrigado por não ter comido meu bolinho (hoje)",
];

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/feedback" />
        </Route>
        <Route path="/feedback">
          <PrivateFeedbackList feedbacks={FEEDBACK} />
        </Route>
        <Route path="/nome-da-prox-pagina">
          <ProxPagina />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
