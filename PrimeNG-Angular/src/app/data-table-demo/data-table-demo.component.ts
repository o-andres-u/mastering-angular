import { Component, OnInit } from '@angular/core';
import {Car} from './car';
import {CarService} from './car.service';

import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-data-table-demo',
  templateUrl: './data-table-demo.component.html',
  styleUrls: ['./data-table-demo.component.css']
})
export class DataTableDemoComponent implements OnInit {

  cars: Car[];

  msgs: Message[] = [];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }

  selectCar(car: Car) {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Car Select', detail:'Vin: ' + car.vin});
  }

}
