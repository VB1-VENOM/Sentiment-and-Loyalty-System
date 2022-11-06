
import React, { useState, useEffect } from "react";
function Sentiment() {
  const [data, setdata] = useState({
    Positive: 0,
    Negative:0,
    Mean:0
});

// Using useEffect for single rendering
useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("/dataSen").then((res) =>
        res.json().then((data) => {
            // Setting a data from api
            setdata({
              Positive:data.Positive,
              Negative:data.Negative,
              Mean:data.Mean
            });
        })
    );
}, []);
    return (
      <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">Customer Loyalty</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Sentiment Analytics</h1>
            <div class="flex mb-4">
              <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
            </div>
            <p class="leading-relaxed mb-4">Positive or negative sentiment is given based on the comments or remarks provided in the dataset uploaded</p>

<ul>
<li>Positive - Positive sentiment</li>
<li>Negative - Negative sentiment</li>
</ul>
<div class="flex mb-4">
              <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Analytics</a>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Positiive</span>
              <span class="ml-auto text-gray-900">{data.Positive}</span>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Negative</span>
              <span class="ml-auto text-gray-900">{data.Negative}</span>
            </div>
            <div class="flex border-t border-b mb-6 border-gray-200 py-2">
              <span class="text-indigo-500">Overall Sentiment</span>
              <span class="ml-auto title-font font-medium text-2xl text-gray-900">{data.Mean}</span>
            </div>
            <div class="flex">
              <a href="http://127.0.0.1:9000/" class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Upload</a>
            </div>
          </div>
          <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
        </div>
      </div>
    </section>
        );
    }
    
    export default Sentiment;