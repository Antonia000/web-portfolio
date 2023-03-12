import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from './services/router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'antonia-portfolio';
  activatedRoute: string = '';
  constructor(private routerService: RouterService) {}

  ngOnInit() {
    this.activatedRoute = this.routerService.getActivatedRoute();
    console.log(this.routerService.getActivatedRoute());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['activatedRoute']);
  }
}
