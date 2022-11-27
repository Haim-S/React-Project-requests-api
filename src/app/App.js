import React from "react";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AboutPage from "../pages/AboutPage";
import AllCharactersPage from "../pages/AllCharactersPage";
import HomePage from "../pages/HomePage";
import OneCharactersPage from "../pages/OneCharactersPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/all" element={<AllCharactersPage/>}/>
        <Route path="/one/:userId" element={<OneCharactersPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
