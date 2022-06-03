import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import LoginPage from "../src/authPages/LoginPage/LoginPage";
import RegisterPage from "../src/authPages/RegisterPage/RegisterPage";
import Dashboard from "../src/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Navigate to="/dashboard" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
