import "./TfsaTypes.css";
import "../../App.css";
import React, { forwardRef, useRef, useEffect } from "react";

export const TfsaTypes = (()=>{

    return (
        <div className="container" >
            <section>
                <h2 className="title">💰TFSA Types you can Finesse💰</h2>
                <div className="options">
                    <button>Mutual Funds</button>
                    <button>DIY Stonks</button>
                    <button>GIC</button>
                    <button>HSBC Managed Solutions</button>

                </div>
            </section>
        </div>
    );
});
