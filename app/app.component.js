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
var router_deprecated_1 = require("@angular/router-deprecated");
var adventure_service_1 = require("./services/adventure.service");
var adventure_component_1 = require("./adventure.component");
var booking_component_1 = require("./booking.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "app",
            templateUrl: "./app/views/app.component.html",
            providers: [adventure_service_1.AdventureService, router_deprecated_1.ROUTER_PROVIDERS],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: "/adventure",
                name: "Adventure",
                component: adventure_component_1.AdventureComponent,
                useAsDefault: true
            },
            {
                path: "/booking",
                name: "Booking",
                component: booking_component_1.BookingComponent,
                useAsDefault: false
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map