import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Page404Ui } from "./components/404";
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
        <Route exact path="*" element={<Page404Ui />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
