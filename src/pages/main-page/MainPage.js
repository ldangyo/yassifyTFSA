import "./MainPage.css";
import "../../App.css";
import "../../normalize.css";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { SavingsAccountPage } from "../savings-account-page/SavingsAccountPage";
import { TfsaInfoPage } from "../tfsa-info-page/TfsaInfoPage";

export const MainPage = () => {
    const [showSavingsSection, setShowSavingsSection] = useState(false);
    const [showTfsaInfoSection, setShowTfsaInfoSection] = useState(false);
    const [dreamItem, setDreamItem] = useState();
    const [years, setYears] = useState();
    const [amount, setAmount] = useState();

    const savingsPageRef = useRef();
    const tfsaInfoRef = useRef();

    function handleBackClick() {
        if (showSavingsSection)
            savingsPageRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const onClickNext = useCallback((type) => {
        switch (type) {
            case "tfsaInfoSection": {
                setShowTfsaInfoSection(true);
                tfsaInfoRef.current?.scrollIntoView({
                    behavior: "smooth",
                });
                break;
            }
            default:
                break;
        }
    });

    useEffect(() => {
        handleBackClick();
    }, [showSavingsSection]);

    return (
        <div>
            <div className="container">
                <section>
                    <h2>Picture This...</h2>
                    <h5 className="big-text-body">
                        You’re a tiktok influencer in your early twenties, in
                        eyes of your millions of followers thats making #money
                        from brand deals. You have succfully secured the bag but
                        have no idea what to do with it besides buy the latest
                        shoe drops.
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
            </div>
            {showSavingsSection && (
                <SavingsAccountPage
                    dreamItem={dreamItem}
                    setDreamItem={setDreamItem}
                    ref={savingsPageRef}
                    setYears={setYears}
                    setAmount={setAmount}
                    onClickNext={onClickNext}
                />
            )}

            {showTfsaInfoSection && (
                <TfsaInfoPage
                    ref={tfsaInfoRef}
                    onClickNext={() => onClickNext}
                />
            )}
        </div>
    );
};
