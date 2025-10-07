const caixaPrincipal = Document.querySelector(".caixa-principal");
const caixaPerguntas = Document.querySelector(".caixa-perguntas");
const caixaAlternativas = Document.querySelector(".caixa-Alternativas");
const caixaResultado = Document.querySelector(".caixa-Resultado");
const textoResultado = Document.querySelector(".texto-resultado");





const perguntas = [
    {
        enunciado: "Você prefere atividades em grupo ou sozinho?",
        alternativas: [
            {
                texto: " Em grupo ",
                afirmacao: " Você gosta de se conectar com as pessoas e se sente energizado em interações sociais. ",
            },
            {
                texto: " Sozinho",
                afirmacao: " Você valoriza momentos de introspecção e recarrega suas energias no silêncio.",
            }
        ]
    },
    {
        enunciado: " Quando você precisa tomar uma decisão, você costuma ser mais:",
        alternativas: [
            {
                texto: " Racional ",
                afirmacao: " Você confia na lógica e na análise para encontrar a melhor solução.   ",
            },
            {
                texto: " Emocional ",
                afirmacao: " Você leva em conta os sentimentos e a empatia antes de decidir. ",
            }
        ]
    },
    {
        enunciado: "  Em situaçoẽs novas, você tende a ser mais:",
        alternativas: [
            {
                texto: " Cauteloso (a) ",
                afirmacao: " Você pensa antes de agir e prefere segurança e planejamento.  ",
            },
            {
                texto: "Aventureiro (a) ",
                afirmacao: " Você gosta de explorar o desconhecido e abraça desafios com entusiasmo. ",
            }
        ]
    },
    {
        enunciado: "  No seu tempo livre, você prefere:",
        alternativas: [
            {
                texto: " Estar em movimento ( passeios, esportes, festas )  ",
                afirmacao: "  Você é dinâmico, gosta de novidades e aproveita a vida ativamente.  ",
            },
            {
                texto: "  Relaxar em casa (ler, ver filmes, descansar)   ",
                afirmacao: "  Você valoriza tranquilidade e aprecia momentos de calma e descanso.",
            }
        ]
    },
    {
        enunciado: " Quando alguém discorda de você, você normalmente:  ",
        alternativas: [
            {
                texto: "  Argumenta e defende seu ponto  ",
                afirmacao: "Você é firme em suas opiniões e gosta de se expressar com clareza.",
            },
            {
                texto: "  Prefere evitar conflitos ",
                afirmacao: " Você busca harmonia nos relacionamentos e evita desgastes desnecessários.",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPerguntas(){
    perguntaAtual = perguntas[atual]
        caixaPerguntas.textContent = perguntaAtual.enunciado; 
}

mostraPerguntas();