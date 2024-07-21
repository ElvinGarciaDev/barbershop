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

      {/* Menu */}

      <section className="menuSection">
        <div className="container">
          <div className="menu">
            <span>Services</span>
            <h2>SERVICE MENU</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>

          <div className="services d-flex justify-content-between flex-wrap">
            <div>
              <img
                src="https://cutstyle.true-emotions.studio/wp-content/uploads/2018/06/scissor-1.svg"
                alt=""
              />
              <span>Haircut & Styling</span>
              <p>
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
            <div>
              <img
                src="https://cutstyle.true-emotions.studio/wp-content/uploads/2018/06/cre-1.svg"
                alt=""
              />
              <span>Haircut & Styling</span>
              <p>
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
            <div>
              <img
                src="https://cutstyle.true-emotions.studio/wp-content/uploads/2022/06/razor1-1.svg"
                alt=""
              />
              <span>Haircut & Styling</span>
              <p>
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
            <div>
              <img
                src="https://cutstyle.true-emotions.studio/wp-content/uploads/2018/06/razo2.svg"
                alt=""
              />
              <span>Haircut & Styling</span>
              <p>
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STYLERS */}

      <section className="p-5" id="stylers">
        <div className="container ">
          <h2 className="text-center mb-5">OUR STYLERS</h2>

          <h1>___</h1>

          <div
            className="d-flex justify-content-between flex-wrap"
            id="stylist"
          >
            <div className="animation">
              <img src="https://ayesha.dropletthemes.com/wp-content/uploads/2019/08/Styler-01.jpg" />
              <span>ALITA WILLMS</span>
            </div>
            <div className="animation">
              <img src="https://ayesha.dropletthemes.com/wp-content/uploads/2019/08/Styler-02.jpg" />
              <span>AYESHA LAKE</span>
            </div>
            <div className="animation">
              <img src="https://ayesha.dropletthemes.com/wp-content/uploads/2019/08/Styler-03.jpg" />
              <span>SMITH MICHELLE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="d-flex justify-content-between flex-wrap">
        <div className="back-ground-img"></div>
        <div className="about-us">
          <img src="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/387111636_800501562084717_1766583911539188881_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TevLEo064MgQ7kNvgGHO7sb&_nc_ht=scontent-bos5-1.xx&oh=00_AYApZN4KHI_pPdQSxrzkSKu4K3pdO6wxqIwk3JwEwbyEBQ&oe=66A24D50"></img>
          <h3>Cutting Hair with Style</h3>
          <span>FOR GOODLOOKING MEN ONLY</span>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod temport.
          </p>
          <a>Book Now!</a>
        </div>
      </section>

      {/* FOOTER */}
    </>
  );
};

export default Home;
