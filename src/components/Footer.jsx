import React from "react";
import { getit } from "../assets";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiYoutubeLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="h-[24rem] w-1/3  relative">
          <h6 className="ml-[3.25rem] mb-1 font-black text-4xl ">Easy</h6>
          {/* <br /> */}
          <h6 className=" ml-[3.25rem] pb-2 font-black text-4xl text-blue-600">
            ahead
          </h6>
          {/* <br /> */}
          <p className="body-1 mt-4 ml-[3.25rem]">
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
          <img src={getit} alt="download-from" className="mt-4 scale-50" />
          <div className="flex ml-[3.25rem] w-[70%] mt-8 items-center justify-evenly ">
            <FaXTwitter className="h-6 w-6 mx-2" />
            <FaFacebookF className="h-6 w-6 mx-2" />
            <FaInstagram className="h-6 w-6 mx-2" />
            <FaLinkedinIn className="h-6 w-6 mx-2" />
            <PiYoutubeLogo className="h-6 w-6 mx-2" />
          </div>
          <p
            className="ml-14 xl:mt-20 lg:mt-28 md:mt-[9.5rem] mt-24 bottom-4 text-gray-5
        00"
          >
            Copyright Calendly {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex flex-wrap w-2/3">
          <h6 className="h6 sm:mx-4 sm:mb-4 mx-8 mb-4 md:mx-16  lg:mx-20">
            About
            <ul>
              <li className="text-sm font-normal text-gray-500 mt-2">
                About Calendly
              </li>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Contact Sales
              </li>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Newsroom
              </li>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Careers
              </li>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Security
              </li>
            </ul>
          </h6>
          <h6 className="h6 sm:mx-4 sm:mb-4 mx-8 mb-4 md:mx-16  lg:mx-20">
            Solutions
            <ul>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Customer Service
              </li>
              <li className="text-sm font-normal text-gray-500 mt-2">Sales</li>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Recruiting
              </li>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Information Technology
              </li>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Marketing
              </li>
            </ul>
          </h6>
          <h6 className="h6 sm:mx-4 sm:mb-4 mx-8 mb-4 md:mx-16  lg:mx-20">
            Popular Features
            <ul>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Embed Calendly
              </li>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Availability
              </li>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Sending Notifications
              </li>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Using Calendly Mobile
              </li>
            </ul>
          </h6>
          <h6 className="h6 sm:mx-4 sm:mb-4 mx-8 mb-4 md:mx-16  lg:mx-20">
            Support
            <ul>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Help Center
              </li>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Video Tutorials
              </li>
            </ul>
          </h6>
          <h6 className="h6 sm:mx-4 sm:mb-4 mx-8 mb-4 md:mx-16  lg:mx-20">
            Add-ons
            <ul>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Download for Chrome
              </li>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Download for firefox
              </li>
            </ul>
          </h6>
          <h6 className="h6 sm:mx-4 sm:mb-4 mx-8 mb-4 md:mx-16 lg:mx-20">
            Developer
            <ul>
              <li className="text-sm font-normal text-gray-500 mt-2">
                Developer Tools
              </li>
            </ul>
          </h6>
        </div>
      </div>
      <div>
        <p className="flex  justify-end pb">Privacy/Terms and Conditions</p>
      </div>
    </>
  );
};

export default Footer;
