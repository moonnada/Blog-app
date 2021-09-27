import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost";
import { useContext } from "react";
import { Context } from "./context/Context";
import Contact from "./pages/contact/Contact";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar/>
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/register"> {user ? <Home/> : <Register />} </Route>
        <Route path="/login"> {user? <Home/> : <Login />} </Route>
        <Route path="/contact"> {user? <Contact /> : <Login />}</Route>
        <Route path="/write"> {user? <Write /> : <Register/> } </Route>
        <Route path="/setting"> {user? <Setting /> : <Register />} </Route>
        <Route path="/post/:postId"><SinglePost /></Route>
      </Switch>
    </Router>
  );
}

export default App;
