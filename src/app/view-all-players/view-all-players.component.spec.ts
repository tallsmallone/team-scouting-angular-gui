import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPlayersComponent } from './view-all-players.component';

describe('ViewAllPlayersComponent', () => {
  let component: ViewAllPlayersComponent;
  let fixture: ComponentFixture<ViewAllPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
