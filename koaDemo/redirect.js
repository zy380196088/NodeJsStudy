const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const redirect = ctx => {
    ctx.response.redirect('/');
}
const main = ctx => {
    ctx.response.body = "这里是首页";
};

app.use(route.get('/', main));
app.use(route.get('/redirect', redirect));
app.use(main);
app.listen(3000);