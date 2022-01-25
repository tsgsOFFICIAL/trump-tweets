import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tweet } from './interface/tweet';
import { TweetsService } from './service/tweets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweets: Tweet[] = [];

  constructor(private tweetsService: TweetsService) {

  }

  ngOnInit(): void {
    this.tweetsService.getTweets().subscribe((data: Tweet[]) => {
      next: this.tweets = data;
    });
  }
}
