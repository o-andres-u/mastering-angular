/**
 * Created by alejandropalacio on 22/03/17.
 */
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {RestaurantesListComponent} from './components/restaurantes-list.component';
import {RestaurantesDetailComponent} from './components/restaurantes-detail.component';
import {RestaurantesAddComponent} from './components/restaurantes-add.component';
import {RestaurantesEditComponent} from './components/restaurantes-edit.component';

const appRoutes: Routes = [
    {
        path:'',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {path: "", component : RestaurantesListComponent},
    {path: "restaurante/:id",component : RestaurantesDetailComponent},
    {path: "crear-restaurante", component : RestaurantesAddComponent},
    {path: "editar-restaurante/:id", component : RestaurantesEditComponent},
    {path: "donde-como-hoy/:random", component : RestaurantesDetailComponent}
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);