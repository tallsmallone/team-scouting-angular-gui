import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInformation } from './types/player-information';

const httpOptions = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private REST_API_SERVER = 'http://localhost:8080/api/v1/';

  constructor(private httpClient: HttpClient) { }


  public getAllUsersInformation(): Observable<UserInformation[]> {
    return this.httpClient.get<UserInformation[]>(this.REST_API_SERVER +
      'user/all');
  }

  public updateUserInformation(user: UserInformation):
    Observable<UserInformation> {
    return this.httpClient.post<UserInformation>(
      this.REST_API_SERVER + 'user/' + user.id + '/update',
      user, {headers: httpOptions});
  }

  public addUserInformation(user: UserInformation): Observable<UserInformation> {
    return this.httpClient.post<UserInformation>(
      this.REST_API_SERVER + 'user/add',
      {
        username: user.username,
        playerLastName: user.playerLastName,
        playerFirstName: user.playerFirstName,
        position: user.position,
        team: user.team,
        discordUsername: user.discordUsername,
        tpe: user.tpe,
        joined: user.joined,
        lastVisit: user.lastVisit,
        active: user.active,
        contacted: user.contacted,
        want: user.want,
        avoid: user.avoid,
        drafted: user.drafted,
        draftPick: user.draftPick,
      }, {headers: httpOptions});
  }

  public deleteUserInformation(id: number): Observable<Number> {
    return this.httpClient.post<number>(
      this.REST_API_SERVER + 'user/' + id + '/delete',
      {
        id: id,
      }, {headers: httpOptions});
  }
}
