import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnDestroy {

  title: string = 'Carlos Prost';
  subtitle!: string; 
  subtitleItems: string[] = ['Front-end Developer', 'Back-end Developer', 'Mobile Developer'];

  interval!: any;

  constructor() {
    this.cambiarSubtitulo();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }


  cambiarSubtitulo(): void {
    let count = 0;
    this.interval = setInterval(() => {
      this.subtitle = this.subtitleItems[count];
      console.log(this.sumarCount(count, this.subtitleItems.length));
      
      count = this.sumarCount(count, this.subtitleItems.length);
    }, 1500);

  }

  sumarCount(count: number, length: number): number {
    return count < length -1 ? count + 1 : 0;
  }

}
