# 简述
一个很酷的CSS3 3D 动画库。

# 使用方法

第1步. _使用Bower安装Animate.3D:_
```shell
bower install animate.3d --save
```

第2步. _在您的APP中引用Animate.3D的样式文件:_
```shell
    <link href="bower_components/dist/animate.3d.css" rel="stylesheet">
```

第3步. _添加Animate.3D的样式类到您的DOM元素中:_
```html
<!-- 必须在应用动画的元素的父节点上添加样式类：".a3d-box" -->
<div id="animate-3d-wrapper" class="a3d-box">
    <!-- 添加样式名 ".a3d"到DOM元素以为其启用3D动画，然后为其添加不同的样式效果类以展现不同的动画效果，如：'.pullInUp'、'.pushOutLeft'等.    -->
    <div class="a3d pullInUp">
        Animate.3d
    </div>
</div>
```

# 我如何在scss/less/stylus中使用酷炫的Animate.3D?
我们计划为您提供官方的 SCSS / LESS / Stylus 版本, 但是目前还处于测试阶段，敬请关注.

- SCSS main file: `./scss/animate.3d.scss`
- LESS main file: `./less/animate.3d.less`
- Stylus main file: `./stylus/animate.3d.styl`

# 已经支持的动画效果

- 推入效果（从近及远出现）
  - [x] pushIn
  - [x] pushInUp
  - [x] pushInDown
  - [x] pushInLeft
  - [x] pushInRight
  - [x] pushInUpBig
  - [x] pushInDownBig
  - [x] pushInLeftBig
  - [x] pushInRightBig

- 推出效果（从近及远渐隐）
  - [x] pushOut
  - [x] pushOutUp
  - [x] pushOutDown
  - [x] pushOutLeft
  - [x] pushOutRight
  - [x] pushOutUpBig
  - [x] pushOutDownBig
  - [x] pushOutLeftBig
  - [x] pushOutRightBig

- 拉入效果（从远及近出现）
  - [x] pullIn;
  - [x] pullInUp;
  - [x] pullInDown;
  - [x] pullInLeft;
  - [x] pullInRight;
  - [x] pullInUpBig;
  - [x] pullInDownBig;
  - [x] pullInLeftBig;
  - [x] pullInRightBig;

- 拉出效果（从远及近消失）
  - [x] pullOut;
  - [x] pullOutUp;
  - [x] pullOutDown;
  - [x] pullOutLeft;
  - [x] pullOutRight;
  - [x] pullOutUpBig;
  - [x] pullOutDownBig;
  - [x] pullOutLeftBig;
  - [x] pullOutRightBig;

- 水平滑入效果
  - [x] slideInBack;
  - [x] slideInFront;
  - [x] slideInLeft;
  - [x] slideInRight;

- 水平滑出效果
  - [x] slideOutBack;
  - [x] slideOutFront;
  - [x] slideOutLeft;
  - [x] slideOutRight;

- 飘入效果
  - [x] riseInFrontBack;
  - [x] riseInFrontFront;
  - [x] riseInFrontLeft;
  - [x] riseInFrontRight;

- 飘出效果
  - [x] riseOutFrontBack;
  - [x] riseOutFrontFront;
  - [x] riseOutFrontLeft;
  - [x] riseOutFrontRight;

# 正在开发的效果

- 螺旋进入效果
  - [ ] spiralIn
  - [ ] spiralInDown
  - [ ] spiralInUp
  - [ ] spiralInLeft
  - [ ] spiralInRight
  - [ ] spiralInDownBig
  - [ ] spiralInUpBig
  - [ ] spiralInLeftBig
  - [ ] spiralInRightBig

- 螺旋退场效果
  - [ ] spiralOut
  - [ ] spiralOutDown
  - [ ] spiralOutUp
  - [ ] spiralOutLeft
  - [ ] spiralOutRight
  - [ ] spiralOutDownBig
  - [ ] spiralOutUpBig
  - [ ] spiralOutLeftBig
  - [ ] spiralOutRightBig

- 自转进入、公转进入效果
  - [ ] revolveIn
  - [ ] revolveInDown
  - [ ] revolveInUp
  - [ ] revolveInLeft
  - [ ] revolveInRight
  - [ ] revolveInDownBig
  - [ ] revolveInUpBig
  - [ ] revolveInLeftBig
  - [ ] revolveInRightBig

- 自转退场、公转退场效果
  - [ ] revolveOut
  - [ ] revolveOutDown
  - [ ] revolveOutUp
  - [ ] revolveOutLeft
  - [ ] revolveOutRight
  - [ ] revolveOutDownBig
  - [ ] revolveOutUpBig
  - [ ] revolveOutLeftBig
  - [ ] revolveOutRightBig
