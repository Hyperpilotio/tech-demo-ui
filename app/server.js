const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    if (pathname.startsWith("/grafana")) {
      res.end("Will be replaced by a Grafana panel");
      return;
    }
    if (pathname.startsWith("/actions/")) {
      try {

        const handler = require(`.${pathname}`);
        res.setHeader("Content-Type", "application/json");
        handler({ parsedUrl, req, res,
                  returnJson: (json) => res.end(JSON.stringify(json))
        });

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
