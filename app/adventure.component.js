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
var adventure_detail_component_1 = require("./adventure-detail.component");
var AdventureComponent = (function () {
    function AdventureComponent(adventureService, router) {
        this.adventureService = adventureService;
        this.router = router;
        this.adventureName = "Sky Diving";
    }
    AdventureComponent.prototype.ngOnInit = function () {
        if (this.selectedAdventure == null) {
            this.getAdventure(this.adventureName);
        }
    };
    AdventureComponent.prototype.gotoBooking = function () {
        this.router.navigate(["Booking"]);
    };
    AdventureComponent.prototype.getAdventure = function (name) {
        var _this = this;
        this.adventureService.getAdventureEvent(name)
            .subscribe(function (data) {
            console.log(data);
            _this.selectedAdventure = data;
        }, function (error) { return console.log(error.message || error); }, function () { return console.log("getadventure complete"); });
    };
    AdventureComponent = __decorate([
        core_1.Component({
            selector: "adventure",
            templateUrl: "./app/views/adventure.component.html",
            directives: [adventure_detail_component_1.AdventureDetailComponent]
        }), 
        __metadata('design:paramtypes', [adventure_service_1.AdventureService, router_deprecated_1.Router])
    ], AdventureComponent);
    return AdventureComponent;
}());
exports.AdventureComponent = AdventureComponent;
//# sourceMappingURL=adventure.component.js.map