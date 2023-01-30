import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ReactToTuRail from "./contents/ReactToTuRail";
import Navbar2 from "./components/Navbar";
import ReacHook from "./contents/ReacHook";
import UseEffectDamo1 from "./contents/UseEffectDamo1";
import UseEffectDamo2 from "./contents/UseEffectDamo2";
import UseEffectDamo3 from "./contents/UseEffectDamo3";
import UseEffectDamo4 from "./contents/UseEffectDamo4";
import UserContextDamo1 from "./contents/UserContextDamoChild1";
import ThemeContext from "./contents/ThemeContext";
import { Container, Nav, Navbar } from "react-bootstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <>
      <ThemeContext.Provider value={{ color: "red" }}>
        <Router>
          <div className="App">
            <Navbar2 />
            {/* <Navbar bg="primary" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link activeStyle={{ color:'red' }} to="/" >ReactTotuRail</Nav.Link>
                  <NavLink href="#home">Features</NavLink>
                  <NavLink href="#pricing">Pricing</NavLink>
                </Nav>
              </Container>
            </Navbar> */}

            <Routes>
              <Route
                exact
                path="/ReactTotuRail"
                element={<ReactToTuRail IsShow={true} />}
              />
              <Route exact path="/ReacHook" element={<ReacHook />} />
              <Route
                exact
                path="/UseEffectDamo1"
                element={<UseEffectDamo1 />}
              />
              <Route
                exact
                path="/UseEffectDamo2"
                element={<UseEffectDamo2 />}
              />
              <Route
                exact
                path="/UseEffectDamo3"
                element={<UseEffectDamo3 />}
              />
              <Route
                exact
                path="/UseEffectDamo4"
                element={<UseEffectDamo4 />}
              />
              <Route
                exact
                path="/UserContextDamo1"
                element={<UserContextDamo1 />}
              />
            </Routes>
          </div>
        </Router>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
