import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Hero from "./Hero";
import Slider from "./Slider";
import About from "./About";
import Certification from "./Certification";
import FAQ from "./FAQ";
import Team from "./Team.jsx";
import Footer from "../Footer/Footer.jsx";
import CardPost from "./CardPost.jsx";
import Applications from "./Applications.jsx";
import Products from "../products/Product.jsx";
import Instagram from "./Instagram.jsx";
import Assistants from "./Assistants.jsx";
import Crousal from "./Crousal.jsx";

import { Helmet } from "react-helmet-async";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Airbio</title>
        <meta
          name="description"
          content="AirBio is a leading manufacturer of Biosafety Cabinets, Laminar Air Flow Units, Fume Hoods, Pass Boxes, Air Showers and Cleanroom Equipment in India."
        />

        <link rel="canonical" href="https://www.airbio.in/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AirBio",
            url: "https://www.airbio.in",
            email: "info@airbio.in",
            telephone: "+91-9899829299",
            address: {
              "@type": "PostalAddress",
              streetAddress: "12/42, Pioneer Compound, Site IV",
              addressLocality: "Ghaziabad",
              addressRegion: "Uttar Pradesh",
              postalCode: "201010",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9899829299",
              contactType: "sales",
              email: "info@airbio.in",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "AirBio",
            url: "https://www.airbio.in",
          })}
        </script>
        
      </Helmet>

      <div className="w-full relative">
        <Crousal />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Slider />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Products />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Applications />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Team />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <FAQ />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <CardPost />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Assistants />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
