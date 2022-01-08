import React from "react";
import "./About.css";
import img from '../../images/types-of-ecommerce.jpg';

const About = () => {
  return (
    <div class="card">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img src={img} id="image"></img>
          </div>
          <div class="col-md-6" id="textdiv">
            <div class="card-body">
              <h1>About ema-John</h1>
              <p>
                Ema-John is the largest one - stop shopping destination in
                Bangladesh.Launched in 2021, the online store offers the widest
                range of products in categories ranging from electronics to
                household appliances, latest smart phones, Camera, accessories,
                fashion, health equipment and makeup.
              </p>
              <p>
                Ema-John believes in “Delivering Happiness” with an excellent
                customer experience thus provides the most efficient delivery
                service through own logistics so that customers get a hassle -
                free product delivery at their doorstep.We help our local and
                international vendors as well as 200 brands serving thousands of
                consumers from all over Bangladesh.We also offer free returns
                and various payment methods including Cash on delivery, Online
                Payments, Card on delivery and bKash with all of our products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
