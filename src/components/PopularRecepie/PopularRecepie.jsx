import React from 'react'
import banner from '../../assets/banner.png'
import biriyanis from '../../assets/biriyanis.png'
import beefbiriyani from '../../assets/beefbiriyani.png'
import eggbiriyani from '../../assets/eggbiriyani.png'
import Gheerices from '../../assets/Gheerices.png'



import { motion } from 'framer-motion'
import { SlideUp } from '../Hero/Hero'


const PopularRecepieData = [
    {
        id: 1,
        name: "Chicken Biryani",
        img: biriyanis,
        price: 'Rs : 170',
        delay: 0.4,
    },
    {
        id: 2,
        name: "Beef Biryani",
        img: beefbiriyani,
        price: 'Rs : 180',
        delay: 0.4,
    },
    {
        id: 3,
        name: "Egg Biryani",
        img: eggbiriyani,
        price: 'Rs : 100',
        delay: 0.4,
    },
    {
        id: 4,
        name: "Ghee Rice",
        img: Gheerices,
        price: 'Rs : 110',
        delay: 0.4,
    },
]

const PopularRecepie = () => {
    return (
        <section>
            <div className="container py-24 bg-[#fffbf2]">
                <motion.h3
                    variants={SlideUp(0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    className='text-2xl text-center font-league
        font-semibold uppercase py-8'>{" "} Our Popular Recipe</motion.h3>

                {/* card section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:px-44  place-items-center '>
                    {PopularRecepieData.map((item) => {
                        return (
                            <div className='group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl mt-8 md:mt-0'>
                                <img src={item.img} alt="" className='w-44 mx-auto img-shadow group-hover:scale-x-110
                        group-hover:translate-y-[-50px]
                        group-hover:translate-x-10
                        group-hover:rotate-[50deg] transition-all
                        duration-700' />
                                <div className=' '>
                                    <button
                                        className='btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100 rounded-xl bg-green-800 text-white h-7 w-20 cursor-pointer'
                                        onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                                    >
                                        Buy Now
                                    </button>
                                    <p className='text-xl font-semibold'>{item.name}</p>
                                    <p className='text-xl font-bold text-yellow-500'>{item.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PopularRecepie
