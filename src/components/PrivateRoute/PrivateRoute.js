import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";

function PrivateRoute({ children }) {
  const [user, setUser] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const data = localStorage.getItem("currentLoggedIn");
    const userInfo = JSON.parse(data);
    setUser(userInfo);
  }, []);
  // const auth = useAuth ();
  return user ? children : <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;
