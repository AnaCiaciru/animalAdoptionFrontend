import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cat } from '../model/cat';

@Injectable({
  providedIn: 'root',
})
export class CatService {

  // this is the api
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public findOneCat(catId: number): Observable<Cat> {
    return this.http.get<Cat>(`${this.apiServerUrl}/api/cat/find/${catId}`);
  }

  public getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.apiServerUrl}/api/cat/all`);
  }

  public addCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(`${this.apiServerUrl}/api/cat/add`, cat);
  }

  public updateCat(cat: Cat): Observable<Cat> {
    return this.http.put<Cat>(`${this.apiServerUrl}/api/cat/update`, cat);
  }

  public addTest(test: string): Observable<string>{
    return this.http.put<string>(`${this.apiServerUrl}/api/cat/addTest`, test);
  }

  public deleteCat(catId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/api/cat/delete/${catId}`
    );
  }


}
