import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserInformation } from '../types/player-information';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-view-all-players',
  templateUrl: './view-all-players.component.html',
  styleUrls: ['./view-all-players.component.css']
})
export class ViewAllPlayersComponent implements OnInit, OnDestroy {
  allUserInformation: UserInformation[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllUsersInformation().pipe(takeUntil(this.destroy$))
      .subscribe((data)=>{
        console.log(data);
        this.allUserInformation = data;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
