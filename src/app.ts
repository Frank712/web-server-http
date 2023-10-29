import fs from "fs";
import http2 from "http2";

const server = http2.createSecureServer(
  {
    key: fs.readFileSync("./keys/server.key"),
    cert: fs.readFileSync("./keys/server.crt"),
  },
  (req, res) => {
    console.log(req.url);
    if (req.url === "/") {
      const htmlFile = fs.readFileSync("./public/index.html", "utf8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(htmlFile);
    } else if (req.url === "/css/styles.css") {
      const stylesFile = fs.readFileSync("./public/css/styles.css", "utf8");
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(stylesFile);
    } else if (req.url === "/js/app.js") {
      const stylesFile = fs.readFileSync("./public/js/app.js", "utf8");
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(stylesFile);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end();
    }
  }
);

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
