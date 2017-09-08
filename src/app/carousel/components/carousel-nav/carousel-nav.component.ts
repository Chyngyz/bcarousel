import {
  ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output
} from '@angular/core';

@Component({
  selector: 'b-carousel-nav',
  templateUrl: './carousel-nav.component.html',
  styleUrls: ['./carousel-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselNavComponent {
  @HostBinding('class.b-carousel-nav--hover')
  @Input() showNavOnHover: boolean;
  @Input() navStyle: any;
  @Input() navStyleClass: any;
  @Input() images: string[];
  @Input() active: number;
  @Input() loop: boolean;
  @Output() onPrev = new EventEmitter();
  @Output() onNext = new EventEmitter();
  @HostBinding('class.active') slideInOut: boolean;
  @HostListener('mouseenter') onMouseEnter(): void {
    this.slideInOut = this.showNavOnHover;
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.slideInOut = false;
  }

}
