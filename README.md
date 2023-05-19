# Nextjs + Cordova + Framework7

Use this package if you want to configure an application running Next, Cordova, Framework 7.
Real-time development mode on an emulator device, phone, browser.
This package allows you to test in real time, write code together with plugins, without resorting to pre-installing the application. And only after changing /refining the plugin code - recompilation of the application will be required. Therefore, you can write code calmly, with ready-made plugins in real time on the emulator with a quick page reload in the next dev development mode.
Also, this package has a full extension to use other framework packages without resorting to global changes. It's enough to remove some details that you don't need.

This package uses [next-cordova-static](https://www.npmjs.com/package/next-cordova-static)

You can help the project:

USDT TRC20: THyUxnKfShQ9YkXTEUwNvYZiWgvrR9PCM1


# Install 
```
npm install nextjs-cordova-framework7 -g
```

or

```
yarn global add nextjs-cordova-framework7
```
# Package.json
Parameter | Default
-- | --
`ncfParams.port` | 9090

# Available commands
Command | Description
-- | --
`create-ncf-app` | Creates an application of the current directory, ready to work
`ncf dev` | Start the development server
`ncf emulate [platform] [option]` | Run the build for the emulator
`ncf run [platform] [option]` | Run the build for the device

&nbsp;

Platform | Description
-- | --
`android` | &#9745;
`ios` | &#9744; (Work is underway)

&nbsp;

Option | Description
-- | --
`dev` | Real-time development. 

# Steps required

Run the command that will create in the current directory all the necessary tools to work with the application:
```
create-ncf-app
```


# Build an application for development
```
ncf emulate android
```
This is where the static build is launched, already a full-fledged application in development mode. This mode is needed in order to show, for example, a manufactured application to the customer, and test it all together.


# Developing an application
Developing an application on port 9090 (change if necessary)
```
ncf emulate android dev && ncf dev
```
Here you will run a command to build the application in development mode, i.e. the application will look towards your computer, and thus you will be able to launch a local web server that will show the content in the application. You can quickly, conveniently, with all plugins, enjoy the development of the application.



# General information

You can add all other commands directly to your package.

Commands that you can add:

1. [Cordova](https://cordova.apache.org/docs/en/latest/)

2. [NextJS](https://nextjs.org/docs/getting-started)

3. Use the documentation for building the application [Framework7](https://framework7.io/react/)

Do not try to create an application again using the "create next-app" or "cordova create" commands, everything you need is already present in this package, and you only need to work on your application.

Everything else - You can use it as if you used cordova, nextjs, framework 7 separately

# Example

Example of working with a package:

1. Creating an application
```
create-ncf-app
```

2. Adding a platform
```
cordova platform add android
```

3. We use the real-time development mode (in this case, an emulator)
```
ncf emulate android dev
```

4. Start the development server:
```
ncf dev
```

5. Launch the app on your phone or emulator

6. Edit the code in real time, with all the features of the emulator/phone, as well as with all available plugins.

7. Viewing the device [chrome://inspect/#devices](chrome://inspect/#devices)