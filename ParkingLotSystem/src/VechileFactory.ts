import {Car,Bike,Truck,Vechile} from "./Vechile";

export class VechileFactory{
    static createVechile(type:String,licenseNumber:string):Vechile | null{
        switch(type.toLowerCase()){
            case "car":return new Car(licenseNumber);
            case "bike":return new Bike(licenseNumber);
            case "truck":return new Truck(licenseNumber);
            default : return null
        }
    }
}