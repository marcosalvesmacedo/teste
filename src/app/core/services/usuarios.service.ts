import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Usuarios } from '../models/usuarios.model';
import { catchError, flatMap, map, mergeMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  private url = '/usuarios';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getUsers(): Observable<Usuarios> {
     
     return this.httpClient.get(this.url, this.httpOptions)
        .pipe(
          tap( res => {
            console.log(res);
            return res;
          }),
          catchError( err => {
            console.log(err);
            return of(err);
          })
        );
  }
}
