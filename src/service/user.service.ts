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
export class UserService {

  constructor(private http: HttpClient) { }
  getUser(): Observable<any> {
    return this.http.get<any>(url + `users/findAll`, {
      responseType: 'json',
    });
  }

  getByUserId(id: number): Observable<any> {
    return this.http.get<any>(url + `users/getById?id=${id}`, {
      responseType: 'json',
    });
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(url + `users/getUserByEmail?email=${email}`, {
      responseType: 'json',
    });
  }

  postUser(req: any): Observable<any> {
    return this.http.post<any>(url + `users/post`, req, {
      responseType: 'json',
    });
  }

  putUser(res: any): Observable<any> {
    return this.http.put<any>(url + `users/put`, res, httpOptions);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>(url + `users/delete?id=${id}`, {
      responseType: 'json',
    });
  }

  getUsername(namereq: any): Observable<any> {
    return this.http.get<any>(
      url + `users/findByUsername?username=${namereq}`,
      { responseType: 'json' }
    );
  }

  getByUsername(username: string): Observable<any> {
    return this.http.get<any>(
      url + `users/getByUsername?username=${username}`,
      httpOptions
    );
  }
}
