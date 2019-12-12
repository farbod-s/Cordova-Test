package com.adpdigital.chabok.starter;

import android.app.Application;

import com.adpdigital.push.AdpPushClient;
import com.adpdigital.push.LogLevel;
import com.adpdigital.push.config.Environment;

public class MyApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        AdpPushClient.configureEnvironment(Environment.SANDBOX);
        AdpPushClient.setLogLevel(LogLevel.VERBOSE);
    }
}
