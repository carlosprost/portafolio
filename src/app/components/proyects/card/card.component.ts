import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BtnsComponent } from './btns/btns.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, BtnsComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input() img!: string
  @Input() content!: string;
  @Input() hrefDeploy!: string;
  @Input() hrefCode!: string;

  routeImg!: string;

  constructor() {
    
  };

  ngOnInit(): void {
    this.routeImg = `../../../../assets/proyects/${this.img}.png`;
  }

}
