# Package Manager

## 通用

### version

基本格式：<大版本>.<小版本>.<补丁号>

- 大版本：破坏向后兼容
- 小版本：增加新功能，不影响兼容
- 补丁号：修复一个 bug

---

特殊字符：

- `*`, `x`：任意版本
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

### package.json

详情参考 [package-json](https://docs.npmjs.com/cli/v11/configuring-npm/package-json)。

```json
{
  "name": "note", // 包名（发包时必选）
  "version": "1.0.0", // 版本号（发包时必选）
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
    // 开发环境依赖
    "typescript": "1.0.0",
    "babel": "1.0.0"
  },
  "scripts": {
    // 脚本
    "start": "node index.js"
  }
}
```

### package-lock.json

package-lock.json 文件会在 npm 修改 package.json 或 node_modules 时自动生成。

---

package-lock.json 解决的问题：

- 当执行 `npm install{:sh}` 后，会安装 1.0.1 版本，导致差异。

  ```json
  {
    "dependencies": {
      "lucide": "~1.0.0" // 最新版本为 "1.0.1"
    }
  }
  ```

---

package-lock.json 文件的用途：

- 描述确定的依赖树，以保证团队成员、部署、CICD 都安装相同的依赖。
- 优化依赖安装过程，跳过已经解析的包
- 跳过 package.json 的解析，加快 CICD 等安装过程。

### node_modules

## NPM

### init

- `npm init{:sh}`：在当前目录下创建一个 package.json 文件。

### install

- `npm install{:sh}`: Install all dependencies.
- `npm install pkg1{:sh}`: Save to dependencies.
- `npm install pkg1 -D{:sh}`: Save to devDependencies.
- `npm install pkg1@1.1.1{:sh}`: Specify version.
- `npm uninstall pkg{:sh}`: Removes packages.
- `npm update pkg{:sh}`: Updates packages to latest version.

---

安装算法如下：

- 安装 `A{B,C}, B{C}, C{D}`，会产生以下结果，D 可以安装在顶层，并不会产生冲突。

  ```
  A
  ├── B
  ├── C
  └── D
  ```

- 安装 `A{B,C}, B{C,D@1}, C{D@2}`，会产生以下结果，D@2 不能安装在顶层，因为会产生和 D@1 冲突。

  ```
  A
  ├── B
  ├── C
  │   └── D@2
  └── D@1
  ```

### npx

- `npx{:sh}`：运行包中的可执行文件。

---

工作原理，当执行 `npx <command>{:sh}` 时会：

1. 检查本地是否有可执行文件，没有就从远程下载。
2. 执行文件。
3. 删除可执行文件。

## PNPM

PNPM 相对于 NPM 的优化：

- 节省磁盘空间
- 加快安装速度
- 安装时不会提升依赖到根目录

### init

- `pnpm init{:sh}`: Create a package.json file.

### add

- `pnpm install{:sh}`: Install all dependencies.
- `pnpm add pkg1{:sh}`: Save to dependencies.
- `pnpm add -D pkg1{:sh}`: Save to devDependencies.
- `pnpm add pkg1@1.1.1{:sh}`: Specify version.
- `pnpm remove pkg{:sh}`: Removes packages.
- `pnpm update pkg{:sh}`: Updates packages to latest version.

### create

- `ppnpm create rsbuild@latest{:sh}`: Create a project.
