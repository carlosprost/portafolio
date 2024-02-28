import { Component, ElementRef, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-carrousell',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './carrousell.component.html',
  styleUrl: './carrousell.component.scss',
})
export class CarrousellComponent implements OnInit {
  operacion = 0;
  counter = 0;

  constructor(private elementRef: ElementRef<any>) {
    this.configCarrousell();
  }

  ngOnInit(): void {
    this.configCarrousell();
  }

  configCarrousell() {
    const sliderSection = document.querySelectorAll('.slider-section');
    
    sliderSection.forEach((element: Element) => {
      const divElement = element as HTMLDivElement;
      divElement.style.width = `calc(100% / ${sliderSection.length -1})`;
    });
    
  }
  moveToRight() {
    const slider: HTMLDivElement | null = document.querySelector('#slider'),
      sliderSection = document.querySelectorAll('.slider-section');
    let widthImg = 100 / sliderSection.length;

    if (this.counter >= sliderSection.length - 1) {
      this.counter = 0;
      this.operacion = 0;
      if (slider) {
        slider.style.transform = `translate(-${this.operacion}%)`;
        slider.style.transition = 'none';
      }
      return;
    }
    this.counter++;
    this.operacion = this.operacion + widthImg;
    if (slider) {
      slider.style.transform = `translate(-${this.operacion}%)`;
      slider.style.transition = 'all ease .6s';
    }
  }

  moveToLeft() {
    const slider: HTMLDivElement | null = document.querySelector('#slider'),
      sliderSection = document.querySelectorAll('.slider-section');
    let widthImg = 100 / sliderSection.length;
    sliderSection.forEach((element: Element) => {
      const divElement = element as HTMLDivElement;
      divElement.style.width = `calc(100% / ${sliderSection.length})`;
    });
    this.counter--;
    if (this.counter < 0) {
      this.counter = sliderSection.length - 1;
      this.operacion = widthImg * (sliderSection.length - 1);
      if (slider) {
        slider.style.transform = `translate(-${this.operacion}%)`;
        slider.style.transition = 'none';
      }
      return;
    }
    this.operacion = this.operacion - widthImg;
    if (slider) {
      slider.style.transform = `translate(-${this.operacion}%)`;
      slider.style.transition = 'all ease .6s';
    }
  }
}
