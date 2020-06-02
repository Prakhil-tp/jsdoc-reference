## JSDoc Reference
It is a sample script written by using JSDoc documentation styles. See `src/index.js` for reference.

### Install

      $ git clone https://github.com/Prakhil-tp/jsdoc-reference.git
      $ cd jsdoc-reference
      $ npm install

install yarn package manager.

      $ npm install -g yarn

### Create Documentation build

      $ yarn run doc

  See the `docs` directory on the `root` folder, and serve it on a static server.

---

### Configurations

Find `jsdoc.json` in the root directory, which represents the configurations used for the code documentation.

```javascript
{
  "source": {
    "include": ["src"],
    "includePattern":".js$",
    "excludePattern":"(node_modules/|docs)"
  },
  "plugins":["plugins/markdown"],
  "templates": {
    "cleverLinks": true,
    "monospaceLinks": true
  },
  "opts": {
    "recurse": true,
    "destination":"./docs/",
    "template": "./custom-template",
    "tutorials": "./tutorials",
    "readme":"./readme.md"
  }
}
```
npm scripts

    "scripts": {
      "doc":"jsdoc -c jsdoc.json"
    },

`doc` script is used to create documentation build.