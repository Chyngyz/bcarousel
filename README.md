# BCarousel - Responsive Angular Carousel Component

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Getting started

```html
// app.component.html
<b-carousel
    [images]="carouselData.images"
    [(activeIndex)]="carouselData.activeIndex"></b-carousel>
```

```ts
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'b-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  carouselData = {
    images: [
      'https://images.unsplash.com/photo-1495521939206-a217db9df264?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80',
      'https://images.unsplash.com/photo-1496347315686-5f274d046ccc?dpr=2&auto=compress,format&fit=crop&w=376&h=251&q=80',
      'https://images.unsplash.com/photo-1478001517127-fccc92f54906?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80',
      'https://images.unsplash.com/photo-1459666644539-a9755287d6b0?dpr=2&auto=format&fit=crop&w=1500&h=906&q=80',
      'https://images.unsplash.com/photo-1490731727228-d56f39758d0e?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80'
    ],
    activeIndex: 0
  };
}
```

## Options

- `images` | Type: `{images: string[], activeIndex: number}` - carousel images
- `activeIndex` | Type `number` | Default value `0` - active image index
- `width` | Type: `string` | Default value: `'600px'` - carousel width
- `height` | Type: `string` | Default value: `'400px'` - carousel height
- `animation` | Type: `string` | Default value: `fade` - animation name (available: `slide`, `rotate`, `zoom`)
- `bgSize` | Type: `string` | Default value: `cover` - sets css background size for carousel slide
- `style` | Type: `string | any` - sets carousel element `[ngStyle]`
- `styleClass` | Type: `string | any` - sets carousel element `[ngClass]`
- `loop` | Type: `boolean` | Default value: `false` - loop effect

- `showNav` | Type: `boolean` | Default value: `true` - shows left and right arrows
- `showNavOnHover` | Type: 'boolean' | Default value: `true` - shows slide in animation effect of arrows on hover
- `navStyle` | Type: `string | any` - sets nav element `[ngStyle]`
- `navStyleClass` | Type: `string | any` - sets nav element `[ngClass]`

- `showDots` | Type: `boolean` | Default value: `true` - shows dots nav on bottom
- `dotsStyle` | Type: `string | any` - sets dots element `[ngStyle]`
- `dotsStyleClass` | Type: `string | any` - sets dots element `[ngClass]`

- `transitionDuration` | Type: `number` | Default value: `800` - sets transition duration in `ms`
- `transitionDelay` | Type: `number` - sets transition delay in `ms`

- `autoPlay` | Type: `boolean` | Default value: `false` - autoplay animation
- `autoplayTimeout` | Type: `number` | Default value: `3000` - duration in `ms` between slides in autoplay







## Development server

Run `npm install`


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
