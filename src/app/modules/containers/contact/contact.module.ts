import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from '../../components/footer/footer.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, FooterModule],
  exports: [ContactComponent],
})
export class ContactModule {}
