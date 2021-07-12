import React from "react";
import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Johny G. Plate",
      title: "Ministry of Communication and Information",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Menteri_Komunikasi_dan_Informatika%2C_Johnny_G._Plate.jpg",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Yunadian",
      title: "President of Indonesia",
      img: "https://ketik.unpad.ac.id/uploads/images/610/yunadian-mahasiswa-fikom-unpad_201030141748-140.jpg",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Joko Widodo",
      title: "Former President of Indonesia",
      img: "https://awsimages.detik.net.id/community/media/visual/2021/05/27/presiden-jokowi-1_43.jpeg?w=700&q=90",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
