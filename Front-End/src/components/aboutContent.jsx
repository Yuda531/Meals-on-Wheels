import food from "../img/leftBg2.png";
import food2 from "../img/leftBg3.png";
import img1 from "../img/foodAbout1.jpg";
import delivery1 from "../img/delivery1.jpg";
import snack1 from "../img/snack1.jpg";
import snack2 from "../img/snack2.jpg";
import rightBg from "../img/food3.png";
import richie from "../img/richie.png";
import rocky from "../img/rocky.png";
import reihan from "../img/reihan.png";
import agung from "../img/agung.png";
import keymal from "../img/keymal.png";
import React, { useState } from "react";
import AboutMembers from "./TeamMember";

function AboutContent() {
  return (
    <div className='body custom-overflow'>
      <div className='backblur'>
        <div className='col-12 d-flex flex-row my-wrap'>
          <div className='col-6 me-3 '>
            <h1
              style={{ fontSize: "80px" }}
              className='display-4 text-white title-landing'
            >
              About <span className='text-warning '> Us</span>
            </h1>

            <div className='col-12 d-flex flex-wrap my-wrap-text row'>
              <div className='col-6 px-3 isi-warp mt-5 text-white'>
                <p className='lead '>
                  Meals on Wheels! Where Healthy Meets Convenience!
                </p>
                <p className='lead  '>
                  At Meals on Wheels, we offer a diverse range of nutritious
                  meals tailored to various dietary needs. Whether you have
                  specific requirements or prioritize your well-being, we have
                  you covered.
                </p>
              </div>

              <div className='col-6 px-3 mt-5 text-white'>
                <p className='lead '>
                  Enjoy the convenience of our fast and reliable delivery
                  service, bringing wholesome meals right to your doorstep.
                </p>

                <p className='lead'>
                  We understand the value of your time and strive to make
                  healthy eating accessible and hassle-free.
                </p>
              </div>
            </div>
            <hr className='border-white' />
            <div className='col-12 d-flex my-wrap-text'>
              <div className='col-6 px-3 text-white'>
                <div className='d-flex justify-content-center my-4'>
                  <div className='col-12 px-3 my-auto'>
                    <img
                      style={{ borderRadius: " 70px 10px" }}
                      src={snack2}
                      alt=''
                      className='col-12'
                    />
                  </div>
                </div>
                <p className='lead'>
                  At Meals on Wheels, our diverse menu offers a delightful
                  variety of healthy and tasty options. We prioritize both
                  nourishment and enjoyment, ensuring that each meal is a
                  satisfying experience for everyone.
                </p>
              </div>
              <div className='col-6 px-3 text-white'>
                <p className='lead'>
                  Join us at Meals on Wheels and embark on a culinary journey
                  that combines health, convenience, and flavor. Take the first
                  step towards a healthier lifestyle without compromising on
                  taste or breaking the bank.
                </p>
                <div className='d-flex justify-content-center my-4'>
                  <div className='col-12 px-3'>
                    <img
                      style={{ borderRadius: "10px 70px" }}
                      src={snack1}
                      alt=''
                      className='col-12'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-1 aboutt mx-5"></div> */}
          <div className='col-6 aboutt'>
            <h1
              style={{ fontSize: "80px" }}
              className='display-2 ms-4 text-white title-landing'
            >
              Our<span className='text-warning'> Team</span>
            </h1>
            <br />
            <div className='d-flex justify-content-center mt-3'>
              <div className='members col-9 py-3'>
                <div
                  style={{ maxHeight: "500px", minWidth: "500px" }}
                  className='col-12 teams'
                >
                  <AboutMembers />
                </div>
              </div>
            </div>
            <div className='px-3 mt-5'>
              <p className='lead text-white'>
                We are a team of five students from Lithan Academy, passionately
                working on developing a food delivery application. Inspired by
                our shared vision, we came up with the brilliant idea of Meals
                on Wheels. The name itself reflects our commitment to delivering
                delicious and nutritious meals right to your doorstep. With
                great pride, we present our innovative product, and we are
                determined to continuously improve and enhance it. Together, we
                strive to create a seamless and exceptional dining experience
                for our valued customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
