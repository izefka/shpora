//import logo from './logo.svg';
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./components/start";
import Components from "./components/components";
import Props from "./components/props";
import State from "./components/state";
import Lifecycle from "./components/lifecycle";
import Events from "./components/events";
import Key from "./components/key";
import Refs from "./components/refs";
import Fragment from "./components/fragment";
import Async from "./components/async";
import Virtual from "./components/virtualdom";
import Router from "./components/router";
import Navigation from "./components/navigation";

function App() {
  return (
    <BrowserRouter>
      <body>
        <Navigation />
        <Routes>
          <Route path="/components" element={<Components />} />
          <Route path="/props" element={<Props />} />
          <Route path="/state" element={<State />} />
          <Route path="/lifecycle" element={<Lifecycle />} />
          <Route path="/events" element={<Events />} />
          <Route path="/key" element={<Key />} />
          <Route path="/refs" element={<Refs />} />
          <Route path="/asynchron" element={<Async />} />
          <Route path="/virtual_DOM" element={<Virtual />} />
          <Route path="/fragment" element={<Fragment />} />
          <Route path="/router" element={<Router />} />
          <Route exact path="/shpora" element={<Start />} />
        </Routes>
      </body>
    </BrowserRouter>
  );
}

export default App;
