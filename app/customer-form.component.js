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
var core_1 = require('@angular/core');
var adventure_service_1 = require("./services/adventure.service");
var router_deprecated_1 = require("@angular/router-deprecated");
var Customer_1 = require("./models/Customer");
var HealthProblem_1 = require("./models/HealthProblem");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
var CustomerFormComponent = (function () {
    function CustomerFormComponent(adventureService, router) {
        this.adventureService = adventureService;
        this.router = router;
        this.submitted = false;
        this.selectedHealthProblem = new HealthProblem_1.HealthProblem();
        this.healthProblems = [];
        this.model = new Customer_1.Customer();
        this.lastModel = new Customer_1.Customer();
        this.active = true;
        this.selectedHealthProblem.id = "1";
        this.selectedHealthProblem.name = "none";
        this.selectedHealthProblem.description = "";
    }
    CustomerFormComponent.prototype.ngOnInit = function () {
        this.getHealthProblems();
        this.getAvailableDates();
        this.model.firstName = "Scotty";
        this.model.lastName = "Wilkie";
        this.model.gender = "female";
        this.model.age = 41;
        this.model.weight = 89;
    };
    CustomerFormComponent.prototype.OnSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.selectedHealthProblem) {
            this.model.healthProblems.push(this.selectedHealthProblem);
        }
        //TODO logic
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
        setTimeout(function () { return _this.active = true; }, 0);
    };
    CustomerFormComponent.prototype.getHealthProblems = function () {
        var _this = this;
        this.adventureService.getHealthProblems()
            .subscribe(function (data) {
            console.log(data);
            _this.healthProblems = data;
        }, function (error) { return console.log(error.message || error); }, function () { return console.log("getHealthProblems complete"); });
    };
    CustomerFormComponent.prototype.getAvailableDates = function () {
        var _this = this;
        this.adventureService.getEventInfos()
            .subscribe(function (data) {
            _this.availableDates =
                data.filter(function (d) { return d.placesTaken < d.maximumPlaces; });
        }, function (error) { return console.log(error.message || error); }, function () { return console.log("getAvailableDates complete"); });
    };
    CustomerFormComponent.prototype.eventInfoChanged = function (available) {
        this.selectedEventInfo = available;
    };
    CustomerFormComponent.prototype.gotoHome = function () {
        this.submitted = false;
        this.router.navigate(["Adventure"]);
    };
    CustomerFormComponent = __decorate([
        core_1.Component({
            selector: "customer-form",
            templateUrl: "./app/views/customer-form.component.html"
        }), 
        __metadata('design:paramtypes', [adventure_service_1.AdventureService, router_deprecated_1.Router])
    ], CustomerFormComponent);
    return CustomerFormComponent;
}());
exports.CustomerFormComponent = CustomerFormComponent;
//# sourceMappingURL=customer-form.component.js.map