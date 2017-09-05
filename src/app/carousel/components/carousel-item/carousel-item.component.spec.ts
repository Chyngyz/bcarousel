import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselItemComponent } from './carousel-item.component';

describe('CarouselItemComponent', () => {
  let component: CarouselItemComponent;
  let fixture: ComponentFixture<CarouselItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselItemComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render 3 .b-carousel-item elements', () => {
    component.images = [
      'https://images.unsplash.com/photo-1490237014491-822aee911b99?dpr=2&auto=format&fit=crop&w=1500&h=1001&q=80',
      'https://images.unsplash.com/photo-1490731727228-d56f39758d0e?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80',
      'https://images.unsplash.com/photo-1459666644539-a9755287d6b0?dpr=2&auto=format&fit=crop&w=1500&h=906&q=80',
    ];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const imageElements = compiled.querySelectorAll('.b-carousel-item');
    expect(imageElements.length).toBe(3);
  });

  it('puts "b-carousel-item--active" to second image element', () => {
    component.images = [
      'https://images.unsplash.com/photo-1490237014491-822aee911b99?dpr=2&auto=format&fit=crop&w=1500&h=1001&q=80',
      'https://images.unsplash.com/photo-1490731727228-d56f39758d0e?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80',
      'https://images.unsplash.com/photo-1459666644539-a9755287d6b0?dpr=2&auto=format&fit=crop&w=1500&h=906&q=80',
    ];
    component.active = 1;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const imageElement = compiled.querySelectorAll('.b-carousel-item')[1];
    console.log(compiled.querySelectorAll('.b-carousel-item'));
    expect(imageElement.classList.contains('b-carousel-item--active')).toBeTruthy();
  });

  it('should check that .b-carousel has "b-carousel--fade" class', () => {
    component.animation = 'fade';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const carouselItemElement = compiled.querySelector('.b-carousel');
    expect(carouselItemElement.classList.contains('b-carousel--fade')).toBeTruthy();
  });

  it('should check that .b-carousel has "b-carousel--contain" class', () => {
    component.size = 'contain';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const carouselItemElement = compiled.querySelector('.b-carousel');
    expect(carouselItemElement.classList.contains('b-carousel--contain')).toBeTruthy();
  });
});
