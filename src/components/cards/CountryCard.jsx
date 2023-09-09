import React, { Component } from "react";
import { motion } from "framer-motion";
export class CountryCard extends Component {
  render() {
    const { urlToImage, title, author, description, publishedAt,} = this.props;
    return (
      <div className="flex flex-col mt-10 bg-white rounded-b-lg shadow-xl">
        <motion.div className="">
          <img
            src={urlToImage}
            alt="img"
            className="duration-200 rounded-t-lg hover:scale-105 h-[230px] w-full object-cover"
          />
        </motion.div>
        <div className="p-4">
          <h1 className="mb-3 text-base font-bold text-black md:text-xl">
            {title}
          </h1>
          <p className="">{description}</p>
          
          <div className="flex flex-col gap-3 mb-3">
            <p className="text-xs font-bold text-black md:text-sm">{author}</p>
            <p className="text-xs font-bold text-black md:text-sm">
              Published At : {publishedAt}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryCard;
