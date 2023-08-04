import { createSvgIcon } from "@mui/material/utils";
import HomeSvg from "../../images/category-icons/home.svg";
import WheelSvg from "../../images/category-icons//wheel.svg";
import TrophySvg from "../../images/category-icons//trophy.svg";
import TrendSvg from "../../images/category-icons//trend.svg";
import AllProductsSvg from "../../images/category-icons//all-products.svg";
import MascaraSvg from "../../images/category-icons//mascara.svg";
import PowderSvg from "../../images/category-icons//powder.svg";
import LotionSvg from "../../images/category-icons//lotion.svg";
import MakeupSvg from "../../images/category-icons//makeup.svg";
import LipstickSvg from "../../images/category-icons//lipstick.svg";
import FaceMaskSvg from "../../images/category-icons//facemask.svg";
import ThermoMeterSvg from "../../images/category-icons//thermometer.svg";
import PumpSvg from "../../images/category-icons//pump.svg";
import EyeglassSvg from "../../images/category-icons//eyeglass.svg";

/*  
    Generating SVG Icons using material ui createSvgIcon function which 
    has built in accebility and can take sx prop. Using SVGR package
    and adding webpack config in next.config.js
*/

export const HomeIcon = createSvgIcon(<HomeSvg />, "Home");
export const WheelIcon = createSvgIcon(<WheelSvg />, "Wheel");
export const TrophyIcon = createSvgIcon(<TrophySvg />, "Trophy");
export const TrendIcon = createSvgIcon(<TrendSvg />, "Trend");
export const AllProductsIcon = createSvgIcon(<AllProductsSvg />, "AllProducts");
export const MascaraIcon = createSvgIcon(<MascaraSvg />, "Mascara");
export const PowderIcon = createSvgIcon(<PowderSvg />, "Powder");
export const LotionIcon = createSvgIcon(<LotionSvg />, "Lotion");
export const MakeupIcon = createSvgIcon(<MakeupSvg />, "Makeup");
export const LipstickIcon = createSvgIcon(<LipstickSvg />, "Trend");
export const FaceMaskIcon = createSvgIcon(<FaceMaskSvg />, "FaceMask");
export const ThermoMeterIcon = createSvgIcon(<ThermoMeterSvg />, "ThermoMeter");
export const PumpIcon = createSvgIcon(<PumpSvg />, "Pump");
export const EyeglassIcon = createSvgIcon(<EyeglassSvg />, "Eyeglass");
