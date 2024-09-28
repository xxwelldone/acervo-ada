import { Biblioteca } from './models/biblioteca';
import { Livro } from './models/livro';
import { Revista } from './models/revista';
import { CD } from './models/cd';
import { DVD } from './models/dvd';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const biblioteca = new Biblioteca();

function mostrarMenu() {
    console.log("\n--- Menu da Biblioteca ---");
    console.log("1. Adicionar item ao acervo");
    console.log("2. Remover item do acervo");
    console.log("3. Buscar item no acervo");
    console.log("4. Listar todo o acervo");
    console.log("5. Emprestar item");
    console.log("6. Devolver item");
    console.log("0. Sair");
    rl.question("Escolha uma opção: ", handleMenuChoice);
}

function handleMenuChoice(choice: string) {
    switch (choice) {
        case "1":
            adicionarItem();
            break;
        case "2":
            removerItem();
            break;
        case "3":
            buscarItem();
            break;
        case "4":
            listarAcervo();
            break;
        case "5":
            emprestarItem();
            break;
        case "6":
            devolverItem();
            break;
        case "0":
            console.log("Encerrando o programa...");
            rl.close();
            return;
        default:
            console.log("Opção inválida. Tente novamente.");
            mostrarMenu();
            return;
    }
}

function adicionarItem() {
    rl.question("Tipo de item (1-Livro, 2-Revista, 3-CD, 4-DVD): ", (tipo) => {
        rl.question("ID: ", (id) => {
            rl.question("Título: ", (titulo) => {
                rl.question("Ano de Publicação: ", (ano) => {
                    rl.question("Localização (ex: Estante A, Prateleira 2): ", (localizacao) => {
                        switch (tipo) {
                            case "1":
                                rl.question("Editora: ", (editora) => {
                                    rl.question("ISBN: ", (isbn) => {
                                        rl.question("Autor: ", (autor) => {
                                            const livro = new Livro(Number(id), titulo, Number(ano), editora, isbn, autor);
                                            livro.definirLocalizacao(localizacao);
                                            biblioteca.registrarItem(livro);
                                            console.log("Livro adicionado com sucesso!");
                                            mostrarMenu();
                                        });
                                    });
                                });
                                break;
                            case "2":
                                rl.question("Editora: ", (editora) => {
                                    rl.question("Edição: ", (edicao) => {
                                        const revista = new Revista(Number(id), titulo, Number(ano), editora, edicao);
                                        revista.definirLocalizacao(localizacao);
                                        biblioteca.registrarItem(revista);
                                        console.log("Revista adicionada com sucesso!");
                                        mostrarMenu();
                                    });
                                });
                                break;
                            case "3":
                                rl.question("Duração (em minutos): ", (duracao) => {
                                    rl.question("Artista: ", (artista) => {
                                        const cd = new CD(Number(id), titulo, Number(ano), Number(duracao), artista);
                                        cd.definirLocalizacao(localizacao);
                                        biblioteca.registrarItem(cd);
                                        console.log("CD adicionado com sucesso!");
                                        mostrarMenu();
                                    });
                                });
                                break;
                            case "4":
                                rl.question("Duração (em minutos): ", (duracao) => {
                                    rl.question("Diretor: ", (diretor) => {
                                        const dvd = new DVD(Number(id), titulo, Number(ano), Number(duracao), diretor);
                                        dvd.definirLocalizacao(localizacao);
                                        biblioteca.registrarItem(dvd);
                                        console.log("DVD adicionado com sucesso!");
                                        mostrarMenu();
                                    });
                                });
                                break;
                            default:
                                console.log("Tipo de item inválido.");
                                mostrarMenu();
                        }
                    });
                });
            });
        });
    });
}

function removerItem() {
    rl.question("ID do item a ser removido: ", (id) => {
        try {
            biblioteca.removerItem(Number(id));
            console.log("Item removido com sucesso!");
        } catch (erro: unknown) {
            if (erro instanceof Error) {
                console.error("Erro ao remover item:", erro.message);
            } else {
                console.error("Erro desconhecido ao remover item");
            }
        }
        mostrarMenu();
    });
}

function buscarItem() {
    rl.question("ID do item a ser buscado: ", (id) => {
        const item = biblioteca.buscarItem(Number(id));
        if (item) {
            console.log("Item encontrado:", item.obterDetalhes());
        } else {
            console.log("Item não encontrado.");
        }
        mostrarMenu();
    });
}

function listarAcervo() {
    console.log("Acervo da biblioteca:");
    biblioteca.listarAcervo().forEach(item => console.log(item.obterDetalhes()));
    mostrarMenu();
}

function emprestarItem() {
    rl.question("ID do item a ser emprestado: ", (id) => {
        const item = biblioteca.buscarItem(Number(id));
        if (item) {
            try {
                item.emprestar();
                console.log("Item emprestado com sucesso!");
            } catch (erro: unknown) {
                if (erro instanceof Error) {
                    console.error("Erro ao emprestar item:", erro.message);
                } else {
                    console.error("Erro desconhecido ao emprestar item");
                }
            }
        } else {
            console.log("Item não encontrado.");
        }
        mostrarMenu();
    });
}

function devolverItem() {
    rl.question("ID do item a ser devolvido: ", (id) => {
        const item = biblioteca.buscarItem(Number(id));
        if (item) {
            item.devolver();
            console.log("Item devolvido com sucesso!");
        } else {
            console.log("Item não encontrado.");
        }
        mostrarMenu();
    });
}

console.log("Bem-vindo ao Sistema de Gerenciamento da Biblioteca!");
mostrarMenu();
