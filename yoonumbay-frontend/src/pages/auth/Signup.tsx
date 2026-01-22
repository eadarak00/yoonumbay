import { useState } from "react";
import type { Role } from "../../types/auth.types";
import { register } from "../../services/auth.service";


export default function Register() {
  const [form, setForm] = useState<{
    nom: string;
    email: string;
    motDePasse: string;
    role: Role;
  }>({
    nom: "",
    email: "",
    motDePasse: "",
    role: "AGRICULTEUR",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(form);
    window.location.href = "/dashboard";
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inscription</h2>

      <input
        placeholder="Nom"
        value={form.nom}
        onChange={(e) => setForm({ ...form, nom: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={form.motDePasse}
        onChange={(e) =>
          setForm({ ...form, motDePasse: e.target.value })
        }
      />

      <select
        value={form.role}
        onChange={(e) =>
          setForm({ ...form, role: e.target.value as Role })
        }
      >
        <option value="AGRICULTEUR">Agriculteur</option>
        <option value="ACHETEUR">Acheteur</option>
      </select>

      <button type="submit">S’inscrire</button>
    </form>
  );
}
