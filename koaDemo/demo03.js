const fs = require('fs');

const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    if (ctx.request.accepts('json')) {
        ctx.response.type = 'json';
        ctx.response.body = {
            data: 'hello koa'
        };
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html';
        ctx.response.body = '<p>Hello koa</p>';
    } else {
        ctx.response.type = 'text';
        ctx.response.body = 'Hello koa';
    }
}

app.use(main);
app.listen(3000);