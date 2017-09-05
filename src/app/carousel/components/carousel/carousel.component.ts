import {
  ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output
} from '@angular/core';

@Component({
  selector: 'b-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  @Input() activeIndex = 0;
  @Input() animation = 'fade';
  @Input() style: any;
  @Input() styleClass: any;
  @HostBinding('style.height')
  @Input() height = '400px';
  @HostBinding('style.width')
  @Input() width = '600px';
  @Input() bgSize = 'cover';
  @Input() showNav = true;
  @Input() showNavOnHover = true;
  @Input() showDots = true;
  @Input() transitionDuration = 1;
  @Input() transitionDelay: number;
  @Input() autoPlay = false;
  @Input() autoplayTimeout = 3000;
  @Input() dotsStyle: any;
  @Input() dotsStyleClass: any;
  @Input() itemStyle: any;
  @Input() itemStyleClass: any;
  @Input() navStyle: any;
  @Input() navStyleClass: any;
  @Output() activeIndexChange = new EventEmitter();

  private interval: any;

  constructor() { }

  ngOnInit() {
    if (!this.images.length) {
      console.warn('No images provided. Please add some.');
    }
    if (this.autoPlay) {
      this.interval = setInterval(() => {
        this.next();
      }, this.autoplayTimeout);
    }
  }

  next() {
    this.activeIndex = (this.activeIndex === (this.images.length - 1) ? 0 : (this.activeIndex + 1));
    this.activeIndexChange.emit(this.activeIndex);
  }

  prev() {
    this.activeIndex = this.activeIndex === 0 ? (this.images.length - 1) : (this.activeIndex - 1);
    this.activeIndexChange.emit(this.activeIndex);
  }

  activate(index) {
    this.activeIndex = index;
    this.activeIndexChange.emit(this.activeIndex);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
