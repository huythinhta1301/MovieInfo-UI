import MainPage from "./Pages/MainPage";
import "./assets/styles/responsive.css";
import "./assets/styles/main.css";
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Signup1 from "./Pages/Auth/Signup";
import ActorInfo from "./Pages/Actor/ActorInfo";
import IndexAuth from "./Pages/Auth/AuthenticationPage";
import IndexPage from "./Pages/IndexPage";
function App() {
  return (
    <Switch>
      <Route path="/login" exact component={IndexAuth} />
      {/* <Route path="/signup" exact component={Signup1} /> */}
      <MainPage>
        <Route path="/dashboard" component={IndexPage} />
        <Route path="/actor" component={ActorInfo} />
      </MainPage>
    </Switch>
  );
}

export default App;
