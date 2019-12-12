#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var APP_CLASS = 'io.chabok.cordovaplugin.AdpPushClient.ChabokApplication';

module.exports = function(context) {
  var platformRoot = path.join(context.opts.projectRoot, 'platforms/android');
  var manifestFile = path.join(platformRoot, 'AndroidManifest.xml');

  if (fs.existsSync(manifestFile)) {
    fs.readFile(manifestFile, 'utf8', function (err, data) {
      if (err) {
        throw new Error('Unable to find AndroidManifest.xml: ' + err);
      }

      if (data.indexOf(APP_CLASS) == -1) {
        var result = data.replace(/<application/g, '<application android:name="' + APP_CLASS + '"');
        fs.writeFile(manifestFile, result, 'utf8', function (err) {
          if (err) throw new Error('Unable to write AndroidManifest.xml: ' + err);
        })
      }
    });
  }
};