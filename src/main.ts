import * as readline from 'readline';
import { Biblioteca } from './models/biblioteca';
import { Livro } from './models/livro';
import { Revista } from './models/revista';
import { CD } from './models/cd';
import { DVD } from './models/dvd';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const biblioteca = new Biblioteca();

function exibirMenu(): void {
    console.log("\nMenu Principal");
    console.log("1. Adicionar item ao acervo");
    console.log("2. Remover item do acervo");
    console.log("3. Buscar item no acervo");
    console.log("4. Editar item do acervo");
    console.log("5. Emprestar item");
    console.log("6. Devolver item");
    console.log("7. Verificar disponibilidade");
    console.log("8. Listar todos os itens do acervo");
    console.log("9. Sair");
    rl.question("Escolha uma opção: ", handleMenuChoice);
}

function handleMenuChoice(choice: string): void {
    switch (choice) {
        case '1':
            adicionarItem();
            break;
        case '2':
            removerItem();
            break;
        case '3':
            buscarItem();
            break;
        case '4':
            editarItem();
            break;
        case '5':
            emprestarItem();
            break;
        case '6':
            devolverItem();
            break;
        case '7':
            verificarDisponibilidade();
            break;
        case '8':
            listarTodosItens();
            break;
        case '9':
            console.log("Encerrando o programa...");
            rl.close();
            break;
        default:
            console.log("Opção inválida");
            exibirMenu();
    }
}

function adicionarItem(): void {
    console.log("\nAdicionar Item ao Acervo");
    console.log("1. Livro");
    console.log("2. Revista");
    console.log("3. CD");
    console.log("4. DVD");
    console.log("5. Voltar ao menu principal");
    rl.question("Escolha o tipo de item: ", (tipo) => {
        switch (tipo) {
            case '1':
                adicionarLivro();
                break;
            case '2':
                adicionarRevista();
                break;
            case '3':
                adicionarCD();
                break;
            case '4':
                adicionarDVD();
                break;
            case '5':
                exibirMenu();
                break;
            default:
                console.log("Opção inválida");
                adicionarItem();
        }
    });
}

