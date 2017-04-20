# `actions` folder

The actions folder uses the same concepts as next.js of "using file system as an API". To define an action, you'll have to add a js file inside actions folder.

### Example: actions/example.js

```javascript
const fetch = require("node-fetch");

module.exports = () => (
  fetch("http://example.com/json")
    .then(res => res.json())
);
```

This will add an endpoint to the app at `/actions/example`, which pipes the JSON response from http://example.com/json

Other examples:
- `actions/run_locust.js`: Example of invoking REST API calls
- `actions/run_spark.js`: Example of invoking CLI calls


## API

The function accepts an object as the input, with the following schema:

```
{
    "parsedUrl": `Url`, // Result from url.parse(reqUrl)
    "req": `http.IncomingMessage`, // Request object of Node http server
    "res": `http.ServerResponse`, // Response object of Node http server
    "returnJson": `Function`, // Shortcut for res.end(JSON.stringify(someJson))
}
```

The function should return a `Promise`, which eventually returns a JSON at the end of the chain. (Note that it's a `Promise` that resolves a JSON, you can use `res.json()` if you're using `fetch`, but should use `Promise.resolve(json)` if you have a custom JavaScript object).

You don't have to call `returnJson` manually inside the function, but you can use it if you want to customize the flow of making response. If you want to customize the whole flow of making response, you can also don't return a `Promise`.

### Template

```javascript
const fetch = require("node-fetch")

module.exports = ({ parsedUrl, req, res, returnJson }) => (
  fetch( /* Some API URL */ )
    .then(res => res.json())
);
```


#### Notes

- Our webpack currently does not include the files of this folder, so you'll have to re-run `yarn run dev` in order to see the changes you've made to `actions/` folder.
- With the same reason as the previous note, the scripts inside `actions/` folder cannot use some of the ES6 features such as import/export.
