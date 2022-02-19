import "./TfsaInfoPage.css";
import "../../App.css";
import React, { forwardRef, useRef } from "react";

export const TfsaInfoPage = forwardRef(({ onBackClick }, ref) => {
    return (
        <div className="container">
            <section>
                <div>
                    <h3 ref={ref}>💁‍♀️ Why a TFSA hits different? 💁‍♀️</h3>
                    <h5 className="big-text-body">
                        TFSA stands for Tax Free Savings Accounts where you...
                        Earn money tax-free Withdraw money without penalties
                        Have flexibility and choice in investments
                    </h5>
                </div>
                <div>
                    <h3 ref={ref}>✨Know the limits, play within it✨</h3>
                    <h5 className="big-text-body">yeet</h5>
                </div>
            </section>
        </div>
    );
});
