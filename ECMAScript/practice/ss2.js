'use strict';

let arr = [

  {
    "name": "321/222/333/",
    "hash": "d41d8cd98f00b204e9800998ecf8427e",
    "bytes": 0,
    "last_modified": "2017-12-16T10:28:23.691Z"
  },
  {
    "name": "321/222/333/3.0.json",
    "hash": "d41d8cd98f00b204e9800998ecf8427e",
    "bytes": 0,
    "content_type": "application/json",
    "last_modified": "2017-12-18T10:19:05.531Z"
  },
  {
    "name": "321/222/333/4444/",
    "hash": "d41d8cd98f00b204e9800998ecf8427e",
    "bytes": 0,
    "last_modified": "2017-12-16T10:28:29.057Z"
  },
  {
    "name": "321/222/333/5555/60server.json",
    "hash": "d41d8cd98f00b204e9800998ecf8427e",
    "bytes": 0,
    "content_type": "application/json",
    "last_modified": "2017-12-18T10:20:12.655Z"
  },
  {
    "name": "321/222/333/太阳.png",
    "hash": "d41d8cd98f00b204e9800998ecf8427e",
    "bytes": 0,
    "content_type": "application/json",
    "last_modified": "2017-12-18T09:56:49.771Z"
  },
  {
    "name": "321/222/RPM打包 2(1).pages",
    "hash": "ab476d6d477feddc59b3c00f63046621",
    "bytes": 222088,
    "last_modified": "2017-12-16T10:28:18.310Z"
  },
  {
    "name": "321/RPM打包 2(1).pages",
    "hash": "d41d8cd98f00b204e9800998ecf8427e",
    "bytes": 0,
    "content_type": "application/json",
    "last_modified": "2017-12-18T09:46:30.202Z"
  },
  {
    "name": "666/3.0new.json",
    "hash": "a501760379b5f644b8d4fcc78bd9b999",
    "bytes": 1841,
    "last_modified": "2017-12-18T13:52:49.792Z"
  },
  {
    "name": "321/bug清单.numbers",
    "hash": "7fe0e9462889405558be03ab6b022690",
    "bytes": 181052,
    "last_modified": "2017-12-16T09:52:52.925Z"
  },
  {
    "name": "321/222/",
    "hash": "d41d8cd98f00b204e9800998ecf8427e",
    "bytes": 0,
    "last_modified": "2017-12-16T10:21:00.816Z"
  },
  {
    "name": "666/4/3.0.json",
    "hash": "d41d8cd98f00b204e9800998ecf8427e",
    "bytes": 0,
    "content_type": "application/json",
    "last_modified": "2017-12-18T10:25:15.055Z"
  },
  {
    "name": "bug清单.numbers",
    "hash": "d41d8cd98f00b204e9800998ecf8427e",
    "bytes": 0,
    "content_type": "application/json",
    "last_modified": "2017-12-18T09:42:40.335Z"
  },
  {
    "name": "太阳.png",
    "hash": "84694ee73d86ae0bfe2dfeab12ec1429",
    "bytes": 7021,
    "last_modified": "2017-12-19T08:12:28.285Z"
  }
];

let tree = {files: {}};

const atObj = (obj, ...paths) => {

  let result = obj;
  for (let i in paths) {
    result = result[paths[i]];
  }
  return result;
};


const getFather = (way) => {
  way.join('..');
  let paths = way.join('.files.');
  if (way.length) {
    paths = `files.${paths}.files`;
  } else {
    paths = 'files'
  }
  return atObj.apply(null, [tree].concat(paths.split('.')));

};
arr.forEach(file => {

  let dirs = file.name.split('/');

  dirs.forEach((dir, index) => {
    //父级
    let way = dirs.slice(0, index);
    if (dir === '') {
      return;
    }
    let father = getFather(way);
    if (!father[dir]) {
      father[dir] = {
        path: '',
        name: dir,
        bytes: file.bytes,
        type: '',
        files: {}
      }
    }

  })

});

console.dir(tree);