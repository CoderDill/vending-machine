import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Drink from "./Drink";
import Chips from "./Chips";
import Candy from "./Candy";

export function VendingMachine(props) {
  return (
    <>
      <h1>Vending Machine</h1>

      <BrowserRouter>
        <Navbar />

        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/drink">
          <Drink />
        </Route>
        <Route exact path="/candy">
          <Candy />
        </Route>
      </BrowserRouter>
    </>
  );
}
