import fastifyPlugin from 'fastify-plugin'
import fastifyPostgres from '@fastify/postgres'

async function dbConnector(fastify, options) {

    fastify.register(fastifyPostgres, {
        connectionString: "postgresql://root:root@localhost:5432/postgres"
    })

    console.debug('Database PostgreSQL registrado com sucesso !!!')

}

export default fastifyPlugin(dbConnector)