import { HealthProblem } from "./HealthProblem";
import { EventInfo } from "./EventInfo";

export class Customer{
    public id: string;
    public firstName: string;
    public lastName: string;
    public age:number;
    public weight: number;
    public gender: string;
    public healthProblems: Array<HealthProblem> = [];
    public bookedEvents: Array<EventInfo> = [];
}