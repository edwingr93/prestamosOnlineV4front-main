import { Component, OnInit, Output, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  logo = 'assets/imagenes/BANDESAL HORIZONTAL-01.png';
  usuario = 'agperez';
  rolUsuario = 'Ejecutivo';

  ngOnInit(): void {
    this.usuario = 'agperez';
    this.rolUsuario = 'Ejecutivo';
  }
  
}