function adicionarLivro(): void {
    rl.question("Título: ", (titulo) => {
        rl.question("Autor: ", (autor) => {
            rl.question("Ano de Publicação: ", (ano) => {
                rl.question("Editora: ", (editora) => {
                    rl.question("ISBN: ", (isbn) => {
                        rl.question("Edição: ", (edicao) => {
                            try {
                                const livro = new Livro(titulo, autor, parseInt(ano), editora, isbn, parseInt(edicao));
                                biblioteca.adicionarItem(livro);
                                console.log(`Livro adicionado com sucesso. ID: ${livro.id}`);
                            } catch (error) {
                                console.error(`Erro ao adicionar livro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
                            }
                            exibirMenu();
                        });
                    });
                });
            });
        });
    });
}

function adicionarRevista(): void {
    rl.question("Título: ", (titulo) => {
        rl.question("Ano de Publicação: ", (ano) => {
            rl.question("Editora: ", (editora) => {
                rl.question("Edição: ", (edicao) => {
                    try {
                        const revista = new Revista(titulo, parseInt(ano), editora, parseInt(edicao));
                        biblioteca.adicionarItem(revista);
                        console.log(`Revista adicionada com sucesso. ID: ${revista.id}`);
                    } catch (error) {
                        console.error(`Erro ao adicionar revista: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
                    }
                    exibirMenu();
                });
            });
        });
    });
}

function adicionarCD(): void {
    rl.question("Título: ", (titulo) => {
        rl.question("Ano de Publicação: ", (ano) => {
            rl.question("Duração (em minutos): ", (duracao) => {
                rl.question("Artista: ", (artista) => {
                    try {
                        const cd = new CD(titulo, parseInt(ano), duracao, artista);
                        biblioteca.adicionarItem(cd);
                        console.log(`CD adicionado com sucesso. ID: ${cd.id}`);
                    } catch (error) {
                        console.error(`Erro ao adicionar CD: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
                    }
                    exibirMenu();
                });
            });
        });
    });
}

function adicionarDVD(): void {
    rl.question("Título: ", (titulo) => {
        rl.question("Ano de Publicação: ", (ano) => {
            rl.question("Duração (em minutos): ", (duracao) => {
                rl.question("Diretor: ", (diretor) => {
                    try {
                        const dvd = new DVD(titulo, parseInt(ano), duracao, diretor);
                        biblioteca.adicionarItem(dvd);
                        console.log(`DVD adicionado com sucesso. ID: ${dvd.id}`);
                    } catch (error) {
                        console.error(`Erro ao adicionar DVD: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
                    }
                    exibirMenu();
                });
            });
        });
    });
}

function removerItem(): void {
    rl.question("Digite o ID do item a ser removido: ", (id) => {
        try {
            biblioteca.removerItem(id);
            console.log("Item removido com sucesso.");
        } catch (error) {
            console.error(`Erro ao remover item: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
        }
        exibirMenu();
    });
}

function buscarItem(): void {
    rl.question("Digite o título do item a ser buscado: ", (titulo) => {
        const itensEncontrados = biblioteca.buscarPorTitulo(titulo);
        if (itensEncontrados.length > 0) {
            console.log("Itens encontrados:");
            itensEncontrados.forEach(item => {
                console.log(`ID: ${item.id}, Título: ${item.titulo}, Disponível: ${item.disponivel ? 'Sim' : 'Não'}`);
            });
        } else {
            console.log("Nenhum item encontrado com esse título.");
        }
        exibirMenu();
    });
}

function editarItem(): void {
    rl.question("Digite o ID do item a ser editado: ", (id) => {
        const item = biblioteca.buscarPorId(id);
        if (item) {
            console.log("Item encontrado. O que você gostaria de editar?");
            console.log("1. Título");
            console.log("2. Ano de Publicação");
            console.log("3. Voltar ao menu principal");
            rl.question("Escolha uma opção: ", (opcao) => {
                switch (opcao) {
                    case '1':
                        rl.question("Novo título: ", (novoTitulo) => {
                            try {
                                biblioteca.editarItem(id, { titulo: novoTitulo });
                                console.log("Título atualizado com sucesso.");
                            } catch (error) {
                                console.error(`Erro ao editar item: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
                            }
                            exibirMenu();
                        });
                        break;
                    case '2':
                        rl.question("Novo ano de publicação: ", (novoAno) => {
                            try {
                                biblioteca.editarItem(id, { anoPublicacao: parseInt(novoAno) });
                                console.log("Ano de publicação atualizado com sucesso.");
                            } catch (error) {
                                console.error(`Erro ao editar item: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
                            }
                            exibirMenu();
                        });
                        break;
                    case '3':
                        exibirMenu();
                        break;
                    default:
                        console.log("Opção inválida");
                        editarItem();
                }
            });
        } else {
            console.log("Item não encontrado.");
            exibirMenu();
        }
    });
}

function emprestarItem(): void {
    rl.question("Digite o ID do item a ser emprestado: ", (id) => {
        try {
            biblioteca.emprestarItem(id);
            console.log("Item emprestado com sucesso.");
        } catch (error) {
            console.error(`Erro ao emprestar item: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
        }
        exibirMenu();
    });
}

function devolverItem(): void {
    rl.question("Digite o ID do item a ser devolvido: ", (id) => {
        try {
            biblioteca.devolverItem(id);
            console.log("Item devolvido com sucesso.");
        } catch (error) {
            console.error(`Erro ao devolver item: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
        }
        exibirMenu();
    });
}

function verificarDisponibilidade(): void {
    console.log("\nVerificar Disponibilidade");
    console.log("1. Por título");
    console.log("2. Por autor");
    console.log("3. Por edição");
    console.log("4. Por editora");
    console.log("5. Por ID");
    console.log("6. Por duração");
    console.log("7. Por ano");
    console.log("8. Por diretor");
    console.log("9. Voltar ao menu principal");
    rl.question("Escolha uma opção: ", (opcao) => {
        if (opcao === '9') {
            exibirMenu();
            return;
        }
        const parametros = ['titulo', 'autor', 'edicao', 'editora', 'id', 'duracao', 'ano', 'diretor'];
        const parametroEscolhido = parametros[parseInt(opcao) - 1];
        if (parametroEscolhido) {
            rl.question(`Digite o ${parametroEscolhido}: `, (valor) => {
                try {
                    const resultados = biblioteca.verificarDisponibilidade(parametroEscolhido, valor);
                    if (resultados.length > 0) {
                        console.log("Itens encontrados:");
                        resultados.forEach(resultado => {
                            console.log(`ID: ${resultado.id}, Título: ${resultado.titulo}, Disponibilidade: ${resultado.disponivel ? "Disponível" : "Emprestado"}`);
                        });
                    } else {
                        console.log("Nenhum item encontrado.");
                    }
                } catch (error) {
                    console.error(`Erro ao verificar disponibilidade: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
                }
                exibirMenu();
            });
        } else {
            console.log("Opção inválida");
            verificarDisponibilidade();
        }
    });
}

function listarTodosItens(): void {
    const todosItens = biblioteca.listarTodosItens();
    if (todosItens.length > 0) {
        console.log("\nLista de todos os itens no acervo:");
        todosItens.forEach(item => {
            console.log(`ID: ${item.id}, Título: ${item.titulo}, Tipo: ${item.constructor.name}, Disponível: ${item.disponivel ? 'Sim' : 'Não'}`);
        });
    } else {
        console.log("O acervo está vazio.");
    }
    exibirMenu();
}

console.log("Bem-vindo ao Sistema de Gerenciamento da Biblioteca Online!");
exibirMenu();
