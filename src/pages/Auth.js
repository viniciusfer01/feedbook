import PrivateFeedbackList from "./PrivateFeedbackList";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth-context";
import Card from "../layout/Card";
const Auth = () => {
  const authContext = useContext(AuthContext);
  const [userName, setUserName] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();
    const user = { name: userName };
    authContext.login(user);
    setUserName("");
    console.log(user.name);
    console.log(authContext.user.name);
  };

  let content = <p>Loading...</p>;
  if (authContext.isAuthenticated) {
    content = <PrivateFeedbackList userName={authContext.user.name} />;
  } else {
    content = (
      <Card>
        <h1>Login:</h1>
        <form onSubmit={loginHandler}>
          <input
            type="text"
            placeholder="Usuário:"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </Card>
    );
  }
  return content;
};

export default Auth;
