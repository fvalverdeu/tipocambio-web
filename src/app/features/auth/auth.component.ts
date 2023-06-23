import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthHttp } from './auth.service';
import { IAuthRequest } from './auth.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  formGroup: FormGroup;
  isBuy: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authHttp: AuthHttp,
    private router: Router
  ) {
    this.formGroup = this.fb.group({
      document: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  signIn(): void {
    const request: IAuthRequest = {
      username: this.formGroup.get('document')?.value,
      password: this.formGroup.get('password')?.value,
    }
    this.authHttp.signIn(request).subscribe(response => {
      localStorage.setItem('token', response.token);
      this.router.navigateByUrl('/');
    })
  }
}
