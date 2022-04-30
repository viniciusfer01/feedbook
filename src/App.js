import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PrivateFeedbackList from "./pages/PrivateFeedbackList";
import PublicFeedbackList from "./pages/PublicFeedbackList";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";

function App() {
  const authContext = useContext(AuthContext);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/feedback" />
        </Route>
        <Route path={`/feedback/:${authContext.user.name}`}>
          <PrivateFeedbackList userName={authContext.user.name} />
        </Route>
        <Route path="/feedback">
          <PublicFeedbackList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
