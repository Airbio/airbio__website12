import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Hero from './Hero';
import Slider from './Slider';
import About from './About';
import Certification from './Certification';
import FAQ from './FAQ';
import Team from './Team.jsx';
import Footer from '../Footer/Footer.jsx';
import CardPost from './CardPost.jsx';
import Applications from './Applications.jsx';
import Products from '../products/Product.jsx';
import Instagram from './Instagram.jsx';
import Assistants from './Assistants.jsx';
import Crousal from './Crousal.jsx';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Home = () => {
    return (
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
    );
};

export default Home;