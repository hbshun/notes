function v() {
  console.log(a);
  var b = a();
  console.log(b);
  console.log(b.next())
  console.log(b.next())
  var a = 2;

  console.log(a);
  a = 1;
  console.log(a);
  //function a() {}
  function * a () {
    yield 1
  }
  console.log(a);
  

}

v();