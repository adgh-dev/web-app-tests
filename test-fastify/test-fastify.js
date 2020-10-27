// Require the framework and instantiate it
const fastify = require('fastify')({ logger: false })

var fib = function (n) {
    if (n <= 2) {
        return n;
    }
    else {
    return fib(n - 1) + fib(n - 2)
    }
   };

// Declare a route
fastify.get('/:num', async (request, reply) => {
    num = parseInt(request.params["num"])
    return { 
        hello: 'world' ,
        fibbo: fib(num)
    }
  })

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3001)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
