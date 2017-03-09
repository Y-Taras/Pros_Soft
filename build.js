
var Metalsmith      = require('./node_modules/metalsmith'),
    drafts          = require('./node_modules/metalsmith-drafts'),
    multiLanguage   = require('metalsmith-multi-language'),
    helpers         = require('metalsmith-register-helpers'),
    collections     = require('metalsmith-collections'),
    markdown        = require('./node_modules/metalsmith-markdown'),
    layouts         = require('./node_modules/metalsmith-layouts'),
    cleanCSS        = require('metalsmith-clean-css'),
    uglify          = require('metalsmith-uglify'),
    htmlMinifier    = require("metalsmith-html-minifier");


//  less         = require('./node_modules/metalsmith-less'),
//  sitemap      = require('metalsmith-mapsite'),



Metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(drafts())
  .use(multiLanguage({ default: 'uk', locales: ['uk', 'en'] }))
  .use(helpers({
    directory: 'template-helpers'
  }))
  .use(collections({

  }))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials'
  }))
  .use(cleanCSS({
    files: 'imports/css/**',
  }))                            // css minificator
  .use(uglify())                 // js minificator
  .use(htmlMinifier("*.html", {  // html minificator
    removeComments: true,
    removeEmptyAttributes: true,
  }))
  .build(function(err) {
  if (err)
    console.log(err);
    //throw err;
  });
