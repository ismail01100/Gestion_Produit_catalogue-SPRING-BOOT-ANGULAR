import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private baseUrl = 'http://localhost:8080/api/categories'; // Adjust the base URL as needed

  constructor(private http: HttpClient) {}

  // Fetch all categories
  getAllCategories(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
