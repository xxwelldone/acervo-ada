// Projeto: Biblioteca Online com TypeScript
// Este projeto consiste em desenvolver uma aplicação web que simula o sistema de gerenciamento de uma biblioteca , utilizando TypeScript para garantir a tipagem estática e organização do código.

// Funcionalidades Principais:
// 1. Gerenciamento do Acervo:

// Cadastro de Itens: -> POST
// Cadastrar diferentes tipos de itens como livros, revistas, CDs e DVDs.

// Definir informações específicas de cada tipo de item (ex: ISBN para livros, editora para revistas, duração para mídias).?

// Controlar a localização física dos itens na biblioteca (ex: estante, prateleira).
// Edição de Itens: -> PUT
// Atualizar as informações dos itens cadastrados.
// Remoção de Itens: -> DELETE
// Remover itens do sistema, considerando se existem empréstimos ativos para o item.
// Controle de Disponibilidade:
// Visualizar a disponibilidade de cada item (disponível ou emprestado).

// Classes Principais: ItemAcervo, Livro, Revista, Midia, CD, DVD, Biblioteca.
// Classe Abstrata: ItemAcervo - Define a estrutura base para todos os itens do acervo.
// Superclasses Intermediárias: Publicacao e Midia - Categorizam os tipos de itens de forma mais específica.
// Interface: Localizavel - Implementada por classes que possuem localização física.
// Função Genérica: registrarItem - Permite adicionar qualquer tipo de ItemAcervo ao acervo, garantindo a tipagem correta.
// Lógica de Negócio: Implementada para garantir o funcionamento correto do sistema,  validação de disponibilidade de itens.

import * as readlineSync from 'readline-sync';
import { Livro } from './Models/livro';
import { Revista } from './Models/revista';
import { CD } from './Models/cd';
import { DVD } from './Models/dvd';
import { Biblioteca } from './Models/biblioteca';

function cadastrarLivro(biblioteca: Biblioteca) {
    const titulo = readlineSync.question('Titulo do livro: ');
    const ano = readlineSync.questionInt('Ano de publicacao: ');
    const localizacao = readlineSync.question('Localizacao na biblioteca: ');
    const editora = readlineSync.question('Editora: ');
    const isbn = readlineSync.question('ISBN: ');

    const livro = new Livro(titulo, ano, localizacao, editora, isbn);
    biblioteca.adicionarItem(livro);
    console.log('Livro cadastrado com sucesso!');
}

function cadastrarRevista(biblioteca: Biblioteca) {
    const titulo = readlineSync.question('Titulo da revista: ');
    const ano = readlineSync.questionInt('Ano de publicacao: ');
    const localizacao = readlineSync.question('Localizacao na biblioteca: ');
    const editora = readlineSync.question('Editora: ');
    const numeroEdicao = readlineSync.questionInt('Numero da edicao: ');

    const revista = new Revista(titulo, ano, localizacao, editora, numeroEdicao);
    biblioteca.adicionarItem(revista);
    console.log('Revista cadastrada com sucesso!');
}

function cadastrarCD(biblioteca: Biblioteca) {
    const titulo = readlineSync.question('Titulo do CD: ');
    const ano = readlineSync.questionInt('Ano de lancamento: ');
    const localizacao = readlineSync.question('Localizacao na biblioteca: ');
    const duracao = readlineSync.questionInt('Duracao (em minutos): ');
    const artista = readlineSync.question('Artista: ');

    const cd = new CD(titulo, ano, localizacao, duracao, artista);
    biblioteca.adicionarItem(cd);
    console.log('CD cadastrado com sucesso!');
}

function cadastrarDVD(biblioteca: Biblioteca) {
    const titulo = readlineSync.question('Titulo do DVD: ');
    const ano = readlineSync.questionInt('Ano de lancamento: ');
    const localizacao = readlineSync.question('Localizacao na biblioteca: ');
    const duracao = readlineSync.questionInt('Duracao (em minutos): ');
    const diretor = readlineSync.question('Diretor: ');

    const dvd = new DVD(titulo, ano, localizacao, duracao, diretor);
    biblioteca.adicionarItem(dvd);
    console.log('DVD cadastrado com sucesso!');
}

function editarItem(biblioteca: Biblioteca) {
    biblioteca.listarItens();
    const index = readlineSync.questionInt('\nDigite o índice do item que deseja editar: ');

    const item = biblioteca.getItem(index);
    if (item) {
        const novoTitulo = readlineSync.question(`\nNovo titulo (${item.titulo}): `) || item.titulo;
        const novoAno = readlineSync.questionInt(`Novo ano (${item.ano}): `) || item.ano;
        const novaLocalizacao = readlineSync.question(`Nova localizacao (${item.localizacao}): `) || item.localizacao;

        item.titulo = novoTitulo;
        item.ano = novoAno;
        item.localizacao = novaLocalizacao;

        console.log('Item editado com sucesso!');
    } else {
        console.log('Indice invalido.');
    }
}

function removerItem(biblioteca: Biblioteca) {
    biblioteca.listarItens();
    const index = readlineSync.questionInt('Digite o indice do item que deseja remover: ');

    if (biblioteca.removerItem(index)) {
        console.log('Item removido com sucesso!');
    } else {
        console.log('Índice inválido.');
    }
}

function perguntarTipoItem(biblioteca: Biblioteca) {
    const tipo = readlineSync.question('\nQue tipo de item deseja cadastrar?\n\n1 - Livro,\n2 - Revista,\n3 - CD,\n4 - DVD\n\nDigite aqui: ');
    switch (tipo) {
        case '1':
            cadastrarLivro(biblioteca);
            break;
        case '2':
            cadastrarRevista(biblioteca);
            break;
        case '3':
            cadastrarCD(biblioteca);
            break;
        case '4':
            cadastrarDVD(biblioteca);
            break;
        default:
            console.log('Tipo inválido.');
    }
}

function perguntarProximaAcao(biblioteca: Biblioteca) {
    const acao = readlineSync.question('\nDeseja cadastrar, listar, editar, remover ou sair?\n 1 - Cadastrar:\n 2 - Listar acervo:\n 3 - Editar:\n 4 - Remover:\n 5 - Sair:\n Digite aqui: ');

    switch (acao) {
        case '1':
            perguntarTipoItem(biblioteca);
            perguntarProximaAcao(biblioteca);
            break;
        case '2':
            console.log('Itens no acervo:');
            biblioteca.listarItens();
            perguntarProximaAcao(biblioteca);
            break;
        case '3':
            editarItem(biblioteca);
            perguntarProximaAcao(biblioteca);
            break;
        case '4':
            removerItem(biblioteca);
            perguntarProximaAcao(biblioteca);
            break;
        case '5':
            console.log('Saindo...');
            return;
        default:
            console.log('Opção invalida.');
            perguntarProximaAcao(biblioteca);
    }
}

const biblioteca = new Biblioteca();
perguntarProximaAcao(biblioteca);