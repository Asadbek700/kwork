import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";

// Images
import Alchemist from "./images/img-1.png";
import axe from "./images/img-2.png";
import Centaur from "./images/img-3.png";
import huskar from "./images/img-4.png";
import earthshaker from "./images/img-5.png";
import earth from "./images/img-6.png";
import elder from "./images/img-16.png";
import kunkka from "./images/img-17.png";
import legion from "./images/img-7.png";
import lefestealer from "./images/img-8.png";
import Mars from "./images/img-15.png";
import stalker from "./images/img-9.png";
import ogre from "./images/img-10.png";
import omnik from "./images/img-11.png";
import primal from "./images/img-12.png";
import slardar from "./images/img-13.png";
import pudge from "./images/img-14.png";
import spirit from "./images/img-15.png";
import sven from "./images/img-18.png";
import tidehunter from "./images/img-19.png";
import image26 from "./images/image 26.png";
import image27 from "./images/image 27.png";
import image28 from "./images/image 28.png";
//new

import strengthBg from "./images/backround-img.png";
import dexterityBg from "./images/backround-img-2.png";
import intelligenceBg from "./images/backround-img-3.png";
import universalBg from "./images/backround-gradient.avif";

// Logo images
import logo1 from "./images/image 33.png";
import logo2 from "./images/logo-2.png";
import logo3 from "./images/logo-3.png";
import logo4 from "./images/logo-4.png";

function App() {
  const [page, setPage] = useState(1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Background images for each page
  const pageBackgrounds = {
    1: strengthBg,
    2: dexterityBg,
    3: intelligenceBg,
    4: universalBg,
  };

  // Hero images
  const heroes = [
    { image: Alchemist, name: "ALCHEMIST" },
    { image: Centaur, name: "BRISTLEBACK" },
    { image: huskar, name: "AXE" },
    { image: earthshaker, name: "MARS" },
    { image: earth, name: "CHAOS " },
    { image: elder, name: "PUDGE" },
    { image: kunkka, name: "TUSK" },
    { image: legion, name: "DOOM" },
    { image: lefestealer, name: "LIFESTEALER" },
    { image: axe, name: "SLAUGHTER" },
    { image: Mars, name: "MARS" },
    { image: stalker, name: " STALKER" },
    { image: ogre, name: "OGRE MAGI" },
    { image: omnik, name: "OMNIKNIGHT" },
    { image: slardar, name: "SLARDAR" },
    { image: primal, name: " BEAST" },
    { image: pudge, name: "PUDGE" },
    { image: spirit, name: "SPIRIT BREAKER" },
    { image: sven, name: "SVEN" },
    { image: tidehunter, name: "TIDEHUNTER" },
    { image: image26, name: "TINY" },
    { image: image27, name: "WRAITH KING" },
    { image: image28, name: "TUSK" },
    { image: image28, name: "WITCH DOCTOR" },
    { image: sven, name: "LIFESTEALER" },
    { image: Alchemist, name: "PANGOLIER" },
    { image: Centaur, name: "TEMPLAR ASSASSIN" },
    { image: huskar, name: "MEPO" },
    { image: earthshaker, name: " PROTECTOR" },
    { image: earth, name: "RIKI" },
    { image: elder, name: "ENIGMA" },
    { image: kunkka, name: "PA" },
    { image: legion, name: "LUNA" },
    { image: lefestealer, name: "SHADOW FENIX" },
    { image: huskar, name: "VAMPIRE" },
    { image: earthshaker, name: "RAZOR" },
    { image: earth, name: "LYCANTHROPE" },
    { image: elder, name: "MIRANA" },
    { image: kunkka, name: " WARLORD" },
    { image: legion, name: "MARS" },
    { image: lefestealer, name: "DROW RANGER" },
    { image: axe, name: "PANGOLIER" },
    { image: Mars, name: " WYVERN" },
    { image: stalker, name: "SNIPER" },
    { image: ogre, name: "WEAVER" },
    { image: omnik, name: " SPIRIT" },
    { image: slardar, name: "VIOLET" },
    { image: primal, name: "LION" },
    { image: pudge, name: "ANTI MAGE" },
    { image: spirit, name: " LANCER" },
    { image: sven, name: "TINKER" },
    { image: tidehunter, name: "NEXUS" },
    { image: image26, name: "DARK SEER" },
    { image: image27, name: "BANE" },
    { image: image28, name: "SILENCER" },
    { image: axe, name: "NECROPHOS" },
    { image: Mars, name: "CLOCKWERK" },
    { image: stalker, name: "DARK WILLOW" },
    { image: ogre, name: "TINKER" },
    { image: omnik, name: "BATRIDER" },
    { image: slardar, name: " LANCER" },
    { image: primal, name: "LION" },
  ];

  const getPageText = (page) => {
    switch (page) {
      case 1:
        return "Сила";
      case 2:
        return "Ловкость";
      case 3:
        return "Интеллект";
      case 4:
        return "Универсальный";
      default:
        return "Сила";
    }
  };

  const getPageImage = (page) => {
    switch (page) {
      case 1:
        return logo1;
      case 2:
        return logo2;
      case 3:
        return logo3;
      case 4:
        return logo4;
      default:
        return logo1;
    }
  };

  const currentBackground = pageBackgrounds[page];

  useEffect(() => {
    // Reset image loading state when page changes
    setIsImageLoaded(false);
  }, [page]);

  const handleImageLoad = () => {
    setIsImageLoaded(true); // Set to true when the image is loaded
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundImage: `url(${currentBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="game-body">
          <div className="game-table-body__heading">
            <div className="game-logo">
              <img
                src={getPageImage(page)}
                alt="logo"
                onLoad={handleImageLoad} // Trigger image load event
              />
            </div>
            <span>{getPageText(page)}</span>
          </div>
          <div className="game-table__body">
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
              onSlideChange={(swiper) => setPage(swiper.activeIndex + 1)}
            >
              {[...Array(Math.ceil(heroes.length / 16))].map(
                (_, slideIndex) => (
                  <SwiperSlide key={slideIndex}>
                    <div className="game-table__grid">
                      {heroes
                        .slice(slideIndex * 16, slideIndex * 16 + 16)
                        .map((hero, index) => (
                          <div className="game-table__game" key={index}>
                            <div className="game-table__game-name">
                              <span>{hero.name}</span>
                            </div>
                            <img src={hero.image} alt="hero" />
                          </div>
                        ))}
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </section>
        <section className="game-table-footer">
          <div className="game-team">
            <div className="game-team__allies">
              <img src={image28} alt="image" />
              <img src={image26} alt="image" />
              <img src={elder} alt="image" />
              <img src={omnik} alt="image" />
              <button className="game-team__allies">союзники</button>
            </div>
            <div className="game-team__enemies">
              <img src={Centaur} alt="image" />
              <img src={kunkka} alt="image" />
              <img src={sven} alt="image" />
              <img src={primal} alt="image" />
              <button className="game-enemies">враги</button>
            </div>
            <section className="game-footer">
              <span>
                Сначала берем союзников, затем жмем “враги” выбираем их, потом:
                “ПИК”
              </span>
              <button className="game-team-peak__btn">ПИК</button>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
