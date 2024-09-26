import { ItemAcervo } from './ItemAcervo';

export class Biblioteca {
    private acervo: ItemAcervo[] = [];

    adicionarItem(item: ItemAcervo): void {
        this.acervo.push(item);
        console.log(`Item "${item.titulo}" adicionado ao acervo.`);
    }

    listarItens(): void {
        if (this.acervo.length === 0) {
            console.log('Nenhum item no acervo.');
        } else {
            this.acervo.forEach((item, index) => {
                console.log(`[${index}] ${item.getDetalhes()}`);
            });
        }
    }

    getItem(index: number): ItemAcervo | null {
        if (index >= 0 && index < this.acervo.length) {
            return this.acervo[index];
        } else {
            console.log('Índice inválido.');
            return null;
        }
    }

    removerItem(index: number): boolean {
        if (index >= 0 && index < this.acervo.length) {
            const itemRemovido = this.acervo.splice(index, 1)[0];
            console.log(`Item "${itemRemovido.titulo}" removido com sucesso.`);
            return true;
        } else {
            console.log('Índice inválido.');
            return false;
        }
    }

    editarItem(index: number, novoTitulo: string, novoAno: number, novaLocalizacao: string): boolean {
        const item = this.getItem(index);
        if (item) {
            item.titulo = novoTitulo || item.titulo;
            item.ano = novoAno || item.ano;
            item.localizacao = novaLocalizacao || item.localizacao;
            console.log(`Item "${item.titulo}" atualizado com sucesso.`);
            return true;
        }
        return false;
    }
}
