/**
 * Created by alejandropalacio on 22/03/17.
 */
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name : "pruebas"})

export class PruebasPipe implements PipeTransform {

    transform(value , por) : string {

        let valuev = parseInt(value);
        let porv = parseInt(por);

        let resultado = "La multiplicación de "+valuev+" x "+porv+" = "+(valuev * porv);
        return resultado;

    }
}