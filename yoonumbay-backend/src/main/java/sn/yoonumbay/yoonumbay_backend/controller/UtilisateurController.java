package sn.yoonumbay.yoonumbay_backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import sn.yoonumbay.yoonumbay_backend.entities.Utilisateur;
import sn.yoonumbay.yoonumbay_backend.service.UtilisateurService;

@RestController
@RequestMapping("/api/utilisateurs")
@RequiredArgsConstructor
@Tag(name = "Utilisateurs", description = "Gestion des utilisateurs YoonuMbay")
public class UtilisateurController {

    private final UtilisateurService utilisateurService;

    /**
     * Récupérer le profil de l'utilisateur connecté
     */
    @Operation(summary = "Consulter son profil")
    @GetMapping("/me")
    public ResponseEntity<Utilisateur> getProfil(Authentication authentication) {
        String email = authentication.getName();
        return utilisateurService.trouverParEmail(email)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Mettre à jour le profil de l'utilisateur connecté
     */
    @Operation(summary = "Mettre à jour son profil")
    @PutMapping("/me")
    public ResponseEntity<Utilisateur> updateProfil(
            Authentication authentication,
            @RequestBody Utilisateur updatedUser
    ) {
        String email = authentication.getName();
        Utilisateur utilisateur = utilisateurService.trouverParEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        utilisateur.setNom(updatedUser.getNom());

        return ResponseEntity.ok(utilisateurService.save(utilisateur));
    }

    /**
     * Récupérer la liste de tous les utilisateurs (ADMIN)
     */
    @Operation(summary = "Lister tous les utilisateurs (ADMIN)")
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<Utilisateur> getAllUsers() {
        return utilisateurService.findAll();
    }

    /**
     * Activer / désactiver un utilisateur (ADMIN)
     */
    @Operation(summary = "Activer ou désactiver un utilisateur (ADMIN)")
    @PutMapping("/{id}/status")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> changeStatus(
            @PathVariable Long id,
            @RequestParam boolean actif
    ) {
        utilisateurService.updateStatus(id, actif);
        return ResponseEntity.ok("Statut mis à jour");
    }
}
