import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  RootStoreState,
  AuthFeatureStoreActions
} from '../../root-store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
  }
  
  logout() {
    this.store$.dispatch(
      new AuthFeatureStoreActions.LogoutRequestAction()
    );
  }
}
