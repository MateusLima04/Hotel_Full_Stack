# 🏨 Sistema de Hotel - Fullstack

Este projeto começou como um sistema de hotel em Java rodando no terminal e evoluiu para uma aplicação **Fullstack web**, utilizando **Spring Boot** no backend e uma interface moderna no frontend, com persistência de dados e foco em experiência do usuário.

---

###  Evolução do Projeto

#### 🔹 Fase 1 — Aplicação Desktop (Console)
- Sistema inicial desenvolvido em Java puro
- Execução via terminal
- Estrutura orientada a objetos
- Funcionalidades básicas de gerenciamento de quartos

 #### 🔹 Fase 2 — Transição para Web
 - Separação entre frontend e backend
 - Introdução de interações visuais e melhor experiência do usuário
 - Implementação com Spring Boot
 - Criação de API REST
 - Organização em camadas (Controller, Service, Repository)
 - Integração com banco de dados H2
 - Utilização do Spring Data JPA
 - Operações CRUD completas no banco

## Arquitetura

O projeto segue o padrão de arquitetura em camadas:

- **Controller** → Responsável pelas requisições HTTP
- **Service** → Regras de negócio
- **Repository** → Acesso ao banco de dados
- **Model** → Entidade do sistema

Essa separação melhora a organização, manutenção e escalabilidade do código.

---

## 🔗 API REST

A aplicação expõe endpoints para comunicação com o frontend:

| Método | Endpoint                      | Descrição              |
|--------|------------------------------|------------------------|
| GET    | `/quartos`                   | Listar quartos         |
| POST   | `/quartos`                   | Cadastrar quarto       |
| PUT    | `/quartos/{numero}/reservar` | Reservar quarto        |
| PUT    | `/quartos/{numero}/cancelar` | Cancelar reserva       |
| DELETE | `/quartos/{numero}/excluir`  | Excluir quarto         |

## Banco de Dados

O sistema utiliza o **H2 Database**, um banco de dados leve e em memória, ideal para desenvolvimento.

### ✔ Benefícios:
- Não requer instalação externa
- Alta performance
- Integração nativa com Spring Boot
- Ideal para testes e protótipos

---

## Tecnologias Utilizadas

### 🔹 Backend
- Java
- Spring Boot
- Spring Data JPA

### 🔹 Frontend
- HTML5
- CSS3
- JavaScript (Fetch API)

### 🔹 Banco de Dados
- H2 Database

---

##  Como Executar

###  Backend (Spring Boot)

Execute o projeto com:

```bash
mvn spring-boot:run
