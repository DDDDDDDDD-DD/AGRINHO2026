// ===============================
// MENU MOBILE
// ===============================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("aberto");
});

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {
        menu.classList.remove("aberto");
    });

});


// ===============================
// CONTEÚDO DOS TEMAS
// ===============================

const temas = {

    agro: {
        categoria: "01 / AGRICULTURA SUSTENTÁVEL",
        titulo: "Produzir com responsabilidade",

        texto: `
            <p>
                A agricultura sustentável procura equilibrar produtividade,
                conservação ambiental e viabilidade econômica.
            </p>

            <p>
                Entre as práticas que podem contribuir estão a rotação de
                culturas, cobertura do solo, manejo adequado dos insumos,
                redução de desperdícios e planejamento da produção.
            </p>

            <ul>
                <li>Redução de perdas;</li>
                <li>Conservação dos recursos naturais;</li>
                <li>Melhor planejamento da propriedade;</li>
                <li>Uso eficiente de insumos.</li>
            </ul>
        `
    },

    agua: {
        categoria: "02 / RECURSOS HÍDRICOS",
        titulo: "Cada gota importa",

        texto: `
            <p>
                A água é um dos recursos mais importantes para a agricultura.
                Por isso, seu uso precisa ser planejado.
            </p>

            <p>
                Sistemas de irrigação eficientes, monitoramento da umidade
                do solo e manutenção dos equipamentos podem ajudar a evitar
                desperdícios.
            </p>
        `
    },

    solo: {
        categoria: "03 / CONSERVAÇÃO",
        titulo: "O solo é patrimônio produtivo",

        texto: `
            <p>
                O solo sustenta a produção agrícola e desempenha funções
                fundamentais para os ecossistemas.
            </p>

            <p>
                Cobertura vegetal, rotação de culturas, plantio direto e
                controle da erosão são exemplos de estratégias de conservação.
            </p>
        `
    },

    biodiversidade: {
        categoria: "04 / BIODIVERSIDADE",
        titulo: "Produção e natureza podem coexistir",

        texto: `
            <p>
                A biodiversidade inclui os diferentes seres vivos e
                ecossistemas presentes em uma região.
            </p>

            <p>
                A conservação da vegetação nativa e dos habitats pode
                contribuir para o equilíbrio ecológico das áreas rurais.
            </p>
        `
    },

    energia: {
        categoria: "05 / ENERGIA RENOVÁVEL",
        titulo: "Energia limpa no campo",

        texto: `
            <p>
                Fontes renováveis podem fazer parte da matriz energética
                das propriedades rurais.
            </p>

            <p>
                Energia solar, biomassa, biogás e outras alternativas podem
                contribuir para diversificar o fornecimento de energia.
            </p>
        `
    },

    tecnologia: {
        categoria: "06 / TECNOLOGIA",
        titulo: "Dados para decidir melhor",

        texto: `
            <p>
                A agricultura moderna utiliza cada vez mais ferramentas
                digitais para acompanhar as condições da produção.
            </p>

            <p>
                GPS, sensores, drones, imagens e sistemas de gerenciamento
                podem ajudar o produtor a tomar decisões mais precisas.
            </p>
        `
    }

};


// ===============================
// MODAL
// ===============================

const modal = document.getElementById("modal");

const modalCategoria =
    document.getElementById("modalCategoria");

const modalTitulo =
    document.getElementById("modalTitulo");

const modalTexto =
    document.getElementById("modalTexto");

const fecharModal =
    document.getElementById("fecharModal");


document.querySelectorAll("[data-topic]").forEach(botao => {

    botao.addEventListener("click", () => {

        const tema = temas[botao.dataset.topic];

        modalCategoria.textContent = tema.categoria;

        modalTitulo.textContent = tema.titulo;

        modalTexto.innerHTML = tema.texto;

        modal.classList.add("aberto");

    });

});


function fechar() {
    modal.classList.remove("aberto");
}

fecharModal.addEventListener("click", fechar);

document.querySelector(".modal-fundo")
    .addEventListener("click", fechar);

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        fechar();
    }

});


// ===============================
// ABAS DA CALCULADORA
// ===============================

const abas =
    document.querySelectorAll(".aba");

const formSafra =
    document.getElementById("formSafra");

const formAgua =
    document.getElementById("formAgua");


abas.forEach(aba => {

    aba.addEventListener("click", () => {

        abas.forEach(item => {
            item.classList.remove("ativa");
        });

        aba.classList.add("ativa");

        if (aba.dataset.calculo === "safra") {

            formSafra.classList.remove("escondido");

            formAgua.classList.add("escondido");

        } else {

            formSafra.classList.add("escondido");

            formAgua.classList.remove("escondido");

        }

    });

});


// ===============================
// FORMATAÇÃO DE VALORES
// ===============================

function dinheiro(valor) {

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}

function numero(valor) {

    return valor.toLocaleString("pt-BR", {
        maximumFractionDigits: 2
    });

}


// ===============================
// CALCULADORA DA SAFRA
// ===============================

