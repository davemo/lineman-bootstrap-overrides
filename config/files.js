/* Exports an object that defines
 *  all of the paths & globs that the project
 *  is concerned with.
 *
 * The "configure" task will require this file and
 *  then re-initialize the grunt config such that
 *  directives like <config:files.js.app> will work
 *  regardless of the point you're at in the build
 *  lifecycle.
 *
 * To see the default definitions for all of Lineman's file paths and globs, look at:
 * https://github.com/testdouble/lineman/blob/master/config/files.coffee
 */

module.exports = require(process.env['LINEMAN_MAIN']).config.extend('files', {
  js: {
    vendor: [
      // jquery first
      'vendor/js/jquery.js',
      // order of these files matches the bootstrap Gruntfile.js
      'vendor/js/bootstrap/transition.js',
      'vendor/js/bootstrap/alert.js',
      'vendor/js/bootstrap/button.js',
      'vendor/js/bootstrap/carousel.js',
      'vendor/js/bootstrap/collapse.js',
      'vendor/js/bootstrap/dropdown.js',
      'vendor/js/bootstrap/modal.js',
      'vendor/js/bootstrap/tooltip.js',
      'vendor/js/bootstrap/popover.js',
      'vendor/js/bootstrap/scrollspy.js',
      'vendor/js/bootstrap/tab.js',
      'vendor/js/bootstrap/affix.js',
      // any other vendor deps after
      'vendor/js/**/*.js'
    ]
  }
});
