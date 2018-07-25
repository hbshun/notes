const Koa = require('koa');
const koaRouter = require('koa-router')
const app = new Koa();

const router = new koaRouter();

router.use('/', async (ctx, next) =>{
  ctx.body = 'hello 6001:' + ctx.path;
});


app.listen(6001);
