import React, { useState } from "react";
import Header from "../Home/Header";
import img1 from "../../assets/images/PCRworkstation/GeneSafe with glassdoor handle.png";
import art1 from "../../assets/images/laminar/Vertical Laminar AirFlow/Vertical Laminar Airflow-FRONT.webp";
import art2 from "../../assets/images/laminar/Vertical Laminar Flow (Velocity)/Vertical Laminar Flow (Velocity)-FRONT.webp";
import vector from "../../assets/images/Vector.svg";
import post2 from "../../assets/images/PCRworkstation/genesafe6.jpeg";
// import post2 from '../../assets/images/Post2.webp'
import post3 from "../../assets/images/Post3.webp";
import icon1 from "../../assets/images/PCRworkstation/keyfeatures/feature1.svg";
import icon2 from "../../assets/images/PCRworkstation/keyfeatures/feature2.svg";
import icon3 from "../../assets/images/PCRworkstation/keyfeatures/feature3.svg";
import icon4 from "../../assets/images/PCRworkstation/keyfeatures/feature4.svg";
import icon5 from "../../assets/images/PCRworkstation/keyfeatures/feature5.svg";
import icon6 from "../../assets/images/PCRworkstation/keyfeatures/feature6.svg";

import arrow from "../../assets/images/crossArrow.svg";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

const features = [
  {
    icon: icon1,
    title: "UV Decontamination System",
    description:
      "Advanced germicidal UV lamp for effective contamination control.",
  },
  {
    icon: icon2,
    title: "HEPA-Filtered Airflow",
    description: "Ensures clean and particle-free working conditions.",
  },
  {
    icon: icon3,
    title: "SS 304 Stainless Steel Chamber",
    description: "Durable, corrosion-resistant, and easy-to-clean interior.",
  },
  {
    icon: icon4,
    title: "Digital Control System",
    description: "Microprocessor-based controls for precise operation.",
  },
  {
    icon: icon5,
    title: "UV Safety Interlock",
    description: "Enhanced operator safety with automatic UV protection.",
  },
  {
    icon: icon6,
    title: "Low Noise Operation",
    description: "Energy-efficient and quiet performance for laboratories.",
  },
  // {
  //     icon: icon7,
  //     title: "10° Angled Safety Glass",
  //     description:
  //         "Ergonomic visibility and comfort. ",
  // },
  // {
  //     icon: icon8,
  //     title: "Glass Side Walls",
  //     description:
  //         "Providing enhanced illumination and visibility during operations. ",
  // },
];

const cardsData = [
  {
    title: "GeneSafe",
    image: img1,
    subtitle: "GeneSafe PCR WorkStation",
    description:
      "Advanced Contamination-Control Workstation for Molecular Biology Applications",
    buttonText: "Visit Product",
    path: "/product/PCRworkstation/GeneSafe",
  },
  // {
  //     title: "Velocity",
  //     image: art2,
  //     subtitle: "Vertical Laminar AirFlow",
  //     description: "Safeguard samples but aren’t suitable for hazardous substances",
  //     buttonText: "Visit Product",
  //     showTitle: true,
  //     path: '/product/laminar/Airflow(Velocity)',
  // },
];

