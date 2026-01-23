package sn.yoonumbay.yoonumbay_backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import sn.yoonumbay.yoonumbay_backend.entities.Role;

@Getter
@Setter
public class RegisterRequest {

    @NotBlank
    private String nom;

    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String motDePasse;

    @NotNull
    private Role role;
}
