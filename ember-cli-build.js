'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    amd: {
      loader: 'https://js.arcgis.com/4.16/',
      packages: ['esri','dojo']
    }
  });

  return app.toTree();
};
