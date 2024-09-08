async function routes(fastify, option) {

    fastify.get('/status', async function handler(request, reply) {
        return { 
            "message": "API em funcionamento",
            "time": new Date().getTime()
        }
    })

}

export default routes;