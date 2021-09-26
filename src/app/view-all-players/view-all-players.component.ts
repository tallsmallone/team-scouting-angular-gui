import { Component, OnInit } from '@angular/core';
import { UserInformation } from '../types/player-information';

@Component({
  selector: 'app-view-all-players',
  templateUrl: './view-all-players.component.html',
  styleUrls: ['./view-all-players.component.css']
})
export class ViewAllPlayersComponent implements OnInit {
  test: UserInformation = {
    id: 1,
    username: "test",
    playerLastName: "last",
    playerFirstName: "first",
    position: "G",
    team: "ANA",
    discordUsername: "TEST#1231",
    tpe: 155,
    joined: "09/26/21",
    lastVisit: "09/26/21",
    active: true,
    contacted: false,
    want: false,
    avoid: true,
    drafted: false,
    draftPick: -1,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
