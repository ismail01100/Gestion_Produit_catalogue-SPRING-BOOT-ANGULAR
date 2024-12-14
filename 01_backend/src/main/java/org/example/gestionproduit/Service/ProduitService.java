package org.example.gestionproduit.Service;


import org.example.gestionproduit.Models.Produit;
import org.example.gestionproduit.Repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProduitService {

    @Autowired
    private ProduitRepository produitRepository;

    public List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }

    public List<Produit> getProduitsByCategorie(Long categorieId) {
        return produitRepository.findByCategorieId(categorieId);
    }

    public Produit ajouterProduit(Produit produit) {
        return produitRepository.save(produit);
    }
}
