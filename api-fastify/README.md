<figure>
    <img src="./assets/tubo-ensaio.png" alt="CRUD com API Fastify" width="128" height="128">
</figure>

# API Fastify

Este é o repositório da POC **API Fastify**, criado para analisar o uso do Fastify na implementação de uma Rest API completa.

## Objetivo do Projeto

O objetivo deste projeto é fornecer serviços através da tecnológia API Rest para a geração de cupons de descontos personalizados.

### Requisitos funcionais

- O sistema deve permitir o cadastro do emissor, ou seja, a entidade autorizada a gerenciar promoções através de cupons de desconto;
- O sistema deve gerar cupons de desconto dos tipos: fixos e aleatórios;
- O sistema deve permitir restringir o uso do cupom promocionais por limite de uso;
- O sistema deve permitir restringir o uso co cumpom através de uma da data de vigência;
- O sistema deve permitir criar um cupom promociona pessoal e intransferível;
- O sistema deve permitir notificar o emissor que o cupom foi utilizado;

### Requisitos não funcionais

- O sistema deve limitar a quantidade de requisições para a API de um mesmo solicitante (Rate Limited);
- O sistema deve registrar as informações do solicitante;
- O sistema deve impedir ou mitigar os tipos de ataques de DDOS;

Foram utilizadas as tecnologias:
* [Fastify](https://fastify.dev/)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)

## Serviços disponíveis (endpoints)

Em construção

# Pré-requisitos

* VSCode (Visual Studio Code)
* Instalado e configurado o Docker e o Docker Compose `(Docker version 24.0.5, build ced0996)`
* Node.js 20.11.1
* NPM 10.8.3
* PostgreSQL 16.3 (Será adicionado com container Docker)

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