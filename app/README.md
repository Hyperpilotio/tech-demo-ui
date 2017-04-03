# Tech Demo UI App

## Setup

### Dependencies
- Node.js v6.x
- yarn (recommended)

### Installation
- `yarn install`
- `yarn run dev`


## Folder Structure

- **pages/**: see [next.js docs](https://zeit.co/blog/next#zero-setup.-use-the-filesystem-as-an-api)
- **flow/**: the demo flow, each stage's component is defined inside `flow/stage[i].js`
- **actions/**: additional REST APIs
- **styles/**: SASS files

### `actions` folder

The actions folder uses the same concepts as next.js of "using file system as an API". To define an action, you'll have to add a js file inside actions folder.

#### Example: actions/example.js

```javascript
const fetch = require("node-fetch");

module.exports = ({ req, returnJson }) => {
  fetch("http://example.com/json")
    .then(res => res.json())
    .then(returnJson);
};
```

This will add an endpoint to the app at `/actions/example`, which pipes the JSON response from http://example.com/json

#### Notes

- The function accepts an object as an input, which contains a `req` object and a `returnJson` function. `req` is the standard `http.IncomingMessage` object; and `writeJson` is a function that helps you send a response containing the input object as JSON. (So basically you **have to** return a JSON)
- The actions folder API currenty doesn't support different HTTP methods, it makes no difference.
- Our webpack currently does not include the files of this folder, so you'll have to re-run `yarn run dev` in order to see the changes you've made to `actions/` folder.
