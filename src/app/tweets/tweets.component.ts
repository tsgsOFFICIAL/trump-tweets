import { Component, OnInit } from '@angular/core';
import { Tweet } from '../interface/tweet';
import { TweetsService } from '../service/tweets.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets: Tweet[] = [];

  constructor(private tweetsService: TweetsService) { }

  ngOnInit(): void {
    this.tweetsService.getTweets().subscribe((data: Tweet[]) => {
      next: this.tweets = data;
    });
  }

}
