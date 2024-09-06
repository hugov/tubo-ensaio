async function routes(fastify, options) {

    const client = await fastify.pg.connect();

    // List all
    fastify.get('/user', async (request, reply) => {
        try {
            const { rows } = await client.query('SELECT id, name, email, status FROM users ORDER BY name')
            reply.status(200).send(rows)
        } catch(error) {
            console.log(`Falha ao consultar o usuário ${request.params.id}`)
        }
    })

    // Create
    fastify.post('/user', (request, reply) => {
        const { name, email, status } = request.body
        console.log(request.body)
        console.log('Adicionando o usuário de email:', email)

        client.query('INSERT INTO users (name, email, status) VALUES($1, $2, $3)', [name, email, status],
        (error, result) => {
            if(error) {
                throw error
            }

            console.log('Passando aqui !!!')

            reply.status(200).send(`Registration ${request.params.id} changed successfully`)
        })
    })

    // Retrieve
    fastify.get('/user/:id', async (request, reply) => {
        console.log(`Consultando o usuário id: ${request.params.id}`)

        try {
            const { rows } = await client.query('SELECT id, name, email, status FROM users WHERE id = $1', [request.params.id])
            return rows
        } catch(error) {
            console.log(`Falha ao consultar o usuário ${request.params.id}`)
        }
    })

    // Update
    fastify.patch('/user/:id', (request, reply) => {
        const {name, email, status} = request.body
        console.log(`Atualizando o registro de id: ${request.params.id} `)

        client.query('UPDATE users SET name = $1 , email = $2 , status = $3 WHERE id = $4', [name, email, status, request.params.id],
        (error, result) => {
            if(error) {
                reply.send(error);
            }

            reply.send(`Registration ${request.params.id} changed successfully`)
        })
    })

    // Delete
    fastify.delete('/user/:id', (request, reply) => {
        console.log(`Deletando o registro de id: ${request.params.id} `)
        client.query('DELETE FROM users WHERE id = $1', [request.params.id], 
        (error, result) => {
            if(error) {
                throw error;
            }

            reply.send(`Record ${request.params.id} deleted successfully`)
        })
    })

}

export default routes;