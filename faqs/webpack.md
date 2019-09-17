# webpack的工作原理
概念：entry，output，loader，plugin，mode，modules、

Module Resolution
Dependency Graph

# plugin
A webpack plugin is a JavaScript object that has an apply method.
This apply method is called by the webpack, giving access to the entire compilation lifecycle.
The first parameter of the tap method of the compiler hook should be a camelized version of the plugin name.
It is advisable to use a constant for this so it can be reused in all hooks.


```js
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('The webpack build process is starting!!!');
    });
  }
}
```