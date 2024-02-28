import { Component } from '@angular/core';
import { CarrousellComponent } from './carrousell/carrousell.component';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CarrousellComponent, GridComponent],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent {
  grid: boolean = true;
  whidt: number = window.innerWidth;
  constructor() {
    this.changeView();
  }

  changeView() {
    if(window.innerWidth < 768) {
      this.grid = false;
    } else {
      this.grid = true;
    }
  }
}
