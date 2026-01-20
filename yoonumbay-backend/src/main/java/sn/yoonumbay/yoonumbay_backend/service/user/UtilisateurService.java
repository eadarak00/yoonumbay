package sn.yoonumbay.yoonumbay_backend.service.user;

import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import sn.yoonumbay.yoonumbay_backend.entities.user.Utilisateur;
import sn.yoonumbay.yoonumbay_backend.repository.user.UtilisateurRepository;

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
}
