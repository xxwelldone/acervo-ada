# 📚 ACERVO-ADA

**ACERVO-ADA** é um sistema simples de gerenciamento de acervo de uma biblioteca. Ele permite cadastrar, atualizar, excluir e buscar itens como CDs, DVDs, Livros e Revistas, além de gerenciar empréstimos e devoluções.

## 🚀 Funcionalidades

- **Adicionar itens**: Adicione CDs, DVDs, Livros e Revistas ao acervo.
- **Atualizar itens**: Modifique informações dos itens cadastrados.
- **Excluir itens**: Remova itens disponíveis do acervo.
- **Buscar itens**: Localize itens pelo título.
- **Empréstimo de itens**: Marque itens como emprestados.
- **Devolução de itens**: Registre a devolução de itens emprestados.

## 🛠️ Como rodar o projeto

Siga os passos abaixo para executar o projeto em sua máquina local:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Acesse o diretório do projeto**:
   ```bash
   cd nome-do-repositorio
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Execute o projeto**:
   ```bash
   npx ts-node .\src\main.ts
   ```

## 🗂️ Estrutura do Projeto

- **Interfaces**:
  - `Localizavel`: Interface que define itens com localização física (estante e prateleira).
  
- **Classes**:
  - `ItemAcervo`: Classe base para todos os itens do acervo.
  - `Midia` e `Publicacao`: Classes para categorizar mídias e publicações.
  - `CD`, `DVD`, `Livro`, `Revista`: Especializações de `ItemAcervo` para cada tipo de item.
  - `Biblioteca`: Classe responsável pelas operações de gerenciamento (CRUD, empréstimo e devolução).
  - `Menu`: Interface de interação no terminal para que o usuário possa utilizar o sistema.

## 💡 Exemplo de Uso

Quando você rodar o projeto, será exibido um menu interativo no terminal, com as seguintes opções:

1. **Adicionar novo item**  
2. **Atualizar um item**  
3. **Excluir um item**  
4. **Buscar itens pelo título**  
5. **Listar todos os itens**  
6. **Emprestar um item**  
7. **Devolver um item**  
8. **Sair**

O usuário pode então escolher uma das opções e seguir as instruções fornecidas para gerenciar o acervo da biblioteca.

## 🛠️ Tecnologias Utilizadas

- **TypeScript**: Linguagem principal do projeto.
- **Node.js**: Ambiente de execução JavaScript.
- **readline-sync**: Biblioteca para interação via terminal.

---

👤 **Autores**  
[Lidor Brosh](https://github.com/lidorbrosh)  
[Lucas B](https://github.com/DOULORES)  
[Wesley Menezes](https://github.com/DOULORES)

📅 **Última Atualização**: Setembro de 2024

---

Divirta-se usando o **ACERVO-ADA** para gerenciar sua própria coleção de mídia e publicações! 😄📀📖
