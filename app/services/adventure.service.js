"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var RX = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
var AdventureService = (function () {
    function AdventureService(http) {
        this.http = http;
        this.adventureEventsUrl = "http://adventuretripsservice.azurewebsites.net/api/adventureEvent";
        this.healthProblemsUrl = "http://adventuretripsservice.azurewebsites.net/api/healthProblem";
        this.customerUrl = "http://adventuretripsservice.azurewebsites.net/api/customer";
        this.eventInfoUrl = "http://adventuretripsservice.azurewebsites.net/api/eventInfo";
        this.headers = new http_1.Headers({
            "ZUMO-API-VERSION": "2.0.0",
            "Content-Type": "application/json",
        });
    }
    AdventureService.prototype.ngOnInit = function () {
    };
    AdventureService.prototype.getAdventureEvents = function () {
        return this.http.get(this.adventureEventsUrl, { headers: this.headers })
            .map(function (response) {
            var json = response.json();
            console.log(json);
            return json || {};
        });
    };
    AdventureService.prototype.getCurrentEvent = function () {
        return this.currentAdventureEvent;
    };
    AdventureService.prototype.getAdventureEvent = function (name) {
        var _this = this;
        var url = this.adventureEventsUrl + "?name=" + name;
        var encodedUrl = encodeURI(url);
        return this.http.get(encodedUrl, { headers: this.headers })
            .map(function (response) {
            var json = response.json();
            _this.currentAdventureEvent = json;
            console.log(_this.currentAdventureEvent);
            return json || {};
        });
    };
    AdventureService.prototype.getEventInfos = function () {
        return this.http.get(this.eventInfoUrl, { headers: this.headers })
            .map(function (response) {
            var json = response.json();
            console.log(json);
            return json;
        });
    };
    AdventureService.prototype.getHealthProblems = function () {
        return this.http.get(this.healthProblemsUrl, { headers: this.headers })
            .map(function (response) {
            var json = response.json();
            console.log(json);
            return json;
        });
    };
    AdventureService.prototype.addCustomer = function (customer) {
        this.http.post(this.customerUrl, JSON.stringify(customer), { headers: this.headers })
            .map(function (response) {
            response.json();
        })
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); }, function () { return console.log("addCustomer complete"); });
    };
    AdventureService.prototype.getAvailableDates = function () {
        var _this = this;
        return RX.Observable.create(function (observer) {
            observer.next(_this.currentAdventureEvent.eventInfos);
            observer.complete();
        });
    };
    AdventureService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AdventureService);
    return AdventureService;
}());
exports.AdventureService = AdventureService;
//# sourceMappingURL=adventure.service.js.map