import "./TfsaTypes.css";
import "../../App.css";
import React, { forwardRef, useRef, useEffect } from "react";

export const TfsaTypes = (()=>{

    return (
        <div className="container" >
            <section>
                <h2 className="title">💰TFSA Types you can Finesse💰</h2>
                <div className="options">
                    <button className="button">Mutual Funds</button>
                    <button className="button">DIY Stonks</button>
                    <button className="button">GIC</button>
                    <button className="button">HSBC Managed Solutions</button>

                </div>
            </section>
        </div>
    );
});
