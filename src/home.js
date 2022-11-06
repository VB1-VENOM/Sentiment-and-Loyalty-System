import React from "react";
import { Link } from "react-router-dom";
  
const Home = () => {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -mx-4 -mb-10 text-center">
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501"/>
          </div>
          <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">Sentiment Analysis</h2>
          <p class="leading-relaxed text-base">Perform sentiment analysis here</p>
          <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
          <Link to="/sentiment" >Enter</Link>
          </button>
          
        </div>
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502"/>
          </div>
          <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">Loyalty Score</h2>
          <p class="leading-relaxed text-base">Get loyalty score for your data here</p>
          <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
          <Link to="/Loyalty" >Enter</Link>
          </button>
        </div>
      </div>
    </div>
  </section>
  );
};
  
export default Home;