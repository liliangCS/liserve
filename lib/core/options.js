const program = require("commander")
require("../../config/color")

const options = () => {
  // options
  program.option("-d --dest <dest>", "specified the directory of static resources")
  program.option("-p --port <port>", "specified the port number")

  program.on("--help", function() {
    console.log("")
    console.log("Repository:")
    console.log("http://localhost:9999".cyan)
  })
}

module.exports = options
