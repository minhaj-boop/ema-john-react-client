import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Working from "./components/Working/Working";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Shop from "./components/Shop/Shop";
import Login from "./components/Login/Login"
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Inventory from "./components/Inventory/Inventory";
import Shipping from "./components/Shipping/Shipping";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>

            <Route path="/shop">
              <Shop></Shop>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/working">
              <Working></Working>
            </Route>

            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <PrivateRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>

            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
