var exec = require('cordova/exec');

const  bridgeName = 'AdpPushClient';
var AdpPushClient = function () {}

AdpPushClient.prototype.configureEnvironment = function (devMode, success, error) {
    exec(success, error, bridgeName, 'configureEnvironment', [devMode]);
};

AdpPushClient.prototype.login = function (userId, success, error) {
    exec(success, error, bridgeName, 'login', [userId]);
};

AdpPushClient.prototype.logout = function () {
    exec(function () {
    }, function () {
    }, bridgeName, 'logout', []);
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

AdpPushClient.prototype.getUserAttributes = function (success, error) {
    exec(success, error, bridgeName, 'getUserAttributes', []);
};

AdpPushClient.prototype.setUserAttributes = function (userInfo) {
    exec(function () {
    }, function () {
    }, bridgeName, 'setUserAttributes', [userInfo]);
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