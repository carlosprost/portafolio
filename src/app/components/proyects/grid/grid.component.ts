import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatGridListModule, CardComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {

}
