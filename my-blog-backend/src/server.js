import express from 'express';
import { db, connectToDB } from './db.js';

const app = express();
app.use(express.json());

// Get article using name endpoint
app.get('/api/articles/:name', async (req, res) => {
  const { name } = req.params;

  const article = await db.collection('articles').findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.sendStatus(404);
  }
});

// app.post('/hello', (req, res) => {
//   console.log(req.body);
//   res.send(`Hello ${req.body.name}`);
// });

// upvote endpoint
app.put('/api/articles/:name/upvote', async (req, res) => {
  // upvote logic
  const { name } = req.params;

  await db.collection('articles').updateOne(
    { name },
    {
      $inc: { upvotes: 1 },
    }
  );

  const article = await db.collection('articles').findOne({ name });

  if (article) {
    res.send(`The ${name} article has ${article.upvotes} upvotes`);
  } else {
    res.send("That article doesn't exist");
  }
});

// Comments endpoint
app.post('/api/articles/:name/comments', async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  await db.collection('articles').updateOne(
    { name },
    {
      $push: { comments: { postedBy, text } },
    }
  );

  const article = await db.collection('articles').findOne({ name });

  if (article) {
    res.send(article);
  } else {
    res.send("That article doesn't exist");
  }
});

connectToDB(() => {
  console.log('Successfully connected to database!');
  app.listen(8000, () => {
    console.log('Server is listening on port 8000');
  });
});
