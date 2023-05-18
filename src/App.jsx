import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  ReDirect,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { login, logout, selectUser } from "./features/userSlice";
import SignUp from "./components/SignUp";
import TeslaAccount from "./components/TeslaAccount";
import Menu from "./components/Menu";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout())
      }
    });
  }, [dispatch]);

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
            <Route path="/signup" exact element={<SignUp />} />
            <Route
              path="/teslaaccount"
              exact
              element={
                !user ? (
                  <Navigate to="/signup" />
                ) : (
                  <>
                    <TeslaAccount
                      isMenuOpen={isMenuOpen}
                      setIsMenuOpen={setIsMenuOpen}
                    />
                    {isMenuOpen && <Menu />}
                  </>
                )
              }
            />
            {/* <Route path="/login" exact element={ <TeslaAccount />}/> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
