import{Vehicle} from "./Vechile";

export class ParkingSlot {
    private vechile : Vehicle | null = null;
    constructor(public slotNumber : number,public vechileType:string){}

    isAvailable(): boolean{
        return this.vechile === null
    }
    parkVechile(vehicle:Vehicle):boolean{
        if(!this.isAvailable()) return false;
        this.vechile = leave();
        this.vechile = null;
        return leavingVechile;
    }
    getVechile():Vehicle | null{
        return this.vechile;
    }
}