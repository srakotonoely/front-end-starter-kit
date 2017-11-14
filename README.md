# Sitraka Rakotonoely Starter Kit
> A simple starterkit build with Gulp and Express.js for web development.


## Features

* Sass support
* Performance optimization (Minify and concatenate JavaScript and CSS)
* Code Linting
* ES2015 via Babel 6.0
* JavaScript Unit testing
* Built-in HTTP Server
* Live Browser Reloading
* Cross-device Synchronization
<!-- * PageSpeed Insights
* Deployment  -->


## Browser Support

* Chrome *(latest 2)*
* Edge *(latest 2)*
* Firefox *(latest 2)*
* Internet Explorer 9+
* Opera *(latest 2)*
* Safari *(latest 2)*


## Quick start

To get you started you can simply clone the repository and install the dependencies:

```bash
$ git clone https://github.com/sitraka-rakotonoely/front-end-starter-kit.git
$ cd front-end-starter-kit/ && yarn install
```

Update your Gulp CLI

```bash
npm rm -g gulp
npm install -g gulp-cli
gulp -v
```

## Tasks

```gulp```: Runs the **default task** (dev) including the following ones :

- ```styles```: Compile, minify and autoprefix all SCSS files to CSS.
- ```templates```: Compile and render Pug compiling to HTML.
- ```scripts```: Compile ES6 to ES5, minify and concatenate all scripts into a single file with babel.
- ```images```: Copy and optimize all images from app to ```./dist/```.
- ```fonts```: Copy all fonts from app to ```./dist/```.
- ```serve```: Start a server at ```./dist/``` with all compiled files, inject files changes into browser.

```gulp build```: Builds project by running the following tasks:

- ```styles```
- ```templates```
- ```scripts```
- ```images```
- ```fonts```

<!-- ```gulp deploy```: Deploy your ```dist``` folder into your server or surge cloud runs:

- ```optimize```
- ```ftp```: Uploads ```dist``` to [```ftpUploadsDir```](https://github.com/carloscuesta/starterkit/blob/master/gulpfile.js#L58).
- ```surge```: Uploads your ```dist``` to [Surge](http://surge.sh)

If you want to use the **deploy** task, you will have to edit the [```gulpfile.js```](https://github.com/carloscuesta/starterkit/blob/master/gulpfile.js#L65) lines between 65-69 with your ftp connection info: [```host```](https://github.com/carloscuesta/starterkit/blob/master/gulpfile.js#L68) | [```user```](https://github.com/carloscuesta/starterkit/blob/master/gulpfile.js#L69) | [```password```](https://github.com/carloscuesta/starterkit/blob/master/gulpfile.js#L70). If you want to use [Surge](http://surge.sh) instead of FTP, just setup a domain name in the [```surgeInfo.domain```](https://github.com/carloscuesta/starterkit/blob/master/gulpfile.js#L77)

Once you setup ```ftpCredentials```, you will have to choose a directory of your server where the deploy will go: [```ftpUploadsDir```](https://github.com/carloscuesta/starterkit/blob/master/gulpfile.js#L58)

Now you will be able to use ```gulp deploy``` and your ```/dist/``` folder will go up to your ftp server! -->

Use ```npm run``` to list all available tasks. You can run the tasks too using the ```npm run taskname``` or ```yarn taskname``` that is on the list.

## Inspiration

This Starter Kit is inspired by [Front-End Checklist](https://github.com/thedaviddias/Front-End-Checklist) and [Web starter kit](https://github.com/google/web-starter-kit).


## Contribute

Contributions, questions and comments are all welcome and encouraged. For code contributions to Front-End Starter Kit, please see [Contribution guide](CONTRIBUTING.md) before submitting a pull request.

If you have any comments or suggestions feel free to contact me on [Linkedin](https://www.linkedin.com/in/sitraka-rakotonoely/)!


## License

The code is available under the [MIT license](LICENSE.txt).
