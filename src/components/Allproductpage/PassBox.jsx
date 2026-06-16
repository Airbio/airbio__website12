import React, { useState } from "react";
import Header from "../Home/Header";
import vector from "../../assets/images/Vector.svg";
import arrow from "../../assets/images/crossArrow.svg";
import { Link } from "react-router-dom";

// Pass Box Images
import staticMainStage from "../../assets/images/StaticPassBox/Static-Pass-Box-Stage.png";
import staticMain from "../../assets/images/StaticPassBox/Static-Pass-Box.png";
import dynamicMain from "../../assets/images/DynamicPassBox/Dynamic-Pass-Box.png";
import passbox from "../../assets/images/StaticPassBox/Pass-Box.png";
import post3 from "../../assets/images/Post3.webp";

// Features Icons
import icon1 from "../../assets/images/PCRworkstation/keyfeatures/feature1.svg";
import icon2 from "../../assets/images/PCRworkstation/keyfeatures/feature2.svg";
import icon3 from "../../assets/images/PCRworkstation/keyfeatures/feature3.svg";
import icon4 from "../../assets/images/PCRworkstation/keyfeatures/feature4.svg";
import icon5 from "../../assets/images/PCRworkstation/keyfeatures/feature5.svg";
import icon6 from "../../assets/images/PCRworkstation/keyfeatures/feature6.svg";

import { Helmet } from "react-helmet-async";

const features = [
  {
    icon: icon1,
    title: "Mechanical Interlocking Doors",
    description:
      "Prevents simultaneous opening of both doors to maintain contamination control.",
  },
  {
    icon: icon2,
    title: "SS 304 Stainless Steel Chamber",
    description: "Durable, corrosion-resistant, and easy-to-clean interior.",
  },
  {
    icon: icon3,
    title: "Tempered Glass Viewing Windows",
    description: "Clear visibility during material transfer.",
  },
  {
    icon: icon4,
    title: "UV Disinfection System",
    description: "Optional germicidal UV lamp for surface decontamination.",
  },
  {
    icon: icon5,
    title: "HEPA Filtration",
    description: "Optional high-efficiency air filtration in dynamic models.",
  },
  {
    icon: icon6,
    title: "Low Noise & Energy Efficient",
    description: "Quiet operation suitable for laboratory environments.",
  },
];

const cardsData = [
  {
    title: "Static",
    image: staticMain,
    subtitle: "Static Pass Box",
    description: "Mechanical interlock system for safe material transfer",
    buttonText: "Visit Product",
    path: "/product/PassBox/staticpassbox",
  },
  {
    title: "Dynamic",
    image: dynamicMain,
    subtitle: "Dynamic Pass Box",
    description: "Active HEPA filtered airflow with interlock protection",
    buttonText: "Visit Product",
    path: "/product/passbox/dynamic-passbox",
  },
];

