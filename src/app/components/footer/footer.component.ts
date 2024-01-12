import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  author: string = 'Carlos Prost';
  anio: number = this.añoActual();

  añoActual(): number {
    return new Date().getFullYear();
  }
}
