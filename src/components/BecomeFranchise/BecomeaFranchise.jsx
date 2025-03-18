import React from 'react';
import Footer from '../Footer/Footer';
import franchisyimg from '../../assets/franchisyimg.jpg'


const BecomeaFranchise = () => {
    return (
        <div>
            <div className=" min-h-screen flex flex-col items-center p-8 md:mt-20 bg-[#fffbf2]">
                {/* Header Section */}
                <div className="max-w-6xl w-full bg-white/50 shadow-lg rounded-2xl p-12 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Start Your Franchise Journey</h2>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            Join our growing network and become a part of a trusted brand. We provide
                            full support, brand recognition, and a proven business model to help you succeed.
                        </p>

                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
                        <img src={franchisyimg}  alt="Franchise" className="w-96 rounded-xl" />
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="mt-16 bg-white/50 shadow-lg rounded-2xl p-10 max-w-4xl w-full">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Let's Connect</h3>
                    <form className="space-y-5">
                        <input type="text" placeholder="Your Full Name" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg" />
                        <input type="email" placeholder="Your Email Address" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg" />
                        <input type="tel" placeholder="Your Contact Number" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg" />
                        <textarea placeholder="Your Message" className="w-full p-4 border border-gray-300 rounded-lg h-36 focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"></textarea>
                        <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-md">
                            Send Inquiry
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default BecomeaFranchise;
