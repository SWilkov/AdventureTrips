import { Location } from "./Location";
import { Customer } from "./Customer";
import { EventInfo } from "./EventInfo";
import { ExperienceExtra } from "./ExperienceExtra";

export class AdventureEvent{
    public id:string;
    public name:string;
    public headline:string;
    public description:string;
    public location: Location;
    public eventInfos: Array<EventInfo>;
    public experienceExtras: Array<ExperienceExtra>;
}