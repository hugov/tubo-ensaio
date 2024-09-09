import Fastify, { FastifyInstance } from 'fastify';
import { User } from '../interfaces/user.interface';
import { UserUseCase } from '../usecases/user.usecase';

async function userRoutes(fastify, options) {

    const userUseCase = new UserUseCase();

    fastify.post<{ Body: User }>('/', async (req, reply) => {
        try {
            const user = await userUseCase.create(req.body);
            console.log('user: ', user);
            return reply.send(user);
        } catch (error) {
            reply.send(error);
        }
    });

    fastify.get('/', (req, reply) => {
        reply.send({ hello: 'world' });
    });
    
}

export { userRoutes };