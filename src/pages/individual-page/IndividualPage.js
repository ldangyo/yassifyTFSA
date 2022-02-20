
import "../../App.css";
import "../../normalize.css";
import React, { useState, useRef, useEffect } from "react";



export const IndividualPage = () => {
    const [vfv, setvfv]=useState(false)
    const [cic, setCic] =useState(false)
    const [hsbc, setHsbc] =useState(false)
    const [starbucks, setStarbucks] =useState(false)
    const [bond1, setBond1] =useState(false)
    const [bond2, setBond2] =useState(false)

    const handlevfv = ()=>{
        setvfv(!vfv)
    } 
    const handlecic = ()=>{
        setCic(!cic)
    } 
    const handlehsbc = ()=>{
        setHsbc(!hsbc)
    } 
    const handlestarbucks = ()=>{
        setStarbucks(!starbucks)
    } 
    const handlebond1 = ()=>{
        setBond1(!bond1)
    } 
    const handlebond2 = ()=>{
        setBond2(!bond2)
    } 

    

    return(
        <div>
             <section>
                
                <h3 id="title">Individual stocks, bonds, ETFs and more</h3>
                    <h3 id="subtext">choose companies, etfs and bonds you think are gonna do highkey well in the market</h3>
                    <div className="individualTypes">
                        <div id="kids">
                            <h3 >ETF's</h3>
                            <h5>
                                Think of it like a basket of companies you can invest in all at once. There are different types of baskets that you can choose from
                            </h5>

                        </div>
                        <div id="kids">
                            <h3 >Stonks</h3>
                            <h5>
                                A stonk is a small investment you placed in a company to get a fraction of ownership in it
                            </h5>
                        </div>
                        <div id="kids">
                            <h3 >Bonds</h3>
                            <h5>
                                A bond is a loan taken out by the company and instead of going to the bank the company gets its loan from investors and the investors charge an interest that the company must pay.
                            </h5>
                        </div>
                        
                    </div>

            </section>
            <section>
                <h3 id="subtext">Choose your own ETF, Stock and Bond!</h3>
                <div className="individualOptions">
                        
                        <button className={vfv? "buttonTrue":"buttonFalse"} onClick={handlevfv}>
                            <h3>VFV</h3>
                            <h5>
                                Contains the top 500 companies from the US
                            </h5>
                        </button>
                        
                        <button className={hsbc? "buttonTrue":"buttonFalse"} onClick={handlehsbc}>HSBC</button>
                        <button className={bond1? "buttonTrue":"buttonFalse"} onClick={handlebond1}>bond 1</button>
                        <button className={cic? "buttonTrue":"buttonFalse"} onClick={handlecic}>
                            <h3>CIC</h3>
                            <h5>
                                Contains a handful of canadian owned banks
                            </h5>
                        </button>
                        
                        <button className={starbucks? "buttonTrue":"buttonFalse"} onClick={handlestarbucks}>Starbucks</button>
                    
                        <button className={bond2? "buttonTrue":"buttonFalse"} onClick={handlebond2}>bond 2</button>
                        
                    </div>
            </section>

            <section>
                
            </section>
            
        </div>
    )
}