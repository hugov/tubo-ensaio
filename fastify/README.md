<figure>
    <img src="./static/img/tubo-ensaio.png" alt="CRUD com API Fastify" width="256" height="256">
</figure>

# Tubo de ensaio - CRUD com API Fastify

Esse é o repositório do **CRUD com API Fastify**, criado para entender como funcionar o uso desta tecnológias.

## O que é o Projeto ?

A ideia do projeto foi construir **CRUD com o uso de API Rest com o framework Fastify** e com isso validar um pedaço de uma aplicação prática. Com isso temos uma Proof of Concept (POC ou Prova de Conceito). 

As seguintes tecnologias foram utilizadas nesta POC:
* [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [Pico CSS](https://picocss.com/) 
* [Fastify](https://fastify.dev/)
* [PostgreSQL](https://www.postgresql.org/)

## Serviços disponíveis (endpoints)

Os endpoints disponibilizados por este pacote são os necessários para a implementação de um CRUD.

A lista de endpoints completa está descrita aqui:

* Status  - Serviço que valida se aplicação está no ar.
* Usuário - Serviços que apoiam a implementação do CRUD. 

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