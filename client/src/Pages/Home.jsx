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
      <section className="about-us">
        <div className="container">
          <div>
            <span>Barbershop</span>
            <h3>As sublime for your senses</h3>
            <p className="intro">
              Pharetra mauris adipiscing erat, amet et donec elit, nunc vitae
              cupidatat est vestibulum , nec enim libero tortor.
            </p>
          </div>

          <div className=" about-us-pillers">
            <div className="img-piller">
              <img src="https://cutstyle.true-emotions.studio/wp-content/uploads/2020/07/bar1.jpg" />
            </div>
            <div>
              <p className="our-history">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                voluptates quae mollitia dolorum possimus ipsa dolor distinctio,
                doloremque repellat libero saepe ducimus dignissimos enim culpa
                eligendi nostrum, iste modi sequi. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Velit voluptates quae mollitia
                dolorum possimus ipsa dolor distinctio, doloremque repellat
                libero saepe ducimus dignissimos enim culpa eligendi nostrum,
                iste modi sequi.
              </p>
            </div>
            <div className="img-piller">
              <img src="https://cutstyle.true-emotions.studio/wp-content/uploads/2020/07/bar1.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Galllery */}
      <section>
        <div className="container gallery">
          <div>
            <h3>OUR WORK</h3>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src="https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?cs=srgb&dl=pexels-thgusstavo-2040189.jpg&fm=jpg"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />

              <img
                src="https://images.fresha.com/lead-images/placeholders/barbershop-54.jpg?class=width-small"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
              />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://preview.colorlib.com/theme/haircare/images/work-8.jpg"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />

              <img
                src="https://preview.colorlib.com/theme/haircare/images/work-7.jpg"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://images.fresha.com/lead-images/placeholders/barbershop-54.jpg?class=width-small"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />

              <img
                src="https://preview.colorlib.com/theme/haircare/images/work-3.jpg"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
