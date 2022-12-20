# x-cli

### 本地项目添加npm全局命令
- package.json添加你要运行的东西
```
"bin": {
    "xmw-cli": "bin/cli.js"
  },
```
- npm link
- 注意运行的代码需要在顶部加上以下代码
```
#! /usr/bin/env node
```