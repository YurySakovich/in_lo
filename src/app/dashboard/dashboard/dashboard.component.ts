import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState, AuthFeatureStoreActions} from '../../root-store';

import {UserService} from '@core/services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private store$: Store<RootStoreState.State>,
              private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserInfo()
      .subscribe((user) => {
        console.log(user);
      })
  }
  
  logout() {
    this.store$.dispatch(
      new AuthFeatureStoreActions.LogoutRequestAction()
    );
  }

}
