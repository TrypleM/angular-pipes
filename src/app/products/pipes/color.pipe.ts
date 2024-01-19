import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  private colors = ['rojo', 'negro', 'azul', 'verde'];

  transform(value: number): string {
    return this.colors[value];
  }

}
