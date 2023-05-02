import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  activedRoute: string = '';
  videoMode: boolean = false;
  videoSource: string = '';
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activedRoute = this.activeRoute.pathFromRoot[1].snapshot.url[1].path;
  }
  handleVisitTemplate() {
    const coffeeShopUrl = '/assets/videos/coffee-shop-presentation.mp4';
    const barberShopUrl = '/assets/videos/barbershop.mp4';
    this.videoSource =
      this.activedRoute === 'coffee-shop' ? coffeeShopUrl : barberShopUrl;
    console.log(this.videoSource);
    this.videoMode = true;
  }
}
