import Vechile = require("./Vechile")

export interface PricingStrategy{
    calculationFee(vechile:Vechile,hours:number):number;
}

export class HourlyPricing implements PricingStrategy{
    calculationFee(vechile: Vechile, hours: number): number {
        const rate = vechile.vechileType == "Car" ? 10 : vechile.vechileType == "Bike" ? 5 : 20;
        return rate * hours;
    }
}

export class DailyPricing implements PricingStrategy{
    calculationFee(vechile: Vechile, hours: number): number {
        const days =  Math.ceil(hours/24);
        const rate = vechile.vechileType == "Car" ? 100 : vechile.vechileType == "Bike" ? 50 : 200;
        return rate* days;
    }
}