let mix = require("laravel-mix")

mix
  .setPublicPath("docs/assets")
  .js("src/scripts.js", "docs/assets/js")
  .postCss("src/styles.css", "docs/assets/css")
