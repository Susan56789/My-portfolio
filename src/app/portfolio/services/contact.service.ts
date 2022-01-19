import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private api = 'https://mailthis.to/susanwairimu177@gmail.com/';

  constructor(private http: HttpClient) {}

  postMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(
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
