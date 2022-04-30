import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PrivateFeedbackList from "./pages/PrivateFeedbackList";
import PublicFeedbackList from "./pages/PublicFeedbackList";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/feedback" />
        </Route>
        <Route path="/feedback/:userId">
          <PrivateFeedbackList />
        </Route>
        <Route path="/feedback">
          <PublicFeedbackList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
