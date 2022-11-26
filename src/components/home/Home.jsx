import { useState } from "react";
import "./home.css";

const Home = () => {
  const Stars = "/images/stars.png";
  const Moon = "/images/moon.png";
  const MountainsBehind = "/images/mountains_behind.png";
  const MountainsFront = "/images/mountains_front.png";

  const stars = document.getElementById("stars");
  const moon = document.getElementById("moon");
  const mountains_behind = document.getElementById("mountains_behind");
  const text = document.getElementById("text");
  const mountains_front = document.getElementById("mountains_front");

  const btn = document.getElementById("btn");
  window.addEventListener("scroll", () => {
    let value = window.scrollY;

    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 1.05 + "px";
    mountains_behind.style.top = value * 0.5 + "px";
    text.style.marginRight = value * 4 + "px";
    text.style.marginTop = value * 1.5 + "px";
    mountains_front.style.top = value * 0.3 + "px";
    btn.style.marginTop = value * 1.5 + "px";
  });

  return (
    <section className="home" id="home">
      <img src={Stars} alt="stars" id="stars" />
      <img src={Moon} alt="moon" id="moon" />
      <img src={MountainsBehind} alt="mountains" id="mountains_behind" />
      <h2 id="text">Moon Light</h2>
      <a href="#info" id="btn">
        Explore
      </a>
      <img src={MountainsFront} alt="mountains" id="mountains_front" />
    </section>
  );
};

export default Home;
