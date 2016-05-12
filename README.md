# [AngularJS](http://www.angularjs.org/) Application demo

## Purpose

The app covers the following topics:
* Forms
* Diagnostic
* Angular UI

## Installation

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/) (requires node.js version >= 0.8.4)
* Install Grunt-CLI, Karma and Bower as global npm modules:

    ```
    npm install -g grunt-cli karma bower
    ```

* Install local dependencies (from the project root folder):

    ```
    npm install
    bower install
    ```

## Building and running

### Build the client app
* Run serve task:

    ```
    grunt serve
    ```