import React, { useState } from "react";
import Header from "../Home/Header";
import whatsapp from "../../assets/images/Whatsapp1.svg";
import rightArrow from "../../assets/images/Chevron_Right.svg";
import Assistants from "../Home/Assistants";

// Air Shower Images (apne assets folder mein daal dena)
import product1 from "../../assets/images/AirShower/Air-Shower-Main.png";
import product2 from "../../assets/images/AirShower/Air-Shower-2.png";
// import product3 from '../../assets/images/AirShower/air-shower-3.png'

import { Helmet } from "react-helmet-async";

const AirShowerData = [
  {
    name: "Air Shower",
    title: "AirBio Air Shower",
    highlighted: " Air Shower",
    title1: "Precision",
    title2: "Contamination-Free",
    title3: "Reliable",
    description1:
      "AirBio Air Shower is a high-performance contamination control equipment designed to eliminate dust, particles, and germs from personnel before entering cleanroom areas. It uses high-velocity HEPA filtered air to ensure maximum cleanliness and regulatory compliance.",
    description2:
      "Ideal for Pharmaceutical, Biotechnology, API Manufacturing, Electronics, Food Processing, and other controlled environments.",
    img1: product1,
    img2: product2,
    // img3: product3,
  },
];

const technicalSpecs = [
  { parameter: "Product Type", specification: "Air Shower" },
  {
    parameter: "Construction Material",
    specification: "Powder-coated CRCA steel / SS 304",
  },
  { parameter: "Internal Chamber", specification: "SS 304 Stainless Steel" },
  { parameter: "Filtration", specification: "HEPA Filter 99.99% @ 0.3 µm" },
  { parameter: "Air Velocity", specification: "20-25 m/s (High Velocity)" },
  { parameter: "Door Type", specification: "Interlocking Doors" },
  {
    parameter: "Control System",
    specification: "Microprocessor / HMI + PLC Based",
  },
  { parameter: "Power Supply", specification: "220–240 V AC, 50 Hz" },
  {
    parameter: "Configuration",
    specification: "Single Leaf / Double Leaf Door",
  },
];

const keyFeatures = [
  {
    bold: "High-Efficiency HEPA Filtration",
    text: "99.99% efficiency down to 0.3 microns.",
  },
  {
    bold: "Interlocking Doors",
    text: "Prevents simultaneous opening to maintain contamination control.",
  },
  {
    bold: "High Velocity Airflow",
    text: "Powerful air jets remove particles from clothes and skin.",
  },
  {
    bold: "Customizable Configurations",
    text: "Available in single/double door and various sizes.",
  },
  {
    bold: "Easy Maintenance",
    text: "Accessible panels for quick filter replacement.",
  },
  {
    bold: "GMP & Regulatory Compliance",
    text: "Meets international cleanroom standards.",
  },
];

