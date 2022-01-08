import React from "react";
import NewsData from "./NewsData";
//import { useState } from "react";
//import axios from 'axios'; 

export default function News({ image, newsText, headline }) {
    //     const article = usearticle();
    //     const [articleData, setArticleData] = useState{(
    //         image: ``;
    //         text: ``; 
    //     )};

    // const handleChange = e => {
    //     const { } = e.target; 
    //     setArticleData({
    //         ...articleData,
    //         [image]: value
    //     });
    //     console.dir("Article data: " + articleData)
    // }




    const NewsInfo = NewsData.map((news) => {
        return <NewsData
            key={news.id}
            {...news}
        />
    })



    return (

        <div>

            <img className="news-image" src={image} alt="vetements " />
            <h1>{headline}</h1>
            <p>{newsText}</p>


        </div>
    )
};