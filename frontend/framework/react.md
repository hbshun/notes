
* jsx的原理
* reactDOM为什么不包含在react中
* virtual-DOM 原理


DOM元素包含三个信息：标签名、属性、子元素
JSX将js语法扩展、用HTML的结构表示DOM元素、运行前需要编译成js的DOM对象

![](../assets/jsx-compile.png)
```js
{
  tag: 'div',
  attrs: { className: 'box', id: 'content'},
  children: [
    {
      tag: 'div',
      arrts: { className: 'title' },
      children: ['Hello']
    },
    {
      tag: 'button',
      attrs: null,
      children: ['Click']
    }
  ]
}
```

### 组件：嵌套、组合、组件树

### 绑定事件
onClick,onKeyDown,...，处理函数接收到的参数同event对象
如何绑定到组件标签上
绑定this

### 状态提升 状态管理
无限制的提升不是一个好的解决方案。一旦发生了提升，你就需要修改原来保存这个状态的组件的代码，也要把整个数据传递路径经过的组件都修改一遍，好让数据能够一层层地传递下去。这样对代码的组织管理维护带来很大的问题。到这里你可以抽象一下问题：如何更好的管理这种被多个组件所依赖或影响的状态？

### 组件的挂载
React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载。其实 React.js 内部对待每个组件都有这么一个过程，也就是初始化组件 -> 挂载到页面上的过程。所以你可以理解一个组件的方法调用是这么一个过程：
-> constructor()
-> componentWillMount()
-> render()
// 然后构造 DOM 元素插入页面
-> componentDidMount()
-> componentWillUnmount

### ref
返回对DOM对象的引用，能不用ref就不用
<Clock ref={(clock) => this.clock = clock} />

### 容器类组件

```jsx
// props.children
class Card extends Component {
  render () {
    return (
      <div className='card'>
        <div className='card-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Card>
    <h2>React.js 小书</h2>
    <div>开源、免费、专业、简单</div>
    订阅：<input />
  </Card>,
  document.getElementById('root')
)

// 用户布局，保留children的0和1，其他忽略
class Layout extends Component {
  render () {
    return (
      <div className='two-cols-layout'>
        <div className='sidebar'>
          {this.props.children[0]}
        </div>
        <div className='main'>
          {this.props.children[1]}
        </div>
      </div>
    )
  }
}

```

### HTML转义
```jsx
<div className='editor-wrapper' dangerouslySetInnerHTML={{__html: this.state.content}} />
```

### style

```html
<h1 style='font-size: 12px; color: red;'>React.js 小书</h1>
```
接受一个对象、驼峰式的命名
```jsx
<h1 style={{fontSize: '12px', color: 'red'}}>React.js 小书</h1>
```

### 类型检查 使用PropTypes

### 命名习惯
* 组件的私有方法都用 _ 开头
* 所有事件监听的方法都用 handle 开头
* 把事件监听方法传给组件的时候，属性名用 on 开头


组件的内容编写顺序如下：

* static 开头的类属性，如 defaultProps、propTypes。
* 构造函数，constructor。
* getter/setter（还不了解的同学可以暂时忽略）。
* 组件生命周期。
* _ 开头的私有方法。
* 事件监听方法，handle*。
* render开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render 开头。
* render() 方法。