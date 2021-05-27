import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "../container/Home";
import Cart from "../container/Cart";
import { Layout } from "../components/Layout";
import { Products } from "../container/Products";
import { ProductScreen } from "../container/ProductScreen";
import { FourZeroFour } from "../container/FourZeroFour";

const DonkeyRoutes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:productId">
            <ProductScreen />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/404">
            <FourZeroFour />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default DonkeyRoutes;
