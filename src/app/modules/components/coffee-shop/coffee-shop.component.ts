import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-shop',
  templateUrl: './coffee-shop.component.html',
  styleUrls: ['./coffee-shop.component.css'],
})
export class CoffeeShopComponent implements OnInit {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
  constructor() {}

  ngOnInit(): void {}
}
