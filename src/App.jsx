import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./pages/Home";
import { SingleRepo } from "./pages/Repo";
import { Repos } from "./pages/Repos";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/my-repositories" element={<Repos />}>
          <Route path="/my-repositories/:id" element={<SingleRepo />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
