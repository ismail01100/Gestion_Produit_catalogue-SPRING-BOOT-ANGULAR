package org.example.gestionproduit.Controller;

import org.example.gestionproduit.Models.Categorie;
import org.example.gestionproduit.Models.Produit;
import org.example.gestionproduit.Repository.CategorieRepository;
import org.example.gestionproduit.Service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ProduitController {

    @Autowired
    private ProduitService produitService;
    @Autowired
    private CategorieRepository categorieRepository;


    @GetMapping("/produits")
    public List<Produit> getAllProduits() {
        return produitService.getAllProduits();
    }

    @GetMapping("/produits/{idCategorie}")
    public List<Produit> getProduitsByCategorie(@PathVariable Long idCategorie) {
        return produitService.getProduitsByCategorie(idCategorie);
    }

    @PostMapping("/ajoutProduit")
    public Produit ajouterProduit(@RequestBody Produit produit, @RequestParam("categorie_id") Long categorieId) {
        // Fetch the category from the database
        Optional<Categorie> categorie = categorieRepository.findById(categorieId);

        if (categorie.isPresent()) {
            // Assign the category to the product
            produit.setCategorie(categorie.get());
            return produitService.ajouterProduit(produit);
        } else {
            throw new IllegalArgumentException("Categorie ID " + categorieId + " not found");
        }
    }
}
