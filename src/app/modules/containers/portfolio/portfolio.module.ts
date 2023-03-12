import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from '../../components/footer/footer.module';
import { PortfolioSectionModule } from '../../components/portfolio-section/portfolio-section.module';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, PortfolioSectionModule, FooterModule],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
