import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logo = 'assets/imagenes/1. Logotipo BANDESAL Y GOES letblanca.png';

  constructor() { }

  ngOnInit(): void {
  }

}
