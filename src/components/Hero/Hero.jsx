import React from 'react';
import leaf from '../../assets/leaf.png';
import biriyanis from '../../assets/biriyanis.png';
import spoon from '../../assets/spoon.png';

import { IoCartOutline } from "react-icons/io5";
import '../Hero/hero.css';
import { motion } from 'framer-motion';

export const SlideUp = (delay) => ({
    hidden: { y: "100%", opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, delay }
    }
});

const Hero = () => {
    return (
        <main className="">
            {/* Hero Section */}
            <div className="container min-h-[600px] flex justify-center  z-10 bg-[#fffbf2] ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center">

                    {/* Text Content */}
                    <div className="space-y-3 mt-14 text-center  md:text-left md:mt-0">
                        <motion.h1
                            variants={SlideUp(0.5)}
                            initial="hidden"
                            whileInView="show"
                            className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline pl-0 md:pl-36 text-transparent"
                        >
                            Yummy
                            <img src={leaf} className="absolute w-[50px] top-0 right-10 md:right-[100px]" alt="Leaf" />
                        </motion.h1>

                        <motion.h1
                            variants={SlideUp(1)}
                            initial="hidden"
                            whileInView="show"
                            className="text-5xl lg:text-7xl xl:text-8xl pl-0 md:pl-36 font-bold uppercase"
                        >
                            LUNCH
                        </motion.h1>

                        <motion.p
                            variants={SlideUp(1.5)}
                            initial="hidden"
                            whileInView="show"
                            className="text-sm px-5 md:px-0 pl-0 md:pl-36"
                        >
                            At Kovai Restaurant, we serve a variety of delicious dishes to satisfy your cravings. Our Biriyani selection includes Chicken Biriyani, Beef Biriyani, and Egg Biriyani, each cooked with aromatic spices to bring out the perfect flavor.

                        </motion.p>

                        <motion.button
                            variants={SlideUp(2)}
                            initial="hidden"
                            whileInView="show"
                            className="btn-primary ml-0 md:ml-36 bg-green-800 text-white rounded-2xl py-2 px-4 font-semibold hover:scale-110 inline-block !mt-10"
                            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                        >
                            <IoCartOutline className="inline mr-2" />
                            Order Now
                        </motion.button>

                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <motion.img
                            initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
                            whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                            transition={{ duration: 0.8 }}
                            src={biriyanis}
                            alt="Food"
                            className="w-[450px] img-shadow"
                        />
                        <motion.img
                            initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
                            whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                            transition={{ duration: 0.8 }}
                            src={spoon}
                            alt="Spoon"
                            className="w-[350px] absolute bottom-[-155px] -left-16 rotate-[75deg] img-shadow"
                        />
                    </div>
                </div>
            </div>

            {/* Background Yellow Behind Images */}
            {/* <motion.div               
                initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
                whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
                transition={{ duration: 1 }}
                className="w-[2500px] h-[2500px] rounded-3xl bg-[#ffff8f] absolute top-[-30%] left-[70%] z-0"
            /> */}
        </main>
    );
};

export default Hero;
