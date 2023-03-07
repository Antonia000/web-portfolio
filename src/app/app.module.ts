import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeShopModule } from './modules/components/coffee-shop/coffee-shop.module';
import { NavigationModule } from './modules/components/navigation/navigation.module';
import { HomepageModule } from './modules/containers/homepage/homepage.module';
import { PortfolioModule } from './modules/containers/portfolio/portfolio.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    NavigationModule,
    PortfolioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
