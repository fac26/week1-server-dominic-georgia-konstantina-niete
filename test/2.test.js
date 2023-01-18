const test = require("node:test");
const assert = require("node:assert");
const server = require("../src/server.js");

test("Missing routes", async () => {
    const app = server.listen(9876);
    const response = await fetch ("http://localhost:9876/not-working")
    app.close();

    assert.equal(response.status, 404);
    const body = await response.text();
    assert.match(body, /not-working/);
})