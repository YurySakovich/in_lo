import { Component, OnInit } from '@angular/core';

import {RootStoreState, AuthFeatureStoreActions} from '../../../root-store';

import {Store} from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public defaultUserImageUrl = 'assets/images/default-avatar.jpg';
  public matTabColor = '#448AFF';
  
  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
  }

  logout() {
    this.store$.dispatch(
      new AuthFeatureStoreActions.LogoutRequestAction()
    );
  }

}
