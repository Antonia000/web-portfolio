import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoffeeShopComponent } from './coffee-shop.component';

@NgModule({
  declarations: [CoffeeShopComponent],
  imports: [CommonModule],
  exports: [CoffeeShopComponent],
})
export class CoffeeShopModule {}
