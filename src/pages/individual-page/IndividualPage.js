
import "../../App.css";
import "../../normalize.css";
import React, { useState, useRef, useEffect } from "react";



export const IndividualPage = () => {


    return(
        <div>
             <section>
                
                <h2 id="title">Individual stocks, bonds, ETFs and more</h2>
                    <h3>choose companies and etfs and bonds you think are gonna do highkey well in the market</h3>
                    <div className="individualTypes">
                        <div>
                            <h3>ETF's</h3>
                            <h5>
                                Think of it like a basket of companies you can invest in all at once. There are different types of baskets that you can choose from
                            </h5>

                        </div>
                        <div>
                            <h3>Stonks</h3>
                            <h5>
                                A stonk is a small investment you placed in a company to get a fraction of ownership in it
                            </h5>
                        </div>
                        <div>
                            <h3>Bonds</h3>
                        </div>
                        
                    </div>

            </section>
            <section>
            <div className="individualOptions">
                    <div className="options">
                        <h3>VFV</h3>
                        <h5>
                            Contains the top 500 companies from the US
                        </h5>

                    </div>
                    <div className="options">
                        <h3>CIC</h3>
                        <h5>
                            Contains a handful of canadian owned banks
                        </h5>
                    </div>
                    
                    
                </div>
            </section>
            
        </div>
    )
}