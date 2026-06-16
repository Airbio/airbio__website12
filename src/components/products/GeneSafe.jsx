import React, { useState } from "react";
import Header from "../Home/Header";
import whatsapp from "../../assets/images/Whatsapp1.svg";
import rightArrow from "../../assets/images/Chevron_Right.svg";
import Assistants from "../Home/Assistants";
import product1 from "../../assets/images/PCRworkstation/GeneSafe with glassdoor handle.png";
import product2 from "../../assets/images/PCRworkstation/PCRWorkststion-GaneSafe.png";
import product3 from "../../assets/images/PCRworkstation/genesafe6.jpeg";

import { Helmet } from "react-helmet-async";

// import PCRWorkstationQR from './PCRWorkstationQR'

const PCRWorkstationData = [
  {
    name: "PCR Workstation",
    title: "AirBio GeneSafe",
    highlighted: " PCR Workstation",
    title1: "Precision",
    title2: "Contamination-Free",
    title3: "Reliable",
    description1:
      "AirBio GeneSafe PCR Workstation is a high-performance clean working enclosure engineered for contamination-free PCR setup and molecular biology applications. Designed in accordance with international laboratory standards, the workstation combines UV decontamination technology, ergonomic design, and HEPA-filtered airflow to ensure reliable and reproducible PCR preparation.",
    description2:
      "Comparable in performance and functionality to leading international manufacturers such as Thermo Fisher Scientific, Esco Lifesciences, Bio-Rad Laboratories, and Labconco, the workstation is ideally suited for biotechnology, microbiology, molecular diagnostics, genomics, and academic research laboratories.",
    img1: product1,
    img2: product2,
    img3: product3,
    // img4: product2,
  },
];

const technicalSpecs = [
  { parameter: "Product Type", specification: "PCR Workstation / PCR Cabinet" },
  {
    parameter: "Construction Material",
    specification: "Powder-coated CRCA steel",
  },
  { parameter: "Internal Chamber", specification: "SS 304 Stainless Steel" },
  { parameter: "UV Lamp", specification: "254 nm Germicidal UV" },
  { parameter: "UV Intensity", specification: "≥ 40 µW/cm²" },
  { parameter: "UV Safety", specification: "Automatic Interlock System" },
  { parameter: "Airflow Type", specification: "Vertical Laminar Flow" },
  { parameter: "HEPA Filter Efficiency", specification: "99.97% @ 0.3 µm" },
  { parameter: "Air Velocity", specification: "0.3 – 0.5 m/s" },
  { parameter: "Noise Level", specification: "≤ 60 dB" },
  { parameter: "Illumination", specification: "LED / Fluorescent" },
  {
    parameter: "Control System",
    specification: "Digital / Microprocessor Based",
  },
  { parameter: "Power Supply", specification: "220–240 V AC, 50 Hz" },
  { parameter: "Safety Compliance", specification: "CE / ISO" },
  { parameter: "Configuration", specification: "Bench-top Model" },
];

const comparisonData = [
  { feature: "UV Decontamination", geneSafe: "Yes", international: "Yes" },
  { feature: "HEPA Filtration", geneSafe: "Yes", international: "Yes" },
  { feature: "SS 304 Chamber", geneSafe: "Yes", international: "Yes" },
  { feature: "Digital Control", geneSafe: "Yes", international: "Yes" },
  { feature: "Safety Interlock", geneSafe: "Yes", international: "Yes" },
  { feature: "Compact Design", geneSafe: "Yes", international: "Yes" },
  {
    feature: "Cost Efficiency",
    geneSafe: "High Advantage",
    international: "Premium Cost",
  },
  {
    feature: "Service Support in India",
    geneSafe: "Easily Available",
    international: "Limited/Costly in Some Regions",
  },
];

