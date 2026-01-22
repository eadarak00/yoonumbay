package sn.yoonumbay.yoonumbay_backend.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import sn.yoonumbay.yoonumbay_backend.dto.AuthRequest;
import sn.yoonumbay.yoonumbay_backend.dto.AuthResponse;
import sn.yoonumbay.yoonumbay_backend.dto.RegisterRequest;
import sn.yoonumbay.yoonumbay_backend.entities.Utilisateur;
import sn.yoonumbay.yoonumbay_backend.repository.UtilisateurRepository;
import sn.yoonumbay.yoonumbay_backend.security.JwtService;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UtilisateurRepository utilisateurRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest request) {

        if (utilisateurRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email déjà utilisé");
        }

        Utilisateur utilisateur = Utilisateur.builder()
                .nom(request.getNom())
                .email(request.getEmail())
                .motDePasse(passwordEncoder.encode(request.getMotDePasse()))
                .role(request.getRole())
                .actif(true)
                .build();

        utilisateurRepository.save(utilisateur);

        String token = jwtService.generateToken(utilisateur);
        return new AuthResponse(token);
    }

    public AuthResponse authenticate(AuthRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getMotDePasse()
                )
        );

        Utilisateur utilisateur = utilisateurRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        String token = jwtService.generateToken(utilisateur);
        return new AuthResponse(token);
    }
}
