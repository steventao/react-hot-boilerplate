import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// 压缩

 // 图片渲染
var img1 = document.createElement('img');
img1.src = require('./imgs/head.jpg');
document.body.appendChild( img1 );

var img2 = document.createElement('img');
img2.src = require('./imgs/whathas.png');
document.body.appendChild( img2 );