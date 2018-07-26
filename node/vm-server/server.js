'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');
const util = require('util');

const express = require('express');

const scriptdir = path.join(__dirname, 'scripts');

const map = new Map();

const app = express();

app.use(express.json());

app.post('/api', async (req, res) => {
  const { version } = req.body;
  if (!map[version]) {
    map[version] = fs.readFileSync(path.join(scriptdir, `${version}.js`), 'utf8');
  }
  const script = map[version];
  const handlers = {};
  const context = { handlers, util, setTimeout, classMap: { Error } };
  const inherit = 'util.inherits(Error, classMap.Error);';
  vm.runInNewContext(`${inherit}${script}`, context);
  try {
    const result = await handlers.getData();
    console.log({ version, result });
    res.send(result);
  } catch (e) {
    console.log('instanceof', e instanceof Error);
    res.status(400).send(e.message);
  }
});

app.listen(4000);
