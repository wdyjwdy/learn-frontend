# CSS

## 三列布局

![3col](/examples-css-3col.svg)

1. Flex

   ```css
   .container {
     display: flex;
   }
   .left {
     width: 100px;
   }
   .center {
     flex: 1;
   }
   .right {
     width: 100px;
   }
   ```

2. Grid

   ```css
   .container {
     display: grid;
     grid-template-columns: 100px auto 100px;
   }
   ```

3. Float + Calc

   ```css
   .left {
     float: left;
     width: 100px;
   }
   .center {
     float: left;
     width: calc(100% - 200px); /* 100% 表示容器宽度 */
   }
   .eight {
     float: left;
     width: 100px;
   }
   ```

4. Position

   ```css
   .container {
     position: relative;
   }
   .left {
     position: absolute;
     width: 100px;
     left: 0px;
   }
   .center {
     position: absolute;
     left: 100px; /* 同时指定 left, right，元素会被拉伸 */
     right: 100px;
   }
   .right {
     position: absolute;
     width: 100px;
     right: 0px;
   }
   ```

## 水平垂直居中

![center](/examples-css-center.svg)

1. Flex

   ```css
   .container {
     display: flex;
     justify-content: center;
     align-items: center;
   }
   ```

2. Grid

   ```css
   .container {
     display: grid;
     place-items: center;
   }
   ```

3. Position + Translate

   ```css
   .container {
     position: relative;
   }
   .item {
     position: absolute;
     top: 50%; /* container 宽度的 50% */
     left: 50%;
     transform: translate(-50%, -50%); /* item 宽度的 50% */
   }
   ```

## 导航栏

![navbar](/examples-css-navbar.svg)

1. Flex + Margin

   ```css
   .container {
     display: flex;
   }
   .D {
     margin-left: auto; /* margin 会填充剩余空间 */
   }
   ```

2. Float

   ```css
   .A,
   .B,
   .C {
     float: left;
   }
   .D,
   .E {
     float: right;
   }
   ```
