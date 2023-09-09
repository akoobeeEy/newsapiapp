import React from 'react'

const NewsCard = ({article}) => {
  return (
    <div>
         return (
      <div className="flex flex-col mt-10 bg-white rounded-b-lg shadow-xl">
        <div className="">
          <img
            src={article.urlToImage}
            alt="img"
            className="duration-200 rounded-t-lg hover:scale-105 h-[230px] w-full object-cover"
          />
        </div>
        <div className="p-4">
          <h1 className="mb-3 text-base font-bold text-black md:text-xl">
            {article.title}
          </h1>
          <p className="">{article.description}</p>
          
          <div className="flex flex-col gap-3 mb-3">
            <p className="text-xs font-bold text-black md:text-sm">{article.author}</p>
            <p className="text-xs font-bold text-black md:text-sm">
              Published At : {article.publishedAt}
            </p>
          </div>
        </div>
      </div>
    );
    </div>
  )
}

export default NewsCard