import "./TfsaTypes.css";
import "../../App.css";
import React, { forwardRef, useRef, useEffect } from "react";

export const TfsaTypes = forwardRef(
    ({ onClickNext, showMutuals, setShowDIYStocksPage }, ref) => {
        useEffect(() => {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }, []);

        return (
            <div className="container" ref={ref}>
                <section>
                    <h3 className="title">💰TFSA Types you can Finesse💰</h3>
                    <div className="options">
                        <button
                            className="button"
                            onClick={() => {
                                showMutuals(true);
                                setShowDIYStocksPage(false);
                            }}
                        >
                            Mutual Funds
                            <p>
                                Pool your money with other investors to invest
                                in stocks, bonds and other assets that are
                                grouped together by a team of fund managers
                            </p>
                        </button>
                        <button
                            className="button"
                            onClick={() => {
                                setShowDIYStocksPage(true);
                                showMutuals(false);
                            }}
                        >
                            DIY Stonks
                            <p>
                                Choose stocks/etfs/bonds with your own diamond
                                hands
                            </p>
                        </button>
                        <button className="button">GIC </button>
                        <button className="button">
                            Click hear to read more options
                        </button>
                    </div>
                </section>
            </div>
        );
    }
);
