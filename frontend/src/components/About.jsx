import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Flavors & Feasts, where culinary passion meets exceptional hospitality. Nestled in the heart of [Your Location], our restaurant is a haven for food lovers seeking a delightful dining experience. At Flavors & Feasts, we believe in serving more than just food—we create moments filled with rich flavors, fresh ingredients, and warm, inviting ambiance. Our menu is a carefully curated selection of [mention cuisine type, e.g., authentic Italian, modern fusion, etc.], crafted by expert chefs who blend tradition with innovation. Whether you're here for a casual meal, a family gathering, or a special celebration, we promise a memorable feast that satisfies your taste buds and leaves you craving more. Join us at Flavors & Feasts and embark on a journey of exquisite flavors and heartwarming hospitality!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;