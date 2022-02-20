import "../../App.css";
import "../../normalize.css";
import React, {
    useState,
    useRef,
    useEffect,
    forwardRef,
    useCallback,
} from "react";
import { stonkers } from "./stonk";
import { Chart } from "./chart";
import yepstonk from "../../assets/yepstonk.png";

var axios = require("axios").default;

async function getStonks(stonk) {
    var options = {
        method: "GET",
        url: `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${stonk}&apikey=Y0B479DP9XC1SHHM`,
        headers: { "User-Agent": "request" },
    };

    try {
        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    } catch (e) {}
}

export const IndividualPage = forwardRef(
    ({ onClickNext, showMutuals, setShowDIYStocksPage }, ref) => {
        useEffect(() => {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }, []);

        const [data, setData] = useState();

        // const getFormatData = (data) => {
        //     return {
        //         labels:[ Object.keys(data || {})],
        //         datasets: [
        //             {
        //                 label: "Monthly Open Price Data",
        //                 data: Object.values(data || {}).map(
        //                     (stonky) => stonky["1. open"]
        //                 ),
        //                 borderColor: "rgb(255, 99, 132)",
        //                 backgroundColor: "rgba(255, 99, 132, 0.5)",
        //             },
        //         ],
        //     };
        // };

        const stocks = ["AMZN", "AAPL", "WMT", "HSBC", "VOO"];

        return (
            <div className="container" ref={ref}>
                <section style={{ marginTop: "4rem" }}>
                    <h3 id="title">Individual stocks, bonds, ETFs and more</h3>
                    <h3 id="subtext">
                        choose companies, etfs and bonds you think are gonna do
                        highkey well in the market
                    </h3>
                    <div className="individualTypes">
                        <div id="kids">
                            <h3>ETF's</h3>
                            <p>
                                Think of it like a basket of companies you can
                                invest in all at once. There are different types
                                of baskets that you can choose from. You get to
                                invest in many companies
                            </p>
                        </div>
                        <div id="kids">
                            <h3>Stonks</h3>
                            <p>
                                A stonk is a small investment you placed in a
                                company to get a fraction of ownership in it
                            </p>
                        </div>
                        <div id="kids">
                            <h3>Bonds</h3>
                            <p>
                                A bond is a loan taken out by the company and
                                instead of going to the bank the company gets
                                its loan from investors and the investors charge
                                an interest that the company must pay.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <h3 id="subtext">Choose your own ETF, Stock and Bond!</h3>
                    <h5>
                        Here are some stocks/etfs. Click on one to get some info
                    </h5>
                    <div>
                        {stocks.map((stock) => (
                            <button
                                className="button"
                                key={stock}
                                // onClick={() => {getStonks(stonk)}}
                                onClick={() => {
                                    setData(
                                        stonkers["Monthly Adjusted Time Series"]
                                    );
                                }}
                            >
                                {stock}
                            </button>
                        ))}
                    </div>
                    {data && (
                        // <Chart
                        //     data={getFormatData(
                        //         stonkers["Monthly Adjusted Time Series"]
                        //     )}
                        // ></Chart>

                        <img src={yepstonk} height="auto" width="800"></img>
                    )}
                </section>
            </div>
        );
    }
);
