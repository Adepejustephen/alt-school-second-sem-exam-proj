import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, HomeUi } from "./components";
import { StoreContextProvider } from "./context/AppContext";

const App = () => {
  return (
    <StoreContextProvider>
        <Header />
      <Routes>
        <Route exact path="/" element={ <HomeUi/>}/>
       
     </Routes>
     
    </StoreContextProvider>
  );
};

export default App;
