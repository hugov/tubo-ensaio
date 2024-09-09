
import Fastify from 'fastify'
//import cors from '@fastify/cors'

import { userRoutes } from './routes/user.routes';

const fastify = Fastify({
    logger: false
})

/*
fastify.register(cors, {
    origin: '*'
})
*/

fastify.register(userRoutes, {
    prefix: '/users',
});

fastify.listen({ port: 3000, host: '0.0.0.0'}, function(err, address) {
    if(err) {
        fastify.log.error(err)
        //process.exit(1)
    }

    console.log(`Server listening on ${address}`)
})