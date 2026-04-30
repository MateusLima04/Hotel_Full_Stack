package com.sistema.Hotel.service;

import com.sistema.Hotel.model.Quarto;
import com.sistema.Hotel.repository.QuartoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelService {

    private final QuartoRepository repository;

    public HotelService(QuartoRepository repository) {
        this.repository = repository;
    }

    public List<Quarto> listar() {
        return repository.findAll();
    }

    public void cadastrar(Quarto quarto) {
        repository.save(quarto);
    }

    public void reservar(int numero) {
        Quarto q = repository.findById(numero).orElse(null);
        if (q != null) {
            q.setDisponivel(false);
            repository.save(q);
        }
    }
    public void excluir(int numero) {
        repository.deleteById(numero);
    }
    public void cancelar(int numero) {
        Quarto q = repository.findById(numero).orElse(null);
        if (q != null) {
            q.setDisponivel(true);
            repository.save(q);
        }
    }
}