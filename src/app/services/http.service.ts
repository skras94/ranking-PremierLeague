import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from '../models/data';
import { Search } from '../models/search';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private dataObs = new BehaviorSubject<Data>(new Data());
  data$ = this.dataObs.asObservable();

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    return this.http.get<Search>('http://localhost:4200/leagues/eng.1/standings?season=2021&sort=asc').subscribe(data => {
      this.dataObs.next(data.data);
    });
  }
}
