import React from "react";
import "../index.css";
import NewsletterForm from "./NewsLetterForm";

const NewsLetter = () => {
  return (
    <>
      <div className="flex-col letter h-[35rem] sm:h-[22rem] md::h-[22rem] lg::h-[22rem] xl::h-[22rem] flex md:flex-row sm:flex-row lg:flex-row xl:flex-row">
        <div className=" w-4/5 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col relative  text-white mx-10">
          <p className="relative uppercase body-1 mt-10">Stay tuned</p>
          <h2 className="h2 tracking-wider">Subscribe to the newsletter</h2>
          <p className="text-base">
            Submit your email,and once a month we'll send you our best
            time-saving articles, videos and other resources.
          </p>
        </div>
        <div className="w-5/6 h-[20rem]">
          <NewsletterForm></NewsletterForm>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
