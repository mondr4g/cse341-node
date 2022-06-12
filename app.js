const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const app = express();
const port = process.env.PORT || 3000;


app.use()
app.use('/', require('./routes'));

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})