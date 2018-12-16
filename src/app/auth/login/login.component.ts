import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '@shared/constants/validators';
import { Store } from '@ngrx/store';
import { User } from '../../models';
import {
  RootStoreState,
  AuthFeatureStoreActions
} from '../../root-store';
import { Observable } from 'rxjs';

export interface AuthData {
  token: string;
  expiration: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public buildInfo;
  AuthFeatureItems$: Observable<User[]>;

  constructor(
    private store$: Store<RootStoreState.State>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.initForm();
  }

  private initForm(): FormGroup {
    return this.fb.group({
      client: ['demo01', Validators.required],
      username: ['demo.user@inlogic.ca', [Validators.required, Validators.pattern(emailValidator)]],
      password: ['thedemo01', Validators.required]
    });
  }

  public onSubmit(): void {
    this.store$.dispatch(
      new AuthFeatureStoreActions.LoginRequestAction(this.loginForm.value)
    );
  }

}
