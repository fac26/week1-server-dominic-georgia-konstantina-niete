const test = require("node:test");
const assert = require("node:assert");
const server = require("../src/server.js");

test("Missing routes", async () => {
    const app = server.listen(4000);
    const response = await fetch ("http://localhost:4000/not-working")
    app.close();

    assert.equal(response.status, 404);
    const body = await response.text();
    assert.match(body, /Not found/);


})