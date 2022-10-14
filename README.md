> `-F` 等价于 `--filter`

- 在具体的模块 packageA 安装依赖

```bash
pnpm -F @packages/packageA add lodash
```

- packageB 中安装 packageA，其中的 `@*` 表示默认同步最新版本，省去每次都要同步最新版本的问题。

```bash
pnpm -F @packages/packageB add @packages/packageA@*
```
