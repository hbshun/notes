const Koa = require('koa');
const koaRouter = require('koa-router')
const app = new Koa();

const router = new koaRouter();

router.get('/', (ctx, next) => {
  console.log(ctx.cookies)
  ctx.body = 'hello 6000:' + ctx.path;
});

app.use(router.routes());

app.listen(60000, function(){console.log(6000, 'started')});
