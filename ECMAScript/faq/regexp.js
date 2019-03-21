/**
 * 面试题
 * transform('=g1.18 进入开发=');  // <g>1.18 进入开发</g>
 * transform('=g1.23 联调(-1)=，=g1.25 发布(+1)=')；//  <g>1.23 联调(-1)</g>，<g>1.25 发布(+1)</g>
 * transform('1.25 发布')； // 1.25 发布
 * 作者：蒙面大虾
 * 链接：https://juejin.im/post/5c90f573e51d450a7d7dfc75
 * 来源：掘金
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

function transform(str) {
  const regexp = /\=g(.+?)=/g;
  return str.replace(regexp, function(match, sub1, index, origin) {
    return `<g>${sub1}</g>`
  });
}

console.log(transform('=g1.18 进入开发='));
console.log(transform('=g1.23 联调(-1)=，=g1.25 发布(+1)='));
console.log(transform('1.25 发布'));