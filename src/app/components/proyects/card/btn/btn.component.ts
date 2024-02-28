import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [MatButtonModule],
  template: `
  <a mat-raised-button color="accent" [href]="href" [target]="target">{{name}}</a>
  `,
  styles: `
  a {
    margin-right: 5px;
  }
  `
})
export class BtnComponent {
  @Input() href!: string;
  @Input() name!: string;
  @Input() target: string = '_blank';

}
