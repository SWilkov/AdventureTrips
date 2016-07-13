import { Injectable, OnInit, OnDestroy } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import * as RX from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";

import { Customer } from "../models/Customer";
import { AdventureEvent } from "../models/AdventureEvent";
import { EventInfo } from "../models/EventInfo";

@Injectable()
export class AdventureService implements OnInit {
    private adventureEventsUrl: string = "http://adventuretripsservice.azurewebsites.net/api/adventureEvent";
    private healthProblemsUrl: string = "http://adventuretripsservice.azurewebsites.net/api/healthProblem";
    private customerUrl: string = "http://adventuretripsservice.azurewebsites.net/api/customer";
    private eventInfoUrl: string = "http://adventuretripsservice.azurewebsites.net/api/eventInfo";
    private headers: Headers;
    private currentAdventureEvent: AdventureEvent;

    constructor(private http: Http) {
        this.headers = new Headers({
            "ZUMO-API-VERSION": "2.0.0",
            "Content-Type": "application/json",
        });
     }

    public ngOnInit() {
        
    }

    public getAdventureEvents() {
        return this.http.get(this.adventureEventsUrl, { headers: this.headers })
                   .map(response => {
                       let json = response.json();
                       console.log(json);
                       return json || {};
                   });
    }

    public getCurrentEvent(): AdventureEvent {
        return this.currentAdventureEvent;
    }

    public getAdventureEvent(name: string) {
        let url = this.adventureEventsUrl + "?name=" + name;
        let encodedUrl = encodeURI(url);

        return this.http.get(encodedUrl, { headers: this.headers })
                        .map(response => {
                            let json = response.json();
                            this.currentAdventureEvent = json;
                            console.log(this.currentAdventureEvent);
                            return json || {};
                        });
    }

   public getEventInfos() {
       return this.http.get(this.eventInfoUrl, { headers: this.headers })
                       .map(response =>{
                            let json = response.json();
                            console.log(json);
                            return json;
                    });
   }

    public getHealthProblems() {
        return this.http.get(this.healthProblemsUrl, { headers: this.headers })
                        .map(response => {
                            let json = response.json();
                            console.log(json);
                            return json;
                    });
    }

    

    public addCustomer(customer: Customer) {
        

         this.http.post(this.customerUrl,
                         JSON.stringify(customer),
                          { headers: this.headers })
                            .map(response => {
                                response.json();
                            })
                            .subscribe(
                                data => console.log(data),
                                error => console.log(error),
                                () => console.log("addCustomer complete"));
    }

    public getAvailableDates() {
            return RX.Observable.create(observer => {
                observer.next(this.currentAdventureEvent.eventInfos);
                observer.complete();
            });
    }
}    