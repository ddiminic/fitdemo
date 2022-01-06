import React from "react";
import "./App.css";
import {  store } from "./store/store";
import { Provider } from "react-redux";
import { TopBar } from "./components/top-bar/top-bar";
import { Sports } from "./screens/sports/sports";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Reservation } from "./screens/reservation/reservation";
import Container from "@mui/material/Container";
import { Loading } from "./components/loading";

function App() {
  return (
    <Provider store={store}>
      <Loading />
      <div className="App">
        <BrowserRouter>
          <TopBar />
          <Container>
            <Routes>
              <Route path="/" element={<Sports />} />
              <Route path="/reservation" element={<Reservation />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
