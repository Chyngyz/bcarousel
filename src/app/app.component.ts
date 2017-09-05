import { Component } from '@angular/core';

@Component({
  selector: 'b-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public carouselData = {
    images: [
      'https://images.unsplash.com/photo-1495521939206-a217db9df264?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80',
      'https://images.unsplash.com/photo-1496347315686-5f274d046ccc?dpr=2&auto=compress,format&fit=crop&w=376&h=251&q=80',
      'https://images.unsplash.com/photo-1462496591979-5ba58a2ddec6?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80',
      'https://images.unsplash.com/photo-1478001517127-fccc92f54906?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80',
      'https://images.unsplash.com/photo-1459666644539-a9755287d6b0?dpr=2&auto=format&fit=crop&w=1500&h=906&q=80',
      'https://images.unsplash.com/photo-1490731727228-d56f39758d0e?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80'
    ],
    activeIndex: 0
  };
  public carouselData2 = {
    images: [
      'https://images.unsplash.com/photo-1490237014491-822aee911b99?dpr=2&auto=format&fit=crop&w=1500&h=1001&q=80',
      'https://images.unsplash.com/photo-1490731727228-d56f39758d0e?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80',
      'https://images.unsplash.com/photo-1459666644539-a9755287d6b0?dpr=2&auto=format&fit=crop&w=1500&h=906&q=80',
    ],
    activeIndex: 0
  };

}
