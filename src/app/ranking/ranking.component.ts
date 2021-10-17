import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  term: string = '';
  pointsTerm: string = '';

  status: any;
  datas: any = [];
  standings: any = [];
  team: Team | undefined = undefined;
  stats: any = [];
  logos: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:4200/leagues/eng.1/standings?season=2021&sort=asc').subscribe( data => {
      this.status = data.status;
      this.datas = data.data;
      this.standings = data.data.standings;
      this.team = data.data.standings.team;
      this.stats = data.data.standings.stats;
      console.log(this.standings);
    })
  }
}

export interface Search {
  status: boolean;
  data: Data[];
}

export interface Data {
  name: string;
  abbreviation: string;
  seasonDisplay: string;
  season: number;
  standings: Standing[];
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
