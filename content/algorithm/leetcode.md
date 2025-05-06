# Leetcode

## 双指针

### 对撞指针

Examples:
[167](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/),
[125](https://leetcode.cn/problems/valid-palindrome/description/),
[11](https://leetcode.cn/problems/container-with-most-water/description/),
[977](https://leetcode.cn/problems/squares-of-a-sorted-array/description/),
[345](https://leetcode.cn/problems/reverse-vowels-of-a-string/description/)

```js
let [a, b] = [0, n - 1];
while (a < b) {
  if (cond_1) a++;
  else if (cond_2) b--;
  else return result;
}
```

### 快慢指针

Examples:
[26](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/),
[80](https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/),

```js
let [a, b] = [0, 1];
while (b < n) {
  if (cond) a++;
  b++;
}
return result;
```

### 分离指针
