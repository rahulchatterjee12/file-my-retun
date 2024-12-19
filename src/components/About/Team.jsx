import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
  {
    name: "Amit Singh",
    img: "/assets/team/amit.png ",
  },
  {
    name: "Parveen Kumar",
    img: "/assets/team/parveen.png",
  },
  {
    name: "Sanjeet Dayal",
    img: "/assets/team/dayal.png",
  },
  {
    name: "Neha",
    img: "/assets/team/neha.png",
  },
  {
    name: "Nikhil Verma",
    img: "/assets/team/nikhil.png",
  },
  {
    name: "Rahul Shaw",
    img: "/assets/team/rahul.png",
  },
  {
    name: "Sujit Kumar",
    img: "/assets/team/sujit.png",
  },
  {
    name: "Himanshu Chaudhary",
    img: "/assets/team/himanshu.png",
  },
  {
    name: "Aashish Pal",
    img: "/assets/team/ashish.png",
  },
  {
    name: "Amit Kumar",
    img: "/assets/team/amit2.png",
  },
  {
    name: "Arvind Kumar Ojha",
    img: "/assets/team/arvind.png",
  },
  {
    name: " Deepanshi Kulasri",
    img: "/assets/team/deepanshi.png",
  },
  {
    name: "Rohit Kumar Pandey",
    img: "/assets/team/rohit.png",
  },
  {
    name: "Sunil Kumar",
    img: "/assets/team/sunil.png",
  },
];

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    autoplaySpeed: 0,
    trl: true,
    swipeToSlide: true,
  };

  return (
    <>
      <div className="max-w-[1140px] 2xl:max-w-[1320px] px-3 lg:px-10 xl:px-0 mx-auto mb-20">
        <p className="font-normal text-[36px] py-10">
          Meet the <span className="text-[#4640DE]">Team</span>
        </p>
        <div>
          <Slider {...settings}>
            {team.map((item, i) => (
              <div className="px-3">
                <Image src={item.img} alt="logo" width={200} height={200} />
                <p className="font-normal text-[18px] text-black-300 text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Team;
