import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Working from "./components/Working/Working";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
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

          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
