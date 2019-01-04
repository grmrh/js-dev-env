import express from 'express';
import bodyParser from 'body-parser';
import opener from 'opener';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const PORT = 3000;
const app = express();
const compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listening on PORT ${PORT}`);
    opener('http://localhost:' + PORT);
  }
})
