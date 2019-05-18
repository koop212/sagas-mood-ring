const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const imageRouter = require('./routes/image.router');
const tagRouter = require('./routes/tag.router');
const imgTagRouter = require('./routes/imgtag.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/image', imageRouter);
app.use('/api/tag', tagRouter);
app.use('/api/image_tag', imgTagRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});