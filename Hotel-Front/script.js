const API = "http://localhost:8080/quartos";
let filtroAtual = "todos";


// RENDER (BUSCA DO BACKEND)

async function render() {
  const tabela = document.getElementById("tabelaQuartos");
  tabela.innerHTML = "";

  try {
    const resposta = await fetch(API);
    let quartos = await resposta.json();

    // FILTROS
    if (filtroAtual === "disponivel") {
      quartos = quartos.filter(q => q.disponivel);
    } else if (filtroAtual === "indisponivel") {
      quartos = quartos.filter(q => !q.disponivel);
    }

    quartos.forEach(q => {
      const tr = document.createElement("tr");

      const statusClass = q.disponivel ? "disponivel" : "reservado";

      tr.innerHTML = `
        <td>${q.numero}</td>
        <td>${q.tipo}</td>
        <td class="${statusClass}">
          ${q.disponivel ? "Disponível" : "Reservado"}
        </td>
      `;

      tabela.appendChild(tr);
    });

  } catch (erro) {
    console.error("Erro ao carregar quartos:", erro);
    alert("Erro ao conectar com o servidor!");
  }
}


// CADASTRAR (POST)

async function cadastrarQuarto() {
  const numero = document.getElementById("numero").value;
  const tipo = document.getElementById("tipo").value;

  if (!numero) {
    alert("Digite um número!");
    return;
  }

  try {
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        numero: numero,
        tipo: tipo,
        disponivel: true
      })
    });

    document.getElementById("numero").value = "";

    render();

  } catch (erro) {
    console.error("Erro ao cadastrar:", erro);
  }
}

// EXCLUIR QUARTO (DELETE)
async function excluirQuarto() {
  const numero = document.getElementById("numeroAcao").value;

  if (!numero) {
    alert("Digite um número!");
    return;
  }

  await fetch(`http://localhost:8080/quartos/${numero}/excluir`, {
    method: "DELETE"
  });

  render();
}

// RESERVAR (PUT)

async function reservar() {
  const numero = document.getElementById("numeroAcao").value;

  if (!numero) {
    alert("Digite um número!");
    return;
  }

  try {
    await fetch(`${API}/${numero}/reservar`, {
      method: "PUT"
    });

    render();

  } catch (erro) {
    console.error("Erro ao reservar:", erro);
  }
}


// CANCELAR (DELETE)

async function cancelar() {
  const numero = document.getElementById("numeroAcao").value;

  if (!numero) {
    alert("Digite um número!");
    return;
  }

  try {
    await fetch(`${API}/${numero}`, {
      method: "DELETE"
    });

    render();

  } catch (erro) {
    console.error("Erro ao cancelar:", erro);
  }
}


// FILTROS (FRONT)

function listarDisponiveis() {
  filtroAtual = "disponivel";
  render();
}

function listarIndisponiveis() {
  filtroAtual = "indisponivel";
  render();
}

function listarTodos() {
  filtroAtual = "todos";
  render();
}


// INIT

window.onload = render;
