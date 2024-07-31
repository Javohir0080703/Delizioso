import React, { useState, useEffect } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Sign_up from "./pages/Sign_up";
import Log_in from "./pages/Log_in";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  const [users_data, setUsers_data] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/signup"
          element={
            <Sign_up setUsers_data={setUsers_data} users_data={users_data} />
          }
        />
        <Route
          path="/login"
          element={
            <Log_in users_data={users_data} setCurrentUser={setCurrentUser} />
          }
        />
        <Route element={<MainLayout currentUser={currentUser} />}>
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={currentUser !== null}>
                <Home />
              </ProtectedRoute>
            }
          />
        </Route>
      </>
    )
  );

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