const PCRworkstation = () => {
  const [showAll, setShowAll] = useState(false);

  const handleReadMore = () => {
    setShowAll(true);
  };

  return (
    <>
      <Helmet>
        <title>PCR Workstation | Airbio</title>

        <link
          rel="canonical"
          href="https://www.airbio.in/product/PCRworkstation"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "PCR Workstations",
            description:
              "AirBio PCR Workstations provide contamination-free environments for PCR preparation and molecular biology applications.",
            url: "https://www.airbio.in/product/PCRworkstation",
          })}
        </script>
      </Helmet>
      <div>
        <Header />
        <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

        <div className="">
          <div className="p-5 md:w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center ">
            <div className="mb-5">
              <h1 className="text-3xl md:text-5xl font-medium text-center lg:text-start my-3 md:mb-8 text-[#1782C5] leading-10 md:leading-tight lg:w-[250px]">
                PCR Workstations
              </h1>
              <div className="flex items-center justify-center gap-3 md:gap-5">
                <p className="border border-black p-1 px-4 text-sm md:text-lg rounded-3xl">
                  Contamination-Free
                </p>
                <p className="border border-black p-1 px-4 text-sm md:text-lg rounded-3xl">
                  Precision
                </p>
                <p className="border border-black p-1 px-4 text-sm md:text-lg rounded-3xl">
                  Safety
                </p>
              </div>
            </div>
            <div className="">
              <img
                src={img1}
                alt=""
                className="md:h-[404px] md:w-auto object-cover"
              />
            </div>
          </div>

          {/* all cabinets */}
          <div>
            <div>
              <div className="gap-3 p-5 flex flex-col my-5 items-center">
                <h1 className="p-2 px-4 text-2xl mt-8 border border-[#C0C0C0] rounded-full font-medium inline-block text-center">
                  All PCR Workstations
                </h1>
                <p className=" text-sm text-[#1E1E1E] text-center">
                  AirBio PCR Workstations deliver reliable contamination control
                  for accurate molecular biology workflows.
                </p>
              </div>
              <div className="pl-5 md:pl-10">
                <div className="flex md:justify-center md:overflow-hidden  overflow-x-scroll scrollbar scrollbar-thumb-customBlue scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pr-5 md:pr-10 gap-4 md:gap-10 py-4 mx-auto">
                  {cardsData.map((card, index) => (
                    <div key={index}>
                      {/* Card Content */}
                      <div className="min-w-[318px]  md:w-[300px] h-[370px] flex flex-col justify-center items-center md:min-w-0 rounded-3xl p-4 border border-[#CDCDCD]">
                        {card.showTitle && (
                          <h2 className="text-[16px] p-[4px] px-4 border-[#1782C5] text-[#1782C5] border rounded-[50px]">
                            {card.title}
                          </h2>
                        )}
                        <img
                          src={card.image}
                          alt={`Card ${index + 1}`}
                          className="w-auto h-[302px] md:w-[221px] object-cover py-4"
                        />
                      </div>

                      {/* Card Details */}
                      <div className="py-2 md:w-[300px] flex flex-col justify-center  items-center md:items-start">
                        <h1 className="font-medium md:text-start text-lg">
                          {card.subtitle}
                        </h1>
                        <p className="text-[#1782C5] text-center mb-3 md:text-start h-[50px]">
                          {card.description}
                        </p>
                        <Link to={card.path}>
                          <button className="px-4 py-1 bg-black hover:bg-[#1782C5] text-white flex justify-center items-center gap-2 rounded-[50px] mt-5 border-[#CDCDCD]">
                            {card.buttonText}
                            <img src={vector} alt="vector icon" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* features */}
          <div className="my-10 p-5 md:my-16 md:py-5">
            <h1 className="text-2xl font-medium text-center my-5 pb-5">
              Key Features of{" "}
              <span className="text-[#1782C5]">PCR Workstations</span>
            </h1>

            <div className="grid grid-cols-1 md:max-w-[97%] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8 md:wp-5 ">
              {features
                .filter((_, index) => showAll || index < 6)
                .map((feature, index) => (
                  <div
                    key={index}
                    className="flex w-full max-w-[350px] md:max-w-[370px] bg-[#F8F8F8] py-5 rounded-xl mx-auto"
                  >
                    <div className="pl-3 md:pl-4 w-[25%] py-1 px-2">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-14 h-14 brightness-0"
                      />
                    </div>
                    <div className="pr-3 w-[75%] ">
                      <h1 className="font-medium mb-4">{feature.title}</h1>
                      <p className="text-sm text-[#1E1E1E] text-opacity-75">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            {/* Show the button only on mobile screens */}
            {!showAll && (
              <div className="flex justify-center items-center mt-5">
                <button
                  className="bg-white flex justify-between items-center gap-3 hover:bg-black hover:text-white w-auto h-[38px] px-2 pl-3 bg-transparent border-[#1782C5] rounded-full border"
                  onClick={handleReadMore}
                >
                  Read more
                  <div className="bg-[#1782C5]  flex items-center justify-center text-white w-[28px] h-[28px] p-2 rounded-full">
                    <img src={arrow} className="" alt="Down arrow icon" />
                  </div>
                </button>
              </div>
            )}
          </div>

          <div className="my-10 p-5">
            <div className="bg-[#F8F8F8] lg:w-[80%] mx-auto p-5 px-6 flex flex-col md:flex-row items-center gap-5 rounded-lg">
              <div className="md:w-[40%]">
                <img
                  src={post3}
                  alt=""
                  className="w-[300px] h-auto  md:h-[300px] md:w-[318px] object-cover rounded-xl"
                />
              </div>

              <div className="md:w-[60%] md:px-5 lg:px-0 lg:mr-8 ">
                <h1 className="text-xl text-center md:text-start md:text-3xl font-medium mb-5">
                  About{" "}
                  <span className="text-[#1782C5]">PCR Workstations</span>{" "}
                </h1>
                <p className="text-justify text-[14px] text-opacity-75">
                  PCR Workstations are specially designed clean working
                  enclosures used for contamination-free PCR preparation and
                  molecular biology applications. Equipped with UV
                  decontamination technology and optional HEPA-filtered vertical
                  airflow, these workstations help maintain sterile working
                  conditions and improve the accuracy of sensitive DNA/RNA
                  procedures. Their ergonomic and compact design makes them
                  ideal for modern research and diagnostic laboratories."
                </p>
              </div>
            </div>
          </div>

          <div className="my-10 p-5">
            <div className="bg-[#F8F8F8] lg:w-[80%] mx-auto p-5 px-6 flex flex-col md:flex-row items-center gap-5 rounded-lg">
              <div className="md:w-[40%]">
                <img
                  src={post2}
                  alt=""
                  className="w-[300px] h-auto  md:h-[300px] md:w-auto object-cover rounded-xl"
                />
              </div>

              <div className="md:w-[60%] md:px-5 lg:px-0 lg:mr-8 ">
                <h1 className="text-xl text-center md:text-start md:text-3xl font-medium mb-5">
                  Meet AirBio’s{" "}
                  <span className="text-[#1782C5]">
                    GeneSafe PCR Workstation
                  </span>
                </h1>
                <p className="text-justify text-[14px] text-opacity-75">
                  AirBio’s GeneSafe PCR Workstation is engineered for
                  high-performance molecular workflows and
                  contamination-sensitive applications. Built with advanced
                  safety features, UV protection, and efficient airflow
                  technology, it delivers dependable performance for PCR setup,
                  RT-PCR procedures, genomics research, and molecular
                  diagnostics. Designed for laboratories that demand precision,
                  safety, and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PCRworkstation;
