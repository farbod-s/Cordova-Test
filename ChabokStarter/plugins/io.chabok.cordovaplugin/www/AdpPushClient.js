var exec = require('cordova/exec');

const  bridgeName = 'AdpPushClient';
var ChabokPush = function () {}

// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'AdpPushClient', 'coolMethod', [arg0]);
// };

ChabokPush.prototype.init = function (options, success, error) {
    var params = Array.from(Object.values(options), k => k);
    exec(success, error, bridgeName, 'init', params);
};

ChabokPush.prototype.registerAsGuest = function (success, error) {
    exec(success, error, bridgeName, 'registerAsGuest');
};

ChabokPush.prototype.register = function (userId, success, error) {
    exec(success, error, bridgeName, 'register', [userId]);
};

ChabokPush.prototype.unregister = function () {
    exec(function () {
    }, function () {
    }, bridgeName, 'unregister', []);
};

ChabokPush.prototype.addTag = function (tagName, success, error) {
    exec(success, error, bridgeName, 'addTag', [tagName]);
};

ChabokPush.prototype.removeTag = function (tagName, success, error) {
    exec(success, error, bridgeName, 'removeTag', [tagName]);
};

ChabokPush.prototype.appWillOpenUrl = function (url) {
    exec(function () {
    }, function () {
    }, bridgeName, 'appWillOpenUrl', [url]);
};

ChabokPush.prototype.getUserInfo = function (success, error) {
    exec(success, error, bridgeName, 'getUserInfo', []);
};

ChabokPush.prototype.setUserInfo = function (userInfo) {
    exec(function () {
    }, function () {
    }, bridgeName, 'setUserInfo', [userInfo]);
};

ChabokPush.prototype.setDefaultTracker = function (trackerName) {
    exec(function () {
    }, function () {
    }, bridgeName, 'setDefaultTracker', [trackerName]);
};

ChabokPush.prototype.track = function (trackName, data) {
    exec(function () {
    }, function () {
    }, bridgeName, 'track', [trackName, data]);
};

ChabokPush.prototype.resetBadge = function () {
    exec(function () {
    }, function () {
    }, bridgeName, 'resetBadge', []);
};

ChabokPush.prototype.publish = function (message, success, error) {
    exec(success, error, bridgeName, 'publish', [message]);
};

ChabokPush.prototype.getUserId = function (success, error) {
    exec(success, error, bridgeName, 'getUserId', []);
};

ChabokPush.prototype.getInstallationId = function (success, error) {
    exec(success, error, bridgeName, 'getInstallationId', []);
};

ChabokPush.prototype.setOnMessageCallback = function (oneMessage) {
    exec(oneMessage, function () {}, bridgeName, 'setOnMessageCallback', []);
};

ChabokPush.prototype.setOnConnectionStatusCallback = function (onConnection) {
    exec(onConnection, function () {}, bridgeName, 'setOnConnectionStatusCallback', []);
};


//-------------------------------------------------------------------

if(!window.plugins)
    window.plugins = {};

if (!window.plugins.OneSignal)
    window.plugins.ChabokPush = new ChabokPush();

if (typeof module != 'undefined' && module.exports)
    module.exports = ChabokPush;