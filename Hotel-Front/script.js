    let quartos = [];
    let filtroAtual = "todos";

  function render() {
    const tabela = document.getElementById("tabelaQuartos");
    tabela.innerHTML = "";

    let quartosAExibir = quartos;

    if (filtroAtual === "disponivel") {
      quartosAExibir = quartos.filter(q => q.disponivel);
    } else if (filtroAtual === "indisponivel") {
      quartosAExibir = quartos.filter(q => !q.disponivel);
    }

    quartosAExibir.forEach(q => {
      const tr = document.createElement("tr");

      if (q.novo) {
        tr.classList.add("novo");
        q.novo = false;
      }

      if (!q.disponivel) {
        tr.classList.add("reservado");
      }

      tr.innerHTML = `
        <td>${q.numero}</td>
        <td>${q.tipo}</td>
        <td>${q.disponivel ? 'Disponível' : 'Reservado'}</td>
      `;

      tr.id = "q" + q.numero;

      tabela.appendChild(tr);
    });
  }

  function cadastrarQuarto() {
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;

    quartos.push({ numero, tipo, disponivel: true, novo: true });
    render();
  }

  function reservar() {
    const numero = document.getElementById("numeroAcao").value;

    const q = quartos.find(q => q.numero == numero);
    if (q) {
      q.disponivel = false;
      render();
    }
  }

  function cancelar() {
    const numero = document.getElementById("numeroAcao").value;
    const index = quartos.findIndex(q => q.numero == numero);

    if (index !== -1) {
      const linha = document.getElementById("q" + numero);
      linha.classList.add("removendo");

      setTimeout(() => {
        quartos.splice(index, 1);
        render();
      }, 600);
    }
  }

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
