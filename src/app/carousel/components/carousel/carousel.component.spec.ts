import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';
import { CarouselNavComponent } from '../carousel-nav/carousel-nav.component';
import { CarouselDotsComponent } from '../carousel-dots/carousel-dots.component';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CarouselComponent,
        CarouselNavComponent,
        CarouselDotsComponent,
        CarouselItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    component.images = [
      'https://images.unsplash.com/photo-1490237014491-822aee911b99?dpr=2&auto=format&fit=crop&w=1500&h=1001&q=80',
      'https://images.unsplash.com/photo-1490731727228-d56f39758d0e?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80',
      'https://images.unsplash.com/photo-1459666644539-a9755287d6b0?dpr=2&auto=format&fit=crop&w=1500&h=906&q=80',
    ];
    component.activeIndex = 0;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call next function and increment by 1', () => {
    spyOn(component.activeIndexChange, 'emit');
    expect(component.activeIndex).toBe(0);
    component.next();
    expect(component.activeIndex).toBe(1);
    expect(component.activeIndexChange.emit).toHaveBeenCalledWith(1);
  });

  it('should call next() and increment by 3', () => {
    spyOn(component.activeIndexChange, 'emit');
    expect(component.activeIndex).toBe(0);
    component.next();
    component.next();
    component.next();
    expect(component.activeIndex).toBe(0);
    expect(component.activeIndexChange.emit).toHaveBeenCalledWith(0);
  });

  it('should call prev() and decrement by 1', () => {
    spyOn(component.activeIndexChange, 'emit');
    expect(component.activeIndex).toBe(0);
    component.prev();
    expect(component.activeIndex).toBe(2);
    expect(component.activeIndexChange.emit).toHaveBeenCalledWith(2);
  });

  it('should call activate() with index 2', () => {
    spyOn(component.activeIndexChange, 'emit');
    expect(component.activeIndex).toBe(0);
    component.activate(2);
    expect(component.activeIndex).toBe(2);
    expect(component.activeIndexChange.emit).toHaveBeenCalledWith(2);
  });
});