const PassBox = () => {
  const [showAll, setShowAll] = useState(false);

  const handleReadMore = () => {
    setShowAll(true);
  };

  return (
    <>
      <Helmet>
        <title>AirBio Pass Boxes - Static and Dynamic Pass Box Solutions for Cleanrooms</title>
        <meta
          name="description"
          content="Explore AirBio Pass Box solutions including Static Pass Box and Dynamic Pass Box systems designed for contamination-free material transfer in cleanrooms and controlled environments."
        />
        <link rel="canonical" href="https://www.airbio.in/product/PassBox" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Pass Boxes",
            description:
              "Explore AirBio Static and Dynamic Pass Boxes for cleanroom material transfer and contamination control.",
            url: "https://www.airbio.in/product/PassBox",
          })}
        </script>
      </Helmet>
      <div>
        <Header />
        <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

        <div className="">
          {/* Hero Section */}
          <div className="p-5 md:w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-5">
              <h1 className="text-3xl md:text-5xl font-medium text-center lg:text-start my-3 md:mb-8 text-[#1782C5] leading-10 md:leading-tight lg:w-[280px]">
                Pass Boxes
              </h1>
              <div className="flex items-center justify-center gap-3 md:gap-5">
                <p className="border border-black p-1 px-4 text-sm md:text-lg rounded-3xl">
                  Contamination-Free
                </p>
                <p className="border border-black p-1 px-4 text-sm md:text-lg rounded-3xl">
                  Safe Transfer
                </p>
                <p className="border border-black p-1 px-4 text-sm md:text-lg rounded-3xl">
                  Reliable
                </p>
              </div>
            </div>
            <div className="">
              <img
                src={staticMainStage}
                alt="Pass Box"
                className="md:h-[404px] md:w-auto object-cover"
              />
            </div>
          </div>

          {/* All Pass Boxes Section */}
          <div>
            <div className="gap-3 p-5 flex flex-col my-5 items-center">
              <h1 className="p-2 px-4 text-2xl mt-8 border border-[#C0C0C0] rounded-full font-medium inline-block text-center">
                All Pass Boxes
              </h1>
              <p className="text-sm text-[#1E1E1E] text-center">
                AirBio Pass Boxes ensure safe and contamination-free material
                transfer between different classified areas.
              </p>
            </div>

            <div className="pl-5 md:pl-10">
              <div className="flex md:justify-center md:overflow-hidden overflow-x-scroll scrollbar scrollbar-thumb-customBlue scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pr-5 md:pr-10 gap-4 md:gap-10 py-4 mx-auto">
                {cardsData.map((card, index) => (
                  <div key={index}>
                    {/* Card Image */}
                    <div className="min-w-[318px] md:w-[300px] h-[370px] flex flex-col justify-center items-center md:min-w-0 rounded-3xl p-4 border border-[#CDCDCD]">
                      {card.showTitle && (
                        <h2 className="text-[16px] p-[4px] px-4 border-[#1782C5] text-[#1782C5] border rounded-[50px]">
                          {card.title}
                        </h2>
                      )}
                      <img
                        src={card.image}
                        alt={card.subtitle}
                        className="w-auto h-[302px] md:w-[221px] object-cover py-4"
                        style={{ objectFit: "contain" }}
                      />
                    </div>

                    {/* Card Details */}
                    <div className="py-2 md:w-[300px] flex flex-col justify-center items-center md:items-start">
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

          {/* Key Features */}
          <div className="my-10 p-5 md:my-16 md:py-5">
            <h1 className="text-2xl font-medium text-center my-5 pb-5">
              Key Features of <span className="text-[#1782C5]">Pass Boxes</span>
            </h1>

            <div className="grid grid-cols-1 md:max-w-[97%] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8 md:wp-5">
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
                    <div className="pr-3 w-[75%]">
                      <h1 className="font-medium mb-4">{feature.title}</h1>
                      <p className="text-sm text-[#1E1E1E] text-opacity-75">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {!showAll && (
              <div className="flex justify-center items-center mt-5">
                <button
                  className="bg-white flex justify-between items-center gap-3 hover:bg-black hover:text-white w-auto h-[38px] px-2 pl-3 bg-transparent border-[#1782C5] rounded-full border"
                  onClick={handleReadMore}
                >
                  Read more
                  <div className="bg-[#1782C5] flex items-center justify-center text-white w-[28px] h-[28px] p-2 rounded-full">
                    <img src={arrow} alt="Down arrow icon" />
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* About Pass Boxes */}
          <div className="my-10 p-5">
            <div className="bg-[#F8F8F8] lg:w-[80%] mx-auto p-5 px-6 flex flex-col md:flex-row items-center gap-5 rounded-lg">
              <div className="md:w-[40%]">
                <img
                  src={post3}
                  alt=""
                  className="w-[300px] h-auto md:h-[300px] md:w-[318px] object-cover rounded-xl"
                />
              </div>
              <div className="md:w-[60%] md:px-5 lg:px-0 lg:mr-8">
                <h1 className="text-xl text-center md:text-start md:text-3xl font-medium mb-5">
                  About <span className="text-[#1782C5]">Pass Boxes</span>
                </h1>
                <p className="text-justify text-[14px] text-opacity-75">
                  Pass Boxes are essential cleanroom equipment designed to
                  transfer materials between two different classified areas
                  without compromising the sterility of the environment. They
                  act as an airlock system that prevents cross-contamination
                  during material movement.
                </p>
              </div>
            </div>
          </div>

          {/* Meet AirBio’s Pass Box */}
          <div className="my-10 p-5">
            <div className="bg-[#F8F8F8] lg:w-[80%] mx-auto p-5 px-6 flex flex-col md:flex-row items-center gap-5 rounded-lg">
              <div className="md:w-[40%]">
                <img
                  src={passbox}
                  alt=""
                  className="w-[300px] h-auto md:h-[300px] md:w-auto object-cover rounded-xl"
                />
              </div>
              <div className="md:w-[60%] md:px-5 lg:px-0 lg:mr-8">
                <h1 className="text-xl text-center md:text-start md:text-3xl font-medium mb-5">
                  Meet AirBio’s{" "}
                  <span className="text-[#1782C5]">Pass Boxes</span>
                </h1>
                <p className="text-justify text-[14px] text-opacity-75">
                  AirBio offers both Static and Dynamic Pass Boxes engineered
                  for superior contamination control. Built with SS 304
                  stainless steel, mechanical interlocks, and optional HEPA
                  filtration & UV disinfection, they ensure safe, efficient, and
                  reliable material transfer in pharmaceutical, biotechnology,
                  and healthcare facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassBox;
