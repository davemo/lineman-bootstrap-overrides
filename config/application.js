/* Exports an object that defines
 *  all of the configuration needed by the projects'
 *  depended-on grunt tasks.
 *
 * You can familiarize yourself with all of Lineman's defaults by checking out the parent file:
 * https://github.com/testdouble/lineman/blob/master/config/application.coffee
 */

module.exports = require(process.env['LINEMAN_MAIN']).config.extend('application', {

  less: {
    compile: {
      files: {
        "<%= files.less.generatedApp %>": "app/css/manifest.less",
        "<%= files.less.generatedVendor %>": []
      }
    }
  }

});
