const test = require("node:test");
const assert = require("node:assert");
const server = require("../src/server.js");

test("Checks that user can POST", async () => {
    const app = server.listen(0);
    const {port} = app.address();
    const response = await fetch (`http://localhost:${port}`, {
        method: "POST",
        body: "secret=hello",
        headers: { "content-type": "application/x-www-form-urlencoded" },
      }); 
    app.close();

    assert.equal(response.status, 200);
    const body = await response.text();
    assert.match(body, /secret/i, "A secret has been posted");
})


