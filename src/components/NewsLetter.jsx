import React from "react";
import "../index.css";
import NewsletterForm from "./NewsLetterForm";

const NewsLetter = () => {
  return (
    <>
      <div className="letter h-[22rem] flex flex-row">
        <div className="w-1/2 flex flex-col relative  text-white mx-10">
          <p className="relative uppercase body-1 mt-10">Stay tuned</p>
          <h2 className="h2 tracking-wider">Subscribe to the newsletter</h2>
          <p className="text-base">
            Submit your email,and once a month we'll send you our best
            time-saving articles, videos and other resources.
          </p>
        </div>
        <div>
          <NewsletterForm></NewsletterForm>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
