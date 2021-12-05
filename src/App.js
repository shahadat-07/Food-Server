import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin/Admin";
import NewAdmin from "./components/Admin/NewAdmin/NewAdmin";
import NewMenu from "./components/Admin/NewMenu/NewMenu";
import NewMenuFrom from "./components/Admin/NewMenu/NewMenuForm";
import NewRestaurant from "./components/Admin/NewRestaurant/NewRestaurant";
import DisplayMenus from "./components/Home/DisplayMenus/DisplayMenus";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Review from "./components/OrderComponents/Review/Review";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Delivered from "./components/Processing/Delivered/Delivered";
import Delivering from "./components/Processing/Delivering/Delivering";
import Delivery from "./components/Processing/Delivery/Delivery";
import Preparing from "./components/Processing/Preparing/Preparing";
import Recieved from "./components/Processing/Recieved/Recieved";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Registration />} />
      <Route
        path="/newRestaurant"
        element={
          <PrivateRoute>
            <NewRestaurant />
          </PrivateRoute>
        }
      />
      <Route
        path="/newMenu"
        element={
          <PrivateRoute>
            <NewMenu />
          </PrivateRoute>
        }
      />
      <Route
        path="/newAdmin"
        element={
          <PrivateRoute>
            <NewAdmin />
          </PrivateRoute>
        }
      />
      <Route
        path="/newMenuForm/:restaurantName"
        element={
          <PrivateRoute>
            <NewMenuFrom />
          </PrivateRoute>
        }
      />
      <Route path="/displayMenus/:restaurantName" element={<DisplayMenus />} />
      <Route
        path="/recieved"
        element={
          <PrivateRoute>
            <Recieved />
          </PrivateRoute>
        }
      />
      <Route
        path="/preparing"
        element={
          <PrivateRoute>
            <Preparing />
          </PrivateRoute>
        }
      />
      <Route
        path="/readyForDelivery"
        element={
          <PrivateRoute>
            <Delivery />
          </PrivateRoute>
        }
      />
      <Route
        path="/delivering"
        element={
          <PrivateRoute>
            <Delivering />
          </PrivateRoute>
        }
      />
      <Route
        path="/delivered"
        element={
          <PrivateRoute>
            <Delivered />
          </PrivateRoute>
        }
      />
      <Route
        path="/review"
        element={
          <PrivateRoute>
            <Review />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
