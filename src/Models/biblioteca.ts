import { ItemAcervo } from './ItemAcervo';
import { Livro } from './livro';
import { Revista } from './revista';
import { CD } from './cd';
import { DVD } from './dvd';

interface ResultadoDisponibilidade {
    id: string;
    titulo: string;
    disponivel: boolean;
}

export class Biblioteca {
    private acervo: ItemAcervo<any>[] = [];

    adicionarItem<T extends ItemAcervo<any>>(item: T): void {
        if (this.buscarPorId(item.id)) {
            throw new Error("Item já cadastrado");
        }
        this.acervo.push(item);
    }

    removerItem(id: string): void {
        const index = this.acervo.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error("Item não encontrado");
        }
        if (!this.acervo[index].disponivel) {
            throw new Error("Item não disponível para remoção");
        }
        this.acervo.splice(index, 1);
    }

    buscarPorId(id: string): ItemAcervo<any> | undefined {
        return this.acervo.find(item => item.id === id);
    }

    buscarPorTitulo(titulo: string): ItemAcervo<any>[] {
        return this.acervo.filter(item => item.titulo.toLowerCase().includes(titulo.toLowerCase()));
    }

    editarItem(id: string, novosDados: Partial<ItemAcervo<any>>): void {
        const item = this.buscarPorId(id);
        if (!item) {
            throw new Error("Item não encontrado");
        }
        if (!item.disponivel) {
            throw new Error("Item não disponível para edição");
        }
        Object.assign(item, novosDados);
    }

    emprestarItem(id: string): void {
        const item = this.buscarPorId(id);
        if (!item) {
            throw new Error("Item não encontrado");
        }
        if (!item.disponivel) {
            throw new Error("Item já emprestado");
        }
        item.disponivel = false;
    }

    devolverItem(id: string): void {
        const item = this.buscarPorId(id);
        if (!item) {
            throw new Error("Item não encontrado");
        }
        if (item.disponivel) {
            throw new Error("Item não está emprestado");
        }
        item.disponivel = true;
    }

    verificarDisponibilidade(parametro: string, valor: string | number): ResultadoDisponibilidade[] {
        const itensEncontrados = this.acervo.filter(item => {
            switch (parametro.toLowerCase()) {
                case 'titulo':
                    return item.titulo.toLowerCase().includes(String(valor).toLowerCase());
                case 'id':
                    return item.id === valor;
                case 'ano':
                    return item.anoPublicacao === Number(valor);
                case 'autor':
                    return item instanceof Livro && item.autor.toLowerCase().includes(String(valor).toLowerCase());
                case 'edicao':
                    return (item instanceof Livro || item instanceof Revista) && item.edicao === Number(valor);
                case 'editora':
                    return (item instanceof Livro || item instanceof Revista) && item.editora.toLowerCase().includes(String(valor).toLowerCase());
                case 'duracao':
                    return (item instanceof CD || item instanceof DVD) && item.duracao === valor;
                case 'diretor':
                    return item instanceof DVD && item.diretor.toLowerCase().includes(String(valor).toLowerCase());
                default:
                    return false;
            }
        });



        if (itensEncontrados.length === 0) {
            throw new Error("Nenhum item encontrado");
        }

        return itensEncontrados.map(item => ({
            id: item.id,
            titulo: item.titulo,
            disponivel: item.disponivel
        }));
    }

    listarTodosItens(): ItemAcervo<any>[] {
        return this.acervo;
    }

    static totalItens(biblioteca: Biblioteca): number {
        return biblioteca.acervo.length;
    }
}