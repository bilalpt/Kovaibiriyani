import React from 'react'
import banner from '../../assets/Banner.png'
import beefbiriyani from '../../assets/beefbiriyani.png'

import { motion } from 'framer-motion'
import { SlideUp } from '../Hero/Hero'

const Banner = () => {
    return (
        <section>
            <div className='container py-24 bg-[#fffbf2] '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center pt-28 '>

                    {/* image section */}
                    <div className='relative md:ml-32'>
                        <motion.img
                        initial={{
                            opacity:0,
                            x:-100,
                            y:100,
                        }}
                        whileInView={{
                            opacity:1,
                            x:0,
                            y:0,
                        }}
                        whileHover={{
                            scale:1.2,
                            rotate:15,
                            x:50,
                            y:-50,
                        }}
                        transition={{
                            duration:0.8,
                            delay:0.5,
                            scale:{duration:0.5}
                        }}
                         src={beefbiriyani} alt="" className='relative z-10 h-80 w-full  img-shadow' />
                        <motion.div
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:0.6, delay: 0.5}}
                         className='absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[350px] md:h-[420px] w-[350px] md:w-[420px] bg-[#ffff8f] rounded-full'></motion.div>
                    </div>
                    {/* text content section */}
                    <div className='space-y-5 lg:max-w-[400px] pt-20 md:pt-0'>
                        <h1 className='text-xl md:text-4xl uppercase font-semibold font-league px-8 md:px-0'>The Best yummy food in the town</h1>
                        <p className='px-8 md:px-0'>
                        Welcome to Kovai Restaurant, where flavors come alive! We serve mouth-watering Biriyanis, sizzling Kababs, and refreshing drinks, all made with the finest ingredients. Whether you're craving a hearty meal or a light snack, we’ve got something for everyone.  

Come visit us and treat yourself to the best food in town!                           </p>
                    {/* <button className='btn-primary'>Order Now</button> */}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Banner
