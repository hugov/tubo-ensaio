import Fastify, { FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions } from 'fastify';
import { User } from '../interfaces/user.interface';
import { UserUseCase } from '../usecases/user.usecase';

export async function userRoutes(fastify: FastifyInstance) {

    const userUseCase = new UserUseCase();

    fastify.post<{ Body: User }>('/', async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const user = request.body;
            const userResponse = await userUseCase.create(user);
            return reply.send(userResponse);
        } catch (error) {
            reply.send(error);
        }
    });

    fastify.get('/', (request: FastifyRequest, reply: FastifyReply) => {
        reply.send({ hello: 'world' });
    });
    
}