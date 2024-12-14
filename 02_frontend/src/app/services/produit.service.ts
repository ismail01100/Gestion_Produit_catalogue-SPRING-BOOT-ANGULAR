import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private baseUrl = 'http://localhost:8080/api'; // Adjusted to match /api prefix

  constructor(private http: HttpClient) {}

  // Fetch all products
  getProduits(): Observable<any> {
    return this.http.get(`${this.baseUrl}/produits`);
  }

  // Fetch products by category
  getProduitsParCategorie(idCategorie: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/produits/${idCategorie}`);
  }

  // Add a product
  ajouterProduit(produit: any, categorieId: number): Observable<any> {
    const params = { categorie_id: categorieId.toString() };
    return this.http.post(`${this.baseUrl}/ajoutProduit`, produit, { params });
  }
}
