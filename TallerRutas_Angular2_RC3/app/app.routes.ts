/**
 * Created by alejandropalacio on 5/04/17.
 */
import {provideRouter, RouterConfig} from '@angular/router';
import {CursosComponent} from './components/cursos.component';
import {CursoDetailComponent} from './components/curso.detail.component';

export const routes : RouterConfig= [
    {
        path:'',
        redirectTo: '/cursos',
        terminal: true
    },
    {path: 'cursos', component: CursosComponent},
    {path: 'curso', component: CursoDetailComponent},
    {path: 'curso/:id', component: CursoDetailComponent},
    {path: 'curso/:id/:titulo', component: CursoDetailComponent}
    ];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]