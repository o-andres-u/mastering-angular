import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-detalles',
  templateUrl: './total-detalles.component.html',
  styleUrls: ['./total-detalles.component.scss']
})
export class TotalDetallesComponent implements OnInit {

precioTotalBruto: number = 1000000;
valorDescuentoPiePag: number = 0;
totalPago: number = 1190000;
valorImpuestos: number = 190000;
  constructor() { }

  ngOnInit() {
  }

}
