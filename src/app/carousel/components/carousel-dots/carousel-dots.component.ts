import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'b-carousel-dots',
  templateUrl: './carousel-dots.component.html',
  styleUrls: ['./carousel-dots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselDotsComponent {
  @Input() images: string[];
  @Input() active: number;
  @Input() dotsStyle: any;
  @Input() dotsStyleClass: any;
  @Output() onClick = new EventEmitter();
}
