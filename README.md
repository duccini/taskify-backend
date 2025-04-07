# NestJS + Docker (Modo Desenvolvimento)

Este projeto roda uma API REST usando NestJS com Docker no modo desenvolvimento. A versão usada do node é `v20.19.0`

## Funcionalidades

- Autenticação com JWT:

  - [x] POST /auth/register – Registro
  - [x] POST /auth/login – Login

- CRUD de Tarefas (autenticado):

  - [x] GET /tasks – Listar
  - [x] POST /tasks – Criar
  - [x] DELETE /tasks/:id – Remover
  - [x] PATCH /tasks/:id – Atualizar status
  - [] PATCH /tasks/:id – Atualizar título

- Requisitos técnicos:
  - [x] Proteção de rotas autenticadas com JWT
  - [x] Validação com class-validator
  - [x] Banco de dados PostgreSQL usando Prisma ou TypeORM

## Pré-requisitos

- Docker
- Docker Compose

## Passos para rodar a aplicação

0. Considere mudar a versão do Node caso ocorra algum problema e tenha nvm instalado na máquina

```bash
nvm use v20
```

1. Clone o repositório:

```bash
git clone <seu-repo>
cd <seu-repo>
```

3. Criar um arquivo .env conforme arquivo .enxexample

4. Construa e inicie o container:

```bash
docker compose up --build
```

5. A aplicação estará rodando em: http://localhost:3000

6. [Opcional] Comandos 'docker' úteis:

```bash
docker stop <nome-container> # parar o container
docker rm <nome-container> # deletar o container
docker compose down --volumes # deletar o volume -> apagar o BD
```
