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
import AddToCart from "./components/OrderComponents/AddToCart/AddToCart";
import Delivered from "./components/Processing/Delivered/Delivered";
import Delivering from "./components/Processing/Delivering/Delivering";
import Delivery from "./components/Processing/Delivery/Delivery";
import Preparing from "./components/Processing/Preparing/Preparing";
import Recieved from "./components/Processing/Recieved/Recieved";
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
        <Route exact path="/addToCart">
          <AddToCart />
        </Route>
        <Route exact path="/recieved">
          <Recieved />
        </Route>
        <Route exact path="/preparing">
          <Preparing />
        </Route>
        <Route exact path="/readyForDelivery">
          <Delivery />
        </Route>
        <Route exact path="/delivering">
          <Delivering />
        </Route>
        <Route exact path="/delivered">
          <Delivered />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
