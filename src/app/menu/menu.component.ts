import { Component, OnInit, Output, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  logo = 'assets/logoo.png';
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
  }
  prueba(n: number) {
    this.numero = n;
  }


  ruta(id: number) {
    this.router.navigate(['/productos', id]);
  }
  rutanombre(nombres: string) {
    this.router.navigate(['/productos', nombres]);
    this.isCollapsed = true;
  }
  ruta2(id: number) {
    window.location.reload();
  }
  menuopciones(i: number) {
    this.op = '#collapseExample' + i;
  }
  submenu() {
    this.isCollapsed = false;
  }

}
