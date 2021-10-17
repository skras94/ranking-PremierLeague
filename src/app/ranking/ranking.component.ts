import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

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

export interface Main {
  status: boolean;
  data: Data;
}

export class Data {
  name!: string;
  abbreviation!: string;
  seasonDisplay!: string;
  season!: number;
  standings!: Standing[];
}

export interface Standing {
  team: Team;
  note?: Note;
  stats: Stat[];
}

export interface Note {
  color: string;
  description: string;
  rank: number;
}

export interface Team {
  id: string;
  uid: string;
  location: string;
  name: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  isActive: boolean;
  logos: Logo;
}

export interface Stat {
  name: string;
  displayName: string;
  shortDisplayName: string;
  description: string;
  abbreviation: string;
  type: string;
  value: number;
  displayValue: string;
  id: string;
  summary: string;
}

export interface Logo {
  href: string;
  width: number;
  height: number;
  alt: string;
  rel: string[];
  lastUpdated: string;
}
