import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { AdventureService } from "./services/adventure.service";
import { Router } from "@angular/router-deprecated";

import { Customer }from "./models/Customer";
import { HealthProblem } from "./models/HealthProblem";
import { EventInfo } from "./models/EventInfo";

import * as RX from "rxjs/RX";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";

@Component({
    selector: "customer-form",
    templateUrl: "./app/views/customer-form.component.html"
})
export class CustomerFormComponent implements OnInit {
    private submitted:boolean = false;    
    public selectedHealthProblem: HealthProblem = new HealthProblem();
    public healthProblems: Array<HealthProblem> = [];
    public model: Customer = new Customer();
    public lastModel: Customer = new Customer();
    
    public availableDates: Array<EventInfo>;
    public selectedEventInfo: EventInfo;
    public active: boolean = true;
    
    constructor(private adventureService:AdventureService,
                private router: Router) {
        this.selectedHealthProblem.id = "1";
        this.selectedHealthProblem.name = "none";
        this.selectedHealthProblem.description = "";
    }

    public ngOnInit() {
        this.getHealthProblems();
        this.getAvailableDates();
    }

    public OnSubmit() {
        this.submitted = true;

        if (this.selectedHealthProblem) {
            this.model.healthProblems.push(this.selectedHealthProblem);
        }

        this.model.bookedEvents.push(this.selectedEventInfo);
        this.adventureService.addCustomer(this.model);
        this.lastModel = this.model;

        this.model.firstName = "";
        this.model.lastName = "";
        this.model.age = null;
        this.model.weight = null;
        this.model.bookedEvents = [];
        this.model.healthProblems = [];
        this.selectedHealthProblem = null;
        this.selectedEventInfo = null;

        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    public getHealthProblems() {
        this.adventureService.getHealthProblems()
                            .subscribe(data => {
                                console.log(data);
                                this.healthProblems = data;                                
                            },
                            error => console.log(error.message || error),
                            () => console.log("getHealthProblems complete"));
    }

    public getAvailableDates() {
        this.adventureService.getEventInfos()
                            .subscribe(data => {
                                this.availableDates = 
                                    data.filter(d => d.placesTaken < d.maximumPlaces);
                            }, error => console.log(error.message || error),
                            () => console.log("getAvailableDates complete"));
    }

    public eventInfoChanged(available: EventInfo) {
        this.selectedEventInfo = available;
    }

    public gotoHome() {
        this.submitted = false;
        this.router.navigate(["Adventure"]);
    }
}