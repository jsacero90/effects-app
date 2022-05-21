import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, ResponseUser } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get(`${this.url}/users?per_page=6`).pipe(
      map((resp) => {
        const { data } = resp as ResponseUser;
        return data;
      })
    );
  }
}
