# Package Manager

## NPM

### 版本号

- 基本格式：`<大版本>.<小版本>.<补丁号>`
  - 大版本：破坏向后兼容
  - 小版本：增加新功能，不影响兼容
  - 补丁号：修复一个 bug
- `*`：任意版本
- `x`：任意版本
- `~`：补丁号可变
- `^`：小版本，补丁号可变

```json
"dependencies": {
  "solid": "1.2.3",

  "solid": "*", // [0.0.0, any]
  "solid": "1.2.x", // [1.2.0, 1.3.0)
  "solid": "1.x", // [1.0.0, 2.0.0)

  "solid": "~1.2.3", // [1.2.3, 1.3.0)
  "solid": "^1.2.3", // [1.2.3, 2.0.0)

  // 也可以这样
  "solid": ">=1.2.3", // [1.2.3, any)
  "solid": "1.2.3 - 2.3.4", // [1.2.3, 2.3.4]
  "solid": "1.2.3 || 2.3.4" // 1.2.3 or 2.3.4
}
```

> [!TIP]
>
> - 版本号空缺，用 0 补位
>   - `1.2` 等价于 `1.2.0`
>   - `1` 等价于 `1.0.0`
> - 查看版本号(本地)：`npm list antd`
> - 查看版本号(远程)：`npm view antd version`

### `package.json`

- `package.json` 不会自动生成，可以使用 `npm init{:sh}` 命令创建

```json filename="package.json"
{
  "name": "note", // 项目名
  "version": "1.0.0", // 版本号
  "engines": {
    // 环境说明
    "node": "1.0.0",
    "npm": "1.0.0"
  },
  "dependencies": {
    // 生产环境依赖
    "antd": "1.0.0",
    "sass": "1.0.0"
  },
  "devDependencies": {
    // 开发环境依赖（线上不需要的包）
    "typescript": "1.0.0",
    "babel": "1.0.0"
  },
  "scripts": {
    // 脚本，npm run start 等价于 node index.js
    "start": "node index.js"
  }
}
```

### `package-lock.json`

当本地版本为 `"~1.0.0"{:json}`，而最新版本为 `"1.0.1"{:json}` 时，其他人 `npm install{:sh}` 时会安装最新版本，导致差异。因此需要使用 `package-lock.json` 锁定版本号。

## PNPM
