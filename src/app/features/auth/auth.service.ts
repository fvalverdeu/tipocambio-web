import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthRequest, IAuthResponse } from './auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthHttp {
  private api = environment.URL_BASE;

  constructor(private http: HttpClient) { }

  signIn(data: IAuthRequest): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${this.api}/login`, data);
  }

}