formSafra.addEventListener("submit", event => {

    event.preventDefault();

    const area =
        Number(document.getElementById("area").value);

    const producao =
        Number(document.getElementById("producao").value);

    const preco =
        Number(document.getElementById("preco").value);

    const custo =
        Number(document.getElementById("custo").value);


    const producaoTotal =
        area * producao;

    const receita =
        producaoTotal * preco;

    const custoTotal =
        area * custo;

    const resultado =
        receita - custoTotal;

    const resultadoPorHectare =
        resultado / area;


    document.getElementById("resultado").innerHTML = `

        <strong>📊 Resultado estimado</strong>

        <div class="resultados-grid">

            <div class="resultado-item">

                <small>Produção total</small>

                <strong>
                    ${numero(producaoTotal)} unidades
                </strong>

            </div>


            <div class="resultado-item">

                <small>Receita bruta</small>

                <strong>
                    ${dinheiro(receita)}
                </strong>

            </div>


            <div class="resultado-item">

                <small>Custo total</small>

                <strong>
                    ${dinheiro(custoTotal)}
                </strong>

            </div>


            <div class="resultado-item">

                <small>Resultado estimado</small>

                <strong>
                    ${dinheiro(resultado)}
                </strong>

            </div>


            <div class="resultado-item">

                <small>Resultado por hectare</small>

                <strong>
                    ${dinheiro(resultadoPorHectare)}
                </strong>

            </div>

        </div>

        <p>
            ⚠️ Este cálculo é apenas uma estimativa educativa.
            Valores reais dependem de diversos fatores da produção.
        </p>

    `;

});


// ===============================
// CALCULADORA DE ÁGUA
// ===============================

formAgua.addEventListener("submit", event => {

    event.preventDefault();

    const consumo =
        Number(document.getElementById("aguaAtual").value);

    const reducao =
        Number(document.getElementById("reducao").value);


    const economiaDiaria =
        consumo * (reducao / 100);

    const novoConsumo =
        consumo - economiaDiaria;

    const economiaMensal =
        economiaDiaria * 30;


    document.getElementById("resultado").innerHTML = `

        <strong>💧 Economia estimada</strong>

        <div class="resultados-grid">

            <div class="resultado-item">

                <small>Consumo atual</small>

                <strong>
                    ${numero(consumo)} L/dia
                </strong>

            </div>


            <div class="resultado-item">

                <small>Redução</small>

                <strong>
                    ${numero(reducao)}%
                </strong>

            </div>


            <div class="resultado-item">

                <small>Economia diária</small>

                <strong>
                    ${numero(economiaDiaria)} L
                </strong>

            </div>


            <div class="resultado-item">

                <small>Novo consumo</small>

                <strong>
                    ${numero(novoConsumo)} L/dia
                </strong>

            </div>


            <div class="resultado-item">

                <small>Economia em 30 dias</small>

                <strong>
                    ${numero(economiaMensal)} L
                </strong>

            </div>

        </div>

    `;

});


// ===============================
// CURIOSIDADES
// ===============================

const curiosidades = [

    {
        titulo: "Tecnologia também significa informação.",
        texto:
            "Agricultura de precisão não envolve apenas máquinas. A coleta e interpretação de dados também são fundamentais."
    },

    {
        titulo: "Solo protegido é um investimento.",
        texto:
            "Práticas conservacionistas ajudam a reduzir processos erosivos e preservar características importantes do solo."
    },

    {
        titulo: "Sustentabilidade envolve economia.",
        texto:
            "Além dos impactos ambientais, uma atividade sustentável precisa considerar sua viabilidade econômica e social."
    },

    {
        titulo: "Energia renovável pode ser usada no campo.",
        texto:
            "Energia solar, biomassa e biogás são exemplos de alternativas que podem fazer parte das atividades rurais."
    }

];


let curiosidadeAtual = -1;

document
    .getElementById("novaCuriosidade")
    .addEventListener("click", () => {

        curiosidadeAtual++;

        if (curiosidadeAtual >= curiosidades.length) {
            curiosidadeAtual = 0;
        }

        document.getElementById("curiosidadeTitulo")
            .textContent =
            curiosidades[curiosidadeAtual].titulo;

        document.getElementById("curiosidadeTexto")
            .textContent =
            curiosidades[curiosidadeAtual].texto;

    });


// ===============================
// GLOSSÁRIO
// ===============================

const glossario = {

    agronegocio:
        "Conjunto de atividades relacionadas à produção agropecuária, incluindo insumos, produção, processamento, transporte, comercialização e serviços.",

    agroecologia:
        "Abordagem que utiliza princípios ecológicos para orientar sistemas agrícolas mais sustentáveis.",

    agrofloresta:
        "Sistema que combina árvores com culturas agrícolas e outros componentes produtivos.",

    ilpf:
        "Integração Lavoura-Pecuária-Floresta, sistema que combina diferentes atividades produtivas.",

    precisao:
        "Uso de dados, sensores, GPS e outras tecnologias para melhorar o gerenciamento da produção.",

    boaspraticas:
        "Conjunto de procedimentos que procuram melhorar a eficiência, segurança e responsabilidade da produção."
};


document.querySelectorAll("[data-termo]").forEach(botao => {

    botao.addEventListener("click", () => {

        const termo =
            glossario[botao.dataset.termo];

        modalCategoria.textContent =
            "07 / GLOSSÁRIO";

        modalTitulo.textContent =
            botao.querySelector("b").textContent;

        modalTexto.innerHTML =
            `<p>${termo}</p>`;

        modal.classList.add("aberto");

    });

});
