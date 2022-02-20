import "./TfsaInfoPage.css";
import "../../App.css";
import React, { forwardRef, useRef, useEffect } from "react";

export const TfsaInfoPage = forwardRef(({ onBackClick }, ref) => {
    useEffect(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <div className="container" ref={ref}>
            <section>
                <div>
                    <h3>💁‍♀️ Why a TFSA hits different? 💁‍♀️</h3>
                    <h5 className="big-text-body">
                        TFSA stands for Tax Free Savings Accounts where you...
                        Earn money tax-free Withdraw money without penalties
                        Have flexibility and choice in investments
                    </h5>
                </div>
                <div>
                    <h3 className="title">✨Know the limits, play within it✨</h3>
                    <h5 className="big-text-body">
                    There are government-mandated limits to how much you can contribute every year. 
                    These limits accumulate from the moment you turn 18. Make sure you invest within these limits.
                    </h5>
                </div>

                <button
                        className="button"
                        style={{ marginTop: "2rem" }}
                        onClick={() => onClickNext("tfsaInfoSection")}
                    >
                        OK BET
                </button>
            </section>
        </div>
    );
});
