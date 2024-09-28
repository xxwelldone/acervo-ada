import { ItemAcervo } from './ItemAcervo';
import { Livro } from './livro';
import { Revista } from './revista';

export class Biblioteca {
    private acervo: ItemAcervo[];

    constructor() {
        this.acervo = [];
    }

    registrarItem<T extends ItemAcervo>(item: T): void {
        this.acervo.push(item);
    }

    removerItem(id: number): void {
        const index = this.acervo.findIndex(item => item.getId() === id);
        if (index !== -1) {
            if (this.acervo[index].estaDisponivel()) {
                this.acervo.splice(index, 1);
            } else {
                throw new Error("Não é possível remover um item que está emprestado.");
            }
        } else {
            throw new Error("Item não encontrado no acervo.");
        }
    }

    buscarItem(id: number): ItemAcervo | undefined {
        return this.acervo.find(item => item.getId() === id);
    }

    listarAcervo(): ItemAcervo[] {
        return this.acervo;
    }

    verificarDisponibilidade(termo: string | number): string {
        const itensEncontrados = this.acervo.filter(item => 
            item.getId() === Number(termo) || 
            item.getTitulo().toLowerCase().includes(termo.toString().toLowerCase()) ||
            (item instanceof Livro && item.getAutor().toLowerCase().includes(termo.toString().toLowerCase())) ||
            (item instanceof Revista && item.getEdicao().toLowerCase().includes(termo.toString().toLowerCase()))
        );

        if (itensEncontrados.length === 0) {
            return "Sem cadastro";
        }

        const itemDisponivel = itensEncontrados.some(item => item.estaDisponivel());
        return itemDisponivel ? "Sim" : "Não";
    }
}
