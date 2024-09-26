import { ItemAcervo } from './ItemAcervo';

export class Biblioteca {
    private acervo: ItemAcervo[] = [];

    adicionarItem(item: ItemAcervo): void {
        this.acervo.push(item);
    }

    listarItens(): void {
        this.acervo.forEach((item, index) => {
            console.log(`[${index}] ${item.getDetalhes()}`);
            // console.log(`Localizado em: ${item.getLocalizacao()}`);
        });
    }

    getItem(index: number): ItemAcervo | null {
        if (index >= 0 && index < this.acervo.length) {
            return this.acervo[index];
        } else {
            console.log('Indice inválido.');
            return null;
        }
    }

    removerItem(index: number): boolean {
        if (index >= 0 && index < this.acervo.length) {
            this.acervo.splice(index, 1);
            return true;
        } else {
            console.log('Indice inválido.');
            return false;
        }
    }
}
