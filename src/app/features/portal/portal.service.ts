import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IChangeRequest, IChangeResponse } from './portal.interface';

@Injectable({
  providedIn: 'root'
})
export class PortalHttp {
  private api = environment.API;

  constructor(private http: HttpClient) { }

  change(data: IChangeRequest): Observable<IChangeResponse> {

    const auth_token = localStorage.getItem('token')?.toString();

    const headers = new HttpHeaders({
      'content-Type': 'application/json',
      'authorization': `Bearer ${auth_token}`
    });

    return this.http.post<IChangeResponse>(`${this.api}/tipocambio/monto`, data, { headers: headers });
  }

}
