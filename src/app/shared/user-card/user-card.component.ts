import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('300ms', style({ transform: 'translateY(-100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class UserCardComponent implements OnInit, OnChanges {
  @Input() cardImgPath = '';
  @Input() cardTitle = '';
  @Input() cardDescription = '';

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
  ngOnChanges(): void {
    if (!this.cardImgPath) {
      this.cardImgPath = '../../../assets/players/user-profile-img.png';
    }
  }

  ngOnInit(): void {}
}
