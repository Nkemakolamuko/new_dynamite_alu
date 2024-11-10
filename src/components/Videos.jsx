import React from "react";
import Slider from "react-slick";
import Title from "./Title";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer text-yellow-500 hover:text-yellow-400"
    onClick={onClick}
  >
    <FaArrowRight size={24} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-0 transform z-10 -translate-y-1/2 cursor-pointer text-yellow-500 hover:text-yellow-400"
    onClick={onClick}
  >
    <FaArrowLeft size={24} />
  </div>
);

const Videos = () => {
  const challengeVideos = [
    {
      id: 1,
      title: "Dynamite - Introductory Video",
      date: "27 - 09 - 2024",
      videoId: "rRf_QazSlkk?si=HGQxRHqCYynCBFeR",
    },
    {
      id: 2,
      title: "Challenge 02: Discover Africa",
      date: "02 - 10 - 2024",
      videoId: "WgFaaWujH6s?si=ns3xBVgR79FOHri1",
    },
    {
      id: 3,
      title: "Help Lab - Challenge",
      date: "19 - 10 - 2024",
      videoId: "ITp1XrrjLtc?si=grzvsssNSRY8Uq5S",
    },
    {
      id: 4,
      title: "Challenge - Hunt for Treasure",
      date: "24 - 10 - 2024",
      videoId: "Ded9zmeUfDw?si=z7zPfhVSqPnvkK2b",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-white/70 bg-opacity-70 h-[68vh] block md:hidden pt-4 text-center rounded-lg p-2 space-y-4 overflow-x-hidden">
      <Title title="Challenge Videos" />
      <Slider {...sliderSettings}>
        {challengeVideos.map((video) => (
          <div
            key={video.id}
            className="space-y-2 border rounded p-2 text-start"
          >
            <h3 className="font-medium">{video.title}</h3>
            <p className="text-sm text-gray-800">{video.date}</p>
            <div className="w-full aspect-w-16 aspect-h-9 h-[40vh]">
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
            <button className="text-yellow-500 hover:text-yellow-400 text-sm">
              Click To Watch Video
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Videos;
