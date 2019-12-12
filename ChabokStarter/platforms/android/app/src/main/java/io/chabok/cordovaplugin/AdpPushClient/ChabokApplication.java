package io.chabok.cordovaplugin;

import android.app.Application;

import com.adpdigital.push.AdpPushClient;
import com.adpdigital.push.config.Environment;

public class ChabokApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        AdpPushClient.configureEnvironment(Environment.SANDBOX);
    }
}