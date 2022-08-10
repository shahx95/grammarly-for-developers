const fs = require("fs");
const http = require("http");
const jose = require("jose");
const url = require("url");

const privateKeyData = JSON.parse(fs.readFileSync("./private.jwk"));
const kid = privateKeyData.kid;
jose.importJWK(privateKeyData).then((privateKey) => {
  const server = http.createServer(async function (req, res) {
    console.log(
      `responding to ${req.method}:${req.url} from ${
        req.headers.origin ?? "<NULL>"
      }`
    );
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "X-Client-Type, X-Client-Version",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": req.headers.origin ?? "*",
    };

    const clientId = url.parse(req.url, true).query.clientId;
    if (!clientId) {
      res.writeHead(400, headers);
      res.end(JSON.stringify({ error: "Missing clientId query parameter." }));
      return;
    }
    if (req.method === "OPTIONS") {
      res.writeHead(200, headers);
      res.end();
      return;
    }

    const assertion = await new jose.SignJWT({})
      .setProtectedHeader({ alg: "RS256", ver: "v1", kid })
      .setSubject(clientId)
      .setIssuedAt()
      .setIssuer(clientId)
      .setAudience("https://tokens.grammarly.com/oauth2/token")
      .setExpirationTime("5m")
      .sign(privateKey);
    res.writeHead(200, headers);
    res.end(JSON.stringify({ assertion }));
  });

  console.log("Starting server at http://127.0.0.1:8080");
  server.listen(8080);
});
