import React from 'react'
import KovaiLogo2 from '../../assets/KovaiLogo2.svg'
import '../Footer/Footer.css'
import { motion } from 'framer-motion';


const Footer = () => {
    return (
        <motion.footer
        initial={{opacity : 0 }}
        whileInView={{opacity : 1 }}
        transition={{duration : 1}}
        className='bg-[#f6f6c578] rounded-t-xl'
        >
            <div className='container md:pt-10 md:pl-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                    {/* brand info */}
                    <div className='space-y-3 lg:max-w-[300px] '>
                        <img src={KovaiLogo2} alt="" className='w-60'/>
                        <p className=' ml-5 md:ml-0'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officiis 
                        </p>
                        <a href="#" className='inline-block mt-6 text-sm'></a>
                    </div>
                    {/* Quick Links */}
                    <div className='col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6 ml-5 md:ml-0'>
                        <div>
                            <h1 className='text-xl font-semibold'> Quick Links</h1>
                            <ul className='space-y-3 mt-6'>
                                <li className='footer-link'>Home</li>
                                <li className='footer-link'>About</li>
                                <li className='footer-link'>Contact</li>
                                <li className='footer-link'>Food</li>

                            </ul>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'> Quick Links</h1>
                            <ul className='space-y-3 mt-6'>
                                <li className='footer-link'>Home</li>
                                <li className='footer-link'>About</li>
                                <li className='footer-link'>Contact</li>
                                <li className='footer-link'>Food</li>

                            </ul>
                        </div>                        <div>
                            <h1 className='text-xl font-semibold'> Quick Links</h1>
                            <ul className='space-y-3 mt-6'>
                                <li className='footer-link'>Home</li>
                                <li className='footer-link'>About</li>
                                <li className='footer-link'>Contact</li>
                                <li className='footer-link'>Food</li>

                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </motion.footer>
    )
}

export default Footer
