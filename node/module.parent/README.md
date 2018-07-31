# module.parent

If you see `module.parent`, you can see the parent tree.

```sh
$ node ./a.js
```

```js
Module {
  id:
   '<path>/til/node/module.parent/b.js',
  exports: {},
  parent:
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename:
      '<path>til/node/module.parent/a.js',
     loaded: false,
     children: [ [Circular] ],
     paths:
      [ '<path>til/node/module.parent/node_modules',
        '<path>til/node/node_modules',
        '<path>til/node_modules',
        '<path>node_modules'] },
  filename:
   '<path>til/node/module.parent/b.js',
  loaded: false,
  children:
   [ Module {
       id:
        '<path>til/node/module.parent/c.js',
       exports: {},
       parent: [Circular],
       filename:
        '<path>til/node/module.parent/c.js',
       loaded: false,
       children: [],
       paths: [Array] } ],
  paths:
   [ '<path>til/node/module.parent/node_modules',
     '<path>til/node/node_modules',
     '<path>til/node_modules',
     '<path>node_modules'] }
```
