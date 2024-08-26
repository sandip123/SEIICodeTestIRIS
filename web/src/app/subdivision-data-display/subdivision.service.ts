import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubdivisionService {


  constructor(private http: HttpClient) {}

  getSubdivisions(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/v1/subdivisions');
  }
}
