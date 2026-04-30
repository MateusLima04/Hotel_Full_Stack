package com.sistema.Hotel.service;

import com.sistema.Hotel.model.Quarto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HotelService {

    private List<Quarto> quartos = new ArrayList<>();

    public List<Quarto> listar() {
        return quartos;
    }

    public void cadastrar(Quarto quarto) {
        quartos.add(quarto);
    }

    public void reservar(int numero) {
        for (Quarto q : quartos) {
            if (q.getNumero() == numero) {
                q.setDisponivel(false);
                return;
            }
        }
    }

    public void cancelar(int numero) {
        for (Quarto q : quartos) {
            if (q.getNumero() == numero) {
                q.setDisponivel(true);
                return;
            }
        }
    }
}
