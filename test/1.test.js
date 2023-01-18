const test = require("node:test");
const assert = require("node:assert");
const server = require("../src/server.js");


test ("HOME route returns expected page", async () => {
    const app = server.listen(0);
    const {port} = app.address();
    const response = await fetch (`http://localhost:${port}`)
    app.close();

    assert.equal(response.status,200);
    const body = await response.text();
    assert.match(body, /<h1>Dirty Little Secrets<\/h1>/i,
    `Expected HTML to include <h1>Dirty Little Secrets</h1>, but received:\n${body}\n`)
})

