import React from "react";
import "../Styles/home.css";

const Home = () => {
  return (
    <>
      <section>
        <div className="img">
          <section className="topSection">
            <div className="container">
              <h1 id="heading">Confidence Cuts Barbershop</h1>
              <span id="action">Crafting Confidence, One Cut at a Time</span>
            </div>
          </section>
        </div>
      </section>

      <section class="p-5" id="stylers">
        <div className="container ">
          <h2 class="text-center mb-5">OUR STYLERS</h2>

          <h1>___</h1>

          <div className="d-flex justify-content-between flex-wrap" id="stylist">
            <div>
              <img src="https://ayesha.dropletthemes.com/wp-content/uploads/2019/08/Styler-01.jpg" />
              <span>ALITA WILLMS</span>
            </div>
            <div>
              <img src="https://ayesha.dropletthemes.com/wp-content/uploads/2019/08/Styler-02.jpg" />
              <span>AYESHA LAKE</span>
            </div>
            <div>
              <img src="https://ayesha.dropletthemes.com/wp-content/uploads/2019/08/Styler-03.jpg" />
              <span>SMITH MICHELLE</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
