// Importando o framework e inicializando
import Fastify from 'fastify'
import statusRoute from './routers/status.js'

const fastify = Fastify({
    logger: true
})

// Definindo as rotas do projeto
fastify.register(statusRoute)

// Executando o servidor
try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
} catch(err) {
    fastify.log.error(err);
    process.exit(1);
}