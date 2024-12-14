package org.example.gestionproduit.Service;

import org.example.gestionproduit.Models.Categorie;
import org.example.gestionproduit.Repository.CategorieRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategorieService {

    private final CategorieRepository categorieRepository;

    public CategorieService(CategorieRepository categorieRepository) {
        this.categorieRepository = categorieRepository;
    }

    // Fetch all categories
    public List<Categorie> getAllCategories() {
        return categorieRepository.findAll();
    }
}