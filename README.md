# Nextjs + Cordova + Framework7

Use this package if you want to customize an application running NexJS, Cordova, Framework7

This package uses [next-cordova-static](https://www.npmjs.com/package/next-cordova-static)


# Install 
<pre>
npm install nextjs-cordova-framework7 -g
</pre>


# Steps required

Run the command
<pre>
create-ncf-app
</pre>


# Building an application
<pre>
npm run app-build
</pre>


Developing an application on port 9090 (change if necessary)
<pre>
npm run dev
</pre>

# General information

You can add all other commands directly to your package.

Commands that you can add:

1. [Cordova](https://cordova.apache.org/docs/en/latest/)

2. [NextJS](https://nextjs.org/docs/getting-started)

Use the documentation for building the application [Framework7](https://framework7.io/react/)

Do not try to create an application again using the "create next-app" or "cordova create" commands, everything you need is already present in this package, and you only need to work on your application.

Everything else - You can use it as if you used cordova, nextjs, framework 7 separately

# Example

An example of working on an application after you have created an application with the "app:create" command:

<pre>
npm run app:build
</pre>

<pre>
cordova platform add android
</pre>

<pre>
cordova run android
</pre>


# Versions:

0.0.7 - Add "create-ncf-app"

0.0.4 - Minor fixes 

0.0.3 - Add build && export

0.0.2 - Minor fixes

0.0.1 - Create app