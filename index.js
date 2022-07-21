#!/usr/bin/env node
const program = require("commander")
const options = require("./lib/core/options")
const setServer = require("./server")

// 查看版本号
program.version(require("./package.json").version, '-v, --version')

// 注册option
options()

program.parse(process.argv)

// 启动服务
const { dest, port } = program._optionValues
setServer(dest, port)