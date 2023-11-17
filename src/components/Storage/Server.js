const express = require('express');
const pouchdbExpress = require('express-pouchdb');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// PouchDB configuration
const pouchdbExpressMiddleware = pouchdbExpress({
  mode: 'minimumForPouchDB',
  overrideMode: {
    include: ['routes/fauxton'],
    logPath: '/tmp/pouchdb.log',
    inMemoryConfig: true,
  },
});

app.use('/pouchdb', pouchdbExpressMiddleware);

// Serve static files (for PouchDB)
app.use('/static', express.static('static'));

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
