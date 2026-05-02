package com.sistema.Hotel.controller;

import com.sistema.Hotel.model.Quarto;
import com.sistema.Hotel.service.HotelService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/quartos")
public class QuartoController {

    private final HotelService service;

    public QuartoController(HotelService service) {
        this.service = service;
    }

    @GetMapping
    public List<Quarto> listar() {
        return service.listar();
    }

    @PostMapping
    public void cadastrar(@RequestBody Quarto quarto) {
        System.out.println("Quarto Cadastrado: " + quarto.getNumero());
        service.cadastrar(quarto);
    }

    @PutMapping("/{numero}/reservar")
    public void reservar(@PathVariable int numero) {
        service.reservar(numero);
    }
    @DeleteMapping("/{numero}/excluir")
    public void excluir(@PathVariable int numero) {
        service.excluir(numero);
    }

    @DeleteMapping("/{numero}")
    public void cancelar(@PathVariable int numero) {
        service.cancelar(numero);
    }
}
