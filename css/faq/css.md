# CSS

* 如何扩展css功能
* 高清方案、vw支持方案
* 动画性能优化


## 单位  像素
px, rem, em

绝对单位、相对单位

设备像素dp device pixel, 也叫物理像素。

css单位
pt 绝对单位，等于1/72英寸。
px 相对单位，相对于设备像素。
px因为是相对单位，一定要清楚他的上下文。
同一设备上，1个css像素所代表的物理像素可以变化
不同设备上，1个css像素所代表的物理像素也可以变化。

CSS像素是浏览器控制的，Ctrl+-缩放，改变的是一个CSS像素的大小，
可能等于一个物理像素或多个物理像素或n分之一个像素

>https://github.com/jawil/blog/issues/21
>https://www.cnblogs.com/libin-1/p/7148377.html
>https://www.quirksmode.org/blog/archives/2012/06/devicepixelrati.html


### 设备指标
PPI DPI 
PPI, Pixels per inch
DPI, Dots per inch
这两个单位都表示每英寸像素，每英寸上有多少个点，DPI面向的是印刷受体，而PPI面向的是荧幕。
还有DPCM, Dots per Centimeter

MacBook Pro 15.4英寸  220ppi 
2880*1800 pt
15.4inch = ((1800 / 220)^2 + (2880 / 220)^2)^0.5


### 设备像素与CSS像素

设备像素比 DPR, device pixel ratio.
window.devicePixelRatio
retina屏的默认值是2，2:1 4个像素表示一个CSS像素

设备独立像素(Device independent Pixel, DIP)就是CSS像素

## 色彩
十亿色彩、百万色彩

RGB
CMYK 青、品红、黄和黑 打印机采用，不如显示屏丰富鲜艳，所以需要更高的DPI，才能更加细腻