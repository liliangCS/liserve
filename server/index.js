const Koa = require("koa")
const static = require("koa-static")
const { resolve } = require("path")
require("../config/color")

const app = new Koa()

const setServer = (dest, port) => {
  if (dest === undefined) dest = "dist"
  if (port === undefined) port = 9999
  app.use(static(resolve(process.cwd(), `./${dest}`)))
  app.listen(port, (err) => {
    if (!err) {
      console.log(`服务启动于: http://127.0.0.1:${port}`.cyan)
    }
  })
}

module.exports = setServer