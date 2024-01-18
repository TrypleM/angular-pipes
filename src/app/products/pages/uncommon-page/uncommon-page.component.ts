import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Miguel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  //i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando','Eduardo', 'Melissa', 'Natalia', 'Miguel'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  //Keyvalue Pipe
  public person = {
    name: 'Miguel',
    age: 29,
    address: 'Santiago de Compostela, Galicia'
  }

  //Async pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap:',value))
  );
  public promiseValue: Promise<string> = new Promise((resolve,reject) => {
    setTimeout(() => {
      this.person.name = 'Beatriz'
      resolve('Tenemos data en la promesa');
    },3500);
  });

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  deleteClient(): void {
    this.clients.shift();
  }
}
