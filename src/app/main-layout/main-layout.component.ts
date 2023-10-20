import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    mouseDrag: true, // Enable mouse drag
    touchDrag: true, // Enable touch drag
    pullDrag: true, // Enable pull drag
    dots: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      }
    },
    // nav: true,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoplaySpeed: 500, // Adjust autoplay speed (e.g., 500ms)

  };


}