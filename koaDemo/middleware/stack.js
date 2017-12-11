const Koa = require('koa');
const app = new Koa();
const one = (ctx, next) => {
    console.log('>> one');
    next();
    console.log('<< one');
}

const two = (ctx, next) => {
    console.log(">> two");
    next();
    console.log('<< two');
}

const tree = (ctx, next) => {
    console.og(">> tree");
    next();
    console.log("<< tree");
}

app.use(one);
app.use(two);
app.use(tree);

app.listen(3000);