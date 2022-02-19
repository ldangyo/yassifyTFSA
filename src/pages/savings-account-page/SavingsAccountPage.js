import "./SavingsAccountPage.css";
import "../../App.css";
import React, { forwardRef, useRef } from "react";
import Car from "../../assets/car.png";
import House from "../../assets/house.png";
import Cabin from "../../assets/cabin.png";

export const SavingsAccountPage = forwardRef(({ onBackClick }, ref) => {
    return (
        <div className="container">
            <section>
                <h3 className="title" ref={ref}>
                    ✨what are you manifesting ?✨
                </h3>
                <div className="images-wrapper">
                    <div className="image-container">
                        <img src={Car} width="504" height="464" alt="Logo" />
                        <h5>Car</h5>
                    </div>
                    <div className="image-container">
                        <img width="504" height="464" src={House} alt="Logo" />
                        <h5>House</h5>
                    </div>
                    <div className="image-container">
                        <img src={Cabin} width="504" height="464" alt="Logo" />
                        <h5>Cabin</h5>
                    </div>
                </div>
            </section>
        </div>
    );
});
