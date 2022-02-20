import "./MutualFundsPage.css";
import "../../App.css";
import React, { forwardRef, useRef, useEffect, useState } from "react";
import { mer, mutualFundImages } from "./mutualFundsHelper";

export const MutualFundsPage = forwardRef(({ onBackClick }, ref) => {
    useEffect(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    const [type, setType] = useState();
    const [risk, setRisk] = useState("conservative");
    const riskToleranceRef = useRef();
    const chooseFundsRef = useRef();

    const riskTolerances = {
        conservative:
            "if you don’t wanna risk your bag and put in some low stake investments then this is the option for you",
        "moderate conservative":
            "if youre feeling a bit more spicy then you finna open this account to see higher profit and longterm growth",
        balanced:
            "if you wanan make some coin and increase your ur capital long term then this is for you bestie.",
        growth: "if you want to see your investment potentially go to the moon 🚀 then this is great for long term investments if want low-moderate income.",
        "aggressive growth":
            "you’re not afraid. you’re here for the diamond hands even if theres a high chance you’ll lose money",
    };

    return (
        <div className="container" ref={ref}>
            <section>
                <div class="info-container">
                    <h3>Welcome to the world of Mutual Funds</h3>
                    <p className="big-text-body ">
                        Figuring out what stocks to invest into can be scary.
                        With mutual funds, you can pool your money with other
                        investors to invest in stocks, bonds and other assets.
                        These assets are managed by fund managers who’s job is
                        for you to secure that bag!
                    </p>
                    <p className="big-text-body">
                        Mutual funds allow you to diversify and put your eggs
                        into different baskets
                    </p>
                    <p className="big-text-body">
                        Since your investments are managed by fund managers, you
                        have to pay a Management Expense Ratio (MER). This can
                        depend on what mutual fund you select, so keep an eye on
                        that! For more information about MERs read here:
                    </p>
                </div>
                <button
                    className="button"
                    style={{ marginTop: "2rem" }}
                    onClick={() => {
                        chooseFundsRef.current.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >
                    OK BET
                </button>
            </section>
            <section style={{ marginBottom: "7rem" }} ref={chooseFundsRef}>
                <h5 className="big-text-body">Choosing your mutual fund</h5>
                <p>
                    Theres a lot of mutual funds out there but here are two
                    examples
                </p>
                <div className="asset-type-container">
                    <div
                        className={`${
                            type === "mutualFundImages" ? "selected" : ""
                        } asset-type-box`}
                        onClick={() => {
                            setType("ETF Multi Assets");
                            riskToleranceRef.current.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        <h5>ETF Multi Assets</h5>
                        <p>
                            Diversified mutual funds that invest primarily in
                            ETFs (exchange-traded funds)
                        </p>
                    </div>
                    <div
                        className={`${
                            type === "Global Multi Assets" ? "selected" : ""
                        } asset-type-box`}
                        onClick={() => {
                            setType("Global Multi Assets");
                            riskToleranceRef.current.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        <h5>Global Multi Assets</h5>
                        <p>
                            Diversified mutual funds that invest in world
                            markets, including dynamic emerging markets.
                        </p>
                    </div>
                </div>
            </section>
            <section ref={riskToleranceRef}>
                <h5 className="big-text-body">Choose your risk tolerance</h5>
                <div className="risk-buttons">
                    {Object.keys(riskTolerances).map((key) => (
                        <h5
                            className={`${
                                risk === key ? "selected" : ""
                            } risk-button-item`}
                            onClick={() => setRisk(key)}
                        >
                            {key}
                        </h5>
                    ))}
                </div>
                <div className="info-container">
                    <p style={{ margin: "2rem" }}>{riskTolerances[risk]}</p>
                    {type && risk && (
                        <div className="imagez-container">
                            <p>{`MER: ${mer[type][risk]}`}</p>
                            <img
                                src={mutualFundImages[type][risk]}
                                width="800"
                                height="220"
                                alt="Logo"
                            />
                        </div>
                    )}

                    <h5
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            marginTop: "6rem",
                        }}
                    >
                        what do these words even mean
                    </h5>
                    <p
                        className={"big-text-body"}
                        style={{ fontSize: "1.2rem" }}
                    >
                        <span style={{ fontWeight: "bold" }}>Cash:</span> Thats
                        just your money not invested in anything
                    </p>
                    <p
                        className={"big-text-body"}
                        style={{ fontSize: "1.2rem" }}
                    >
                        <span style={{ fontWeight: "bold" }}>Bonds:</span> Bonds
                        are basically you loaning the government or a company
                        for a set period. You get to receive interest payments
                        from the bond.
                    </p>
                    <p
                        className={"big-text-body"}
                        style={{ fontSize: "1.2rem" }}
                    >
                        <span style={{ fontWeight: "bold" }}>Equities:</span>{" "}
                        This is just a fancy word for stocks, which is a small
                        share of a company.
                    </p>
                </div>
            </section>
        </div>
    );
});
