import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin/Admin";
import NewAdmin from "./components/Admin/NewAdmin/NewAdmin";
import NewMenu from "./components/Admin/NewMenu/NewMenu";
import NewMenuFrom from "./components/Admin/NewMenu/NewMenuForm";
import NewRestaurant from "./components/Admin/NewRestaurant/NewRestaurant";
import DisplayMenus from "./components/Home/DisplayMenus/DisplayMenus";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Registration />
        </Route>
        <Route exact path="/newRestaurant">
          <NewRestaurant />
        </Route>
        <Route exact path="/newMenu">
          <NewMenu />
        </Route>
        <Route exact path="/newAdmin">
          <NewAdmin />
        </Route>
        <Route exact path="/newMenuForm/:restaurantName">
          <NewMenuFrom />
        </Route>
        <Route exact path="/displayMenus/:restaurantName">
          <DisplayMenus />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
