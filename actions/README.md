# `actions` folder

The actions folder uses the same concepts as next.js of "using file system as an API". To define an action, you'll have to add a js file inside actions folder.

### Example: actions/example.js

```javascript
const fetch = require("node-fetch");

module.exports = ({ req, returnJson }) => {
  fetch("http://example.com/json")
    .then(res => res.json())
    .then(returnJson);
};
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

### Template

```javascript
const fetch = require("node-fetch")

module.exports = ({ parsedUrl, req, res, returnJson }) => {
  fetch( /* Some API URL */ )
    .then(result => result.json(),
          reason => {
            res.statusCode = 500;
            return Promise.resolve(reason);
          })
    .then(returnJson);
};
```


#### Notes

- Our webpack currently does not include the files of this folder, so you'll have to re-run `yarn run dev` in order to see the changes you've made to `actions/` folder.
- With the same reason as the previous note, the scripts inside `actions/` folder cannot use some of the ES6 features such as import/export.
