import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDotsComponent } from './carousel-dots.component';
import { before } from 'selenium-webdriver/testing';

describe('CarouselDotsComponent', () => {
  let component: CarouselDotsComponent;
  let fixture: ComponentFixture<CarouselDotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselDotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselDotsComponent);
    component = fixture.componentInstance;
    component.images = [
      'https://images.unsplash.com/photo-1490237014491-822aee911b99?dpr=2&auto=format&fit=crop&w=1500&h=1001&q=80',
      'https://images.unsplash.com/photo-1490731727228-d56f39758d0e?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80',
      'https://images.unsplash.com/photo-1459666644539-a9755287d6b0?dpr=2&auto=format&fit=crop&w=1500&h=906&q=80',
    ];
    component.active = 0;
    component.dotsStyleClass = 'my-unique-dot-class';
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have three dots', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const dotElements = compiled.querySelectorAll('.b-carousel-dot');
    expect(dotElements.length).toBe(3);
  });

  it('should have "active" class on second dot', () => {
    component.active = 1;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const dotElements = compiled.querySelectorAll('.b-carousel-dot');
    expect(dotElements[1].classList.contains('active')).toBeTruthy();
  });

  it('should have "my-unique-dot-class" class name', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const ulElement = compiled.querySelector('.b-carousel-dots');
    expect(ulElement.classList.length).toBe(2);
    expect(ulElement.classList.contains('my-unique-dot-class')).toBeTruthy();
  });

  it('should click on second dot and emit click event with index 1', () => {
    fixture.detectChanges();
    spyOn(component.onClick, 'emit');
    const compiled = fixture.debugElement.nativeElement;
    const dot = compiled.querySelectorAll('.b-carousel-dot')[1];
    dot.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.onClick.emit).toHaveBeenCalledWith(1);
  });
});
