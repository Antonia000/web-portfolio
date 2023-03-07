import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/containers/homepage/homepage.component';
import { PortfolioComponent } from './modules/containers/portfolio/portfolio.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/coffee-shop', component: PortfolioComponent },
  { path: 'portfolio/barber-shop', component: PortfolioComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Wildcard route for a 404 page
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
