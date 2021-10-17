import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  term: string = '';

  allData$!: Data;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.data$.subscribe(data => {
      this.allData$ = data;
    });
  }
}
