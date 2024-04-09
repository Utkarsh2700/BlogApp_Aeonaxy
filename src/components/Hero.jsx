import React, { useEffect, useState } from "react";
import { Articles, filter } from "../constants";
import { charts } from "../assets";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Pagination from "./Pagination";

const Hero = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeButton, setActiveButton] = useState(null);

  const totalPages = Math.ceil(Articles.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filterPostsByCategory = (category) => {
    try {
      setActiveButton(category);
      if (category === "All") {
        setFilteredPosts(Articles);
      } else {
        const filteredPosts = Articles.filter(
          (post) => post.category.toLowerCase() === category.toLowerCase()
        );
        setFilteredPosts(filteredPosts);
      }
    } catch (error) {
      console.error("Error filtering posts:", error);
    }
  };

  useEffect(() => {
    setFilteredPosts(Articles);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredPosts.length);
  const displayedArticles = filteredPosts.slice(startIndex, endIndex);

  return (
    <div>
      <div className="pt-[11rem] -mt-[5.25rem]">
        <h1 className="h1 text-center">The Calendly Blog</h1>

        <div className="flex items-center justify-center pt-[2rem] sm:flex-row flex-wrap">
          {filter.map((item) => (
            <button
              className={`uppercase ml-[0.75rem] lg:ml-2 px-4 py-2 rounded-3xl ${
                activeButton === item.title
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black"
              }`}
              key={item.id}
              onClick={() => filterPostsByCategory(item.title)}
              href=""
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="pt-5 flex flex-row">
          <div className="w-2/5">
            <img
              className="w-full pl-5 lg:pl-7.5 xl:pl-10"
              src={charts}
              width={200}
              alt="chart"
            />
          </div>
          <div className="w-7/12 pl-5 lg:pl-7.5 xl:pl-10 ">
            <h6 className="font-extralight text-gray-600 uppercase">
              What's New
            </h6>
            <h2 className="h2 font-semibold">Welcome to the Time Economy</h2>
            <p className="body-1 pt-5">
              Our most precious resource is time and the next decade will be
              defined by how we manage it.
            </p>
            <div className="flex items-center ">
              <a className="font-semibold pr-5" href="">
                Read the article
              </a>
              <BsArrowRightCircleFill className="w-8 h-8" />
            </div>
          </div>
        </div>
        <p className="pt-5 body-1 mx-5 lg:mx-7.5 xl:mx-10 font-semibold">
          Most Popular
        </p>
      </div>
      <>
        <div className="flex flex-wrap">
          {displayedArticles.map((article) => {
            const bgColor =
              article.bgColor !== undefined ? `${article.bgColor}` : "bg-n-1";
            const fontColor =
              bgColor === "bg-n-1" ? "text-color-8" : "text-color-7 ";

            return (
              <div
                key={article.id}
                className={`relative w-full sm:w-2/5  lg:w-[28%] sm:mx-5 lg:ml-7.5 xl:ml-10 my-4 border-2 border-solid border-gray-400 rounded-lg px-4 py-4 h-[22rem] sm:h-[30rem] lg:h-[30rem] ${bgColor} ${fontColor}`}
              >
                <div>
                  <a
                    className={`border-2 border-solid ${
                      bgColor === "bg-n-1" ? "border-blue-600" : "border-white"
                    } rounded-lg ${
                      bgColor === "bg-n-1" ? "text-blue-600" : "text-white"
                    } px-[6px] py-[2px]`}
                  >
                    {article.category}
                  </a>
                  <h4 className="h5 pb-1">{article.title}</h4>
                  <p className="pb-2">READ TIME {article.readtime}</p>
                  <p className="body-1 pb-7">{article.description}</p>

                  <a className="absolute bottom-10 flex" href="">
                    {article.full}
                    <BsArrowRightCircleFill className="ml-5 w-8 h-8" />
                  </a>
                </div>
              </div>
            );
          })}
          {filteredPosts.length === 0 && (
            <h1 className="w-full h1 flex text-center justify-center text-red-600 mt-4">
              No Articles to display currently
            </h1>
          )}
        </div>
      </>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      ></Pagination>
    </div>
  );
};

export default Hero;
