import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserInformation } from '../types/player-information';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-view-all-players',
  templateUrl: './view-all-players.component.html',
  styleUrls: ['./view-all-players.component.css']
})
export class ViewAllPlayersComponent implements OnInit, OnDestroy {
  allUserInformation: UserInformation[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  source: LocalDataSource = new LocalDataSource();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllUsersInformation().pipe(takeUntil(this.destroy$))
      .subscribe((data)=>{
        this.allUserInformation = data;
      });

    this.source = new LocalDataSource(this.allUserInformation);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  settings = {
    add: {
      confirmCreate: true,
      inputClass: "UserInformation"
    },
    delete: {
      confirmDelete: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      id: {
        title: 'ID',
        editable: false
      },
      username: {
        title: 'Username'
      },
      playerLastName: {
        title: 'Player Last Name'
      },
      playerFirstName: {
        title: 'Player First Name'
      },
      position: {
        title: 'Position'
      },team: {
        title: 'Team'
      },
      discordUsername: {
        title: 'Discord Username'
      },
      tpe: {
        title: 'TPE'
      },
      joined: {
        title: 'Joined'
      },
      lastVisit: {
        title: 'Last Visit'
      },
      active: {
        title: 'Active',
        editor: {
          type: 'checkbox'
        }
      },
      contacted: {
        title: 'Contacted',
        editor: {
          type: 'checkbox'
        }
      },
      want: {
        title: 'Want',
        editor: {
          type: 'checkbox'
        }
      },
      avoid: {
        title: 'Avoid',
        editor: {
          type: 'checkbox'
        }
      },
      drafted: {
        title: 'Drafted',
        editor: {
          type: 'checkbox'
        }
      },
      draftPick: {
        title: 'Draft Pick'
      },
    }
  }

  onCreate(event:
    {
      newData: UserInformation,
      source: LocalDataSource,
      confirm: Object
    }): void {
    this.dataService.addUserInformation(event.newData).pipe(takeUntil(this.destroy$))
      .subscribe(()=>{
        event.source.add(event.newData);
        location.reload();
      });
  }

  onEdit(event:
    {
      originalData: UserInformation
      newData: UserInformation,
      source: LocalDataSource,
      confirm: Object
    }): void {
    this.dataService.updateUserInformation(event.newData).pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        location.reload();
      });
  }

  onDelete(event:
    {
      data: UserInformation,
      source: LocalDataSource,
      confirm: Object
    }): void {
    this.dataService.deleteUserInformation(event.data.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        event.source.remove(event.data);
      });
  }

}
