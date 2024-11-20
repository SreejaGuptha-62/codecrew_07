import { Component } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent {
  forumItems = [
    'Sports Updates',
    'Upcoming Tournaments',
    'Event Schedules',
    'Player Statistics',
    'Match Highlights',
    'Forums & Discussions',
  ];
}
