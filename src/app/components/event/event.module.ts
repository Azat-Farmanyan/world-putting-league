import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { EventBannerComponent } from './event-banner/event-banner.component';
import { ScoresComponent } from './scores/scores.component';
import { NoteComponent } from './note/note.component';
import { RoundComponent } from './round/round.component';


@NgModule({
  declarations: [
    EventComponent,
    EventBannerComponent,
    ScoresComponent,
    NoteComponent,
    RoundComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
