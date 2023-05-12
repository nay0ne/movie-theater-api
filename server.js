//  create server
const app = require("./src/app");
const { db } = require('./db/connection');
const port = 3000;
//  add seed file-
const seed = require("./seed");

app.listen(port, async () => {
    await db.sync();
    // add router endpoint once set
    console.log(`listening at http://localhost:${port}/addrouterendpoint`)
});
