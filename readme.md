React + ES6 playground
===================

About
-------------
This code is simply the [react tutorial](https://facebook.github.io/react/docs/tutorial.html) rewritten in ES6.
It provides backend written in NodeJS and build system using gulp, webpack and babel.

> **Note:**

> This is only a playground, **not for a production use!**
>
> - JS output file is **not minified**
> - backend provides only small api for simplicity
> - database is mocked with simple JSON file

Installation
-------------

Clone the repo and then just install the dependencies with npm:

```
npm install
```
---
Config & Run
------------

In order to run application you have to provide config and backend.

-----
In `config.js` set the node server port and backend url:

```
var config = {
  nodeServerPort: 3002,
  backendServerUrl: 'http://localhost:3002/'
};

export default config;
```
-----
The simplest way to start app is to run gulp task which starts node server and build system:
```
gulp serve
```
Now you can check the app and source code out, and make same changes or delete the JS source code and start over the [getting started tutorial](https://facebook.github.io/react/docs/tutorial.html). Remember to use ES6 classes rather than functions as in tutorial.


> **Important for ES6 classes:**
>
Read this blog post for more information on ES6 classes in react and its exceptions:
**[React v0.13.0 Beta 1](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html)**
