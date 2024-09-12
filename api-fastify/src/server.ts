import Fastify, { FastifyRequest, FastifyReply } from "fastify";
import fjwt, { FastifyJWT } from '@fastify/jwt';
import fCookie from '@fastify/cookie';
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

import userRoutes from "./modules/user/user.route";
import { userSchemas } from './modules/user/user.schema';

const fastify = Fastify();

fastify.register(fjwt, {
    secret: process.env.JWT_SECRET || 'imvinojan02061999xxxx'
});

fastify.addHook('preHandler', (req, res, next) => {
    req.jwt = fastify.jwt
    return next()
});

fastify.register(fCookie, {
    secret: process.env.COOKIE_SECRET || 'imvinojan02061999xxxx',
    hook: 'preHandler',
});

const swaggerOptions = {
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'Fastify Prisma REST API',
            description: 'A REST API built with Fastify, Prisma and TypeScript',
            version: '1.0.0',
            contact: {
                name: "Vitor Hugo Oliveira",
                //url: "https://www.hugov.com.br",
                email: "hugov1983@gmail.com"
            },
        },
        externalDocs: {
            url: 'https://github.com/hugov/tubo-ensaio',
            description: 'Pasta - api-fastify',
        },
        host: '0.0.0.0:3000',
        basePath: '/',
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
    },
    uiConfig: {
        docExpansion: 'none', // expand/not all the documentations none|list|full
        deepLinking: true,
    },
    staticCSP: false,
    transformStaticCSP: (header: any) => header,
    exposeRoute: true
};

const swaggerUiOptions = {
    routePrefix: "/docs",
    exposeRoute: true,
};

fastify.register(fastifySwagger, swaggerOptions);
fastify.register(fastifySwaggerUi, swaggerUiOptions);

fastify.decorate(
    'authenticate',
    async (request: FastifyRequest, reply: FastifyReply) => {

        console.log('authenticate');

        const token = request.cookies.access_token;

        if (!token) {
            return reply.status(401).send({ message: 'Authentication required' })
        }

        const decoded = request.jwt.verify<FastifyJWT['user']>(token)
        request.user = decoded
    }
)

fastify.post('/helloworld', async (request: FastifyRequest, reply: FastifyReply) => {
    return { message: 'Hello World!' }
})

async function main() {
    for (const schema of [...userSchemas]) {         // It should be before you register your routes
        fastify.addSchema(schema);
    };

    // Executes Swagger
    fastify.ready(err => {
        if (err) 
            throw err
        
            fastify.swagger();
    });
    
    fastify.register(userRoutes, { prefix: 'api/users' });

    try {
        await fastify.listen({ port: 3000, host: "0.0.0.0" });
        console.log("Server listening at http://localhost:3000");

    } catch (error) {
        console.error(error);
        process.exit(1);    // exit as failure
    }
}

main();