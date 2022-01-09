import React from "react";



export default function Home({ img, text }) {
    return (

        <div>

            <div className="the-body">
                <div className="card " >
                    <div className="article-img">
                    <img src={img} className="card-img-top " alt="tyler" />
                    <h1 className="headline">Free Larry Hoover Benefit Concert.</h1>
                    <div className="card-body">
                            <p className="card-text">{text}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};