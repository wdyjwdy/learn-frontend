# CSS

## Selector Types

| Selector     | Weight      | Examples                |
| ------------ | ----------- | ----------------------- |
| \*           | (0,0,0)     | select all              |
| element      | (0,0,1)     | `div`, `span`           |
| class        | (0,1,0)     | `.red`, `.dark`         |
| attribute    | (0,1,0)     | `div[title]`            |
| pseudo class | (0,1,0)     | `button:hover`          |
| id           | (1,0,0)     | `#id`                   |
| inline style | (1,0,0,0)   | `style="color: red;"`   |
| !important   | (1,0,0,0,0) | `color: red !important` |

1. Class Selector

   等价于 `[class~=names]`

   ```css
   .red /* 含有 red 类的元素 */
   p.red /* 含有 red 类的 p 元素 */
   p.red.bold /* 含有 red, bold 类的 p 元素 */
   ```

2. Attribute Selector

   ```css
   a[title] /* 存在 title 属性 */
   a[title="name"] /* 存在 title 属性，且值为 name */
   a[class~="dark"] /* 存在 class 属性，且值包含 dark */
   ```

## Pseudo Classes

伪类用于指定元素的状态。

1. Link or Button

   ```css
   a:link    /* 未访问链接 */
   a:visited /* 已访问链接 */
   a:hover   /* 用户鼠标悬停 */
   a:active  /* 激活链接 */
   ```

2. Radio, Checkbox or Select Option

   ```css
   input[type="radio"]:checked {...} /* 选项被勾选 */
   ```

3. Input or Select

   ```css
   input:enabled  /* 允许输入 */
   input:disabled /* 禁止输入 */
   input:required /* 必选 */
   input:optional /* 可选 */
   ```

4. Input

   ```css
   .red-input: focus; /* 聚焦的元素 */
   ```

5. List

   ```css
   li:first-child      /* 一组兄弟元素中的第一个元素 */
   li:last-child       /* 一组兄弟元素中的最后元素 */
   li:nth-child()      /* 按规则选择兄弟元素 */
   li:nth-last-child() /* 按规则选择兄弟元素 */
   ```

6. HTML

   `:root` 优先级高于 `html`，常用于声明全局变量。

   ```css
   :root {...} /* 选择文档的根元素 */
   ```

7. Anchor

   ```css
   h1:target {...} /* 锚点指向的元素 */
   ```

## Nesting

1. Child Selector

   ```css
   /* 以下语句等价 */
   section {
     p {...}
   }
   section {
     & p {...}
   }
   section p {...}
   ```

2. Compound Selector

   ```css
   /* 以下语句等价 */
   .app {
     .theme {...}
   }
   .app .theme {...}

   /* 以下语句等价 */
   .app {
     &.theme {...}
   }
   .app.theme {...}

   /* 以下语句等价 */
   button {
     &:hover {...}
   }
   button:hover {...}
   ```

3. Combinators

   ```css
   /* 以下语句等价 */
   section {
     + p {...}
   }
   section {
     & + p {...}
   }
   section + p {...}
   ```

4. At

   ```css
   /* 以下语句等价 */
   section {
     @media (prefers-color-scheme: dark) {...}
   }
   @media (prefers-color-scheme: dark) {
     section {...}
   }
   ```
