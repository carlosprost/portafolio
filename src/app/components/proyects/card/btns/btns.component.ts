import { Component, Input } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-btns',
  standalone: true,
  imports: [BtnComponent],
  template: `
  <app-btn [href]="hrefDeploy" [name]="'Deploy'"></app-btn>
  <app-btn [href]="hrefCode" [name]="'Code'"></app-btn>
  `,
  styleUrl: './btns.component.scss'
})
export class BtnsComponent {
  @Input() hrefDeploy!: string;
  @Input() hrefCode!: string;

}
