package com.sistema.Hotel.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Quarto {

    @Id
    private int numero;

    private String tipo;
    private boolean disponivel;

    public Quarto() {}

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public boolean isDisponivel() {
        return disponivel;
    }

    public void setDisponivel(boolean disponivel) {
        this.disponivel = disponivel;
    }
}