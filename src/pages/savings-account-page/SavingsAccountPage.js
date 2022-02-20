import "./SavingsAccountPage.css";
import "../../App.css";
import React, { forwardRef, useRef, useState, useEffect } from "react";
import Car from "../../assets/car.png";
import House from "../../assets/house.png";
import Cabin from "../../assets/cabin.png";

export const SavingsAccountPage = forwardRef(
    ({ onClickNext, dreamItem, setDreamItem, setAmount, setYears }, ref) => {
        const [interest, setInterest] = useState(0.5);
        const amountRef = useRef();
        const tfsaInfoRef = useRef();

        return (
            <div className="container" ref={ref}>
                <section>
                    <h3 className="title">✨what are you manifesting ?✨</h3>
                    <div className="images-wrapper">
                        <button
                            className="image-container"
                            onClick={() => {
                                setDreamItem("Car");
                                amountRef.current.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            <img
                                src={Car}
                                className={
                                    dreamItem === "Car" ? "selected" : ""
                                }
                                width="504"
                                height="464"
                                alt="Logo"
                            />
                            <h5>Car</h5>
                        </button>
                        <button
                            className="image-container"
                            onClick={() => {
                                setDreamItem("House");
                                amountRef.current.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            <img
                                className={
                                    dreamItem === "House" ? "selected" : ""
                                }
                                width="504"
                                height="464"
                                src={House}
                                alt="Logo"
                            />
                            <h5>House</h5>
                        </button>
                        <button
                            className="image-container"
                            onClick={() => {
                                setDreamItem("Cabin");
                                amountRef.current.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            <img
                                src={Cabin}
                                className={
                                    dreamItem === "Cabin" ? "selected" : ""
                                }
                                width="504"
                                height="464"
                                alt="Logo"
                            />
                            <h5>Cabin</h5>
                        </button>
                    </div>
                </section>
                <section id="section-amount" ref={amountRef}>
                    <h3 className="title">It all starts with...</h3>
                    <div>
                        <div className="input-container">
                            <h5>How much can you invest per month?</h5>
                            <input
                                type="number"
                                min={1}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            <h5>How many years do you want to invest for</h5>
                            <input
                                type="number"
                                min={1}
                                onChange={(e) => setYears(e.target.value)}
                            />
                        </div>
                        <button
                            className="button"
                            onClick={() => {
                                tfsaInfoRef.current.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            Lets get that bag 💰
                        </button>
                    </div>
                </section>
                <section ref={tfsaInfoRef}>
                    <h3 className="title">
                        🚫 Why a savings account aint it 🚫
                    </h3>
                    <h5 className="big-text-body">
                        Savings accounts are lit for short-term savings goals
                        (like sinking funds) or to hold emergency funds like if
                        you’re being canceled.
                    </h5>
                    <h5 className="big-text-body">
                        Sounds like a W right? but you’re actually taking an L
                        long term because your money doesnt grow with inflation.
                    </h5>
                    <h5 className="big-text-body">
                        If you're looking to keep your money long term, you
                        gotta make some new moves.
                    </h5>
                </section>
                <section>
                    <h3 className="title">
                        Checkout your money in a savings account
                    </h3>
                    <div className="input-container">
                        <h5>Select your interest percentage</h5>
                        <span className="valuePadding">
                            <input
                                type="number"
                                max="100"
                                accuracy="2"
                                min="0"
                                defaultValue={interest}
                                onChange={(e) => setInterest(e.target.value)}
                            />
                            %
                        </span>
                    </div>
                    <div className="info-container">
                        <h3 className="sub-heading">
                            Heres the vision in four years
                        </h3>
                        <div className="sub-text-container">
                            <h5 className="sub-text">{`In four years, you would have... `}</h5>
                            <h5 className="sub-text">
                                <span>
                                    <span
                                        style={{ fontWeight: "bold" }}
                                    >{`$${100}`}</span>
                                    {` in your savings account, which includes the ${interest}% interest`}
                                </span>
                            </h5>
                            <h5 className="sub-text">
                                <span>
                                    {`Assuming that inflation is 1.67% each year, the ${dreamItem} you want would cost`}
                                    <span
                                        style={{ fontWeight: "bold" }}
                                    >{` $${10000} in four years`}</span>
                                </span>
                            </h5>
                        </div>
                        <h5 className="big-text-body sub-text bottom-text">
                            Obviously, there can be many variables that can
                            increase the cost of your dream item but the big
                            problem is your interest in your savings account is
                            below inflation
                        </h5>
                    </div>
                    <button
                        className="button"
                        style={{ marginTop: "2rem" }}
                        onClick={() => onClickNext("tfsaInfoSection")}
                    >
                        So what now..
                    </button>
                </section>
            </div>
        );
    }
);
