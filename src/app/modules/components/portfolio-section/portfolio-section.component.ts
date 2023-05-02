import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-coffee-shop',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.css'],
})
export class PortfolioSectionComponent implements OnInit {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
  @Output() clickEvent = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.clickEvent.emit(true);
  }
}
