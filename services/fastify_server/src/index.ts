import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'


const serverInstance = fastify()
const prisma = new PrismaClient()


serverInstance.get('/', (_request, reply) => {
  reply.send('I want to fuck, Sarah!')
})


serverInstance.get('/users', async (request, reply) => {
  const users = await prisma.user.findMany()
  reply.send(users)
})

serverInstance.listen({ port: 3000 })
  .then(() => {
    console.log('🐢 Fastify HTTP Server running at "http://localhost:3000"')
  })