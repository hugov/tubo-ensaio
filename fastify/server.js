import Fastify from 'fastify'
import cors from '@fastify/cors'

import dbConnector from './database/database.js'
import statusRoute from './routers/status.js'
import userRoute from './routers/user.js'

const fastify = Fastify({
    logger: false
})

fastify.register(cors, {
    origin: '*'
})

fastify.register(dbConnector)
fastify.register(statusRoute)
fastify.register(userRoute)

fastify.listen({ port: 3000, host: '0.0.0.0'}, function(err, address) {
    if(err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`Server listening on ${address}`)
})