import React from "react";
import { useState } from "react";

export default function Advertisement() {
    const [advertiseData, setAdvertiseData] = useState({
        advert: ``, 
        advertimage: ``, 
    });

    const handleChange = e => {
        const { name, value } = e.target; 
        setAdvertiseData({
            ...advertiseData,
            [name]: value
        });
        console.dir("Advertisement data:" + advertiseData);
    }

    return (

        <div>
            <div className="advert .container-fluid">
                <p className="advert-text-left"><span className="rent">Ad</span> <span className="rent">space</span>  <span className="rent">For rent</span></p>
                <h1 className="advertise">ADVERTISE HERE!!!</h1>
                <p className="advert-text-right"><span className="rent">Ad</span> <span className="rent">space</span>  <span className="rent">For rent</span></p>

            </div>
        </div>
    )
};

