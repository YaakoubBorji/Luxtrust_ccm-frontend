import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Position } from '../../models/position.model';
import { ApiResponse } from '../../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class MarketPositionService {

  constructor(private http: HttpClient) { }

  public getAllOpenPosition(): Observable<Array<Position>> {
    return   this.http.get<Array<Position>>(
      environment.apiUrl+"/search/positions/open");
  }


  public getAllSoldPosition(): Observable<Array<Position>> {
    return   this.http.get<Array<Position>>(
      environment.apiUrl+"/search/positions/sold");
  }

  public buyPosition(positionId : number): Observable<ApiResponse> {
    return   this.http.post<ApiResponse>(
      environment.apiUrl+"/market/buy/"+positionId,null);
  }

  public addPosition(position : Position): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(environment.apiUrl+"/market",position)
  }

  public deletePosition(positionId : number): Observable<ApiResponse> {
    return   this.http.delete<ApiResponse>(environment.apiUrl+"/market/"+positionId);
  }
}
