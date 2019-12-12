#!/usr/bin/env node

'use strict';

/**
 * This hook makes sure projects using [cordova-plugin-firebase](https://github.com/arnesson/cordova-plugin-firebase)
 * will build properly and have the required key files copied to the proper destinations when the app is build on Ionic Cloud using the package command.
 * Credits: https://github.com/arnesson.
 */
var fs = require('fs');
var path = require('path');
var utilities = require("./lib/utilities");

var config = fs.readFileSync('config.xml').toString();
var name = utilities.getValue(config, 'name');

var IOS_DIR = 'platforms/ios';
var ANDROID_DIR = 'platforms/android';

var PLATFORM = {
  IOS: {
    dest: [
      IOS_DIR + '/' + name + '/Resources/Chabok.sandbox.plist',
      IOS_DIR + '/' + name + '/Resources/Resources/Chabok.sandbox.plist',
      IOS_DIR + '/' + name + '/Resources/Chabok.production.plist',
      IOS_DIR + '/' + name + '/Resources/Resources/Chabok.production.plist'
    ],
    src: [
      'Chabok.sandbox.plist',
      IOS_DIR + '/www/Chabok.sandbox.plist',
      'www/Chabok.sandbox.plist',
      'Chabok.production.plist',
      IOS_DIR + '/www/Chabok.production.plist',
      'www/Chabok.production.plist'
    ]
  },
  ANDROID: {
    dest: [
      ANDROID_DIR + '/Chabok.sandbox.json',
      ANDROID_DIR + '/app/Chabok.sandbox.json',
      ANDROID_DIR + '/Chabok.production.json',
      ANDROID_DIR + '/app/Chabok.production.json'
    ],
    src: [
      'Chabok.sandbox.json',
      ANDROID_DIR + '/assets/www/Chabok.sandbox.json',
      'www/Chabok.sandbox.json',
      ANDROID_DIR + '/app/src/main/Chabok.sandbox.json',
      'Chabok.production.json',
      ANDROID_DIR + '/assets/www/Chabok.production.json',
      'www/Chabok.production.json',
      ANDROID_DIR + '/app/src/main/Chabok.production.json'
    ],
  }
};

module.exports = function (context) {
  //get platform from the context supplied by cordova
  var platforms = context.opts.platforms;
  // Copy key files to their platform specific folders
  if (platforms.indexOf('ios') !== -1 && utilities.directoryExists(IOS_DIR)) {
    console.log('Preparing Firebase on iOS');
    utilities.copyKey(PLATFORM.IOS);
  }
  if (platforms.indexOf('android') !== -1 && utilities.directoryExists(ANDROID_DIR)) {
    console.log('Preparing Firebase on Android');
    utilities.copyKey(PLATFORM.ANDROID);
  }
};