cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.ncinga.speedtest.SpeedTest",
      "file": "plugins/com.ncinga.speedtest/www/SpeedTest.js",
      "pluginId": "com.ncinga.speedtest",
      "clobbers": [
        "kotlin"
      ]
    }
  ];
  module.exports.metadata = {
    "com.ncinga.speedtest": "1.0.0"
  };
});