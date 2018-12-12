import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '@env';
import { emailValidator } from '@shared/constants/validators';

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

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

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
    this.authService.signIn(this.loginForm.value)
      .subscribe((authData: AuthData) => {
        console.log(authData, 'authData')
        this.authService.setToken(authData.token);
        this.authService.setExpiration(authData.expiration);

        // TODO add condition
        // this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log('err  ', err);
      }
    );
  }

}
