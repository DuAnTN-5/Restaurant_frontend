import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  // {Hàm Cuộn }
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative w-fit"
      >
        <a href={href} className="relative text-white">
          {children}
          <span
            style={{
              transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
          />
        </a>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="absolute left-1/2 top-full transform -translate-x-1/2 bg-white text-black shadow-lg rounded-md mt-2 z-10"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-2 w-3 h-3 bg-white rotate-45" />
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const PricingContent = () => {
    return (
      <div className="absolute top-2 -left-[120px] w-64 bg-white p-6 shadow-xl rounded-[15px]">
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">About</h3>
          {/* <a href="#" className="block text-sm hover:underline">
            Introduction
          </a>
          <a href="#" className="block text-sm hover:underline">
            Pay as you go
          </a> */}
        </div>
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">Our Chef</h3>
          {/* <a href="#" className="block text-sm hover:underline">
            Startups
          </a> */}
        </div>
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">Our Chef</h3>
          {/* <a href="#" className="block text-sm hover:underline">
            Startups
          </a> */}
        </div>
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">Our Chef</h3>
          {/* <a href="#" className="block text-sm hover:underline">
            Startups
          </a> */}
        </div>
        <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
          Contact sales
        </button>
      </div>
    );
  };

  return (
    <header
      className={`h-[75px] flex items-center transition-opacity duration-300 w-full px-[100px] ${
        scrolled ? "opacity-0" : "opacity-100"
      } bg-transparent text-white fixed w-full top-0 z-10`}
    >
      <div className="container mx-auto p-0 flex justify-between items-center w-full">
        <div className="flex items-center w-full">
          <nav className="w-full">
            <div className="flex justify-between items-center text-[18px] leading-[30px]">
              <div className="flex gap-3">
                <div>
                  {/* <Link to="/">Home</Link> */}
                </div>
                <div className="relative ">
                  <FlyoutLink href="#" FlyoutContent={PricingContent}>
                    Pages
                  </FlyoutLink>
                </div>
                <div className="relative">
                  <FlyoutLink href="#" FlyoutContent={PricingContent}>
                    Menu
                  </FlyoutLink>
                </div>
              </div>
              <div>
                <img
                  className="w-[100px]"
                  src="https://1000logos.net/wp-content/uploads/2017/05/Pepsi-Logo-1969.png"
                  alt=""
                />
              </div>
              <div className="flex gap-3">
                <div className="relative">
                  <FlyoutLink href="#" FlyoutContent={PricingContent}>
                    Blog
                  </FlyoutLink>
                </div>
                <div>
                  {/* <Link to="/contact">Login</Link> */}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
