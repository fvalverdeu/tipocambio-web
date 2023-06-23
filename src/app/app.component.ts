import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ChangeHttp } from './app.service';
import { IChangeRequest } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  formGroup: FormGroup;
  isBuy: boolean = true;

  constructor(
    private fb: FormBuilder,
    private changeHttp: ChangeHttp,
  ) {
    this.formGroup = this.fb.group({
      usd: [0.00, [Validators.required, Validators.min(20)]],
      pen: [0.00],
    });
  }

  change(): void {
    const request: IChangeRequest = {
      monedaorigen: 'USD',
      monedadestino: 'SOL',
      monto: this.formGroup.get('pen')?.value
    }
    this.changeHttp.change(request).subscribe(response => {
      this.formGroup.get('usd')?.setValue(response.monto.toString());
    });
  }
}
