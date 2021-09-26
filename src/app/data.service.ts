import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInformation } from './types/player-information';

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

  public updateUserInformation(user: UserInformation): void {
    this.httpClient.post<UserInformation>(
      this.REST_API_SERVER + 'user/' + user.id + '/update',
      {
        id: user.id,
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
      });
  }

  public addUserInformation(user: UserInformation): void {
    this.httpClient.post<UserInformation>(
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
      });
  }

  public deleteUserInformation(id: number): void {
    this.httpClient.post<number>(
      this.REST_API_SERVER + 'user/' + id + '/delete',
      {
        id: id,
      });
  }
}
