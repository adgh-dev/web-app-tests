const express = require('express')
const app = express()
const port = 3000

var fib = function (n) {
    if (n <= 2) {
        return n;
    }
    else {
      return fib(n - 1) + fib(n - 2)
    }
   };

app.get('/:num', (req, res) => {
    num = parseInt(req.params["num"])
    res.send(fib(num).toString())
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})