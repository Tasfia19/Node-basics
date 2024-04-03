const Koa = require("koa");
const app = new Koa();

app.use((ctx) => {
    ctx.body = "Hello Koa 2";
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
