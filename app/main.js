"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_deprecated_1 = require("@angular/router-deprecated");
var http_1 = require("@angular/http");
var gowin_component_1 = require('./gowin.component');
platform_browser_dynamic_1.bootstrap(gowin_component_1.GowinComponent, [router_deprecated_1.ROUTER_PROVIDERS, router_deprecated_1.ROUTER_DIRECTIVES, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map