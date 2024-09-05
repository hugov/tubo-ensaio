async function routes(fastify, options) {

    const client = await fastify.pg.connect();

    fastify.get('/user/:id', async (request, reply) => {
        console.log(`Consultando o usuário id: ${request.params.id}`)

        try {
            const { rows } = await client.query('SELECT id, name, email, status FROM users WHERE id = $1', [request.params.id])
            return rows
        } catch(error) {
            console.log(`Falha ao consultar o usuário ${request.params.id}`)
        }
    })

    fastify.post('/user', (request, reply) => {

        const { name, email, status } = request.body
        console.log('Adicionando o usuário de email:', email)

        client.query('INSERT INTO users (name, email, status) VALUES($1, $2, $3) RETURNING *', [name, email, status],
        (error, result) => {
            if(error) {
                throw error;
            }

            const { id } = result.rows[0]
            console.log('Novo usuário de id: ', id)

            reply.send(`User added with ID: ${id}`)
        })
        
    })


}

export default routes;