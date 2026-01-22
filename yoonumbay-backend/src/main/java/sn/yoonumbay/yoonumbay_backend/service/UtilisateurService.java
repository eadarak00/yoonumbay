package sn.yoonumbay.yoonumbay_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import sn.yoonumbay.yoonumbay_backend.entities.Utilisateur;
import sn.yoonumbay.yoonumbay_backend.repository.UtilisateurRepository;

@Service
@RequiredArgsConstructor
public class UtilisateurService {

    private final UtilisateurRepository repository;
    private final PasswordEncoder passwordEncoder;

    public Utilisateur creerUtilisateur(Utilisateur utilisateur) {
        utilisateur.setMotDePasse(passwordEncoder.encode(utilisateur.getMotDePasse()));
        return repository.save(utilisateur);
    }

    public Optional<Utilisateur> trouverParEmail(String email) {
        return repository.findByEmail(email);
    }

    public Utilisateur save(Utilisateur utilisateur) {
        return repository.save(utilisateur);
    }

    public List<Utilisateur> findAll() {
        return repository.findAll();
    }

    public void updateStatus(Long id, boolean actif) {
        Utilisateur utilisateur = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        utilisateur.setActif(actif);
        repository.save(utilisateur);
    }
}
