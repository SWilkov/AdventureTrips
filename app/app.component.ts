import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from "@angular/router-deprecated";
import { AdventureService } from "./services/adventure.service";
import { AdventureComponent } from "./adventure.component";
import { BookingComponent } from "./booking.component";

@Component({
    selector: "app",
    templateUrl: "./app/views/app.component.html",
    providers: [ AdventureService, ROUTER_PROVIDERS ], 
    directives: [ ROUTER_DIRECTIVES ] 
})
@RouteConfig([
    {
        path: "/adventure",
        name: "Adventure",
        component: AdventureComponent,
        useAsDefault: true
    },
    {
        path: "/booking",
        name: "Booking",
        component: BookingComponent,
        useAsDefault: false
    }
])
export class AppComponent implements OnInit {

    constructor() { }

    public ngOnInit() { 

    }
}