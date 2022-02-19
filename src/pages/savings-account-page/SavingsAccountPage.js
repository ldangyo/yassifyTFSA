import "./SavingsAccountPage.css";
import "../../App.css";
import React, { forwardRef, useRef } from "react";

export const SavingsAccountPage = forwardRef(({ onBackClick }, ref) => {
    return (
        <div className="container">
            <section>
                <h3 ref={ref}>✨what are you manifesting ?✨</h3>
                <h5 className="big-text-body">yeet</h5>
            </section>
        </div>
    );
});
