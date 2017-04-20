const { createServer } = require('http');
const { parse } = require('url');
const child_process = require("child_process");
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

if (!dev) {
  // Check if kubectl is working, aborts if not
  child_process.execSync("kubectl cluster-info");
}

app.prepare()
.then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (dev && pathname.startsWith("/grafana/")) {
      res.end("Will be replaced by a Grafana panel");
      return;
    }

    if (pathname.startsWith("/actions/")) {
      try {

        const handler = require(`.${pathname}`);
        res.setHeader("Content-Type", "application/json");

        const returnJson = (json) => res.end(JSON.stringify(json));
        const handle = handler({ parsedUrl, req, res, returnJson });
        if (handle instanceof Promise) {
          handle
            .catch(reason => {
              res.statusCode = 500;
              console.error(`ERROR when ${req.method} ${pathname}`);
              console.error(`${reason.name}:\n    ${reason.message}`);
              return reason;
            })
            .then(returnJson);
        }

      } catch (e) {

        if (e.code === "MODULE_NOT_FOUND") {
          res.statusCode = 404;
          res.end("404 Page Not Found");
        } else {
          res.statusCode = 500;
          res.end("500 Internal Server Error");
          console.error(e);
        }

      } finally {
        return;
      }
    }
    handle(req, res, parsedUrl);
  })
  .listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
