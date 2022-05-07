import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";
import Auth from "./pages/Auth";
import PublicFeedbackList from "./pages/PublicFeedbackList";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/feedback" />
        </Route>
        <Route path={`/feedback/private`}>
          <Auth />
        </Route>
        <Route path="/feedback">
          <PublicFeedbackList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
