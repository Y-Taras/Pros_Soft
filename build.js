
var Metalsmith      = require('./node_modules/metalsmith'),
    drafts          = require('./node_modules/metalsmith-drafts'),
    helpers         = require('metalsmith-register-helpers'),
    markdown        = require('./node_modules/metalsmith-markdown'),
    permalinks      = require('metalsmith-permalinks'),
    layouts         = require('./node_modules/metalsmith-layouts'),
    cleanCSS        = require('metalsmith-clean-css'),
    uglify          = require('metalsmith-uglify'),
    htmlMinifier    = require("metalsmith-html-minifier"),
    watch           = require('metalsmith-watch'),
    dataLoader      = require("metalsmith-data-loader");

//  less         = require('./node_modules/metalsmith-less'),
//  sitemap      = require('metalsmith-mapsite'),

Metalsmith(__dirname)
  .source('src')
  .destination('build')
  .clean(true)
  .use(drafts())
  .use(helpers({
    directory: 'template-helpers'
  }))
  .use(dataLoader({
    dataProperty: "data"
  }))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials'
  }))
  .use(watch({
    paths: {
      "src/**/*": true,
      "layouts/**/*": "**/*.md",
      "partials/**/*": "**/*.md",
    },
    livereload: true,
  }))
  .use(cleanCSS({
    files: 'imports/css/**'
  }))                            // css minificator
  // .use(uglify())                 // js minificator - doesn't work with es2015
  .use(htmlMinifier("*.html", {  // html minificator
    removeComments: true,
    removeEmptyAttributes: true
  }))
  .build((err) => {
    if (err) console.log(err);
      //throw err;
  });
