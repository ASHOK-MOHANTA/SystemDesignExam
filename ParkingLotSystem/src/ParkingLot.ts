import { PricingStrategy } from './PricingStrategy';
import { ParkingSlot } from './ParkingSlot';
import {Vehicle} from "./Vechile";

export class ParkingLot{
    private static instance : ParkingLot;
    private slot : ParkingSlot[] = [];
    private observer : ((msg:string)=> void)[] = [];
    private totalRevenue : number = 0;

    private constructor (){}

    static getInstance():ParkingLot{
        if(!ParkingLot.instance){
            ParkingLot.instance = new ParkingLot();
        }
        return ParkingLot.instance;
    }
    addObserver(fn:(msg:string)=> void){
        this.observer.push(fn);
    }
    parkVechile(vechile:Vehicle,strategy : PricingStrategy,hours:number):boolean{
        const avaiableSlot = this.slot.find(
            slot => slot.isAvailable() && slot.vechileType === vechile.vechileType
        );
        if(!avaiableSlot){
            this.notifyObserver("Parking lot is full");
            return false;
        }
        removeVechile(lincenseNumber:String):Boolean{
            const slot = this.slot.find(slot => slot.getVechile() ?.licenseNumber === licenseNumber);
            if(!slot){
                console.log("Vechile Not Found");
                return false;
            }
            slot.removeVechile();
            this.notifyObserver("A vechile has left slot is now free");
            return true
     
        }

        getAvaiableSlots(vechileType:string):Number{
            return this.slot.filter(slot => slot.vechileType === vechileType && slot.isAvailable()).length
        }
        getRevenue():Number{
            return this.totalRevenue
        }
    }
}