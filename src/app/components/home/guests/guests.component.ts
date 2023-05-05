import { Component, OnInit } from '@angular/core';
import { GuestsService } from 'src/app/services/guests.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss'],
})
export class GuestsComponent implements OnInit {
  constructor(public guestsService: GuestsService) {}

  ngOnInit(): void {}
}
