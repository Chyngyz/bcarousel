import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'b-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselItemComponent implements OnInit {
  @Input() images: string[];
  @Input() animation: string;
  @Input() active: number;
  @Input() size: string;
  @Input() transitionDelay: number;
  @Input() transitionDuration: number;
  @Input() itemStyle: any;
  @Input() itemStyleClass: any;


  constructor() { }

  ngOnInit() {
  }

}
