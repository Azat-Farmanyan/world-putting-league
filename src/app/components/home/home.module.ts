import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GuestsComponent } from './guests/guests.component';

@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, AboutComponent, GuestsComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
