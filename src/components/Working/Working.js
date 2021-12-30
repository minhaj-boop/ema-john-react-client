import React from "react";
import img from "../../images/210408_WeWork_Icon_Library_10037_Outcome-Results.png";

const Working = () => {
  return (
    <div class="card">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img src={img} id="image"></img>
          </div>
          <div class="col-md-6" id="textdiv">
            <div class="card-body">
              <h1>How we work</h1>
              <p>
                Ema-John is a simple service to order products online very
                easily. Experience a whole new world delivered to your door
                step. <br></br>
                This is how we work
              </p>
              <p>
                <h3>Find the product you want</h3>
                1. Enter the home page. <br></br>
                2. Browse from our extensive list of products. <br></br>
                3. Pick a product you like and add it to a cart.
              </p>
              <h3>Order it</h3>
              <p>
                Build up your cart by choosing your necessary products, browse
                the menu and select the items you will like to order. The order
                summary will appear on your cart on the right.
              </p>
              <h3>Checkout and payment</h3>
              <p>
              Once you are happy with your order, click on the "Review Your Order" button and 
              simply follow the checkout instructions from there.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
