import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './modules/components/navigation/navigation.module';
import { HomepageModule } from './modules/containers/homepage/homepage.module';
import { PortfolioModule } from './modules/containers/portfolio/portfolio.module';
import { ContactModule } from './modules/containers/contact/contact.module';
import { RouterService } from './services/router.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    NavigationModule,
    PortfolioModule,
    ContactModule,
  ],
  providers: [RouterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
