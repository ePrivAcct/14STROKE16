import React from "react";



export default function Body({ img, text }) {
    return (

        <div>

            <div>

                <div className="card " >
                    <img src={img} className="card-img-top " alt="tyler" />
                    <h1 className="headline">Free Larry Hoover Benefit Concert.</h1>
                    <div className="card-body">
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            </div>

        </div>
    )
};