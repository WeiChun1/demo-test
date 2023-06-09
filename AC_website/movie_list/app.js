const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
    <h1>Create your own server with Node.js</h1>
    <h3>Popular movies in 2018</h3>
    <ul>
      <li>
        <img
          src="https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg"
          alt="Jurassic World: Fallen Kingdom"
          width="50px"
        />
        Jurassic World: Fallen Kingdom
      </li>
      <li>
        <img
          src="https://movie-list.alphacamp.io/posters/rv1AWImgx386ULjcf62VYaW8zSt.jpg"
          alt="Ant-Man and the Wasp"
          width="50px"
        />
        Ant-Man and the Wasp
      </li>
      <li>
        <img
          src="https://movie-list.alphacamp.io/posters/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg"
          alt="Thor: Ragnarok"
          width="50px"
        />
        Thor: Ragnarok
      </li>
      <li>
        <img
          src="https://movie-list.alphacamp.io/posters/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          alt="Avengers: Infinity War"
          width="50px"
        />
        Avengers: Infinity War
      </li>
      <li>
        <img
          src="https://movie-list.alphacamp.io/posters/80PWnSTkygi3QWWmJ3hrAwqvLnO.jpg"
          alt="Mission: Impossible - Fallout"
          width="50px"
        />
        Mission: Impossible - Fallout
      </li>
    </ul>
  `)
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})