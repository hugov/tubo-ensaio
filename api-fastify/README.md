<figure>
    <img src="./assets/tubo-ensaio.png" alt="CRUD com API Fastify" width="128" height="128">
</figure>

# API Fastify

Este é o repositório da POC **API Fastify**, criado para analisar o uso do Fastify na implementação de uma Rest API completa.

## O que é o Projeto ?

O objetivo do projeto é implementar uma **API Rest com o framework Fastify** e com isso validar esta tecnológia com uma aplicação do mundo real.

Foram utilizadas as tecnologias:
* [Fastify](https://fastify.dev/)
* [PostgreSQL](https://www.postgresql.org/)

## Serviços disponíveis (endpoints)

Em construção

# Pré-requisitos

* VSCode (Visual Studio Code)
* Instalado e configurado o Docker e o Docker Compose `(Docker version 24.0.5, build ced0996)`
* Node.js 20.11.1
* NPM 10.8.3
* PostgreSQL 16.3 (Caso não tenha instalado use o conatiner do Docker)
* Extensão do VSCode Live Server

# Instalação

Clone o repositório

```
git clone https://github.com/hugov/tubo-ensaio.git
```

Execute o comando

```
npm install
```

## Docker

Com o Docker criaremos um container do banco de dados PostgreSQL 16.3

Execute o comando a seguir, para criar a imagem e subir o container:

```
docker-compose up
```

Caso queira rodar o container em **Backgroud**

```
docker-compose up -d database
```

# Rodando o projeto

Execute o comando

```
npm start
```

# Apoie o projeto

**Tubo de ensaio** é um projeto que visa testar novas tecnológias e disponibilizar o resultado neste repositório. Se você apreciar o nosso rabalho e quiser me pagar um café, sinta-se livre para fazer qualquer doação para a Chave Aleatória Pix `968fc82d-2bef-4046-845c-aebe5dda9d61` ❤.

# Licença

Este projeto está licenciado sob a Licença MIT, ou seja, você pode usá-lo da forma que preferir, incluindo suas próprias modificações em versões próprias.