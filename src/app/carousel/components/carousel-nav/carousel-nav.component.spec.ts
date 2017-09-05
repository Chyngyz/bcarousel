import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNavComponent } from './carousel-nav.component';

describe('CarouselNavComponent', () => {
  let component: CarouselNavComponent;
  let fixture: ComponentFixture<CarouselNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselNavComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should click on next and emit click event', () => {
    spyOn(component.onNext, 'emit');
    const compiled = fixture.debugElement.nativeElement;
    const nextBtn = compiled.querySelector('.b-carousel-next');
    nextBtn.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.onNext.emit).toHaveBeenCalled();
  });

  it('should click on prev and emit click event', () => {
    spyOn(component.onPrev, 'emit');
    const compiled = fixture.debugElement.nativeElement;
    const nextBtn = compiled.querySelector('.b-carousel-prev');
    nextBtn.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.onPrev.emit).toHaveBeenCalled();
  })
});
