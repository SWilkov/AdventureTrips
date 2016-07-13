import { Component, OnInit, Input } from "@angular/core";
import { CustomerFormComponent } from "./customer-form.component";
import { AdventureService } from "./services/adventure.service";

import { AdventureEvent } from "./models/AdventureEvent";

@Component({
    selector: "booking",
    templateUrl: "./app/views/booking.component.html",
    directives: [ CustomerFormComponent ] 
})
export class BookingComponent implements OnInit {
    public selectedAdventure: AdventureEvent;

    constructor(private adventureService: AdventureService) { }

    public ngOnInit() {
         this.selectedAdventure = this.adventureService.getCurrentEvent();
    }
}