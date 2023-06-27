import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PortalHttp } from './portal.service';
import { IChangeRequest } from './portal.interface';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalAuthDialog } from './modal-auth/modal-auth.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  formGroup: FormGroup;
  isBuy: boolean = true;
  showMenu: boolean = false;
  isAuth: boolean = false;

  constructor(
    private fb: FormBuilder,
    private portalHttp: PortalHttp,
    public dialog: MatDialog,
    private router: Router,
  ) {
    this.formGroup = this.fb.group({
      usd: ['0.00', [Validators.required, Validators.min(20)]],
      pen: ['0.00'],
    });
  }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) this.isAuth = true;
  }

  change(): void {

    if (!this.isAuth) {
      this.openDialog('600ms', '600ms');
    } else {
      const request: IChangeRequest = {
        monedaorigen: this.isBuy ? 'USD' : 'SOL',
        monedadestino: this.isBuy ? 'SOL' : 'USD',
        monto: this.formGroup.get('usd')?.value
      }
      this.portalHttp.change(request).subscribe(response => {
        this.formGroup.get('pen')?.setValue(response.monto.toString());
      });
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(ModalAuthDialog, {
      width: '300px',
      height: '180px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.router.navigateByUrl('auth');
      else return;
    });
  }

  login(): void {
    if (!this.isAuth) this.router.navigateByUrl('auth');
    else {
      localStorage.clear();
      this.isAuth = false
    }
  }

  toggleBuy(): void {
    this.isBuy = !this.isBuy
    this.formGroup.get('pen')?.setValue('0.00');
  }

  clearField(formControlName: string): void {
    this.formGroup.get(formControlName)?.setValue('');
  }
}
