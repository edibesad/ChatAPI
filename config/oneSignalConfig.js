const { ONE_SIGNAL_APP_KEY, ONE_SIGNAL_USER_KEY } = require("../constants/hiddenConstants.js")

const OneSignal = require('@onesignal/node-onesignal');

const configuration = OneSignal.createConfiguration({
    userKey: ONE_SIGNAL_USER_KEY,
    appKey: ONE_SIGNAL_APP_KEY,
});

const client = new OneSignal.DefaultApi(configuration);