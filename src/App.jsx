import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Page404Ui } from "./components/404";
import { ErrorBoundary } from "./helpers/ErrorBoundary";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { SingleRepo } from "./pages/Repo";
import { Repos } from "./pages/Repos";

const App = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/my-repositories" element={<Repos />}>
            <Route path="/my-repositories/:id" element={<SingleRepo />} />
          </Route>
          <Route exact path="/error" element={<ErrorPage />} />
          <Route exact path="*" element={<Page404Ui />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
