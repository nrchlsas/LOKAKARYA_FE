import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url: string = environment.url;
const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HakAksesService {

  constructor(private http: HttpClient) { }
}
