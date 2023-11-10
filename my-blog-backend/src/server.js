import express from 'express';

// temp dummy data
let articleInfo = [
  {
    name: 'learn-react',
    upvotes: 0,
    comments: [],
  },
  {
    name: 'learn-node',
    upvotes: 0,
    comments: [],
  },
  {
    name: 'mongodb',
    upvotes: 0,
    comments: [],
  },
];

const app = express();
app.use(express.json());

//

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
