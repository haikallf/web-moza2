import React from "react";
import "./works.scss";
import { useState } from "react";
import { People } from "@material-ui/icons";
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/people.png",
      title:
        "LingoTalk, Public Relations & Strategic Communication Specialist Intern",
      desc: "Assisted Chief Strategist to build and protect company reputation to safeguard LingoTalk's positive image. ",
      img: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/2bd28b08aba515dd50077908c9fd078b.png",
    },
    {
      id: "2",
      icon: "./assets/people.png",
      title: "AKSEL (FORMERLY TUTEE.ID), Media Partnership Lead Intern",
      desc: "Led a team consists of 3 people and created the partnership strategies to boost monthly sales.",
      img: "https://radio.unpad.ac.id/wp-content/uploads/2017/11/media-partner-hehe-1024x1024.png",
    },
    {
      id: "3",
      icon: "./assets/people.png",
      title: "Career Head Start Wave 1, Partnership",
      desc: "Researched on startup contacts and succeed to invite a Mentor (HR leader) from start-up.",
      img: "https://free-now.com/fileadmin/_processed_/9/5/csm_EASY_B2B_Partnership_f6823b14b0.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
