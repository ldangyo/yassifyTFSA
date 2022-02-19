import "./MainPage.css";
import "../../App.css";
import "../../normalize.css";
import React, { useState, useRef, useEffect } from "react";
import { SavingsAccountPage } from "../savings-account-page/SavingsAccountPage";

export const MainPage = () => {
    const [showSavingsSection, setShowSavingsSection] = useState(false);
    const savingsPageRef = useRef();

    function handleBackClick() {
        if (showSavingsSection)
            savingsPageRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        handleBackClick();
        console.log("changed", showSavingsSection);
    }, [showSavingsSection]);

    return (
        <div className="container">
            <section>
                <h2>Picture This...</h2>
                <h5 className="big-text-body">
                    You’re a tiktok influencer in your early twenties, in eyes
                    of your millions of followers thats making #money from brand
                    deals. You have succfully secured the bag but have no idea
                    what to do with it besides buy the latest shoe drops.
                </h5>
            </section>
            <section className="section-welcome">
                <div>
                    <h5>welcome to</h5>
                    <h2>The yassification of TFSA's 💅</h2>
                </div>
                <div className="section-welcome-continue-container">
                    <h5>you ready to start your TFSA adventure?</h5>
                    <button
                        className="button-main-page"
                        onClick={async () => {
                            setShowSavingsSection(true);
                            handleBackClick();
                        }}
                    >
                        BET
                    </button>
                </div>
            </section>
            {showSavingsSection && (
                <section>
                    <SavingsAccountPage ref={savingsPageRef} />
                </section>
            )}
        </div>
    );
};
