import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solincomp.component.html',
  styleUrls: ['./solincomp.component.scss'],
})
export class SolIncompComponent implements OnInit {
  logo = 'assets/imagenes/BANDESAL HORIZONTAL-01.png';
  usuario = 'agperez';
  rolUsuario = 'Ejecutivo';
  public isCollapsed = true;
  j: number;

  @Input() v: number;
  n: number = 0;
  totalfinal=0;

  constructor(

    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {




    
  }

  dep: number;
  nombre: string;
  op: string = '#collapseExample';
  numero: number;
  ngOnInit(): void {
    this.usuario = 'agperez';
    this.rolUsuario = 'Ejecutivo';
  }

}
