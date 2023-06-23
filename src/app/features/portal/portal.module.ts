import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';
import { PortalHttp } from './portal.service';
import { RouterModule, Routes } from '@angular/router';
import { ModalAuthDialog } from './modal-auth/modal-auth.component';

const routes: Routes = [
  { path: '', component: PortalComponent, }
]

@NgModule({
  declarations: [
    PortalComponent,
    ModalAuthDialog
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [PortalHttp],
})
export class PortalModule { }
