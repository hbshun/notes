let tree = {a: {b: {c: 3}}};

const atObj = (obj, ...paths) => {

  let o = obj;

  console.log(paths)
  for (let i in paths) {
    o = o[paths[i]];
    console.log(o);
  }
  console.log(o);
  return o;
};

atObj.apply(null, [tree, 'a', 'b', 'c']);