const AirShower = () => {
  const [selectedImage, setSelectedImage] = useState(product1);

  return (
    <>
      <Helmet>
        <title>Air Shower | Airbio</title>

        <link
          rel="canonical"
          href="https://www.airbio.in/product/PassBox/airshowers/airshower"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "AirBio Air Shower",
            description:
              "High-velocity HEPA filtered air shower system for personnel decontamination before entering controlled environments.",
            brand: {
              "@type": "Brand",
              name: "AirBio",
            },
            manufacturer: {
              "@type": "Organization",
              name: "AirBio",
            },
            category: "Air Shower",
          })}
        </script>
      </Helmet>
      <div>
        <Header />
        <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

        {/* Hero Section */}
        <div className="p-6">
          {AirShowerData.map((product, index) => (
            <div
              key={index}
              className="relative md:w-[90%] mx-auto md:flex justify-between items-center md:gap-8 pt-2 rounded-lg border-[#1782C5]"
            >
              {/* Mobile Title */}
              <div className="mb-4 text-center md:hidden">
                <h2 className="m-2 mb-3 py-2 px-4 md:m-0 border border-black inline-block font-medium rounded-full">
                  {product.name}
                </h2>
                <h3 className="text-2xl md:text-3xl text-[#1E1E1E]">
                  {product.title.split(product.highlighted)[0]}
                  <span className="text-[#1782C5]">{product.highlighted}</span>
                  {product.title.split(product.highlighted)[1]}
                </h3>
              </div>

              {/* Images */}
              <div className="flex flex-col md:flex-row justify-center items-center border-[#1782C5] mb-5">
                <div className="w-[90%] md:w-full flex justify-center items-center">
                  <img
                    src={selectedImage}
                    alt="Selected Product"
                    className="w-full h-[335px] p-4 px-4 lg:w-[423px] lg:h-[458px] object-contain rounded-lg mb-5 md:m-0 border border-[#1782C5]"
                  />
                </div>
                <div className="h-auto pl-2 mb-5 flex md:flex-col justify-between items-center gap-5">
                  {[product.img1, product.img2].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Product ${i + 1}`}
                      onClick={() => setSelectedImage(img)}
                      className={`w-[75px] h-[75px] md:w-[107px] md:h-[107px] bg-[#F7F7F7] object-contain p-1 rounded-lg cursor-pointer ${
                        selectedImage === img ? "border-[#1782C5] border" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Content */}
              <div className="md:w-[60%]">
                <div className="hidden md:block mb-4 text-center md:text-start">
                  <h2 className="m-2 py-2 px-4 md:m-0 border border-black inline-block rounded-full font-medium">
                    {product.name}
                  </h2>
                  <h3 className="md:text-3xl text-[#1E1E1E] pt-4">
                    {product.title.split(product.highlighted)[0]}
                    <span className="text-[#1782C5]">
                      {product.highlighted}
                    </span>
                    {product.title.split(product.highlighted)[1]}
                  </h3>
                </div>

                <div className="mb-4 flex justify-between items-center md:justify-start gap-3">
                  <h3 className="text-md text-[#1782C5] p-1 px-4 border border-[#1782C5] rounded-full">
                    {product.title1}
                  </h3>
                  <h3 className="text-md text-[#1782C5] p-1 px-4 border border-[#1782C5] rounded-full">
                    {product.title2}
                  </h3>
                  <h3 className="text-md text-[#1782C5] p-1 px-4 border border-[#1782C5] rounded-full">
                    {product.title3}
                  </h3>
                </div>

                <div className="mb-4 text-justify">
                  <p className="mb-2 md:text-sm">{product.description1}</p>
                  <p className="md:text-sm">{product.description2}</p>
                </div>

                <div className="mb-4 flex flex-col md:flex-row gap-5 mt-8">
                  <a
                    href=" https://dashboard.skydo.com/pay/pyl_5IEig6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#1782C5] text-white w-[193px] px-4 py-2 rounded-full hover:bg-[#1e1e1e]">
                      Buy Now
                    </button>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=9899829299"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#1E1E1E] text-white w-[193px] px-4 py-2 rounded-full hover:bg-[#1782C5]">
                      Get a Quote
                    </button>
                  </a>
                  <div className="px-4 py-2 flex items-center gap-4 rounded-full border border-[#7A7A7A] hover:text-[#1782C5] hover:border-[#1782C5]">
                    <a
                      href="https://api.whatsapp.com/send?phone=9899829299"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center gap-2">
                        <img src={whatsapp} alt="" /> Speak With Expert
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="p-6 md:w-[90%] mx-auto">
          <h1 className="text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium">
            Meet AirBio's Air Shower
          </h1>
          <p className="my-5 md:px-2 text-justify">
            AirBio Air Shower acts as a barrier to keep the cleanroom extremely
            clean by removing contaminants from personnel through high-velocity
            HEPA filtered air before they enter the controlled area.
          </p>
        </div>

        {/* Key Features */}
        <div className="p-6 md:w-[90%] mx-auto">
          <h1 className="text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium">
            Key Features of AirBio Air Shower
          </h1>
          <div className="md:px-2">
            {keyFeatures.map((item, i) => (
              <div key={i} className="flex items-start gap-3 mt-5">
                <img src={rightArrow} alt="→" className="w-4 h-4 mt-1" />
                <p>
                  <b>{item.bold}</b> {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="p-6 md:w-[90%] mx-auto">
          <h1 className="text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium">
            Technical Specifications
          </h1>
          <div className="md:px-2 mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1782C5] text-white">
                  <th className="text-left p-3 font-medium rounded-tl-lg">
                    Parameter
                  </th>
                  <th className="text-left p-3 font-medium rounded-tr-lg">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-[#F5F5F5]" : "bg-white"}
                  >
                    <td className="p-3 font-medium text-[#1E1E1E]">
                      {row.parameter}
                    </td>
                    <td className="p-3 text-[#444444]">{row.specification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Working Principle */}
        <div className="p-6 md:w-[90%] mx-auto">
          <h1 className="text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium">
            Working Principle
          </h1>
          <div className="md:px-2 mt-4 text-justify">
            <p>
              The Air Shower has doors opening on sides. When a person enters
              and the cycle starts, high-velocity HEPA filtered air blows from
              nozzles removing contaminants from clothes and skin. After the
              cycle completes, the person can exit from the other side.
            </p>
          </div>
        </div>

        {/* Size Chart / Models */}
        <div className="p-6 md:w-[90%] mx-auto">
          <h1 className="text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium">
            Size Chart for Air Shower
          </h1>
          <div className="md:px-2 mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1782C5] text-white">
                  <th className="p-3">Type</th>
                  <th className="p-3">Person/Cycle</th>
                  <th className="p-3">Internal Dimensions</th>
                  <th className="p-3">Model</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#F5F5F5]">
                  <td className="p-3">Type I</td>
                  <td className="p-3">1-2</td>
                  <td className="p-3">1200×1000×2050 mm</td>
                  <td className="p-3">AS-SLD-121 2SS</td>
                </tr>
                <tr>
                  <td className="p-3">Type II</td>
                  <td className="p-3">2-4</td>
                  <td className="p-3">1500×2000×2050 mm</td>
                  <td className="p-3">AS-SLD-152 2SS</td>
                </tr>
                <tr className="bg-[#F5F5F5]">
                  <td className="p-3">Type III</td>
                  <td className="p-3">2-5</td>
                  <td className="p-3">2330×2000×2050 mm</td>
                  <td className="p-3">AS-SLD-232 2SS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Accessories */}
        <div className="p-6 md:w-[90%] mx-auto">
          <h1 className="text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium">
            Accessories
          </h1>
          <div className="md:px-2 mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1782C5] text-white">
                  <th className="text-left p-3">Accessory</th>
                  <th className="text-left p-3">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    acc: "Vertical/Horizontal Door",
                    desc: "Various door configurations",
                  },
                  { acc: "Buzzers", desc: "Audible alarms for safety" },
                  {
                    acc: "HMI+PLC Control System",
                    desc: "Touchscreen interface for easy operation",
                  },
                ].map((item, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-[#F5F5F5]" : "bg-white"}
                  >
                    <td className="p-3 font-medium">{item.acc}</td>
                    <td className="p-3">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="py-10">
          <Assistants />
        </div>
      </div>
    </>
  );
};

export default AirShower;
