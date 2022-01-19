import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private api =
    'https://fierce-bayou-79908.herokuapp.com/https://mailthis.to/susanwairimu177@gmail.com/';

  headers = new HttpHeaders()
    .set('Content-Type', 'text/plain, application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) {}

  postMessage(input: any) {
    return this.http.post(this.api, input, { headers: this.headers }).pipe(
      map(
        (response) => {
          return response;
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
