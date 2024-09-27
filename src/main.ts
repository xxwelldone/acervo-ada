// Projeto: Biblioteca Online com TypeScript
// Este projeto consiste em desenvolver uma aplicação web que simula o sistema de gerenciamento de uma biblioteca , utilizando TypeScript para garantir a tipagem estática e organização do código.

import { Biblioteca } from "./Models/biblioteca";
import { DVD } from "./Models/dvd";
import { Livro } from "./Models/livro";
import { Menu } from "./utils/menu";

// Funcionalidades Principais:
// 1. Gerenciamento do Acervo:

// Cadastro de Itens: -> POST
// Cadastrar diferentes tipos de itens como livros, revistas, CDs e DVDs.

// Definir informações específicas de cada tipo de item (ex: ISBN para livros, editora para revistas, duração para mídias).?

// Controlar a localização física dos itens na biblioteca (ex: estante, prateleira).

// Edição de Itens:
// Atualizar as informações dos itens cadastrados.

// Remoção de Itens: -> DELETE - done
// Remover itens do sistema, considerando se existem empréstimos ativos para o item.

// Controle de Disponibilidade:
// Visualizar a disponibilidade de cada item (disponível ou emprestado).

// Classes Principais: ItemAcervo, Livro, Revista, Midia, CD, DVD, Biblioteca.
// Classe Abstrata: ItemAcervo - Define a estrutura base para todos os itens do acervo.
// Superclasses Intermediárias: Publicacao e Midia - Categorizam os tipos de itens de forma mais específica.
// Interface: Localizavel - Implementada por classes que possuem localização física.
// Função Genérica: registrarItem - Permite adicionar qualquer tipo de ItemAcervo ao acervo, garantindo a tipagem correta.
// Lógica de Negócio: Implementada para garantir o funcionamento correto do sistema,  validação de disponibilidade de itens.

//teste
// const biblioteca = new Biblioteca();

// const dvd = new DVD(
//   biblioteca.generateID(),
//   "X",
//   true,
//   5000,
//   "terror",
//   "Movie",
//   "P",
//   "5"
// );
// const dvd2 = new DVD(
//   biblioteca.generateID(),
//   "X",
//   true,
//   5000,
//   "terror",
//   "Movie",
//   "P",
//   "5"
// );
// const livro = new Livro(
//   biblioteca.generateID(),
//   "1984",
//   false,
//   "Penguin",
//   "EN-GB",
//   "George Orwell",
//   "Fantasy",
//   "172643",
//   1964,
//   "P",
//   "2"
// );

// biblioteca.create(dvd);
// biblioteca.create(livro);
// biblioteca.create(dvd2);
// biblioteca.read();

const menu = new Menu();
menu.main();
