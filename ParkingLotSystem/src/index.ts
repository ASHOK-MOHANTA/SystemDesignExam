import { HourlyPricing } from './PricingStrategy';
import { VechileFactory } from './VechileFactory';
import { ParkingSlot } from './ParkingSlot';
import { ParkingLot } from './ParkingLot';

const lot = ParkingLot.getInstance();
lot.addObserver(console.log);

for(let i=1;i<=3;i++) lot.addSlot(new ParkingSlot(i,"Car"));
for(let i=4;i<=5;i++) lot.addSlot(new ParkingSlot(i,"Bike"));


const casr1 = VechileFactory.createVechile("Car","Car1");
const bike1 = VechileFactory.createVechile("Bike","Bike1")

const strategy = new HourlyPricing();
lot.parkVechile(casr1,strategy,2);
lot.parkVechile(bike1,strategy,3);

console.log("Avaiable Car Slots",lot.getAvaiableSlots("Car"));
console.log("Total Revenue",lot.getRevenue());