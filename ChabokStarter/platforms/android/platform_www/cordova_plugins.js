cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "io.chabok.cordovaplugin.AdpPushClient",
      "file": "plugins/io.chabok.cordovaplugin/www/AdpPushClient.js",
      "pluginId": "io.chabok.cordovaplugin",
      "clobbers": [
        "AdpPushClient"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "io.chabok.cordovaplugin": "1.1.1"
  };
});