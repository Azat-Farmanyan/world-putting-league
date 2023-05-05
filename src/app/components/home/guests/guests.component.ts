import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss'],
})
export class GuestsComponent implements OnInit {
  guests = [
    {
      imgPath: '../../../assets/guests/katrek.png',
      title: 'BRIAN KATREK',
      description: 'Tournament Commentator And Host Of PGA TOUR Radio',
    },
    {
      imgPath: '../../../assets/guests/RobPizzolo.png',
      title: 'ROB PIZZOLA',
      description: 'Featured Guest',
    },
    {
      imgPath: '../../../assets/guests/kaz.png',
      title: 'KAZ BROWN',
      description: 'On-Air Host From Pro League Network',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
