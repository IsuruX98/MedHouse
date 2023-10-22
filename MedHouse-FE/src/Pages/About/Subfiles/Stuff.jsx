import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

let members = [
  {
    id: 1,
    name: "Prof.Ted Mosby",
    image: "/Image/stuff/docOne.png",
    description:
      "Personality… kind, passionate, hopeful, and a little dorky. Ted isn't as smooth as Barney or as adorable as Marshall, but his charm (such as it is) lies in his quick wit and his deep dedication to the people he loves. That's true even if she's an ex, like Robin: “Sometimes love means taking a step back.",
    title: "MBBS",
  },
  {
    id: 2,
    name: "Prof.Ted Mosby",
    image: "/Image/stuff/docOne.png",
    description:
      "Personality… kind, passionate, hopeful, and a little dorky. Ted isn't as smooth as Barney or as adorable as Marshall, but his charm (such as it is) lies in his quick wit and his deep dedication to the people he loves. That's true even if she's an ex, like Robin: “Sometimes love means taking a step back.",
    title: "MBBS",
  },
  {
    id: 3,
    name: "Prof.Ted Mosby",
    image: "/Image/stuff/docOne.png",
    description:
      "Personality… kind, passionate, hopeful, and a little dorky. Ted isn't as smooth as Barney or as adorable as Marshall, but his charm (such as it is) lies in his quick wit and his deep dedication to the people he loves. That's true even if she's an ex, like Robin: “Sometimes love means taking a step back.",
    title: "MBBS",
  },
  {
    id: 4,
    name: "Prof.Ted Mosby",
    image: "/Image/stuff/docOne.png",
    description:
      "Personality… kind, passionate, hopeful, and a little dorky. Ted isn't as smooth as Barney or as adorable as Marshall, but his charm (such as it is) lies in his quick wit and his deep dedication to the people he loves. That's true even if she's an ex, like Robin: “Sometimes love means taking a step back.",
    title: "MBBS",
  },
  {
    id: 5,
    name: "Prof.Ted Mosby",
    image: "/Image/stuff/docOne.png",
    description:
      "Personality… kind, passionate, hopeful, and a little dorky. Ted isn't as smooth as Barney or as adorable as Marshall, but his charm (such as it is) lies in his quick wit and his deep dedication to the people he loves. That's true even if she's an ex, like Robin: “Sometimes love means taking a step back.",
    title: "MBBS",
  },
  {
    id: 6,
    name: "Prof.Ted Mosby",
    image: "/Image/stuff/docOne.png",
    description:
      "Personality… kind, passionate, hopeful, and a little dorky. Ted isn't as smooth as Barney or as adorable as Marshall, but his charm (such as it is) lies in his quick wit and his deep dedication to the people he loves. That's true even if she's an ex, like Robin: “Sometimes love means taking a step back.",
    title: "MBBS",
  },
  {
    id: 7,
    name: "Prof.Ted Mosby",
    image: "/Image/stuff/docOne.png",
    description:
      "Personality… kind, passionate, hopeful, and a little dorky. Ted isn't as smooth as Barney or as adorable as Marshall, but his charm (such as it is) lies in his quick wit and his deep dedication to the people he loves. That's true even if she's an ex, like Robin: “Sometimes love means taking a step back.",
    title: "MBBS",
  },
  {
    id: 8,
    name: "Prof.Ted Mosby",
    image: "/Image/stuff/docOne.png",
    description:
      "Personality… kind, passionate, hopeful, and a little dorky. Ted isn't as smooth as Barney or as adorable as Marshall, but his charm (such as it is) lies in his quick wit and his deep dedication to the people he loves. That's true even if she's an ex, like Robin: “Sometimes love means taking a step back.",
    title: "MBBS",
  },
  {
    id: 9,
    name: "Prof.Ted Mosby",
    image: "/Image/stuff/docOne.png",
    description:
      "Personality… kind, passionate, hopeful, and a little dorky. Ted isn't as smooth as Barney or as adorable as Marshall, but his charm (such as it is) lies in his quick wit and his deep dedication to the people he loves. That's true even if she's an ex, like Robin: “Sometimes love means taking a step back.",
    title: "MBBS",
  },
];

const Stuff = () => {
  return (
    <div className="sections stuff">
      <h3 className="stuff_title">Meet Our Stuff</h3>
      <div className="slider-container">
        <Swiper
          direction={"vertical"}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="stuff_Swiper"
        >
          {/* Mapping the items in the swiper */}
          {members.map((member) => (
            <SwiperSlide key={member.id} className="slide">
              <div className="card">
                <div className="imgPart">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="text">
                  <div className="titleOftheMember">
                    <h4>{member.name}</h4>
                    <span>({member.title})</span>
                  </div>
                  <div className="descriptionOfMember">
                    <p>{member.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Stuff;
