import React from 'react'
import banner from '../../assets/banner.png'
import biriyanis from '../../assets/biriyanis.png'
import kababimg from '../../assets/kababimg.png'
import beefchukka from '../../assets/beefchukka.png'



import { motion } from 'framer-motion'
import { SlideUp } from '../Hero/Hero'


const HotDessertData = [
    {
        id: 1,
        name: " Chicken Biryani",
        img: biriyanis,
        price: 'Rs : 170',
        delay: 0.4,
    },
    {
        id: 2,
        name: "Chicken kabab",
        img: kababimg,
        price: 'Rs : 130',
        delay: 0.4,
    },
    {
        id: 3,
        name: "Beef Chukka",
        img: beefchukka,
        price: 'Rs : 140',
        delay: 0.4,
    },
]

const HotDessert = () => {
    return (
        <section>
            <div className='container bg-[#fffbf2] px-10 md:px-0'>
                {/* heading section */}
                <motion.h3
                    variants={SlideUp(0)}
                    initial='hidden'
                    whileInView='show'
                    className='text-2xl font-semibold text-green-500 uppercase py-8  md:px-24'>special dishes</motion.h3>

                {/* grid section */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }} // Triggers animation each time in view
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.3 } // Delay for staggered effect
                        }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-24 gap-6"
                >
                    {HotDessertData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                                exit: { opacity: 0, y: 50 } // Ensures it hides when out of view
                            }}
                            className="group bg-white/50 shadow-2xl p-3 flex items-center gap-3"
                        >
                            <img
                                src={item.img}
                                alt=""
                                className="w-24 rounded-full img-shadow
                    group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-xl text-yellow-500">{item.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default HotDessert
