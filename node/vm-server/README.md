# VM Server

Express + VM scripts

Express server runs a script which client specifies.

Also, VM has an issue which the `Object` class is different from outside. Therefore `instanceof` always returns `false`.

## Usage

```js
$ node serer.js
```

```sh
$ curl -X POST http://localhost:4000/api -H 'Content-Type: application/json' -d '{ "version": 3 }'
```
