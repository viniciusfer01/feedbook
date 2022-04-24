import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PrivateFeedbackList from "./pages/PrivateFeedbackList";
import ProxPagina from "./pages/ProxPagina";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/feedback" />
        </Route>
        <Route path="/feedback">
          <PrivateFeedbackList />
        </Route>
        <Route path="/nome-da-prox-pagina">
          <ProxPagina />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
