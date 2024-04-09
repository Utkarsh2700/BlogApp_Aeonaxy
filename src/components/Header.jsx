import { useState } from "react";
import { logo } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import { HamburgerMenu } from "./design/Header";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <div className={`fixed top-0 left-0 w-full z-50  bg-white `}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={logo} width={190} height={40} alt="Calendly" />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0  lg:static lg:flex lg:mx-auto lg:bg-transparent bg-white`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-10"
                    : "lg:text-n-10/50"
                }lg:leading-5 lg:hover:border-blue-950 border-b-4 border-transparent rounded xl:px-6 ${
                  item.dropdown ? "flex items-center" : ""
                }`}
              >
                {item.title}
                {item.dropdown && (
                  <MdOutlineKeyboardArrowDown className="ml-2" />
                )}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="font-code text-sm font-bold tracking-wider  hidden mr-8 transition-colors lg:block"
        >
          Log in
        </a>
        <button
          className="hidden lg:flex bg-blue-600 px-2 py-1 text-white rounded-3xl"
          href="#login"
        >
          Sign up free
        </button>

        <button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <IoMenuOutline className="h-10 w-10 " />
        </button>
      </div>
    </div>
  );
};

export default Header;
