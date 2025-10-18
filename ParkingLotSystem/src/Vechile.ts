export abstract class Vechile {
    constructor( public linceNumber: string, public vechileType:string){}

    abstract getVechileType():string;

    park():void{
        console.log(`${this.vechileType} with lience ${this.linceNumber} is parked`)
    }
    leave():void{
        console.log(`${this.vechileType} with lincense ${this.linceNumber} has left`);
    }
    getVechileType(){
        return this.vechileType;
    }
}

export class Car extends Vechile{
    constructor(linceNumber:string){
        super(linceNumber,"Car")
    }
    
    getVechileType(): string {
        return this.vechileType;
    }
}

export class Bike extends Vechile{
    constructor(linceNumber:string){
        super(linceNumber,"Bike")
    }

    getVechileType(): string {
        return this.vechileType;
    }
}

export class Truck extends Vechile{
    constructor (linceNumber:string){
        super(linceNumber,"Truck")
    }
    getVechileType(): string {
        return this.vechileType;
    }
}
