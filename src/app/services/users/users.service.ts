import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  url: string = `${environment.url}/users`;

  find(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  findMany(page: number): Observable<any> {
    return this.http.get<any>(`${this.url}?page=${page}`);
  }

  findOne(userId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${userId}`);
  }
}
