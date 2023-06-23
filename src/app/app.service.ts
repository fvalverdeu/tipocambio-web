import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IChangeRequest, IChangeResponse } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class ChangeHttp {
  private api = environment.API;

  constructor(private http: HttpClient) { }

  change(data: IChangeRequest): Observable<IChangeResponse> {

    const auth_token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiZXhwIjoxNjg3NDk3NzIwLCJpYXQiOjE2ODc0Nzk3MjB9.822YFlAr4E4YMWpFeOE4utnKiwy-_yoAk7mWrd3_er7ug7YIl3OpUpi-xt_AlWAetoZ5WXrHrDbc3LcDQdwJGw';

    const headers = new HttpHeaders({
      'content-Type': 'application/json',
      'authorization': `Bearer ${auth_token}`
    });

    return this.http.post<IChangeResponse>(`${this.api}/tipocambio/monto`, data, { headers: headers });
  }

}
