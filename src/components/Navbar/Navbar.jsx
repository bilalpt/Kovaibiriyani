import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import KovaiLogo2 from "../../assets/KovaiLogo2.svg";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const NavMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "about" },
  { id: 3, title: "Contact Us", path: "contact" },
  { id: 4, title: "Become a Franchise", path: "/BecomeaFranchise", external: true },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  const handleNavigation = (menu) => {
    setIsOpen(false);

    if (menu.external) {
      navigate(menu.path);
    } else if (menu.path === "/") {
      navigate("/");
    } else {
      if (window.location.pathname !== "/") {
        navigate("/", { state: { scrollTo: menu.path } });
      } else {
        const section = document.getElementById(menu.path);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#fffbf2] font-league h-32">
      <div className="container flex justify-between items-center py-4 px-6 md:px-40">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={KovaiLogo2}
          className="w-44 object-cover"
          alt="Logo"
        />

        <div className="hidden md:block">
          <ul className="flex gap-6">
            {NavMenu.map((menu) => (
              <li
                key={menu.id}
                className="text-xl font-serif cursor-pointer px-2 py-2"
                onClick={() => handleNavigation(menu)}
              >
                {menu.title}
              </li>
            ))}
          </ul>
        </div>

        <button
          className="md:hidden text-3xl z-50"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <motion.div className="hidden md:block">
          <button className="h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-dark">
            <IoCartOutline />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-[#fffbf2] shadow-lg flex flex-col items-center pt-16 z-40"
          >
            <ul className="flex flex-col gap-6 w-full text-center">
              {NavMenu.map((menu) => (
                <li
                  key={menu.id}
                  className="text-xl font-serif cursor-pointer py-2"
                  onClick={() => handleNavigation(menu)}
                >
                  {menu.title}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
