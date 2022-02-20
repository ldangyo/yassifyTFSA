import aggressiveETF from "../../assets/mutual-fund/eft/etf1.png";
import balancedETF from "../../assets/mutual-fund/eft/etf2.jpeg";
import conservativeETF from "../../assets/mutual-fund/eft/conservative-eft.jpeg";
import growthETF from "../../assets/mutual-fund/eft/growth-etf.jpeg";
import moderateETF from "../../assets/mutual-fund/eft/moderate-conservative-etf.jpeg";
import aggressiveglobal from "../../assets/mutual-fund/global/aggressive-growth-global.jpeg";
import balancedglobal from "../../assets/mutual-fund/global/balanced-global.jpeg";
import conservativeglobal from "../../assets/mutual-fund/global/conservative-global.jpeg";
import moderateglobal from "../../assets/mutual-fund/global/moderate-conservative-global.jpeg";
import growthglobal from "../../assets/mutual-fund/global/growth-global.jpeg";

export const mutualFundImages = {
    "ETF Multi Assets": {
        conservative: conservativeETF,
        "moderate conservative": moderateETF,
        balanced: balancedETF,
        growth: growthETF,
        "aggressive growth": aggressiveETF,
    },
    "Global Multi Assets": {
        conservative: conservativeglobal,
        "moderate conservative": moderateglobal,
        balanced: balancedglobal,
        growth: growthglobal,
        "aggressive growth": aggressiveglobal,
    },
};

export const mer = {
    "ETF Multi Assets": {
        conservative: "0.63%",
        "moderate conservative": "0.64%",
        balanced: "0.69%",
        growth: "0.74%",
        "aggressive growth": "0.74%",
    },
    "Global Multi Assets": {
        conservative: "1.71%",
        "moderate conservative": "1.69%",
        balanced: "1.84%",
        growth: "2.09%",
        "aggressive growth": "2.18%",
    },
};
