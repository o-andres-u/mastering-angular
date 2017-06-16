import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impuestoInluidoPrecio'
})
export class ImpuestoInluidoPrecioPipe implements PipeTransform {

  transform(value: boolean, args?: any): any {
    return value ? 'Impuestos incluidos' : 'Impuestos no incluidos';
  }

}
