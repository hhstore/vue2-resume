# vue-resume

## vue3-resume

- 项目: [vue3-resume](packages/vue3-resume/)
- ✅ 基于 Vue3 实现的简历生成器, 支持导出 PDF
- ✅ 重构 vue2-resume 的代码, 使其更符合 Vue3 的最佳实践

## vue2-resume

- 项目: [vue2-resume](packages/vue2-resume/)

- ✅ 基于 Vue2 实现的简历生成器, 支持导出 PDF

```ruby

# 安装依赖
task v2:install

# 启动项目
task v2:run

```

- ✅ 简历预览效果

![cv](./packages/vue2-resume//doc/cv.png)

## Development

### Project Structure

- ✅ `npm workspaces`: 使用 `npm workspaces` 管理多个子项目

```ruby
# 初始化工作区
bun init

```

- 目录结构

```ruby

❯ tree ./packages/ -L 2
./packages/
├── vue2-resume
│   ├── README.md
│   ├── Taskfile.yml
│   ├── build
│   ├── bun.lock
│   ├── config
│   ├── doc
│   ├── index.html
│   ├── package.json
│   ├── src
│   └── test
└── vue3-resume

7 directories, 5 files
```

### Setup

- ✅ 使用 [Bun](https://bun.sh/) 作为 JavaScript 运行时包管理器
- ✅ 使用 [go-task](https://taskfile.dev/) 作为脚本构建工具

```ruby

❯ bun -v
1.2.19

❯ node -v
v22.14.0

```

- ✅ 安装 Bun

```ruby

# Linux & MacOS 安装 Bun
curl -fsSL https://bun.sh/install | bash

# windows 用户可以使用以下命令安装 Bun
powershell -c "irm bun.sh/install.ps1 | iex"

# or
task install:bun
```

## References

- ✅ [vue docs](https://vuejs.org/guide/quick-start)
