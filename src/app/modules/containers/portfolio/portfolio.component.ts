import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  activedRoute: string = '';
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activedRoute = this.activeRoute.pathFromRoot[1].snapshot.url[1].path;
  }
}
