import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url: string = "/assets/data/employe.json";
  
  constructor(private http: HttpClient) { }
  

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url).pipe(catchError(this.erroHandler));
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }

}