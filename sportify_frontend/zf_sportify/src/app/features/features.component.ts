import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  featureItems = [
    'User Registration & Login',
    'SSO Implementation for Events',
    'Live Match Scores',
    'Ticket Booking',
    'Customizable Dashboards',
    'Feedback & Reviews',
  ];
}
