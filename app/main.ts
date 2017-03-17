import { bootstrap }    from '@angular/platform-browser-dynamic';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {HTTP_PROVIDERS} from "@angular/http";
import { GowinComponent } from './gowin.component';

bootstrap(GowinComponent, [ROUTER_PROVIDERS, ROUTER_DIRECTIVES, HTTP_PROVIDERS]);
