import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import React from "react";
import Team from "@/components/About/Team";

const ceos = [
  {
    name: "CA Qimat Rai Garg",
    linkedin: "https://www.linkedin.com/in/qimat-rai-garg-12a690292/",
    desc: "Originally belongs from a remote village in Punjab. Post qualifying as Chartered Accountant in Jan'79, he began his career working with Universal Cables and Punjab Alkali. Subsequently, in June 1983, he established his own CA firm, specializing in auditing, accounting, and taxation-related services. Over the next two decades, he expanded his firm's services & geographical reach. He opened an office in Delhi, added new services such as portfolio, & wealth management, compliance services",
    img: "",
  },
  {
    name: "Amber Rai Garg",
    linkedin: "https://www.linkedin.com/in/amber-rai-garg-973687292/",
    desc: "Co-founder with 18+ years of experience in Wealth & Portfolio Management, Direct & Indirect Taxation & Compliance Services & Managed Services. Over last decade, he has won numerous awards & accolades from ICICI Prudential, HDFC Ltd., Bajaj Finance, & ICICI Lombard. He has an impressive track record of managing cumulative AUM over INR 500 crore for HNIs & NRIs. This diversified AUM reflects his commitment to providing comprehensive financial solutions to various clients.",
    img: "",
  },
  {
    name: "Madhu Rai Garg",
    linkedin: "",
    desc: "Co-Founder with over 3 decades of experience, she emulates her father's illustrious career in insurance. She has been part of Mr. Qimat's CA firm since 1987. She has honed her finance expertise, specializes in Direct Taxation, MCA compliance, and providing bespoke Wealth Management solutions to both HNIs and NRIs. She has proven that with perseverance, willingness to learn, & an unwavering commitment to one's goals, individuals can surmount any obstacle & achieve remarkable success.",
    img: "",
  },
  {
    name: "Chaitnya Rai Garg",
    linkedin: "https://www.linkedin.com/in/chaitnya-garg-28b29128b/",
    desc: "Co-Founder with 2 decades of experience in high-growth sectors of telecom, logistics, aviation, hospitality, & the travel-related service industry. His domain expertise spans Project Financing, Project Appraisal, Business planning for startup & established enterprises, Domestic Transfer Pricing, Wealth Management & Managed Services. Has held senior leadership roles such as DGM Finance at InterGlobe Enterprises & Head - Financial Planning & Analysis at MOVIN Express.",
    img: "",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <div className="mx-[26px] ">
        <p className="font-normal text-[36px] py-[20px] md:text-start text-center">
          Leadership <span className="text-[#4640DE]">Team</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[15px]">
          {ceos.map((item, i) => (
            <div className="md:mt-0 mt-[20px]" key={i}>
              <div className="flex md:justify-start justify-center">
                <img
                  src="/assets/ceoPic/qimat.png"
                  alt={item.name}
                  className="rounded-[10px] shadow-lg md:w-[336px] w-[246px] hover:cursor-pointer grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="flex items-center mt-[33px]">
                <Link href={item.linkedin}>
                  <FaLinkedin className="h-[30px] w-[30px] text-[#0077B5]" />
                </Link>
                <p className="font-medium text-[20px] text-[#4640DE] ml-2 my-2">
                  {item.name}
                </p>
              </div>
              <p className="font-[400] text-[13px]  text-justify mt-[14px] md:w-[311px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="font-normal text-[36px] py-10 md:text-start text-center">
            About <span className="text-[#4640DE]">Us</span>
          </h2>
          <div className="flex md:flex-row flex-col-reverse justify-between gap-[27px] md:gap-[110px]">
            <p className="font-[400] text-[13px] md:w-[679px] text-justify">
              Throughout our journey of over four illustrious decades, we have
              consistently delivered unparalleled service, continuously
              exceeding expectations in every interaction. Our success lies in
              the delivery of exceptional service and personalized solutions. As
              trusted experts in Direct and Indirect Taxation, Financial
              Compliances Governance, Managed Services, Audit, Accounting, and
              seamless delivery of various Compliance Services, we remain
              committed to ensuring our clients success.
              <br />
              <br />
              FMR proudly holds the distinction of being a registered e-Return
              Intermediary, holding the ERI License issued by the Income Tax
              Department. Over the last 2 decades, we have filed over 3.5
              million Income Tax Return, with over half a million customers
              served. FMR is also empanelled with esteemed corporates such as
              Airtel, Optum, Amazon, Concentrix, Cadence, Swiggy, Colt, Sapient,
              Evalueserve, Mercer, Birlasoft, HDFC Bank, and over 120 other
              large and mid-sized companies. Our team comprises experienced
              professionals with an average work experience of 20+ years,
              including CAs, MBAs, LLBs, CSs, and CFAs.
              <br />
              <br />
              We have an enriched background and take pride in serving both
              domestic and international clients. We have expanded
              geographically by establishing a new branch office in Pune,
              Maharashtra. In pursuit of constant evolution, we have launched
              our refreshed brand, FMR with a client fresh, intuitive and
              user-friendly website. With FMR, we are now able to showcase our
              wide array of services to meet the evolving needs of clients from
              diverse industries. We are dedicated to providing innovative
              solutions, ensuring seamless and efficient tax filing processes,
              and empowering our clients to achieve their financial goals with
              confidence.
              <br />
              <br />
              FMR symbolizes our unwavering dedication to exceptional service,
              personalized solutions, and the success of our clients. It serves
              as a testament to our commitment to continuously adapt and evolve
              within the ever-changing business landscape.
            </p>
            <img
              src="/assets/team/team.png"
              alt="logo"
              className="md:w-[640px] rounded-[13px] w-[356px]  grayscale hover:cursor-pointer hover:grayscale-0 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
      <Team />
    </>
  );
}
