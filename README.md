# About
A (Beta) cool library of CSS 3D animations.

# Usage

Setp 1. _install with Bower:_
```shell
bower install animate.3d --save
```

Setp 2. _import animate.3d.css to your app page:_
```shell
    <link href="bower_components/dist/animate.3d.css" rel="stylesheet">
```

Setp 3. _Add css class of animate.3d.css to element:_
```html
<!-- Should add a class ".a3d-box" to the parentNode of elements which using 3D animations -->
<div id="animate-3d-wrapper" class="a3d-box">
    <!-- add class ".a3d" to enable 3D animations and '.pullInUp' is the animation type.    -->
    <div class="a3d pullInUp">
        Animate.3d
    </div>
</div>
```

# Using scss/less/stylus?
Animate.3D provide official SCSS / LESS / Stylus version, please select the appropriate for your version.

- SCSS main file: `./scss/animate.3d.scss`
- LESS main file: `./less/animate.3d.less`
- Stylus main file: `./stylus/animate.3d.styl`

# Supported Animateions

- Push enter effects
  - [x] pushIn
  - [x] pushInUp
  - [x] pushInDown
  - [x] pushInLeft
  - [x] pushInRight
  - [x] pushInUpBig
  - [x] pushInDownBig
  - [x] pushInLeftBig
  - [x] pushInRightBig

- Push out effects
  - [x] pushOut
  - [x] pushOutUp
  - [x] pushOutDown
  - [x] pushOutLeft
  - [x] pushOutRight
  - [x] pushOutUpBig
  - [x] pushOutDownBig
  - [x] pushOutLeftBig
  - [x] pushOutRightBig

- Pull Enter effects
  - [x] pullIn;
  - [x] pullInUp;
  - [x] pullInDown;
  - [x] pullInLeft;
  - [x] pullInRight;
  - [x] pullInUpBig;
  - [x] pullInDownBig;
  - [x] pullInLeftBig;
  - [x] pullInRightBig;

- Pull Out effects
  - [x] pullOut;
  - [x] pullOutUp;
  - [x] pullOutDown;
  - [x] pullOutLeft;
  - [x] pullOutRight;
  - [x] pullOutUpBig;
  - [x] pullOutDownBig;
  - [x] pullOutLeftBig;
  - [x] pullOutRightBig;

- Slide In effects
  - [x] slideInBack;
  - [x] slideInFront;
  - [x] slideInLeft;
  - [x] slideInRight;

- Slide Out effects
  - [x] slideOutBack;
  - [x] slideOutFront;
  - [x] slideOutLeft;
  - [x] slideOutRight;

- Rise In effects
  - [x] riseInFrontBack;
  - [x] riseInFrontFront;
  - [x] riseInFrontLeft;
  - [x] riseInFrontRight;

- Rise Out effects
  - [x] riseOutFrontUp;
  - [x] riseOutFrontDown;
  - [x] riseOutFrontLeft;
  - [x] riseOutFrontRight;

- Revolve In effects
  - [x] revolveIn
  - [x] revolveInDown
  - [x] revolveInUp
  - [x] revolveInLeft
  - [x] revolveInRight

- Revolve Out effects
  - [x] revolveOut
  - [x] revolveOutDown
  - [x] revolveOutUp
  - [x] revolveOutLeft
  - [x] revolveOutRight

# Todo List

- Spiral In effects
  - [ ] spiralIn
  - [ ] spiralInDown
  - [ ] spiralInUp
  - [ ] spiralInLeft
  - [ ] spiralInRight
  - [ ] spiralInDownBig
  - [ ] spiralInUpBig
  - [ ] spiralInLeftBig
  - [ ] spiralInRightBig

- Spiral Out effects
  - [ ] spiralOut
  - [ ] spiralOutDown
  - [ ] spiralOutUp
  - [ ] spiralOutLeft
  - [ ] spiralOutRight
  - [ ] spiralOutDownBig
  - [ ] spiralOutUpBig
  - [ ] spiralOutLeftBig
  - [ ] spiralOutRightBig
