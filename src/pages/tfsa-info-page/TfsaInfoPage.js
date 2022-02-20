import "./TfsaInfoPage.css";
import "../../App.css";
import React, { forwardRef, useRef, useEffect } from "react";

export const TfsaInfoPage = forwardRef(({ onClickNext }, ref) => {
    useEffect(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <div className="container" ref={ref}>
            <section style={{ marginTop: "5rem" }}>
                <div className="text-wrapper">
                    <h3>💁‍♀️ Why a TFSA hits different? 💁‍♀️</h3>
                    <h5 className="big-text-body">
                        TFSA stands for Tax Free Savings Accounts where you...
                        Earn money tax-free Withdraw money without penalties
                        Have flexibility and choice in investments
                    </h5>
                </div>
                <div className="text-wrapper">
                    <h3 style={{ marginTop: "5rem" }}>
                        ✨Know the limits, play within it✨
                    </h3>
                    <h5 className="big-text-body">
                        There are government-mandated limits to how much you can
                        contribute every year. These limits accumulate from the
                        moment you turn 18. Make sure you invest within these
                        limits.
                    </h5>
                </div>

                <button
                    className="button"
                    style={{ marginTop: "2rem" }}
                    onClick={() => onClickNext("tfsaTypesSection")}
                >
                    OK BET
                </button>
            </section>
        </div>
    );
});
