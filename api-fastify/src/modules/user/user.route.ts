import { FastifyInstance } from "fastify";

import { logoutHandler, getUsersHandler, loginHandler, registerUserHandler } from "./user.controller";
import { $ref } from "./user.schema";

async function userRoutes(fastify: FastifyInstance) {
    
    // Rota de criação de usuário
    fastify.post(
        '/', 
        {
            schema: {
                body: $ref("createUserSchema"),
                response: {
                    201: $ref("createUserResponseSchema"),
                },
            },
        }, 
        registerUserHandler
    );

    // Rota de listagem do usuário
    fastify.get(
        '/',
        {
            preHandler: [fastify.authenticate],
        },
        getUsersHandler
    );

    // FIXME: Implementar o consulta de usuário
    
    // FIXME: Implementar a verificação de confirmação de cadastro (Check confirmation code)

    // FIXME: Implementar a alteração de usuário (Edit user)

    // FIXME: Implementar a exclusão de usuário (Delete user)

    // FIXME: Implementar o esquecimento de senha (Forgot password)

    // FIXME: Implementar a redefinição de senha (Reset password)

    // Rota de Login de usuário
    fastify.post(
        '/login', 
        {
            schema: {
                body: $ref("loginSchema"),
                response: {
                    201: $ref("loginResponseSchema"),
                }
            }
        }, 
        loginHandler
    );

    // Rota de Logout de usuário
    fastify.delete(
        '/logout',
        {
            preHandler: [fastify.authenticate],
        },
        logoutHandler
    )

}

export default userRoutes;