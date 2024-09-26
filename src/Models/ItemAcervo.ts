import { Localizavel } from '../Interfaces/localizavel';

export abstract class ItemAcervo implements Localizavel {
  public disponivel: boolean;

  constructor(public titulo: string, public ano: number, public localizacao: string) {
    this.disponivel = true;
  }

  abstract getDetalhes(): string;

  getLocalizacao(): string {
    return this.localizacao;
  }

  marcarComoEmprestado(): void {
    this.disponivel = false;
  }

  marcarComoDisponivel(): void {
    this.disponivel = true;
  }

  getDisponibilidade(): string {
    return this.disponivel ? 'Disponível' : 'Emprestado';
  }
}
