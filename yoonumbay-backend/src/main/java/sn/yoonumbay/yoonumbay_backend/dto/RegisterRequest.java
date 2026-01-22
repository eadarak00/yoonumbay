package sn.yoonumbay.yoonumbay_backend.dto;

import lombok.Getter;
import lombok.Setter;
import sn.yoonumbay.yoonumbay_backend.entities.Role;

@Getter 
@Setter
public class RegisterRequest {
    private String nom;
    private String email;
    private String motDePasse;
    private Role role;
}
