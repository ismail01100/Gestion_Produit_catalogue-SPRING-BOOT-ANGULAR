import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategorieService } from '../services/categorie.service'; // Import CategorieService
import { ProduitService } from '../services/produit.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajouter-produit',
  standalone: true,
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css'],
  imports: [FormsModule, CommonModule],
})
export class AjouterProduitComponent implements OnInit {
  produit = {
    reference: '',
    description: '',
    prixUnitaire: 0,
    categorieId: null,
  };

  categories: any[] = []; // Array to hold dynamic categories

  constructor(
    private categorieService: CategorieService, // Inject CategorieService
    private produitService: ProduitService // Inject ProduitService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    // Initialize the produit object with default values
    this.produit = {
      reference: '',
      description: '',
      prixUnitaire: 1,
      categorieId: null, // This will be updated if categories are loaded
    };
  }

  getCategories(): void {
    this.categorieService.getAllCategories().subscribe(
      (data) => {
        console.log('Categories:', data);
        this.categories = data;
        if (this.categories.length > 0) {
          this.produit.categorieId = this.categories[0].id; // Set the default category
        }
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  ajouterProduit(): void {
    if (this.produit.categorieId === null) {
      alert('Veuillez sélectionner une catégorie avant d\'ajouter un produit.');
      return;
    }
  
    this.produitService.ajouterProduit(this.produit, this.produit.categorieId).subscribe(
      (response) => {
        console.log('Produit ajouté avec succès:', response);
        alert('Produit ajouté avec succès!');
        // Reset the form
        this.produit = {
          reference: '',
          description: '',
          prixUnitaire: 0,
          categorieId: null, // Reset to null
        };
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du produit:', error);
        alert('Erreur lors de l\'ajout du produit. Vérifiez les champs.');
      }
    );
  }
  
}
