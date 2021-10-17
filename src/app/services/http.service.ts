import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data, Main } from '../ranking/ranking.component';

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
    return this.http.get<Main>('http://localhost:4200/leagues/eng.1/standings?season=2021&sort=asc').subscribe(data => {
      this.dataObs.next(data.data);
    });
  }
}
