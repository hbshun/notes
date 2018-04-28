# npm

## npm是什么

node package manager

## 三个组成部分

* the website
* the registry
* the Command Line Interface (CLI)

## 安装

npm是用Node.js写的，需要先安装Node.js。
npm是Node.js默认的包管理工具，安装Node.js时会自动安装npm。

## 更新

npm install npm@latest -g

## A Few Key Ways to use npm

* Adapt packages to your apps, or incorporate them as they are.
* Download standalone tools to use right away.
* Run packages without downloading using npx.
* Share code with any npm user, any where, or restrict code to specific developers.
* Form virtual teams (orgs).
* Manage multiple versions of code and code dependencies.
* Update applications easily when underlying code is updated.

# npm package

是什么
特点（满足任意之一即可）
a) A folder containing a program described by a package.json file.
b) A gzipped tarball containing (a).
c) A url that resolves to (b).
d) A <name>@<version> that is published on the registry with (c).
e) A <name>@<tag> that points to (d).
f) A <name> that has a latest tag satisfying (e).
g) A git url that, when cloned, results in (a).
种类
服务端：Node modules, which can be used on the server side.
命令行：packages that add commands for you to use in the command line.
前端：packages that can be used on the front end of websites.
怎么用
本地
全局
node module
