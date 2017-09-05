import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselNavComponent } from './components/carousel-nav/carousel-nav.component';
import { CarouselDotsComponent } from './components/carousel-dots/carousel-dots.component';
import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';

const COMPONENTS = [
  CarouselComponent,
  CarouselNavComponent,
  CarouselDotsComponent,
  CarouselItemComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CarouselModule { }
