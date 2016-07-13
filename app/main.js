"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()])
    .then(function (success) { return console.log("AppComponent Bootstrapped"); }, function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map