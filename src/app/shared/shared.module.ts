import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserCardComponent } from './user-card/user-card.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [HeaderComponent, UserCardComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, UserCardComponent, FooterComponent],
})
export class SharedModule {}
