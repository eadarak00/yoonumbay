package sn.yoonumbay.yoonumbay_backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import sn.yoonumbay.yoonumbay_backend.dto.AuthRequest;
import sn.yoonumbay.yoonumbay_backend.dto.AuthResponse;
import sn.yoonumbay.yoonumbay_backend.dto.RegisterRequest;
import sn.yoonumbay.yoonumbay_backend.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Authentification", description = "Inscription et connexion des utilisateurs")
public class AuthController {

    private final AuthService authService;

    /**
     * Inscription d'un utilisateur
     */
    @Operation(summary = "Inscription utilisateur")
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authService.register(request));
    }

    /**
     * Connexion utilisateur
     */
    @Operation(summary = "Connexion utilisateur")
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(
            @RequestBody AuthRequest request
    ) {
        return ResponseEntity.ok(authService.authenticate(request));
    }
}
