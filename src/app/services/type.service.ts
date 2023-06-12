import { Type } from 'src/app/models/type.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8081/api/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Type[]> {
    return this.http.get<Type[]>(baseUrl);
  }

}
