import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrousellComponent } from './carrousell.component';

describe('CarrousellComponent', () => {
  let component: CarrousellComponent;
  let fixture: ComponentFixture<CarrousellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrousellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrousellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
