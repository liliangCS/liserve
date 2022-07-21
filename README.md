# liserve
一个自动化部署静态资源的工具
---
## 安装
```markdown
// 全局安装
npm install liserve -g
// 局部安装
npm install liserve

// 建议: liserve作为一个工具，作者推荐全局安装
```
---
## 使用命令
```markdown
liserve -v  // 查看当前版本号
liserve -d build -p 8888 // 指定命令执行目录下的build文件夹作为静态资源文件夹，部署到端口号为8888的本地服务器
liserve -h  // 查看所有命令及描述
```
---
## 配置选项
- `-v, --version: 查看当前版本`
- `-d, --dest <dest>: 指定静态资源所在目录, 默认为命令执行目录下的dist文件夹`
- `-p, --port <port>: 指定部署静态资源的本地服务器端口号，默认为9999`
- `-h, --help: 查看所有命令及描述`