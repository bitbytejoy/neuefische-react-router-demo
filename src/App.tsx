import React from 'react';
import './App.css';
import {
  BrowserRouter, Link,
  Route,
  Routes
} from "react-router-dom";
import Hello from "./Hello";
import About from "./About";
import Root from "./Root";
import QueryString from "./QueryString";

/*
1 - Routes definition
2 - Links
3 - Programmatic redirections (replace)
4 - URL Params
5 - Query Params
 */

function App() {
  return (
    <BrowserRouter>
      <h1>Meine App</h1>

      <ul>
        <li><Link to={"/hello/muslim"}>Hello</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/query-string"}>Query String</Link></li>
        <li><a href={"/hello/muslim"}>Hello with refresh</a></li>
      </ul>

      <Routes>
        <Route path={"/"} element={<Root/>}/>
        <Route path={"/hello/:name"} element={<Hello/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/query-string"} element={<QueryString/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
