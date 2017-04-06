/**
 * Created by alejandropalacio on 5/04/17.
 */
import {Routes, RouterModule} from '@angular/router';
import {PaisesComponent} from './components/paises.component';
import {CiudadesComponent} from './components/ciudades.component';
import {MiFormularioComponent} from './components/mi-formulario.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/paises',
        terminal: true
    },
    {path: 'paises', component: PaisesComponent},
    {path: 'ciudades', component: CiudadesComponent},
    {path: 'la-ciudad/:id', component: CiudadesComponent},
    {path: 'mi-formulario', component: MiFormularioComponent}
];

export const appRoutingProviders : any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
