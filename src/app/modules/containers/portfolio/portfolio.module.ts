import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoffeeShopModule } from '../../components/coffee-shop/coffee-shop.module';

import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, CoffeeShopModule],
  providers: [],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
