import { Component, OnInit } from '@angular/core';
import { AdventureService } from "./services/adventure.service";
import { Router } from "@angular/router-deprecated";
import { AdventureEvent } from "./models/AdventureEvent";
import { AdventureDetailComponent } from "./adventure-detail.component"

@Component({
    selector: "adventure",
    templateUrl: "./app/views/adventure.component.html",
    directives: [ AdventureDetailComponent ]
})
export class AdventureComponent implements OnInit {
    public selectedAdventure: AdventureEvent;
    private adventureName: string = "Sky Diving";

    constructor(private adventureService:AdventureService,
                private router: Router) { }

    public ngOnInit() { 
        if (this.selectedAdventure == null) {
            this.getAdventure(this.adventureName);
        }
    }

    public gotoBooking(){
        this.router.navigate(["Booking"]);
    }

    private getAdventure(name: string) {
        this.adventureService.getAdventureEvent(name)
            .subscribe(data => {
                console.log(data);
                this.selectedAdventure = data;
            },
            error => console.log(error.message || error),
            () => console.log("getadventure complete"));
    }
}