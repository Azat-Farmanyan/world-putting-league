import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserCardComponent } from './user-card/user-card.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [HeaderComponent, UserCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, UserCardComponent],
})
export class SharedModule {}
