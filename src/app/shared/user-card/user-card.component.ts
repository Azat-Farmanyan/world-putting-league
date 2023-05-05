import { Component, Input, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('800ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('800ms', style({ transform: 'translateY(-100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class UserCardComponent implements OnInit {
  @Input() cardImgPath = '../../../assets/guests/katrek.png';
  @Input() cardTitle = 'BRIAN KATREK';
  @Input() cardDescription =
    'Tournament Commentator And Host Of PGA TOUR Radio';

  descriptionStatus = false;
  showDescription() {
    this.descriptionStatus = true;
    console.log(this.descriptionStatus);
  }
  hiddenDescription() {
    this.descriptionStatus = false;
    console.log(this.descriptionStatus);
  }
  constructor() {}

  ngOnInit(): void {
    // this.cardDescription = '';
  }
}
