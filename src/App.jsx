import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  ReDirect,
  Navigate
} from "react-router-dom";
import Login from "./components/Login";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUser } from "./features/userSlice";
import SignUp from "./components/SignUp";

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              }
            />
            <Route
              path="/login"
              exact
              element={user ? <Navigate to="/teslaaccount" /> : <Login />}
            />
            <Route path="/signup" exact element={ <SignUp />}/>
          </Routes>
        </div>
        {/* HeaderBlock */}
      </Router>
    </>
  );
}

export default App;
