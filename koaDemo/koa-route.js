const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href = "/">点击此处去首页</a>';

}
const main = ctx => {
    ctx.response.body = "这里是首页";
};

app.use(route.get('/', main));
app.use(route.get('/about', about));
app.listen(3000);