import { Customer } from "./Customer";

export class EventInfo{
    public date:Date;
    public available: boolean;
    public maximumPlaces:number;
    public placesTaken: number;
    public customers: Array<Customer>;
    public placesLeft: number;
}