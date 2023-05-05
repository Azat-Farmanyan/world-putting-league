import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {
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
  constructor() { }
}
