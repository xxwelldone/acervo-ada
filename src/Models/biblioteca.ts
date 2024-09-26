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
                console.log(`[${index}] ${item.getDetalhes()}, Disponinibilidade -> ${item.getDisponibilidade()}`);
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
        const item = this.getItem(index);
        if (item) {
            if (!item.disponivel) {
                console.log(`Item "${item.titulo}" está emprestado e não pode ser removido.`);
                return false;
            }
            const itemRemovido = this.acervo.splice(index, 1)[0];
            console.log(`Item "${itemRemovido.titulo}" removido com sucesso.`);
            return true;
        }
        return false;
    }

    emprestarItem(index: number): boolean {
        const item = this.getItem(index);
        if (item && item.disponivel) {
            item.marcarComoEmprestado();
            console.log(`Item "${item.titulo}" emprestado com sucesso.`);
            return true;
        } else if (item && !item.disponivel) {
            console.log(`Item "${item.titulo}" já está emprestado.`);
            return false;
        }
        return false;
    }

    devolverItem(index: number): boolean {
        const item = this.getItem(index);
        if (item && !item.disponivel) {
            item.marcarComoDisponivel();
            console.log(`Item "${item.titulo}" devolvido com sucesso.`);
            return true;
        } else if (item && item.disponivel) {
            console.log(`Item "${item.titulo}" já está disponível.`);
            return false;
        }
        return false;
    }
}