const GeneSafe = () => {
  const [selectedImage, setSelectedImage] = useState(product1);

  return (
    <>
      <Helmet>
        <title>
          AirBio GeneSafe PCR Workstation - Contamination Control for PCR Labs
        </title>
        <meta
          name="description"
          content="AirBio GeneSafe PCR Workstation provides superior contamination control for PCR laboratories with advanced clean air technology."
        />

        <link
          rel="canonical"
          href="https://www.airbio.in/product/PCRworkstation/GeneSafe"
        />

        {/* Meta Description + Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "GeneSafe PCR Workstation",
            description:
              "Advanced contamination-control workstation designed for PCR preparation and molecular biology applications.",
            brand: {
              "@type": "Brand",
              name: "AirBio",
            },
            manufacturer: {
              "@type": "Organization",
              name: "AirBio",
            },
            category: "PCR Workstation",
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a PCR workstation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A PCR workstation provides a contamination-controlled workspace for PCR sample preparation.",
                },
              },
              {
                "@type": "Question",
                name: "Why is contamination control important in PCR?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Contamination can affect PCR results, making a controlled environment essential.",
                },
              },
              {
                "@type": "Question",
                name: "Is GeneSafe suitable for molecular biology labs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it is specifically designed for PCR and molecular biology applications.",
                },
              },
            ],
          })}
        </script>
      </Helmet>
      <div>
        <Header />
        <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />
        <div className="p-6">
          {PCRWorkstationData.map((product, index) => (
            <div
              key={index}
              className="relative md:w-[90%] mx-auto md:flex justify-between items-center md:gap-8 pt-2 rounded-lg border-[#1782C5]"
            >
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

              {/* 1st Div: Images */}
              <div className="flex flex-col md:flex-row justify-center items-center border-[#1782C5] mb-5">
                {/* Main Image Display */}
                <div className="w-[90%] md:w-full flex justify-center items-center">
                  <img
                    src={selectedImage}
                    alt="Selected Product Image"
                    className="w-full h-[335px] p-4 px-4 lg:w-[423px] lg:h-[458px] object-cover rounded-lg mb-5 md:m-0 border border-[#1782C5]"
                  />
                </div>

                {/* Thumbnail Images */}
                <div className="h-auto pl-2 mb-5 flex md:flex-col justify-between items-center gap-5">
                  <img
                    src={product.img1}
                    alt="Product Image 1"
                    onClick={() => setSelectedImage(product.img1)}
                    className={`w-[75px] h-[75px] md:w-[107px] md:h-[107px] bg-[#F7F7F7] object-cover p-1 rounded-lg cursor-pointer ${
                      selectedImage === product.img1
                        ? "border-[#1782C5] border"
                        : ""
                    }`}
                  />
                  <img
                    src={product.img2}
                    alt="Product Image 2"
                    onClick={() => setSelectedImage(product.img2)}
                    className={`w-[75px] h-[75px] md:w-[107px] md:h-[107px] bg-[#F7F7F7] object-cover p-1 rounded-lg cursor-pointer ${
                      selectedImage === product.img2
                        ? "border-[#1782C5] border"
                        : ""
                    }`}
                  />
                  <img
                    src={product.img3}
                    alt="Product Image 3"
                    onClick={() => setSelectedImage(product.img3)}
                    className={`w-[75px] h-[75px] md:w-[107px] md:h-[107px] bg-[#F7F7F7] object-cover p-1 rounded-lg cursor-pointer ${
                      selectedImage === product.img3
                        ? "border-[#1782C5] border"
                        : ""
                    }`}
                  />
                </div>
              </div>

              {/* Right Side Content */}
              <div className="md:w-[60%]">
                {/* Name & Title */}
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

                {/* Tags */}
                <div className="mb-4 flex justify-between items-center md:justify-start gap-3 text-center md:text-start">
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

                {/* Description */}
                <div className="mb-4 text-justify">
                  <p className="mb-2 md:text-sm">{product.description1}</p>
                  <p className="md:text-sm">{product.description2}</p>
                </div>

                {/* Buttons */}
                <div className="mb-4 flex flex-col md:flex-row justify-center md:justify-start md:items-start md:flex-wrap items-center gap-5 mt-8">
                  <div className="flex justify-between gap-2">
                    <a
                      href="https://dashboard.skydo.com/pay/pyl_dd2QAQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-[#1782C5] text-white w-[193px] px-4 py-2 rounded-full hover:bg-[#1e1e1e]">
                        Buy Now
                      </button>
                    </a>
                  </div>
                  <div className="flex justify-between gap-2">
                    <a
                      href="https://api.whatsapp.com/send?phone=9899829299"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-[#1E1E1E] text-white w-[193px] px-4 py-2 rounded-full hover:bg-[#1782C5]">
                        Get a Quote
                      </button>
                    </a>
                  </div>
                  <div className="px-4 py-2 flex justify-between items-center gap-4 rounded-full border border-[#7A7A7A] hover:text-[#1782C5] hover:border-[#1782C5]">
                    <a
                      href="https://api.whatsapp.com/send?phone=9899829299"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex justify-center items-center gap-2">
                        <img src={whatsapp} alt="" />
                        Speak With Expert
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
            Meet AirBio's GeneSafe PCR Workstation
          </h1>
          <p className="my-5 md:px-2 text-justify">
            A reliable and advanced contamination-control workstation designed
            for molecular biology applications, the GeneSafe PCR Workstation
            combines UV decontamination technology with HEPA-filtered airflow
            and an ergonomic bench-top configuration — delivering reproducible
            and contamination-free PCR preparation for modern laboratories.
          </p>
        </div>

        {/* Key Features */}
        <div className="p-6 md:w-[90%] mx-auto">
          <h1 className="text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium">
            Key Features of GeneSafe PCR Workstation
          </h1>
          <div className="md:px-2">
            {[
              {
                bold: "UV Decontamination System",
                text: "with germicidal UV lamp for effective surface and air decontamination.",
              },
              {
                bold: "Optional HEPA-Filtered Vertical Laminar Airflow",
                text: "providing a clean, particle-free working environment.",
              },
              {
                bold: "SS 304 Stainless Steel Internal Chamber",
                text: "for durability and easy decontamination.",
              },
              {
                bold: "Microprocessor-Based Digital Control System",
                text: "for precise and reliable operation.",
              },
              {
                bold: "UV-Resistant Front Sash with Safety Interlock",
                text: "ensuring user protection during UV operation.",
              },
              {
                bold: "Low-Noise, Energy-Efficient Operation",
                text: "suitable for quiet laboratory environments.",
              },
              {
                bold: "Compact Ergonomic Bench-Top Configuration",
                text: "designed for minimal footprint and maximum convenience.",
              },
              {
                bold: "Easy-Clean Contamination-Resistant Interior Surfaces",
                text: "for hassle-free maintenance.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mt-5">
                <img
                  src={rightArrow}
                  alt="Right Arrow"
                  className="w-4 h-4 mt-1"
                />
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

        {/* Performance Advantages */}
        <div className="p-6 md:w-[90%] mx-auto">
          <h1 className="text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium">
            Performance Advantages
          </h1>
          <div className="md:px-2">
            {[
              "Provides contamination-free PCR setup environment.",
              "Reduces risk of false-positive amplification results.",
              "Enhances reproducibility in molecular workflows.",
              "Suitable for high-sensitivity DNA/RNA applications.",
              "Designed for continuous laboratory operation.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mt-5">
                <img
                  src={rightArrow}
                  alt="Right Arrow"
                  className="w-4 h-4 mt-1"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="p-6 md:w-[90%] mx-auto">
          <h1 className="text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium">
            Applications
          </h1>
          <div className="md:px-2">
            {[
              "PCR master mix preparation.",
              "DNA/RNA sample handling.",
              "Molecular diagnostics.",
              "Genomics and proteomics workflows.",
              "RT-PCR and nucleic acid amplification procedures.",
              "Biotechnology and life science research.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mt-5">
                <img
                  src={rightArrow}
                  alt="Right Arrow"
                  className="w-4 h-4 mt-1"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Features */}
        <div className="p-6 md:w-[90%] mx-auto">
          <h1 className="text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium">
            Safety Features
          </h1>
          <div className="md:px-2">
            {[
              "UV interlock protection.",
              "Separate UV and illumination controls.",
              "Smooth contamination-resistant interior surfaces.",
              "Electrical grounding and overload protection.",
              "Low-vibration, low-noise blower system.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mt-5">
                <img
                  src={rightArrow}
                  alt="Right Arrow"
                  className="w-4 h-4 mt-1"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Standard Accessories */}
        <div className="p-6 md:w-[90%] mx-auto">
          <h1 className="text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium">
            Standard Accessories
          </h1>
          <div className="md:px-2">
            {[
              "UV germicidal lamp.",
              "LED/fluorescent illumination system.",
              "HEPA filter.",
              "User manual and power cord.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mt-5">
                <img
                  src={rightArrow}
                  alt="Right Arrow"
                  className="w-4 h-4 mt-1"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance & Certification */}
        <div className="p-6 md:w-[90%] mx-auto">
          <h1 className="text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium">
            Compliance & Certification
          </h1>
          <div className="md:px-2">
            {[
              { bold: "CE Certified", text: "(where applicable)." },
              { bold: "ISO Compliant", text: "manufacturing facility." },
              { bold: "Factory Tested", text: "prior to dispatch." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mt-5">
                <img
                  src={rightArrow}
                  alt="Right Arrow"
                  className="w-4 h-4 mt-1"
                />
                <p>
                  <b>{item.bold}</b> {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty & Support */}
        <div className="p-6 md:w-[90%] mx-auto">
          <h1 className="text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium">
            Warranty & Support
          </h1>
          <div className="md:px-2">
            {[
              {
                bold: "12 Months Comprehensive Warranty",
                text: "on all components.",
              },
              {
                bold: "Installation and Operational Training Support",
                text: "provided at setup.",
              },
              {
                bold: "After-Sales Technical Service Support",
                text: "available pan India.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mt-5">
                <img
                  src={rightArrow}
                  alt="Right Arrow"
                  className="w-4 h-4 mt-1"
                />
                <p>
                  <b>{item.bold}</b> {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended For */}
        <div className="p-6 md:w-[90%] mx-auto">
          <h1 className="text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium">
            Recommended For
          </h1>
          <div className="md:px-2">
            {[
              "Biotechnology Laboratories",
              "Molecular Biology Laboratories",
              "Research Institutes",
              "Diagnostic Laboratories",
              "Universities & Academic Institutions",
              "Pharmaceutical & Life Science Laboratories",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mt-5">
                <img
                  src={rightArrow}
                  alt="Right Arrow"
                  className="w-4 h-4 mt-1"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="p-6 md:w-[90%] mx-auto">
          <h1 className="text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium">
            GeneSafe vs Leading International Brands
          </h1>
          <div className="md:px-2 mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1782C5] text-white">
                  <th className="text-left p-3 font-medium rounded-tl-lg">
                    Feature
                  </th>
                  <th className="text-left p-3 font-medium">GeneSafe</th>
                  <th className="text-left p-3 font-medium rounded-tr-lg">
                    Leading International Brands
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-[#F5F5F5]" : "bg-white"}
                  >
                    <td className="p-3 font-medium text-[#1E1E1E]">
                      {row.feature}
                    </td>
                    <td className="p-3 text-[#444444]">{row.geneSafe}</td>
                    <td className="p-3 text-[#444444]">{row.international}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* <PCRWorkstationQR /> */}

        <div className="py-10">
          <Assistants />
        </div>
      </div>
    </>
  );
};

export default GeneSafe;
