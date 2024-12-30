import React from "react";

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
  return (
    <>
      <div className="mx-[26px]">
        <p className="font-normal text-[36px] py-10">
          Meet the <span className="text-[#4640DE]">Team</span>
        </p>
        <div className="flex overflow-hidden group">
          <div className="animate-loop-scroll flex group-hover:paused">
            {team.map((item, i) => (
              <div className="px-3 flex flex-col  w-[200px]" key={i}>
                <div className="rounded-[10px]">
                  <img
                    src={item.img}
                    alt="logo"
                    width={200}
                    height={200}
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <p className="font-normal text-[18px] mt-[8px] text-black-300 text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div
            className="animate-loop-scroll flex group-hover:paused"
            aria-hidden="true"
          >
            {team.map((item, i) => (
              <div className="px-3 flex flex-col w-[200px]" key={i}>
                <div className="rounded-[10px]">
                  <img
                    src={item.img}
                    alt="logo"
                    width={200}
                    height={200}
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <p className="font-normal text-[18px] mt-[8px] text-black-300 text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
