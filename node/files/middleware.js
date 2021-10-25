const passo1 = (ctx, next) => {
  ctx.valor1 = "mid1";
  next();
};

const passo2 = (ctx, next) => {
  ctx.valor2 = "mid1";
  next();
};

const passo3 = (ctx) => (ctx.valor3 = "mid3");

function exec(ctx, ...middlewares) {
  function execPasso(indice) {
    if (middlewares && indice < middlewares.length) {
      middlewares[indice](ctx, () => execPasso(indice + 1));
    }
  }
  execPasso(0);
}

const ctx = {};

exec(ctx, passo1, passo2, passo3);

console.log(ctx);
