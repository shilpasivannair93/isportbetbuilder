import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BuilderBets, BuilderQueryInstance, Fixture, Legs, Markets } from '../models/betbuilder';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BetbuilderService {
  baseUrl = 'http://cms.bettorlogic.com/api/BetBuilder/';
  constructor(private http: HttpClient) { }

  getAllFixtures(): Observable<Fixture[]> {
    return this.http.get<Fixture[]>(`${this.baseUrl}GetFixtures?sports=1`);
  }

  getAllLegs(): Observable<Legs[]> {
    return this.http.get<Legs[]>(`${this.baseUrl}GetSelections?sports=1`);
  }

  getAllMarkets(): Observable<Markets[]> {
    return this.http.get<Markets[]>(`${this.baseUrl}GetMarkets?sports=1`);
  }

  getBuilderBets(instance: BuilderQueryInstance): Observable<BuilderBets> {
    return this.http.get<BuilderBets>(`${this.baseUrl}GetBetBuilderBets?sports=1&matchId=${instance.matchId}&marketId=${instance.marketId}&legs=${instance.legs}&language=en`);
  }

}
