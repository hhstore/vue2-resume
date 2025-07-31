# vue2-resume

## 说明:

- 基于 `vue2.js` 和 `semantic-ui` 实现的 本地 `简历` 生成工具.
- 支持`导出PDF`(利用浏览器的导出功能)
- 支持`打印`

## 使用方法:

### 1. 安装+启动:

- 安装:

```bash

# 下载本项目:
git clone git@github.com:hhstore/vue2-resume.git

# 切换到项目目录:
cd vue2-resume

# 安装依赖包:
make install

# 启动:
make run

```

- 浏览器查看简历: `http://localhost:8080/#/`

### 2. 自主修改简历模板:

- 简历内容配置文件: `./src/assets/cv.json`
- 项目启动后, 简历页面会随配置文件修改而自动刷新


### 3. 简历打印预览效果:

![cv](./doc/cv.png)

