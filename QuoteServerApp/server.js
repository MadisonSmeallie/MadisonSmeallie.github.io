"use strict"

const express = require('express');
const app = express();

let categories = ['successQuotes', 'perseveranceQuotes', 'happinessQuotes'];

let successQuotes = [
  {
    quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston S. Churchill'
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney'
  }
];

let perseveranceQuotes = [
  {
    quote: 'It’s not that I’m so smart, it’s just that I stay with problems longer.',
    author: 'Albert Einstein'
  },
  {
    quote: 'Perseverance is failing 19 times and succeeding the 20th.',
    author: 'Julie Andrews'
  }
];

let happinessQuotes = [
  {
    quote: 'Happiness is not something ready made. It comes from your own actions.',
    author: 'Dalai Lama'
  },
  {
    quote: 'For every minute you are angry you lose sixty seconds of happiness.',
    author: 'Ralph Waldo Emerson'
  }
];

// Endpoints
app.get('/quotebook/categories', function (req, res) {
    res.type("text").send(req.params.categories);
  });

app.get('/quotebook/quote/:category', function (req, res) {
    const category = req.params.category;
    const selectedCategory = categories[category];
    if (!selectedCategory) {
        res.status(404).json({ error: `Category '${category}' not found.` });
        return;
      }
      else {
        res.type('text').send(req.params.selectedCategory);
      }
  });

  app.post('/quotebook/quote/new', function (req, res) {
    const { category, quote, author } = req.body;

  if (!category || !quote || !author || !categories[category]) {
    return res.status(400).json({ error: "invalid or insufficient user input" });
  }

  categories[category].push({ quote, author });

  res.send("Success!");
});

// This is the server listener
app.listen(8080);
console.log("Server is running on port 8080");
