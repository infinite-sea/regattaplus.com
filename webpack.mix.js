let mix = require("laravel-mix")

mix
  .setPublicPath("assets")
  .js("src/scripts.js", "assets/js")
  .postCss("src/styles.css", "assets/css")
