/**
 * Created by alejandropalacio on 5/04/17.
 */
import {Component} from '@angular/core';

@Component({
    selector:'my-formulario',
    templateUrl: 'app/views/mi-formulario.component.html'
})

export class MiFormularioComponent{
    public enviado = false;
    public categorias =['Accion', 'Terror', 'Comedia','Aventura'];
    public pelicula = {'titulo':'', 'categoria':''};

    onSubmit(){
        this.enviado = true;
    }
}
