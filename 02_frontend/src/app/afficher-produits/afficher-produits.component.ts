import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { CategorieService } from '../services/categorie.service'; // Import the CategorieService
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-afficher-produits',
  standalone: true,
  templateUrl: './afficher-produits.component.html',
  styleUrls: ['./afficher-produits.component.css'],
  imports: [CommonModule, FormsModule],
})
export class AfficherProduitsComponent implements OnInit {
  produits: any[] = [];
  categories: any[] = []; // Array to hold categories
  categorieId: number | null = null;

  constructor(
    private produitService: ProduitService,
    private categorieService: CategorieService // Inject CategorieService
  ) {}

  ngOnInit(): void {
    this.getProduits();
    this.getCategories(); // Fetch categories
  }

  getProduits(): void {
    if (this.categorieId) {
      this.produitService.getProduitsParCategorie(this.categorieId).subscribe(
        (data) => {
          console.log('Filtered Products:', data);
          this.produits = data;
        },
        (error) => {
          console.error('Error fetching filtered products:', error);
        }
      );
    } else {
      this.produitService.getProduits().subscribe(
        (data) => {
          console.log('All Products:', data);
          this.produits = data;
        },
        (error) => {
          console.error('Error fetching all products:', error);
        }
      );
    }
  }

  getCategories(): void {
    this.categorieService.getAllCategories().subscribe(
      (data) => {
        console.log('Categories:', data); // Log categories for debugging
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}
