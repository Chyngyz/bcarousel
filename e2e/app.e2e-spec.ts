import { CarouselPage } from './app.po';

describe('Carousel App', () => {
  let page: CarouselPage;

  beforeEach(() => {
    page = new CarouselPage();
  });

  it('should have BCarousel heading', () => {
    page.navigateTo();
    expect(page.getHeading()).toEqual('Responsive carousel component');
  });
});
