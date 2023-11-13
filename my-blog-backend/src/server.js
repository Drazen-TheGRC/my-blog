import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
app.use(express.json());

app.get('/api/articles/:name', async (req, res) => {
  const { name } = req.params;

  const client = new MongoClient('mongodb://127.0.0.1:27017');
  await client.connect();

  const db = client.db('react-blog-db');
  const article = await db.collection('articles').findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.sendStatus(404);
  }
});

app.post('/hello', (req, res) => {
  console.log(req.body);
  res.send(`Hello ${req.body.name}`);
});

// Upvote the article

app.put('/api/articles/:name/upvote', (req, res) => {
  // upvote logic
  const { name } = req.params;
  const article = articleInfo.find((a) => a.name === name);
  if (article) {
    article.upvotes++;
    res.send(`The ${name} article has ${article.upvotes} upvotes`);
  } else {
    res.send("That article doesn't exist");
  }
});

// Comments endpoint
app.post('/api/articles/:name/comments', (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  const article = articleInfo.find((a) => a.name === name);

  if (article) {
    article.comments.push({ postedBy, text });
    console.log(article.comments);
    res.send(article.comments);
  } else {
    res.send("That article doesn't exist");
  }
});

//

// app.get('/hello/:name', (req, res) => {
//   const name = req.params.name;
//   console.log(req.params);
//   res.send(`Hello ${name}!!!`);
// });

//

// app.get('/hello/:name/goodbye/:otherName', (req, res) => {
//   const name = req.params.name;
//   console.log(req.params);
//   res.send(`Hello ${name}!!!`);
// });

//

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
