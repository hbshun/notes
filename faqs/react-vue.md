# 什么是MVVM


# React、Vue之间的区别


# React中Fiber是什么？

我只知道Fiber是调度，可以提升react渲染的效率，然鹅不太清楚具体的实现原理。

# 高阶组件
是一个函数、接受组件作为参数，返回一个组件
高阶组件的作用其实不言而喻，其实就是为了组件之间的代码复用。组件可能有着某些相同的逻辑，把这些逻辑抽离出来，放到高阶组件中进行复用。高阶组件内部的包装组件和被包装组件之间通过 props 传递数据


# redux
不同的模块（组件）之间确实需要共享数据，这些模块（组件）还可能需要修改这些共享数据。
这里的矛盾就是：“模块（组件）之间需要共享数据”，和“数据可能被任意修改导致不可预料的结果”之间的矛盾。

我们可以学习 React.js 团队的做法，把事情搞复杂一些，提高数据修改的门槛：模块（组件）之间可以共享数据，也可以改数据。但是我们约定，这个数据并不能直接改，你只能执行某些我允许的某些修改，而且你修改的必须大张旗鼓地告诉我。我们定义一个函数，叫 dispatch，它专门负责数据的修改，所有对数据的操作必须通过 dispatch 函数


我们很难把控每一根指向 appState 的箭头，appState 里面的东西就无法把控。但现在我们必须通过一个“中间人” —— dispatch，所有的数据修改必须通过它，并且你必须用 action 来大声告诉它要修改什么，只有它允许的才能修改。我们再也不用担心共享数据状态的修改的问题，我们只要把控了 dispatch，所有的对 appState 的修改就无所遁形，毕竟只有一根箭头指向 appState 了。

createStore -> {getState, dispatch, subscribe}

共享结构的对象提高性能


React is a library for building user interfaces.

React Component Render => JSX => React.createElement => Virtual Dom


# React.Components VS React.Element
组件、实例、元素
React Element是virtual DOM中的元素，而我们可以使用React Component类来构造Element
Element是Component的实例。React.createElement


# React 合成事件和原生事件的区别
>https://www.jianshu.com/p/8d8f9aa4b033
>https://juejin.im/post/59db6e7af265da431f4a02ef
如果DOM上绑定了过多的事件处理函数，整个页面响应以及内存占用可能都会受到影响。React为了避免这类DOM事件滥用，同时屏蔽底层不同浏览器之间的事件系统差异，实现了一个中间层——SyntheticEvent。

当用户在为onClick添加函数时，React并没有将Click时间绑定在DOM上面。
而是在document处监听所有支持的事件，当事件发生并冒泡至document处时，React将事件内容封装交给中间层SyntheticEvent（负责所有事件合成）
所以当事件触发的时候，对使用统一的分发函数dispatchEvent将指定函数执行。




# Vue Slot
Vue组件间通信https://zhuanlan.zhihu.com/p/60250686