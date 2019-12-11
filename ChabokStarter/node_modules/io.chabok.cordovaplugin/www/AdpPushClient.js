var exec = require('cordova/exec');

const  bridgeName = 'AdpPushClient';
var AdpPushClient = function () {}

AdpPushClient.prototype.init = function (options, success, error) {
    // var params = Array.from(Object.values(options));
    var params = [];
    for (opt in options) {
        params[params.length] = options[opt];
        console.log(params[params.length - 1]);
    }
    exec(success, error, bridgeName, 'init', params);
};

AdpPushClient.prototype.registerAsGuest = function (success, error) {
    exec(success, error, bridgeName, 'registerAsGuest');
};

AdpPushClient.prototype.register = function (userId, success, error) {
    exec(success, error, bridgeName, 'register', [userId]);
};

AdpPushClient.prototype.unregister = function () {
    exec(function () {
    }, function () {
    }, bridgeName, 'unregister', []);
};

AdpPushClient.prototype.addTag = function (tagName, success, error) {
    exec(success, error, bridgeName, 'addTag', [tagName]);
};

AdpPushClient.prototype.removeTag = function (tagName, success, error) {
    exec(success, error, bridgeName, 'removeTag', [tagName]);
};

AdpPushClient.prototype.appWillOpenUrl = function (url) {
    exec(function () {
    }, function () {
    }, bridgeName, 'appWillOpenUrl', [url]);
};

AdpPushClient.prototype.getUserInfo = function (success, error) {
    exec(success, error, bridgeName, 'getUserInfo', []);
};

AdpPushClient.prototype.setUserInfo = function (userInfo) {
    exec(function () {
    }, function () {
    }, bridgeName, 'setUserInfo', [userInfo]);
};

AdpPushClient.prototype.setDefaultTracker = function (trackerName) {
    exec(function () {
    }, function () {
    }, bridgeName, 'setDefaultTracker', [trackerName]);
};

AdpPushClient.prototype.track = function (trackName, data) {
    exec(function () {
    }, function () {
    }, bridgeName, 'track', [trackName, data]);
};

AdpPushClient.prototype.resetBadge = function () {
    exec(function () {
    }, function () {
    }, bridgeName, 'resetBadge', []);
};

AdpPushClient.prototype.publish = function (message, success, error) {
    exec(success, error, bridgeName, 'publish', [message]);
};

AdpPushClient.prototype.getUserId = function (success, error) {
    exec(success, error, bridgeName, 'getUserId', []);
};

AdpPushClient.prototype.getInstallationId = function (success, error) {
    exec(success, error, bridgeName, 'getInstallationId', []);
};

AdpPushClient.prototype.setOnMessageCallback = function (oneMessage) {
    exec(oneMessage, function () {}, bridgeName, 'setOnMessageCallback', []);
};

AdpPushClient.prototype.setOnConnectionStatusCallback = function (onConnection) {
    exec(onConnection, function () {}, bridgeName, 'setOnConnectionStatusCallback', []);
};


//-------------------------------------------------------------------

if(!window.plugins)
    window.plugins = {};

if (!window.plugins.OneSignal)
    window.plugins.AdpPushClient = new AdpPushClient();

if (typeof module != 'undefined' && module.exports)
    module.exports = AdpPushClient;